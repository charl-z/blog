# -*-coding: utf-8 -*-
__auth__ = "wade"
__date__ = '2018/4/23 22:00'

from rest_framework import serializers
from .models import Article, Category, Tag, AboutContent
from users.serializers import UserDetailSerializer

class AboutContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutContent
        fields = '__all__'


class CategorySerializer1(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class TagSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name')


class ArticleSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'pub_time')


class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer1()  
    tags = TagSerializer1()
    author = UserDetailSerializer()

    class Meta:
        model = Article
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    article = ArticleSerializer1(many=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'article')

    def create(self, validated_data):
        articles_data = validated_data.pop('article')
        category = Category.objects.create(**validated_data)
        for article_data in articles_data:
            Article.objects.create(category=category, **article_data)
        return category


class TagSerializer(serializers.ModelSerializer):
    article = ArticleSerializer1(many=True)

    class Meta:
        model = Tag
        fields = ('id', 'name', 'article')

    def create(self, validated_data):
        articles_data = validated_data.pop('article')
        tag = Tag.objects.create(**validated_data)
        for article_data in articles_data:
            Article.objects.create(tag=tag, **article_data)
        return tag




