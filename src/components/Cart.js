import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const { cart, calcTotal, clearCart, removeItem } = useContext(CartContext)

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map(prod => (
        <div key={prod.id}>
          <img src={prod.image} alt={prod.title} width="150px" />
          <p>Nombre: {prod.title}</p>
          <p>Cant: {prod.quantity}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Subtotal : {prod.quantity * prod.price}</p>
          <button onClick={() => removeItem(prod.id)}>Eliminar producto</button>
        </div>
      ))}
      <h2>Total: ${calcTotal()}</h2>
      <button onClick={clearCart}>Vaciar cart</button>
    </div>
  )
}

export default Cart