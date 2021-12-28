import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import getFetch from "../../services/getFetch";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
      .then(res => {
        setProducts(res)


      }


      )

      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  console.log(products)

  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>

      {loading ? <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner> : <ItemList products={products} />
      }

      <ItemCount initial={1} stock={5} />
    </div>
  )
}

export default ItemListContainer