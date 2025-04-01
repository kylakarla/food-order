import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"

const Header = (props) => {
  const cartCtx = useContext(CartContext)

  const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0)

  console.log("Cart items:", cartCtx.items)

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order Logo" />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button  onClick={props.onOpenCart} textOnly>Cart ({totalItems})</Button>
      </nav>
    </header>
  )
}

export default Header