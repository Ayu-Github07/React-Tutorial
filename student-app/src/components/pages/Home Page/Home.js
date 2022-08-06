import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log("This fucntion is working");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/students");

    console.log(result.data);
    setStudents(result.data);
  };

  return (
    <div>
      <div className="container1">
        <div className="title">
          <Link to="/add">Add New Student</Link>
        </div>
        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Student Email Id</th>
                <th>Student Roll No.</th>
                <th>Student Mobile Number</th>
                <th>Student Address</th>
                <th>Student Pincode</th>
                <th>Student Gender</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>

              {students.map((student, index) => (
                <tr>
                  <td>{student.studentId}</td>
                  <td>{student.studentName}</td>
                  <td>{student.studentEmailId}</td>
                  <td>{student.studentrollNo}</td>
                  <td>{student.studentMobile}</td>
                  <td>{student.studentAddress}</td>
                  <td>{student.studentPincode}</td>
                  <td>{student.studentGender}</td>
                  <td>
                    <a>Update</a>
                  </td>
                  <td>
                    <a>Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
