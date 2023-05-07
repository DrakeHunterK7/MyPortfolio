
import { useState } from "react";
import { useMatch } from "react-router-dom";
import { Card } from "react-bootstrap";

function HomePage() {

  const match = useMatch('portfolio/:portfolioType');
  var [ pType, setPType ] = useState(match?.params.portfolioType);

  return (
    <div className="HomePage">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{pType}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default HomePage;
