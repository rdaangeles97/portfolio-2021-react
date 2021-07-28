import React from "react";
import { ContactSection, ContactHeader, ContactContent } from "./s_Contact";
const index = ({ contactData }) => {
  return (
    <ContactSection>
      <ContactHeader>
        <h1>{contactData.contactHeaderText}</h1>
        <div className="overlay"></div>
      </ContactHeader>
      <ContactContent></ContactContent>
    </ContactSection>
  );
};

export default index;
