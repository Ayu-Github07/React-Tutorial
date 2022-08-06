import React from "react";
import "./style.css";

export default function Add() {
  return (
    <div>
      <div class="container">
        <div class="title">Student Registration Form</div>
        <form class="form">
          <input type="hidden" />
          <div class=" user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input
                name="name"
                type="text"
                placeholder="Enter your Name"
                id="name"
                required
              />
            </div>

            <div class="input-box">
              <span class="details">Email Id</span>
              <input
                type="email"
                placeholder="Enter your Email Id"
                name="email"
                id="email"
                required
              />
            </div>

            <div class="input-box">
              <span class="details">Roll No.</span>
              <input
                type="text"
                placeholder="Enter your Roll No."
                name="rollno"
                id="rollno"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Mobile Number</span>
              <input
                type="text"
                placeholder="Enter your Mobile Number"
                name="mobile"
                id="mobile"
                required
              />
            </div>

            <div class="input-box">
              <span class="details">Address</span>
              <input
                type="text"
                placeholder="Enter your Address"
                name="address"
                id="address"
                required
              />
            </div>

            <div class="input-box">
              <span class="details">Pincode</span>
              <input
                type="text"
                placeholder="Enter your Pincode"
                name="pincode"
                id="pincode"
                required
              />
            </div>

            {/* <!-- <div class="input-box">
                    <span class="details">Gender</span>
                    <input type="text" placeholder="Enter your Gender" name="gender" id="gender" required/>
                </div> --> */}
          </div>
          <div class="gender-details">
            <input type="radio" name="gender" value="Male" id="dot-1" />
            <input type="radio" name="gender" value="Female" id="dot-2" />
            <input type="radio" name="gender" value="Others" id="dot-3" />
            <span class="gender-title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender" name="male">
                  Male
                </span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Others</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Resgiter New Student" />
          </div>
        </form>
        <div class="title-end">
          Made by{" "}
          <div class="name">
            <p>Ayush Agrawal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
