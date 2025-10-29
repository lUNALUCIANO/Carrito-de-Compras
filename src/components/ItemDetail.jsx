import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Counter from './Counter'
import VaciarCarritoButton from "./VaciarCarritoButton"
import  ButtonGroup  from 'react-bootstrap/ButtonGroup'




function ItemDetail({ item }) {
    
    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Row className='w-75'>
                <Col md={5}>
                    <Image src={item?.image} fluid rounded />
                </Col>
                <Col>
                    <h2> {item?.name}</h2>
                    <p>Informacion del Producto: {item?.Description}</p>
                    <p>Stock Disponible: {item?.Stock} und</p>
                    <p>Precio :$ {item?.price}</p>
                    <ButtonGroup>
                        <Counter item={item} />
                        <div className="ms-2"></div>
                        <VaciarCarritoButton />
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    )
}
export default ItemDetail