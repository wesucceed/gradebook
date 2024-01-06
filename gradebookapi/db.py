import datetime
import hashlib
import os
import pyotp



import bcrypt
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class Student(db.Model):
    """
    Student model
    """
    __tablename__ = "students"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True, unique = True)

    # Student information
    name = db.Column(db.String, nullable = False)

    #Grade
    grades = db.relationship("Grade")  #TODO: unique is not allowed. was removed

    def __init__(self, **kwargs):
        """
        Initializes a student object
        """
        self.name = kwargs.get("firstname") + kwargs.get("lastname")

    def simple_serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
    
    def serialize(self):

        res = self.simple_serialize()
        res.update({"grades": [grade.simple_serialize() for grade in self.grades]})

        return res




class Grade(db.Model):
    """
    Grade model
    """
    __tablename__ = "grades"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True, unique = True)

    #  information
    exercise = db.Column(db.Integer, default = 0)
    class_test = db.Column(db.Integer, default = 0)
    homework = db.Column(db.Integer, default = 0)
    term_exam = db.Column(db.Integer, default = 0)


    #student
    student_id = db.Column(db.Integer, db.ForeignKey("students.id"), nullable = False)



    def __init__(self, **kwargs):
        """
        Initializes a grade object
        """
        self.student_id = kwargs.get("student_id")
        self.exercise = kwargs.get("exercise")
        self.class_test = kwargs.get("class_test")
        self.homework = kwargs.get("homework")
        self.term_exam = kwargs.get("term_exam")




    def simple_serialize(self):
        total_class_score = self.exercise + self.homework + self.class_test
        class_score_30 = 0.3*total_class_score
        exam_score_70 = 0.7*self.term_exam



        return {
            "id": self.id,
            "exercise": self.exercise,
            "homework": self.homework,
            "class_test": self.class_test,
            "total_class_score": total_class_score,
            "class_score_30": class_score_30,
            "term_exam": self.term_exam,
            "exam_score_70": exam_score_70,
            "overall_total_100": class_score_30 + exam_score_70
        }

