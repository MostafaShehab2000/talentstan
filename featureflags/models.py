from django.db import models
from django.conf import settings
from common.models import BaseModel

class FeatureFlag(BaseModel):
    """
    Feature Flag Engine per Directive v11.0
    """
    STATUS_CHOICES = (
        ('ENABLED', 'Enabled'),
        ('DISABLED', 'Disabled'),
        ('BETA', 'Beta'),
        ('HIDDEN', 'Hidden'),
    )

    code = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    
    # Global Default
    default_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='DISABLED')

    def __str__(self):
        return f"Feature: {self.code}"

class FeatureFlagOverride(BaseModel):
    """
    Granular overrides for hierarchy: Country -> Company -> Branch -> User
    """
    feature = models.ForeignKey(FeatureFlag, on_delete=models.CASCADE, related_name='overrides')
    
    # Only ONE of these should be populated per override
    country_id = models.UUIDField(null=True, blank=True)
    company_id = models.UUIDField(null=True, blank=True)
    branch_id = models.UUIDField(null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    
    status = models.CharField(max_length=20, choices=FeatureFlag.STATUS_CHOICES)

    class Meta:
        indexes = [
            models.Index(fields=['feature', 'company_id']),
            models.Index(fields=['feature', 'branch_id']),
            models.Index(fields=['feature', 'user']),
        ]

    def __str__(self):
        return f"Override for {self.feature.code}: {self.status}"
