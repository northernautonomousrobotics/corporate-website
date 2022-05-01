import * as React from "react";
import Seo from "../components/seo";

const ContactPage = () => {
  return (
    <div style={{overflow: "hidden"}}>
      <Seo title="Contact" />
      <iframe
        id="contact-iframe"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=RdzITd19V0Kjtbwg1f8YmNSvxyOoI0FAmBC9NRp-qnlUQkpNMU5FSURNR05TM1BESTBWUVRPMkdXSSQlQCN0PWcu&embed=true"
        style={{ margin:0, width: "100%", height: "calc(100vh - 64px)" }}
      />
    </div>
  );
};

export default ContactPage;
