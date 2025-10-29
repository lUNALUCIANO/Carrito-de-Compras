import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router'


function Item({ item }) {
    const navigate = useNavigate()
    return (

        <Col lg={3} className="mb-5">
            <Card className="h-100 d-flex flex-column align-items-center text-center">
                <Card.Img variant="top"
                    src={item.image} className="img-fluid" />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title >
                  
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                    <Button onClick={() => navigate(`/detalle/${item.id}`)}>Ver mas</Button>
                </Card.Body>
            </Card>
        </Col>
    )

}
export default Item