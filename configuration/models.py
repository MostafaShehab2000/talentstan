from django.db import models
from common.models import BaseModel

class SystemConfiguration(BaseModel):
    """
    Generic Configuration Engine per Directive v10.0
    """
    SCOPE_CHOICES = (
        ('SYSTEM', 'System Level'),
        ('COMPANY', 'Company Level'),
        ('FEATURE_FLAG', 'Feature Flag'),
        ('ENV_VAR', 'Environment Variable'),
    )
    
    key = models.CharField(max_length=255, unique=True)
    value_type = models.CharField(max_length=50, default='STRING')  # STRING, JSON, BOOLEAN, INTEGER
    value_string = models.TextField(null=True, blank=True)
    value_json = models.JSONField(null=True, blank=True)
    value_boolean = models.BooleanField(null=True, blank=True)
    value_integer = models.IntegerField(null=True, blank=True)
    
    scope = models.CharField(max_length=50, choices=SCOPE_CHOICES, default='SYSTEM')
    description = models.TextField(null=True, blank=True)
    is_encrypted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.scope}: {self.key}"
