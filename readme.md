## 环境部署

- Python 3.6+
- Django 1.11.3
- DjangoRestFramework=3.7.7
- React 16.11

## Python安装

```
wget https://www.python.org/ftp/python/3.6.11/Python-3.6.11.tgz
tar -xf Python-3.6.11.tgz
cd Python-3.6.11
./configure --prefix=/usr/local/python36
make && make install
ln -s /usr/local/python36/bin/python3 /usr/bin/python3
ln -s /usr/local/python36/bin/pip3 /usr/bin/pip3
```

## Python虚拟环境安装

- 安装virtualenv virtualenvwrapper

```
pip3 install virtualenv virtualenvwrapper
ln -s /usr/local/python36/bin/virtualenvwrapper.sh /usr/bin/virtualenvwrapper.sh
ln -s /usr/local/python36/bin/virtualenv /usr/bin/virtualenv
```

- 在~/.bashrc中添加行：

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/bin/virtualenvwrapper.sh
```

- 创建指定版本的虚拟环境

```
mkvirtualenv -p /usr/bin/python3 network_manage
```

- **退出虚拟环境**

```
deactivate
```

- **删除虚拟环境**

```
rmvirtualenv network_manage
```

## Python基础包安装

```
pip install -r requirements.txt 
```

## 启动环境脚本

```shell
 #!/bin/bash
source /etc/profile

base_path='/opt/react-blog-background'
python_path='/root/.virtualenvs/blog/bin'
python_packages_path='/root/.virtualenvs/blog/lib/python3.6/site-packages/network_manage.pth'

# 检查python安装包路径下是否存在python的自定义模块搜索配置
if [ ! -s $python_packages_path ]; then
	echo $base_path >> $python_packages_path	
fi

# 检查数据库文件是否是存在
db_path='/usr/local/blog'
if [ ! -e $db_path ]; then
	mkdir $db_path
	chown postgres:postgres $db_path
	su - postgres -c "initdb -D $db_path"    
	rm -rf $db_path/postgres.conf
	cp $base_path/conf/postgresql.conf $db_path
	su - postgres -c "/usr/local/pgsql/bin/pg_ctl -D $db_path -l /home/postgres/pg_lease.log start"
	sleep 60
#	psql -U postgres -p 5430 -c "create database device_query;"
fi

cd $base_path
psql -U postgres -p 5430 -c "create database blog;"
$python_path/python manage.py makemigrations
$python_path/python manage.py migrate

```

## 前台服务安装和启动

1. 安装npm环境，自行百度安装
2. npm一键安装package.json里的所有依赖文件

```shell
npm install
```

3. 启动npm服务

```shell
npm run start
```

如果是服务打包，需要执行

```shell
npm run build
```

## 服务部署

1. 通过gunicorn部署启动django服务

```shell
#!/bin/bash

NAME="blog" # Name of the application
DJANGODIR=/opt/react-blog-background  # Django project directory
SOCKFILE=/opt/react-blog-background/run/gunicorn.sock # we will communicte using this unix socket
LOG=/tmp/gunicorn.log
USER=root # the user to run as
GROUP=root # the group to run as
NUM_WORKERS=3 # how many worker processes should Gunicorn spawn
DJANGO_SETTINGS_MODULE=blog.settings # which settings file should Django use
DJANGO_WSGI_MODULE=blog.wsgi # WSGI module name

echo "Starting $NAME as `whoami`"

# Activate the virtual environment
cd $DJANGODIR
source  ~/.virtualenvs/blog/bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Create the run directory if it doesn't exist
RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR

# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec ~/.virtualenvs/blog/bin/gunicorn ${DJANGO_WSGI_MODULE}:application -b 127.0.0.1:8000 \
--name $NAME \
--workers $NUM_WORKERS \
--user=$USER --group=$GROUP \
--log-level=debug --log-file=$LOG &
```

2. nginx配置

```nginx
server {
    listen      80;
    server_name weidy.top;

    keepalive_timeout 70;
    access_log /var/log/nginx/django_access.log;
    error_log /var/log/nginx/django_error.log;

    location /xadmin_static {
          alias /opt/react-blog-background/xadmin_static;
    }
   
    location /api/ {
    	proxy_pass http://127.0.0.1:8000/;
    }
   
    location /xadmin/ {
        proxy_pass http://127.0.0.1:8000/xadmin/;
    } 
    
    location / {
	root /opt/build;
	try_files $uri $uri/ /index.html;
    }
    
    #To allow POST on static pages 允许静态页使用POST方法
    error_page  405 =200 $uri;
    

    gzip on;
    gzip_buffers 32 4k;
    gzip_comp_level 6;
    gzip_min_length 200;
    gzip_types text/css text/xml application/javascript;
    gzip_vary on;

} 
```

