import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const {calcTotalUni} = useContext(CartContext)

  return (
    <Link to="/cart" className="shop"><i className="fa-solid fa-cart-shopping"></i> <span>{calcTotalUni()}</span></Link>
  )
}

export default CartWidget;