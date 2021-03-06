from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.db.models import Q

# Create your views here.

User = get_user_model()

class CustomBackend(ModelBackend):
    """
    自定义用户验证,重写ModelBackend类中的authenticate方法
    """
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(Q(username=username)|Q(mobile=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None


