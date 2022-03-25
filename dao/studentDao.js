/**
 * studentDao.js
 */

"use strict";

const dbConnectionMgr = require("../config/DBConnectionManager")

class StudentDao {
    constructor() { }

    getStudents = () => {
        const dbConnection = dbConnectionMgr.getConnection();
        console.log("student dao");
        const queryString = `SELECT * FROM student_info ORDER BY id ASC`
        const students = dbConnection.query(queryString);
        return students;
    }

    getStudentById = (sId) => {
        const dbConnection = dbConnectionMgr.getConnection();
        console.log("student dao");
        const queryString = `SELECT * FROM student_info where student_id = ${sId}`
        const student = dbConnection.query(queryString);
        return student;
    }

    saveStudent = (student) => {
        const dob = new Date(student.getDateOfBirth()).toISOString().slice(0, 10)
        const queryString = `INSERT INTO student_info (student_id, full_name, date_of_birth, address) VALUES (${student.getStudentId()}, '${student.getFullName()}', '${dob}', '${student.getAddress()}')`;
        const dbConnection = dbConnectionMgr.getConnection();
        const saveOpResult = dbConnection.query(queryString);
        return saveOpResult;
    }


    updateStudentById = (student, sId) => {
        const dob = new Date(student.getDateOfBirth()).toISOString().slice(0, 10)
        const queryString = `UPDATE  student_info set full_name = '${student.getFullName()}', date_of_birth = '${dob}', address = '${student.getAddress()}' WHERE student_id = ${sId}`;
        const dbConnection = dbConnectionMgr.getConnection();
        const saveOpResult = dbConnection.query(queryString);
        return saveOpResult;
    }

    deleteStudentById = (sId) => {
        const queryString = `DELETE FROM student_info WHERE student_id = ${sId}`;
        const dbConnection = dbConnectionMgr.getConnection();
        const saveOpResult = dbConnection.query(queryString);
        return saveOpResult;
    }

}

module.exports = StudentDao;