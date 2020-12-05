# -*-coding: utf-8 -*-
__auth__ = "wade"
__date__ = '2018/2/8 22:44'

import xadmin
from xadmin import views


class BaseSetting(object):
    enable_themes = True
    use_bootswatch = True


class GlobalSettings(object):
    site_title = "博客管理"
    site_footer = "blog"
    # menu_style = "accordion"


xadmin.site.register(views.BaseAdminView, BaseSetting)
xadmin.site.register(views.CommAdminView, GlobalSettings)