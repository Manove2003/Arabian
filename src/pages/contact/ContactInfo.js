import React from "react";
import "./ContactInfo.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

class ContactInfo extends React.Component {
  render() {
    return (
      <section className="contact-info">
        <div className="contact-info__container">
          <div className="contact-info__box">
            <h3>Address</h3>
            <div className="contact-info__item">
              <FaMapMarkerAlt className="contact-info__icon" />
              <p>1400 Broadway. New York NY 10018 </p>
            </div>
          </div>

          <div className="contact-info__box">
            <h3>Email</h3>
            <div className="contact-info__item">
              <FaEnvelope className="contact-info__icon" />
              <div>
                <p>info@arabianbroadcast.com</p>
              </div>
            </div>
          </div>

          <div className="contact-info__box">
            <h3>Phone</h3>
            <div className="contact-info__item">
              <FaPhoneAlt className="contact-info__icon" />
              <div>
                <p>1 (212) 222-7700</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactInfo;
