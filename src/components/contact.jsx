import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, company, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow only numbers and ensure max length of 10 digits
      const phoneValue = value.replace(/\D/g, "").slice(0, 10);
      setState((prevState) => ({ ...prevState, [name]: phoneValue }));
    } else if (name === "email") {
      // Email validation using a regular expression
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(value);
      if (isValidEmail) {
        setState((prevState) => ({ ...prevState, [name]: value }));
        document.getElementById("emailError").textContent = ""; // Clear error message
      } else {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
      }
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  const clearState = () => setState({ ...initialState });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, company, phone, message);

    try {
      const response = await axios.post("https://biowaste.in/wastewy_contactUs", {
        nm: name,
        eml: email,
        cmp: company,
        mob: phone,
        msg: message,
      });

      console.log("Form data sent to API:", response.data);
      toast.success("Form submitted successfully!", {
        position: "top-center", // Position of the toast
        autoClose: 5000, // Duration in milliseconds before the toast auto-closes
        hideProgressBar: false, // Whether to show progress bar
        closeOnClick: true, // Whether to close on click
        pauseOnHover: true, // Whether to pause on hover
        draggable: true, // Whether the toast can be dragged
        progress: undefined, // Progress bar (if applicable)
      });
  
      // Clear the form fields after successful submission
      clearState();
    } catch (error) {
      console.log("Error sending data:", error);
    }
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  We are eager to talk to you and collaborate. Say hello to us at wastewyze@gmail.com or drop in your details below for a call back.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger" id="emailError"></p>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        placeholder="City"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="form-control"
                        placeholder="State"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-control"
                        placeholder="Company/Organization"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        pattern="\d{10}"
                        maxLength="10"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? (
                  <a 
                    href={`https://www.google.com/maps?q=${encodeURIComponent(props.data.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email-link"  // Optional: Keeps the original style
                  >
                    {props.data.address}
                  </a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div> */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? (
                  <a href={`tel:${props.data.phone}`} className="phone-link">{props.data.phone}</a>
                ) : (
                  "loading"
                )}
              </p>
            </div>

            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div> */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? (
                  <a href={`mailto:${props.data.email}`} className="email-link">{props.data.email}</a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram custom-icon instagram fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : "/"}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fa-brands fa-whatsapp custom-icon whatsapp fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin custom-icon linkedin fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : "/"}>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedn : "/"}>
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Neerja Associates Pvt. Ltd. All Rights Reserved.
          </p>

        </div>
      </div>
    </div>
  );
};
