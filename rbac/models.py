from django.db import models
from django.conf import settings
from common.models import BaseModel
import uuid

# Stubs for Company/Branch isolation (which live in core/org apps later)
# We use UUIDFields to reference them generically without hard coupling yet.

class Permission(BaseModel):
    code = models.CharField(max_length=100, unique=True)
    name_ar = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    description_ar = models.TextField(null=True, blank=True)
    description_en = models.TextField(null=True, blank=True)
    
    category = models.CharField(max_length=100)
    module = models.CharField(max_length=100)
    action = models.CharField(max_length=100) # CREATE, READ, UPDATE, DELETE, APPROVE
    
    system_flag = models.BooleanField(default=False)
    editable = models.BooleanField(default=True)

    def __str__(self):
        return self.code

class PermissionGroup(BaseModel):
    name_en = models.CharField(max_length=255)
    permissions = models.ManyToManyField(Permission, related_name='groups')

class RoleTemplate(BaseModel):
    """
    Global templates like 'Hospital Manager'
    """
    code = models.CharField(max_length=100, unique=True)
    name_en = models.CharField(max_length=255)
    permission_groups = models.ManyToManyField(PermissionGroup, blank=True)
    permissions = models.ManyToManyField(Permission, blank=True)

class CompanyRole(BaseModel):
    """
    Role instantiated for a specific company tenant.
    """
    company_id = models.UUIDField() # Reference to HealthcareOrganization
    template = models.ForeignKey(RoleTemplate, on_delete=models.SET_NULL, null=True, blank=True)
    name_en = models.CharField(max_length=255)
    permissions = models.ManyToManyField(Permission, blank=True)

class BranchRole(BaseModel):
    """
    Role instantiated for a specific branch tenant.
    """
    branch_id = models.UUIDField() # Reference to FacilityBranch
    company_role = models.ForeignKey(CompanyRole, on_delete=models.CASCADE)
    name_en = models.CharField(max_length=255)

class UserRoleAssignment(BaseModel):
    """
    Strict Multi-Tenant assignment. User X is a BranchRole at Branch Y.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='role_assignments')
    branch_role = models.ForeignKey(BranchRole, on_delete=models.CASCADE, null=True, blank=True)
    company_role = models.ForeignKey(CompanyRole, on_delete=models.CASCADE, null=True, blank=True)
    
    # Isolation boundaries
    company_id = models.UUIDField(null=True, blank=True)
    branch_id = models.UUIDField(null=True, blank=True)

    class Meta:
        unique_together = ('user', 'branch_role', 'branch_id')
