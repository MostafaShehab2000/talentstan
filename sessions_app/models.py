from django.db import models
from django.conf import settings
from common.models import BaseModel

class UserSession(BaseModel):
    """
    Session Engine per Directive v11.0
    Track refresh token families or custom session tokens for forceful revocation.
    """
    SESSION_STATUS = (
        ('ACTIVE', 'Active'),
        ('EXPIRED', 'Expired'),
        ('REVOKED', 'Revoked'),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='active_sessions')
    device = models.ForeignKey('devices.UserDevice', on_delete=models.SET_NULL, null=True, blank=True)
    
    session_token = models.CharField(max_length=512, unique=True) # E.g., JTI of refresh token
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    
    status = models.CharField(max_length=20, choices=SESSION_STATUS, default='ACTIVE')
    
    expires_at = models.DateTimeField()
    revoked_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Session for {self.user} ({self.status})"

    def terminate(self):
        from django.utils import timezone
        self.status = 'REVOKED'
        self.revoked_at = timezone.now()
        self.save(update_fields=['status', 'revoked_at'])
