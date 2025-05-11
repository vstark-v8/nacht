from rest_framework import viewsets, filters
from ..models import File
from ..serializers import FileSerializer
from rest_framework.permissions import IsAuthenticated

class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [filters.SearchFilter]
    search_fields = ['title']  # substitua por 'nome' se seu campo for esse
