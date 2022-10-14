import * as React from "react";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Card } from "react-bootstrap";

// style

// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Accueil" />
      <div style={{ margin: 50 }}>
        <Card className="bg-dark text-white">
          <StaticImage
            src="../images/forestry_template.png"
            alt="Example of forest logging"
            placeholder="blurred"
            width={1800}
    	    height={900}
          />
          <Card.ImgOverlay style={{ backgroundColor: "#00000055" }}>
            <Card.Title
              style={{
                fontSize:
                  "calc(20px + (100 - 20) * ((90vw - 180px) / (1800 - 180)))",
              }}
            >
              Support of forest activities
            </Card.Title>
            <Card.Text
              style={{
                fontSize:
                  "calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Connect and reveal the richness of our forest with CARVI technologies
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        
        <div style={{ margin: 50 }} />
        <Card className="bg-white text-white">
          <StaticImage
            src="../images/Draft_applications_carvi.svg"
            alt="CARVI Technologies"
            placeholder="blurred"
            width={3600}
    	    height={2200}
          />
          <Card.ImgOverlay style={{ backgroundColor: "#00000000" }}>
            <Card.Title
              style={{
                fontSize:
                  "calc(30px + (100 - 30) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              
            </Card.Title>
            <Card.Text
              style={{
                fontSize:
                  "calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        
        <div style={{ margin: 50 }} />
        <Card className="bg-dark text-white">
          <StaticImage
            src="../images/clients_carvi.svg"
            alt="Different clients"
            placeholder="blurred"
            width={3300}
    	    height={2200}
          />
          <Card.ImgOverlay style={{ backgroundColor: "#00000055" }}>
            <Card.Title
              style={{
                fontSize:
                  "calc(20px + (100 - 20) * ((90vw - 180px) / (1800 - 180)))",
              }}
            >
              Our clients
            </Card.Title>
            <Card.Text
              style={{
                fontSize:
                  "calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Forestry machine suppliers, forestry companies and forestry software companies
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
};

export default IndexPage;
