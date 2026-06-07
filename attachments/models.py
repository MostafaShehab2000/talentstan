from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from common.models import BaseModel

class Attachment(BaseModel):
    """
    Generic Attachment Engine per Directive v10.0
    """
    FILE_TYPES = (
        ('PDF', 'PDF Document'),
        ('IMAGE', 'Image File'),
        ('VIDEO', 'Video File'),
        ('DOCUMENT', 'Word/Excel Document'),
        ('OTHER', 'Other'),
    )

    file = models.FileField(upload_to='attachments/%Y/%m/')
    file_type = models.CharField(max_length=50, choices=FILE_TYPES)
    file_name = models.CharField(max_length=255)
    file_size_bytes = models.BigIntegerField(null=True, blank=True)
    
    # Polymorphic Relation
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.UUIDField()
    content_object = GenericForeignKey('content_type', 'object_id')
    
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Attachment: {self.file_name} ({self.file_type})"
