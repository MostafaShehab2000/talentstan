from django.db import models
from django.conf import settings
from common.models import BaseModel
from masterdata.models import TaxonomyEntity

class OrganizationNode(BaseModel):
    """
    Generic node to support the expandable hierarchy (Platform -> Tenant -> Campus -> Building -> Floor -> Unit -> Section -> Cost Center)
    without requiring schema redesign for optional levels.
    """
    NODE_TYPES = (
        ('PLATFORM', 'Platform'),
        ('TENANT', 'Tenant (Company)'),
        ('CAMPUS', 'Campus'),
        ('BUILDING', 'Building'),
        ('FLOOR', 'Floor'),
        ('UNIT', 'Unit'),
        ('SECTION', 'Section'),
        ('COST_CENTER', 'Cost Center'),
    )
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    node_type = models.CharField(max_length=50, choices=NODE_TYPES)
    name_en = models.CharField(max_length=255)
    name_ar = models.CharField(max_length=255)
    code = models.CharField(max_length=100, unique=True, null=True, blank=True)

    def __str__(self):
        return f"{self.node_type}: {self.name_en}"

class HealthcareOrganization(BaseModel):
    """
    ORGANIZATION ENTITY per Directive v14.0
    """
    tenant_node = models.ForeignKey(OrganizationNode, on_delete=models.SET_NULL, null=True, blank=True, related_name='organizations')
    
    code = models.CharField(max_length=100, unique=True)
    legal_name = models.CharField(max_length=255)
    trade_name = models.CharField(max_length=255, null=True, blank=True)
    legal_name_ar = models.CharField(max_length=255, null=True, blank=True)
    legal_name_en = models.CharField(max_length=255, null=True, blank=True)
    
    tax_number = models.CharField(max_length=100, null=True, blank=True)
    commercial_register = models.CharField(max_length=100, null=True, blank=True)
    license_number = models.CharField(max_length=100, null=True, blank=True)
    
    # Linked to TaxonomyEntity
    country = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='org_countries', limit_choices_to={'taxonomy_category__code': 'GEO_COUNTRY'})
    currency = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='org_currencies', limit_choices_to={'taxonomy_category__code': 'FIN_CURRENCY'})
    
    timezone = models.CharField(max_length=50, default='UTC')
    status = models.CharField(max_length=50, default='ACTIVE')

    def __str__(self):
        return self.legal_name_en or self.legal_name

class HealthcareFacility(BaseModel):
    """
    FACILITY ENTITY per Directive v14.0
    """
    organization = models.ForeignKey(HealthcareOrganization, on_delete=models.CASCADE, related_name='facilities')
    
    # Linked to TaxonomyEntity
    facility_type = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='facility_types', limit_choices_to={'taxonomy_category__code': 'ORG_FACILITY_TYPE'})
    ownership_type = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='facility_ownerships', limit_choices_to={'taxonomy_category__code': 'ORG_OWNERSHIP'})
    
    accreditation_level = models.CharField(max_length=100, null=True, blank=True)
    bed_capacity = models.IntegerField(default=0)
    emergency_level = models.CharField(max_length=100, null=True, blank=True)
    geo_location = models.JSONField(null=True, blank=True)

    def __str__(self):
        return f"Facility of {self.organization}"

class FacilityBranch(BaseModel):
    """
    BRANCH ENTITY per Directive v14.0
    """
    facility = models.ForeignKey(HealthcareFacility, on_delete=models.CASCADE, related_name='branches')
    campus_node = models.ForeignKey(OrganizationNode, on_delete=models.SET_NULL, null=True, blank=True, related_name='campus_branches')
    
    branch_code = models.CharField(max_length=100, unique=True)
    branch_name_ar = models.CharField(max_length=255)
    branch_name_en = models.CharField(max_length=255)
    
    address = models.TextField(null=True, blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    
    timezone = models.CharField(max_length=50, default='UTC')
    working_calendar = models.JSONField(null=True, blank=True)
    contact_information = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.branch_name_en

class BranchDepartment(BaseModel):
    """
    DEPARTMENT ENTITY per Directive v14.0
    """
    branch = models.ForeignKey(FacilityBranch, on_delete=models.CASCADE, related_name='departments')
    structural_node = models.ForeignKey(OrganizationNode, on_delete=models.SET_NULL, null=True, blank=True, related_name='node_departments') # Links to Building/Floor if applicable
    
    parent_department = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='sub_departments')
    
    # Linked to TaxonomyEntity
    department_type = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='dept_types', limit_choices_to={'taxonomy_category__code': 'ORG_DEPT_TYPE'})
    specialty = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, null=True, blank=True, related_name='dept_specialties', limit_choices_to={'taxonomy_category__code': 'MED_SPECIALTY'})
    
    cost_center = models.CharField(max_length=100, null=True, blank=True) # Also can link to OrganizationNode
    manager = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='managed_departments')

    def __str__(self):
        return f"Dept of {self.branch.branch_name_en}"
