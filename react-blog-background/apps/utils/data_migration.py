# -*-coding: utf-8 -*-
__auth__ = "wade"
__date__ = '2019/5/31 21:44'

import MySQLdb



# 打开数据库连接
db = MySQLdb.connect("47.96.156.191", "root", "251493584wdy", "wade_blog", charset='utf8' )
db_local = MySQLdb.connect("127.0.0.1", "root", "251493584wdy", "test", charset='utf8' )

# 使用cursor()方法获取操作游标
cursor = db.cursor()
cursor_local = db_local.cursor()

# 使用execute方法执行SQL语句
# cursor.execute("select created_time, last_mod_time, title, body,  pub_time, status, comment_status, type, views from blog_article limit 1;")
cursor.execute("select name from blog_tag;")
#INSERT INTO 表名称 VALUES (值1, 值2,....)
#INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
# 使用 fetchone() 方法获取一条数据
datas = cursor.fetchall()
for data in datas:
    sql = "INSERT INTO article_tag (name) VALUES ('{}');".format(data[0])
    print(sql)
    cursor_local.execute(sql)
    db_local.commit()

# 关闭数据库连接
db.close()
cursor_local.close()