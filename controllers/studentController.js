/**
 * studentController.js
 */

"use strict";

const StudentDao = require("../dao/studentDao")
const Student = require("../models/studentModel")


class StudentController {
    studentDaoObj = null;
    constructor() {
        this.studentDaoObj = new StudentDao();
    }

    getStudents =  function () {
        try {
            console.log("get list of students");
            const studentList =  this.studentDaoObj.getStudents();
            console.log("...................");
            return studentList.rows;
            //res.json(studentList)
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    }

    getStudentById = async function (studentId) {
        try {
            const studentDaoObj = new StudentDao();
            const student = await studentDaoObj.getStudentById(studentId);
            return student;
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    }


    addStudent = async function (requestData) {
        try {
            const studentDaoObj = new StudentDao();
            const student = new Student(requestData.studentId, requestData.fullName, requestData.dateOfBirth, requestData.address)
            const result = await studentDaoObj.saveStudent(student);
            return result;
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    }


    updateStudentById = async function (requestData, studentId) {
        try {
            const studentDaoObj = new StudentDao();
            const student = new Student(null, requestData.fullName, requestData.dateOfBirth, requestData.address)
            const result = await studentDaoObj.updateStudentById(student, studentId);
            return result;
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    }

    deleteStudentById = async function (studentId) {
        try {
            const studentDaoObj = new StudentDao();
            const result = await studentDaoObj.deleteStudentById(studentId);
        }
        catch (error) {
            throw new Error("Something went wrong");
        }
    }
}


module.exports = StudentController;