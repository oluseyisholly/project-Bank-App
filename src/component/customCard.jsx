import {Card} from "react-bootstrap"
const CustomCard = ({
  children,
  cardClassName,
  cardBodyClassName
}) =>
{

    return (
      <Card className={cardClassName}>
        <Card.Body className={cardBodyClassName}>
            {children}
        </Card.Body>
      </Card>
    );
  }

export default CustomCard
