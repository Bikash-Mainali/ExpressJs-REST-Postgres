/**
 * student.js
 */

"use script";
const express = require("express");
const StudentController = require("../controllers/studentController");
const app = express();
const studentRouter = express.Router();

// Getting all
studentRouter.get('/', async (req, res) => {
    const studentControllerObj = new StudentController();
    try {
        const students = await studentControllerObj.getStudents();
        res.status(200).json(students.rows)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// Alternative
// Using Promise
/*
studentRouter.get('/', (req, res) => {
    const studentControllerObj = new StudentController();
    const students = new Promise((resolve, reject) => {
        resolve(studentControllerObj.getStudents());
        reject("Error");
    })
    students
        .then(function (value) {
            res.status(200).json(value.rows);
        }).catch((error) => {
            res.status(400).json({ message: error.message })
        })
})
*/



// Getting one
studentRouter.get('/:sId', async (req, res) => {
    console.log(req.params.sId)
    const studentId = req.params.sId;
    const studentControllerObj = new StudentController();
    try {
        const students = await studentControllerObj.getStudentById(studentId);
        res.status(200).json(students.rows);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Adding one
studentRouter.post('/', async (req, res) => {

    const studentControllerObj = new StudentController();
    try {
        const result = await studentControllerObj.addStudent(req.body);
        res.status(201).redirect("/student/");


    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Updating one
studentRouter.put('/:sId', async (req, res) => {
    const studentId = req.params.sId;
    const studentControllerObj = new StudentController();
    try {
        const result = await studentControllerObj.updateStudentById(req.body, studentId);
        res.status(200).redirect("/student/");
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// Deleting one
studentRouter.delete('/:sId', async (req, res) => {
    const studentId = req.params.sId;
    const studentControllerObj = new StudentController();
    try {
        const result = await studentControllerObj.deleteStudentById(studentId);
        res.status(200).json({ message: `student with id ${studentId} deleted`, status: 200 });
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

})

module.exports = studentRouter;