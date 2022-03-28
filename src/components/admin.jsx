import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";


const Admin = () => {
    const [prod, setProd] = useState({});
    const [coupon, setCoupon] = useState({});

    const handleInputChange = (e) => {
    var copy = {...prod};
    copy[e.target.name] = e.target.value;
    setProd(copy);
}; 
//building the object
    const handleCCChange = (e) => {
        var copy = {...coupon};
        copy[e.target.name] = e.target.value;
        setCoupon(copy);
    };

const saveProduct = () => {
    console.log(prod);

    let service = new DataService();
    service.saveProduct(prod);

};

const saveCoupon = () => {
    console.log(coupon);
};

    return (
        <div className="admin">
            <h1>Store administration</h1>

            <section>
                <h3>Register new product</h3>

                <div className="my-control">
                    <label>Title:</label>
                    <input onChange={handleInputChange} name="title" type="text" ></input>
                </div>

                <div className="my-control">
                    <label>Image:</label>
                    <input onChange={handleInputChange} name="image" type="text" ></input>
                </div>

                <div className="my-control">
                    <label>Category:</label>
                    <input onChange={handleInputChange} name="category" type="text" ></input>
                </div>

                <div className="my-control">
                    <label>Price</label>
                    <input onChange={handleInputChange} name="price" type="text" ></input>
                </div>

                <div className="my-control">
                    <button onClick={saveProduct} className="btn btn-dark">
                        Save Product
                    </button>
                </div>

            </section>
            <section>
                <h3>Coupon Codes</h3>
                <div className="my-control">
                    <label>Code:</label>
                    <input onClick={handleCCChange} name="code" type="text" ></input>
                </div>

                <div className="my-control">
                    <label>Discount:</label>
                    <input onChange={handleCCChange} name="discount" type="text" ></input>
                </div>

                <div className="my-control">
                    <button onChange={saveCoupon} className="btn btn-dark">Save Coupon Code</button>
                </div>
            </section>

        </div>
    );
};

export default Admin;