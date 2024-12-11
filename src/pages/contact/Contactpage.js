import React from "react";
import Contactpageheader from "./Contactpageheader";
import DynamicForm from "./DynamicForm";
import AdvertiseWithUs from "./AdvertiseWithUs";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

const Aboutpage = () => {
  return (
    <div>
      <Contactpageheader />
      <DynamicForm />
      <AdvertiseWithUs />
      <ContactInfo />
      <Footer />
    </div>
  );
};
export default Aboutpage;
