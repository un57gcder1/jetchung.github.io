from flask import Flask, render_template, request, flash, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
import json

app = Flask(__name__)

app.config["DEBUG"] = True
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+mysqlconnector://root:hacknehs@localhost/activity"
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = "hackNEHS"
db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))


def check_date(date):
    if date == "monday":
        return 2
    if date == "tuesday":
        return 3
    if date == "wednesday":
        return 4
    if date == "thursday":
        return 4
    if date == "friday":
        return 6


class activity(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    password = db.Column(db.String(100))
    monday = db.Column(db.TEXT)
    tuesday = db.Column(db.TEXT)
    wednesday = db.Column(db.TEXT)
    thursday = db.Column(db.TEXT)
    friday = db.Column(db.TEXT)

    def __init__(self, username, password, monday, tuesday, wednesday, thursday, friday):
        self.username = username
        self.password = password
        self.monday = monday
        self.tuesday = tuesday
        self.wednesday = wednesday
        self.thursday = thursday
        self.friday = friday

    def get_monday(self):
        return self.monday

    def get_tuesday(self):
        return self.tuesday

    def wednesday(self):
        return self.wednesday

    def get_thursday(self):
        return self.thursday

    def get_friday(self):
        return self.friday

    def __repr__(self):
        return '<User %r>' % self.username


@app.route("/")
def main_page():
    return "Please login"


def convert_dict(s, date):
    List = []
    key = ""
    temp = 0
    for i in range(len(s)):
        if s[i] == "'" and s[i + 1] != ':' and s[i + 1] != ',' and s[i + 1] != '}':
            temp = i + 1
        if s[i] == ':':
            key = s[temp:i - 1]
            temp = 0
        if s[i] == ',':
            List.append(key + " " + date + " " + s[temp:i - 1])
    return List


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login_page.html")
    username = request.form['username']
    password = request.form['password']
    user = activity.query.filter_by(username=username).first()
    if user == None:
        return "Wrong username or password"
    elif check_password_hash(user.password, password):
        return redirect(url_for('homepage'))
    else:
        flash('Username or Password is invalid', 'error')
    return render_template("edupro.html", List_monday=convert_dict(list_act.monday, "monday"),
                           List_tuesday=convert_dict(list_act.tuesday, "tuesday"),
                           List_thursday=convert_dict(list_act.thursday, "thursday"),
                           List_friday=convert_dict(list_act.friday, "friday"))


@app.route("/homepage", methods=['GET', 'POST'])
def homepage():
    if request.method == "GET":
        return render_template("edupro.html")
    act = str(request.form['activity'])
    name = ""
    date = ""
    time = ""
    for i in range(len(act)):
        if act[i] == ' ' and name == "":
            name = act[:i]
            temp = i
        elif act[i] == ' ' and name != "":
            date = act[temp + 1:i]
            time = act[i + 1:]
    list_act = activity.query.filter_by(username="longhuy").first()
    if check_date(date) == 2:
        s = list_act.monday
        if s == "":
            s = "{" + "'" + name + "': " + "'" + time + "'}"
        else:
            s = s[:-1] + ", '" + name + "': " + "'" + time + "'}"
        list_act.monday = s
        db.session.commit()

    if check_date(date) == 3:
        s = list_act.tuesday
        if s == "":
            s = "{" + "'" + name + "': " + "'" + time + "'}"
        else:
            s = s[:-1] + ", '" + name + "': " + "'" + time + "'}"
        list_act.tuesday = s
        db.session.commit()

    if check_date(date) == 5:
        s = list_act.thursday
        if s == "":
            s = "{" + "'" + name + "': " + "'" + time + "'}"
        else:
            s = s[:-1] + ", '" + name + "': " + "'" + time + "'}"
        list_act.thursday = s
        db.session.commit()

    if check_date(date) == 6:
        s = list_act.friday
        if s == "":
            s = "{" + "'" + name + "': " + "'" + time + "'}"
        else:
            s = s[:-1] + ", '" + name + "': " + "'" + time + "'}"
        list_act.friday = s
        db.session.commit()

    for i in convert_dict(list_act.monday, "monday"):
        print(i, type(i))
    print(convert_dict(list_act.monday, "monday"))
    return render_template("edupro.html", List_monday=convert_dict(list_act.monday, "monday"),
                           List_tuesday=convert_dict(list_act.tuesday, "tuesday"),
                           List_thursday=convert_dict(list_act.thursday, "thursday"),
                           List_friday=convert_dict(list_act.friday, "friday"))


@app.route("/delete", methods=["GET", "POST"])
def delete():
    list_act = activity.query.filter_by(username="longhuy").first()
    if request.method == "GET":
        return render_template("edupro.html", List_monday="", List_tuesday="", List_thursday="", List_friday="")
    list_act.tuesday = ""
    list_act.thursday = ""
    list_act.friday = ""
    db.session.commit()
    return render_template("edupro.html", List_monday="", List_tuesday="", List_thursday="", List_friday="")


if __name__ == "__main__":
    app.run()
