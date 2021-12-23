import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ImgCard from '../ItemCount/pandulce.jpg';

const ItemCount = ({ stock, initial }) => {

  const [producto, setProducto] = useState(initial)

  const sumarProducto = () => {
    if (producto < stock) {
      setProducto(producto + 1)
    } else {
      alert('Se supero el límite de productos')
    }
  }
  const restarProducto = () => {
    if (producto <= 0) {
      alert('Sin Stock')
    } else {
      setProducto(producto - 1)
    }
  }

  const onAdd = () => {
    alert('El producto se agregó correctamente');
  }

  return (
    <div>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={ImgCard} />
        <Card.Body>
          <Card.Title>PAN DULCE</Card.Title>
          <Card.Text>
            Sin azucar X 400 gr
            MURKE
          </Card.Text>
          <Button variant="outline-success" onClick={sumarProducto}>+</Button>

          <label>Cantidad: {producto} </label>

          <Button variant="outline-dark" onClick={restarProducto}>-</Button>
          <Button variant="primary" onClick={onAdd}>AGREGAR AL CARRITO</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCount