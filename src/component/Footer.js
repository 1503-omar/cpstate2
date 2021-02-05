import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          GoMyCode Hackerspace, <br />
          Immeuble NEO, 2ème étage, Rue du lac lochness, Les Berges du Lac1{" "}
        </Card.Text>

      
      </Card.Body>
      <Card.Footer className="text-muted">
        Powered by Hannachi Mehdi
      </Card.Footer>
    </Card>
  );
};

export default Footer;