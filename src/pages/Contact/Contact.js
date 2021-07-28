import React from "react";
import ContactComponent from "../../components/Contact";

import { ContactSectonData } from "../../data/GlobalData";
const Contact = () => {
  return (
    <>
      <ContactComponent contactData={ContactSectonData} />
    </>
  );
};

export default Contact;
