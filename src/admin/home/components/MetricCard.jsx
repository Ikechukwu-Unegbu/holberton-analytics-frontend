import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MetricCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.text}
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default MetricCard;