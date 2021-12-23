import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={5} />
    </div>
  )
}

export default ItemListContainer