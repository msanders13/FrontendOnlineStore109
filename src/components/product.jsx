import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Product = (props) => {

    const [quantity, setQuantity] = useState(1);

    const onQuantityChange = (value) => {
        console.log("Quantity changed!", value);
        setQuantity(value);
    };

    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    };

    return (<div className="product">
        <img src= {"/images/"+props.data.image} alt="product image" ></img>
        <h2> {props.data.title} </h2>
        <label className="price"> $ {props.data.price} </label>
        <label className="total"> Total: {getTotal()}</label>
        <QuantityPicker onChange={onQuantityChange} ></QuantityPicker>
        <button className="btn btn-info btn-sm">Add</button>
        </div>);
        
};
        

export default Product;