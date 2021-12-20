import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

const NavBar = () => {
  return (
    <div className = "contenNav">
      <ul>
        <li id="brandNav">ALTEZZA NATURAL</li>
        <li><a href=" ">INICIO</a></li>
        <li><a href=" ">NUESTROS PRODUCTOS</a></li>
        <li><a href=" ">CONTACTO</a></li>
        <li><CartWidget/></li>
      </ul>
    </div>
  )
}

export default NavBar