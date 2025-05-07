from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class File(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='files')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='uploads/') 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
