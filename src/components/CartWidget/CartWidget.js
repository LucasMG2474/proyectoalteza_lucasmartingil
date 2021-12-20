import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div className="iconCart">
      <FontAwesomeIcon icon={faShoppingCart}/>
    </div>
  )
}

export default CartWidget