import json
import os

from db import db
from flask import Flask, request
from db import Student

db_filename = "collation.db"
app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///%s" % db_filename
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db.init_app(app)
with app.app_context():
    db.drop_all()
    db.create_all()
    
# generalized response formats
def success_response(data, code=200):
    """
    Generalized success response function
    """
    return json.dumps(data), code


def failure_response(message, code=404):
    """
    Generalized failure response function
    """
    return json.dumps({"error": message}), code



@app.route("/", methods = ["POST"])
def hello_world():
    """
    Endpoint for testing server
    """
    return "Hello, " + os.environ.get("ACTIVE")


@app.route("/students/get-all/", methods = ["GET"])
def get_all_students():
    """
    Endpoint for getting all students
    """
    return Student.query.all()

@app.route("/students/add/", methods = ["POST"])
def add_student():
    """
    Endpoint for adding a student
    """

    Student()
    

################################################################
#####################GET REQUESTS################################  




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

