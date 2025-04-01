import Button from "./UI/Button.js";



const MealItem = (props) => {

    const formattedPrice = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(props.price);

    return (
        <li>
            <article>
                <img src={require(`../assets/${props.image}`)} alt={props.name}/>
                <div>
                <h3>{props.name}</h3>
                     <p className="meal-item-price">{formattedPrice}</p>
                     <p className="meal-item-description">{props.description}</p>
                 </div>
                 <div className="meal-item-actions">
                     <Button>Add to Cart</Button>
                </div>
            </article>
        </li>
        
    )
}

export default MealItem