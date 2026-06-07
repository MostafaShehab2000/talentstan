from django.db import models
from common.models import BaseModel

class TaxonomyCategory(BaseModel):
    """
    Taxonomy Category (Classification Engine)
    e.g., 'Medical_Profession', 'Geographic_Zone'
    """
    code = models.CharField(max_length=50, unique=True)
    name_en = models.CharField(max_length=255)
    name_ar = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.code} - {self.name_en}"

class TaxonomyEntity(BaseModel):
    """
    The Enterprise Taxonomy & Knowledge Graph Engine per Directive v13.0
    """
    APPROVAL_STATUS = (
        ('DRAFT', 'Draft'),
        ('PENDING_REVIEW', 'Pending Review'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
        ('DEPRECATED', 'Deprecated'),
    )

    # Core Graph Linking
    taxonomy_category = models.ForeignKey(TaxonomyCategory, on_delete=models.PROTECT, related_name='entities')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    
    code = models.CharField(max_length=100)
    
    # Multilingual Dictionary Engine
    name_ar = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    
    # Alias & Synonym Engine
    aliases = models.JSONField(default=list, blank=True)
    synonyms = models.JSONField(default=list, blank=True)
    abbreviations = models.JSONField(default=list, blank=True)
    
    # Search Dictionary
    search_keywords = models.JSONField(default=list, blank=True)
    
    # Infinite Hierarchy
    hierarchy_level = models.IntegerField(default=0)
    hierarchy_path = models.CharField(max_length=500, null=True, blank=True)
    
    # Versioning Engine
    version = models.IntegerField(default=1)
    effective_from = models.DateTimeField(auto_now_add=True)
    effective_to = models.DateTimeField(null=True, blank=True)
    superseded_by = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='supersedes')
    
    # Governance Engine
    approval_status = models.CharField(max_length=50, choices=APPROVAL_STATUS, default='DRAFT')
    
    # Classification Engine
    classification = models.CharField(max_length=100, null=True, blank=True)
    
    # AI & Knowledge Graph Engine
    embedding_status = models.CharField(max_length=50, default='PENDING') # PENDING, EMBEDDED, FAILED
    vector_id = models.CharField(max_length=255, null=True, blank=True)
    confidence_score = models.DecimalField(max_digits=5, decimal_places=4, null=True, blank=True)

    class Meta:
        ordering = ['hierarchy_level', 'name_en']
        unique_together = ('code', 'version')

    def __str__(self):
        return f"[{self.code} v{self.version}] {self.name_en}"
