from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from .models import AcademicAchievement, EducationalRecord, Education, EditRequest, Skill, Storage, WorkExperience, Workplace


admin.site.register(AcademicAchievement)
admin.site.register(Education)
admin.site.register(EditRequest)
admin.site.register(Storage)
admin.site.register(Workplace)



class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1

# گرفتن کاربری که هویت آن احراز میشود و میتواند لاگین کند و نه کاربر ساده ی مدل ما 
user = get_user_model()

class User_admin(UserAdmin):
    list_display = ('fullName', 'gender', 'birthDate')
    list_filter = ('gender', 'age', 'birthDate')
    inlines = [SkillInline]
    search_fields = ['fullName']  # اصلاح به صورت لیست



admin.site.register(user, User_admin)

class SkillAdmin(admin.ModelAdmin):
    list_display = ('title', 'isArchived')

admin.site.register(Skill, SkillAdmin)

class fDate_tDate_filter_admin(admin.ModelAdmin):
    list_filter = ('fromDate', 'toDate')

admin.site.register(WorkExperience, fDate_tDate_filter_admin)

admin.site.register(EducationalRecord, fDate_tDate_filter_admin)