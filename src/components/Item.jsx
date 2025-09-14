import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router'


function Item({item}) {
    const navigate = useNavigate()
    return (

        <Col lg={3}className="mb-4">
            <Card >
                <Card.Img variant="top" src={item.thumbnail}/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.category}
                    </Card.Text>
                    <Button onClick={() => navigate(`/detalle/${item.id}`)}>Ver mas</Button>
                </Card.Body>
            </Card>
        </Col>


    )

}
export default Item