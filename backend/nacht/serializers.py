from rest_framework import serializers
from django.contrib.auth.models import User
from .models import File

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']
        )
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        password = validated_data.get('password', None)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = [
            'title', 'description','file' 
        ]

    def create(self, validated_data):
        user = self.context['request'].user
        
        # Cria o arquivo com o usuário logado associado ao campo 'owner'
        file_instance = File.objects.create(
            owner=user,  # Atribuindo o usuário logado ao arquivo
            **validated_data
        )
        return file_instance
    
    def update(self, instance, validated_data):
        instance.description = validated_data.get('description',instance.description)
        instance.title = validated_data.get('title',instance.title)

        instance.save()
        return instance