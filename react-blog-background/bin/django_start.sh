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
