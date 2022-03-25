/**
 * studentModel.js
 */

"use strict";


class Student {

    #studentId = null;
    #fullName = null;
    #dateOfBirth = null;
    #address = null;

    constructor(studentId, fullName, dateOfBirth, address) {
        this.#studentId = studentId;
        this.#fullName = fullName;
        this.#dateOfBirth = dateOfBirth;
        this.#address = address;

    }

    getStudentId = () => {
        return this.#studentId;
    }
    getFullName = () => {
        return this.#fullName;
    }
    getDateOfBirth = () => {
        return this.#dateOfBirth;
    }

    getAddress = () => {
        return this.#address;
    }
}

module.exports = Student;