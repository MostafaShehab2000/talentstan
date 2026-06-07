from django.db import models
from django.conf import settings
from common.models import BaseModel

class NotificationTemplate(BaseModel):
    """
    Template for reusable notifications.
    """
    code = models.CharField(max_length=100, unique=True)
    subject_template = models.CharField(max_length=255)
    body_template = models.TextField()
    default_channels = models.JSONField(default=list)  # e.g., ['SMS', 'PUSH']

    def __str__(self):
        return f"Template: {self.code}"

class NotificationLog(BaseModel):
    """
    Generic Notification Framework per Directive v10.0
    """
    CHANNEL_CHOICES = (
        ('IN_APP', 'In-App'),
        ('EMAIL', 'Email'),
        ('SMS', 'SMS'),
        ('PUSH', 'Push Notification'),
    )
    
    PRIORITY_CHOICES = (
        ('LOW', 'Low'),
        ('MEDIUM', 'Medium'),
        ('HIGH', 'High'),
        ('URGENT', 'Urgent'),
    )

    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('SENT', 'Sent'),
        ('FAILED', 'Failed'),
        ('RETRYING', 'Retrying'),
    )

    recipient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='notifications')
    template = models.ForeignKey(NotificationTemplate, on_delete=models.SET_NULL, null=True, blank=True)
    
    channel = models.CharField(max_length=20, choices=CHANNEL_CHOICES)
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='MEDIUM')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    
    subject = models.CharField(max_length=255)
    body = models.TextField()
    variables_used = models.JSONField(default=dict, blank=True)
    
    scheduled_for = models.DateTimeField(null=True, blank=True)
    sent_at = models.DateTimeField(null=True, blank=True)
    
    retry_count = models.IntegerField(default=0)
    error_log = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.channel} to {self.recipient}: {self.status}"
