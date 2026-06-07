from django.db import models
from django.conf import settings
from common.models import BaseModel

class UserDevice(BaseModel):
    """
    Device Engine per Directive v11.0
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='devices')
    device_id = models.CharField(max_length=255, unique=True) # E.g., hardware UUID or token
    
    device_name = models.CharField(max_length=255, null=True, blank=True)
    browser = models.CharField(max_length=255, null=True, blank=True)
    os = models.CharField(max_length=255, null=True, blank=True)
    
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    
    first_login = models.DateTimeField(auto_now_add=True)
    last_activity = models.DateTimeField(auto_now=True)
    
    is_trusted = models.BooleanField(default=False)
    is_blocked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.device_name} ({self.os}) - {self.user}"

    def revoke(self):
        self.is_blocked = True
        self.save(update_fields=['is_blocked'])
