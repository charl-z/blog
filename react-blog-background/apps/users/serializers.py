# -*-coding: utf-8 -*-
__auth__ = "wade"
__date__ = '2018/5/6 14:49'

from datetime import datetime, timedelta
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from .models import UserProfile

from django.contrib.auth import get_user_model
User = get_user_model()


class UserDetailSerializer(serializers.ModelSerializer):
    """用户详情序列化"""
    class Meta:
        model = User
        fields = ("username", "name", "gender", "birthday", "email", "mobile")



