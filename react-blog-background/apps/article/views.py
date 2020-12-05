# -*-coding: utf-8 -*-
__auth__ = "wade"
__date__ = '2018/4/23 22:00'

from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import viewsets
from rest_framework import pagination

from .models import Article, Category, Tag, AboutContent
from .serializers import CategorySerializer, ArticleSerializer, TagSerializer, AboutContentSerializer


class ArticlePagination(pagination.PageNumberPagination):
    page_size = 10 #每页展示条数
    page_size_query_param = 'page_size'
    page_query_param = "page"
    max_page_size = 10000

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'total_page': int(self.page.paginator.count/self.page_size),
            'page_size': self.page_size,
            'results': data,
        })


class ArticleViewset(mixins.ListModelMixin, viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    获取文章列表
    """
    queryset = Article.objects.all().order_by("-pub_time")
    pagination_class = ArticlePagination
    serializer_class = ArticleSerializer


class CategoryViewset(mixins.ListModelMixin, viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    获取分类详情
    """
    queryset = Category.objects.all().order_by("created_time")
    serializer_class = CategorySerializer


class TagViewset(mixins.ListModelMixin, viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    获取标签详情
    """
    queryset = Tag.objects.all().order_by("created_time")
    serializer_class = TagSerializer

class AboutViewset(mixins.ListModelMixin, viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    获取博客关于说明类型
    """
    queryset = AboutContent.objects.all()
    serializer_class = AboutContentSerializer









