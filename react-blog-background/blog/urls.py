from django.conf.urls import url, include
#from django.conf import settings
from django.views.static import serve
import xadmin
from rest_framework.documentation import include_docs_urls
from rest_framework import routers

from article.views import ArticleViewset, CategoryViewset, TagViewset, AboutViewset
from blog.settings import MEDIA_ROOT
from blog.settings import STATIC_ROOT
router = routers.DefaultRouter()

# 配置urls
router.register(r'article', ArticleViewset, base_name="article")
router.register(r'category', CategoryViewset, base_name="category")
router.register(r'tag', TagViewset, base_name="tag")
router.register(r'about', AboutViewset, base_name="about")

urlpatterns = router.urls

urlpatterns = [
    url(r'^xadmin/', xadmin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^media/(?P<path>.*)$', serve, {'document_root': MEDIA_ROOT}),  # 后台页面前端显示
    url(r'^static/(?P<path>.*)/$', serve, {'document_root': STATIC_ROOT}),
    url(r'^', include(router.urls)),
    url(r'docs/', include_docs_urls(title="blog")),
    url(r'mdeditor/', include('mdeditor.urls')),
] 
