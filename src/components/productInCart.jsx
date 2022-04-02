import "./productInCart.css"

const ProductInCart = (props) => {
    return (
        <div className="prod-cart">
            <img src= {"/images/"+ props.data.image} alt="product image" ></img>
            <div className="info">
                <h6>{props.data.title}</h6>
                <label>{props.data.category}</label>
            </div>

            <label className="price">{props.data.price.toFixed(2)}</label>
            <label className="quantity">{props.data.quantity}</label>
            <label className="total">total??</label>
            <button className="btn btn-sm btn-danger">Remove</button>
        </div>
    );
};

export default ProductInCart;