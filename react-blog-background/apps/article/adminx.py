# -*-coding: utf-8 -*-
__auth__ = "wade"
__date__ = '2018/2/8 22:40'

import xadmin
from .models import Article, Category, Tag, AboutContent


class CategoryAdmin(object):
    list_display = ["name"]


class TagAdmin(object):
    list_display = ["name"]


class ArticleAdmin(object):
    list_display = ("title", "body", "pub_time", "status", "comment_status", "type", "views", "created_time", "last_mod_time", "category", "tags", "author")


class AboutContentAdmin(object):
    list_display = ["content"]

xadmin.site.register(Category, CategoryAdmin)
xadmin.site.register(Article, ArticleAdmin)
xadmin.site.register(Tag, TagAdmin)
xadmin.site.register(AboutContent, AboutContentAdmin)