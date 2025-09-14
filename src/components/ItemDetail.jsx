import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Counter from './Counter'

function ItemDetail({item}) {
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Image src={item?.thumbnail} />
                </Col>
                <Col>
                    <h2> {item?.title}</h2>
                    <p>${item?.price}</p>
                    <p>Informacion del Producto: {item?.description}</p>
                    <p>Stock Disponible: {item?.stock} und</p>
                    <Counter />
                </Col>
            </Row>
        </Container>
    )
}
export default ItemDetail