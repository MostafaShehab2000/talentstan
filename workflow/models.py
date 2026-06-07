from django.db import models
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from common.models import BaseModel

class WorkflowState(models.Model):
    """
    Generic Workflow Engine per Directive v10.0
    """
    STATE_CHOICES = (
        ('DRAFT', 'Draft'),
        ('SUBMITTED', 'Submitted'),
        ('PENDING', 'Pending Approval'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
        ('RETURNED', 'Returned for Correction'),
        ('CANCELLED', 'Cancelled'),
    )

    # Polymorphic linking to any entity (Shift, Verification, Contract, etc.)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.UUIDField()
    content_object = GenericForeignKey('content_type', 'object_id')
    
    current_state = models.CharField(max_length=50, choices=STATE_CHOICES, default='DRAFT')
    last_transition_date = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ('content_type', 'object_id')

    def __str__(self):
        return f"Workflow {self.current_state} for {self.content_object}"

class WorkflowTransitionLog(BaseModel):
    """
    Immutable audit trail of state transitions
    """
    workflow = models.ForeignKey(WorkflowState, on_delete=models.CASCADE, related_name='transitions')
    from_state = models.CharField(max_length=50)
    to_state = models.CharField(max_length=50)
    
    actor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    comments = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.from_state} -> {self.to_state} by {self.actor}"
