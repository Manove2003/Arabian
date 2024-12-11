import React, { useState } from "react";
import "./DynamicForm.css"; // For styling

const DynamicForm = () => {
  const [activeForm, setActiveForm] = useState("advertise");

  const renderForm = () => {
    switch (activeForm) {
      case "advertise":
        return (
          <form
            action="https://formspree.io/f/{your-form-id}" // Replace with your Formspree form ID
            method="POST"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="tel"
              name="phone"
              placeholder="Telephone Number"
              required
            />
            <input type="text" name="company" placeholder="Company" required />
            <input
              type="text"
              name="interest"
              placeholder="I am Interested In"
              required
            />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        );
      case "partner":
        return (
          <form
            action="https://formspree.io/f/{your-form-id}" // Replace with your Formspree form ID
            method="POST"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="company" placeholder="Company" required />
            <textarea
              name="details"
              placeholder="Partnership Details"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        );
      case "news":
        return (
          <form
            action="https://formspree.io/f/{your-form-id}" // Replace with your Formspree form ID
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="news" placeholder="Share Your News"></textarea>
            <button type="submit">Send</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h2>How Can We Assist You?</h2>
      <div className="button-group">
        <button
          onClick={() => setActiveForm("advertise")}
          className={activeForm === "advertise" ? "active" : ""}
        >
          Advertise With Us
        </button>
        <button
          onClick={() => setActiveForm("partner")}
          className={activeForm === "partner" ? "active" : ""}
        >
          Become A Partner
        </button>
        <button
          onClick={() => setActiveForm("news")}
          className={activeForm === "news" ? "active" : ""}
        >
          Share News With Us
        </button>
      </div>
      <div className="form-container">{renderForm()}</div>
    </div>
  );
};

export default DynamicForm;
