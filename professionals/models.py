from django.db import models
from common.models import BaseModel
from identity.models import Identity
from masterdata.models import TaxonomyEntity
from attachments.models import Attachment
from django.contrib.contenttypes.fields import GenericRelation

class Professional(BaseModel):
    """
    Core Lifelong Digital Identity per Directive v15.0
    """
    professional_code = models.CharField(max_length=100, unique=True)
    identity = models.OneToOneField(Identity, on_delete=models.PROTECT, related_name='professional_profile')
    
    first_name_ar = models.CharField(max_length=100)
    first_name_en = models.CharField(max_length=100)
    last_name_ar = models.CharField(max_length=100)
    last_name_en = models.CharField(max_length=100)
    
    date_of_birth = models.DateField(null=True, blank=True)
    
    # Master Data Lookups
    gender = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_genders', limit_choices_to={'taxonomy_category__code': 'DEMO_GENDER'})
    nationality = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_nationalities', limit_choices_to={'taxonomy_category__code': 'GEO_COUNTRY'})
    residence = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_residences', limit_choices_to={'taxonomy_category__code': 'GEO_COUNTRY'})
    profile_status = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_statuses', limit_choices_to={'taxonomy_category__code': 'PROF_STATUS'})
    
    biography = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"[{self.professional_code}] {self.first_name_en} {self.last_name_en}"


class ProfessionalProfession(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='professions')
    profession = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_professions', limit_choices_to={'taxonomy_category__code': 'MED_PROFESSION'})
    
    class Meta:
        unique_together = ('professional', 'profession')

    def __str__(self):
        return f"{self.professional} - {self.profession}"


class ProfessionalSpecialty(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='specialties')
    specialty = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_specialties', limit_choices_to={'taxonomy_category__code': 'MED_SPECIALTY'})
    
    is_primary = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.professional} - {self.specialty}"


class ProfessionalQualification(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='qualifications')
    degree_type = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_degrees', limit_choices_to={'taxonomy_category__code': 'EDU_DEGREE'})
    
    issuing_institution = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_institutions', limit_choices_to={'taxonomy_category__code': 'EDU_INSTITUTION'})
    issue_date = models.DateField()
    
    verification_status = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='qual_verifications', limit_choices_to={'taxonomy_category__code': 'VER_STATUS'})
    
    attachments = GenericRelation(Attachment)

    def __str__(self):
        return f"{self.professional} - {self.degree_type}"


class ProfessionalLicense(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='licenses')
    issuing_authority = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_authorities', limit_choices_to={'taxonomy_category__code': 'VER_AUTHORITY'})
    
    license_number = models.CharField(max_length=100)
    issue_date = models.DateField()
    expiry_date = models.DateField(null=True, blank=True)
    
    verification_status = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='license_verifications', limit_choices_to={'taxonomy_category__code': 'VER_STATUS'})
    
    attachments = GenericRelation(Attachment)


class ProfessionalCertification(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='certifications')
    certification_type = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_certifications', limit_choices_to={'taxonomy_category__code': 'EDU_CERTIFICATE'})
    
    issue_date = models.DateField()
    expiry_date = models.DateField(null=True, blank=True)
    verification_status = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='cert_verifications', limit_choices_to={'taxonomy_category__code': 'VER_STATUS'})
    
    attachments = GenericRelation(Attachment)


class ProfessionalSkill(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='skills')
    skill = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_skills', limit_choices_to={'taxonomy_category__code': 'MED_SKILL'})
    
    proficiency = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_proficiencies', limit_choices_to={'taxonomy_category__code': 'MED_PROFICIENCY'})
    years_of_experience = models.DecimalField(max_digits=4, decimal_places=1, default=0)


class ProfessionalLanguage(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='languages')
    language = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_languages', limit_choices_to={'taxonomy_category__code': 'MED_LANGUAGE'})
    proficiency = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_lang_proficiencies', limit_choices_to={'taxonomy_category__code': 'MED_PROFICIENCY'})


class ProfessionalEmploymentHistory(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='employment_history')
    
    # Optionally link to our internal HealthcareFacility if they work for a known B2B partner
    employer_facility = models.ForeignKey('organizations.HealthcareFacility', on_delete=models.SET_NULL, null=True, blank=True)
    employer_name_external = models.CharField(max_length=255, null=True, blank=True)
    
    position = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_positions', limit_choices_to={'taxonomy_category__code': 'EMP_POSITION'})
    department = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_depts', limit_choices_to={'taxonomy_category__code': 'ORG_DEPT_TYPE'})
    
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)


class ProfessionalAvailability(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='availabilities')
    employment_type = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_availabilities', limit_choices_to={'taxonomy_category__code': 'EMP_TYPE'})


class ProfessionalDocument(BaseModel):
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='documents')
    document_type = models.ForeignKey(TaxonomyEntity, on_delete=models.PROTECT, related_name='prof_document_types', limit_choices_to={'taxonomy_category__code': 'VER_DOC_TYPE'})
    
    attachments = GenericRelation(Attachment)
