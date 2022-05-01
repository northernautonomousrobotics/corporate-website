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
      <div style={{ margin: 10 }}>
        <Card className="bg-dark text-white">
          <StaticImage
            src="../images/lidar_point_cloud.png"
            alt="Une cartographie 3D en nuage de points"
            placeholder="blurred"
          />
          <Card.ImgOverlay style={{ backgroundColor: "#00000055" }}>
            <Card.Title
              style={{
                fontSize:
                  "calc(30px + (100 - 30) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Cartographie 3D
            </Card.Title>
            <Card.Text
              style={{
                fontSize:
                  "calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Notre expertise en cartographie 3D permet à nos clients
              d'améliorer leur productivité grace à une automatisation de leurs
              différents véhicules.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <div style={{ margin: 5 }} />
        <Card className="bg-dark text-white">
          <StaticImage
            src="../images/secteurs.png"
            alt="Differents camions utilisés dans l'industrie"
            placeholder="blurred"
          />
          <Card.ImgOverlay style={{ backgroundColor: "#00000055" }}>
            <Card.Title
              style={{
                fontSize:
                  "calc(30px + (100 - 30) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Nos clients
            </Card.Title>
            <Card.Text
              style={{
                fontSize:
                  "calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Nos clients se situent principalement dans les domaines
              forestiers, miniers ou encore dans l'argriculture.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <div style={{ margin: 5 }} />
        <Card className="bg-dark text-white">
          <StaticImage
            src="../images/robot.webp"
            alt="Un robot quadrupede"
            placeholder="blurred"
          />
          <Card.ImgOverlay style={{ backgroundColor: "#00000055" }}>
            <Card.Title
              style={{
                fontSize:
                  "calc(30px + (100 - 30) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Teach and repeat
            </Card.Title>
            <Card.Text
              style={{
                fontSize:
                  "calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
              }}
            >
              Décrouvrez une nouvelle façon d'apprendre à vos véhicules automatisés, les différentes taches que vous voulez qu'ils effectuent.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
};

export default IndexPage;
