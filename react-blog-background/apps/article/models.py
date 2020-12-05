from django.db import models
from datetime import datetime
from django.utils.timezone import now
from mdeditor.fields import MDTextField
# from django.contrib.auth.models import AbstractUser
# from users.models import UserProfile
# Create your models here.

from django.contrib.auth import get_user_model  # get_user_model
User = get_user_model()  # 调用get_user_model()的方法，实际上是在settings里面寻找

class Category(models.Model):
    """文章分类"""
    name = models.CharField('分类名', max_length=30, unique=True)
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    last_mod_time = models.DateTimeField(verbose_name='修改时间', default=now)
    # parent_category = models.ForeignKey('self', verbose_name="父级分类", blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = "分类"
        verbose_name_plural = verbose_name


class Tag(models.Model):
    """文章标签"""
    name = models.CharField('标签名', max_length=30, unique=True)
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    last_mod_time = models.DateTimeField(verbose_name='修改时间', default=now)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = "标签"
        verbose_name_plural = verbose_name


class Article(models.Model):
    """
    文章
    """
    STATUS_CHOICES = (
        ('d', '草稿'),
        ('p', '发表'),
    )
    COMMENT_STATUS = (
        ('o', '打开'),
        ('c', '关闭'),
    )
    TYPE = (
        ('a', '文章'),
        ('p', '页面'),
    )
    
    title = models.CharField(verbose_name='标题', max_length=200, unique=True)
    #author必须要放在body之前，xadmin的后台才能正常显示
    author = models.ForeignKey(User, verbose_name='作者', related_name='article', on_delete=models.CASCADE) 
    body = MDTextField(verbose_name='正文', blank=False, null=False)
    pub_time = models.DateTimeField(default=datetime.now, verbose_name="发布时间")
    status = models.CharField(verbose_name='文章状态', max_length=1, choices=STATUS_CHOICES, default='p')
    comment_status = models.CharField(verbose_name='评论状态', max_length=1, choices=COMMENT_STATUS, default='o')
    type = models.CharField(verbose_name='类型', max_length=1, choices=TYPE, default='a')
    views = models.PositiveIntegerField(verbose_name='浏览量', default=0)
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    last_mod_time = models.DateTimeField(verbose_name='修改时间', default=now)
    category = models.ForeignKey(Category, verbose_name='分类', related_name='article', on_delete=models.CASCADE, blank=False, null=False)
    tags = models.ManyToManyField(Tag, verbose_name='标签集合', related_name='article', blank=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-pub_time']
        verbose_name = "文章"
        verbose_name_plural = verbose_name
        get_latest_by = 'created_time'


class AboutContent(models.Model):
    """博客说明(关于内容)"""
    title = models.CharField(verbose_name='标题', max_length=200, unique=True)
    content = MDTextField(verbose_name='正文', blank=False, null=False)
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    last_mod_time = models.DateTimeField(verbose_name='修改时间', default=now)
    # parent_category = models.ForeignKey('self', verbose_name="父级分类", blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        # ordering = ['title']
        verbose_name = "说明"
        verbose_name_plural = verbose_name