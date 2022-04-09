import "./admin.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [prod, setProd] = useState({});
  const [coupon, setCoupon] = useState({});
  //create all coupons
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProds, setAllProds] = useState([]);
  const handleInputChange = (e) => {
    var copy = { ...prod };
    copy[e.target.name] = e.target.value;
    setProd(copy);
  };
  //building the object
  const handleCCChange = (e) => {
    var copy = { ...coupon };
    copy[e.target.name] = e.target.value;
    setCoupon(copy);
  };

  const saveProduct = () => {
    console.log(prod);

    let service = new DataService();
    service.saveProduct(prod);

    let copy = [...allProds];
    copy.push(prod);
    setAllProds(copy);
  };

  const saveCoupon = async () => {
    console.log(coupon);

    let fixed = { ...coupon };
    fixed.discount = parseInt(coupon.discount);

    let service = new DataService();
    let resp = await service.saveCouponCode(fixed);

    //add it to all coupons
    //NEVER EVER =>allCoupons.push(coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  };

  const loadCoupons = async () => {
    let service = new DataService();
    let all = await service.getCoupons();
    setAllCoupons(all);
  };

  useEffect(() => {
    loadCoupons();
  }, []);

  return (
    <div className="admin">
      <h1>Store administration</h1>

      <section>
        <h3>Register new product</h3>

        <div className="my-control">
          <label>Title:</label>
          <input onChange={handleInputChange} name="title" type="text"></input>
        </div>

        <div className="my-control">
          <label>Image:</label>
          <input onChange={handleInputChange} name="image" type="text"></input>
        </div>

        <div className="my-control">
          <label>Category:</label>
          <input
            onChange={handleInputChange}
            name="category"
            type="text"
          ></input>
        </div>

        <div className="my-control">
          <label>Price</label>
          <input onChange={handleInputChange} name="price" type="text"></input>
        </div>

        <div className="my-control">
          <button onClick={saveProduct} className="btn btn-dark">
            Save Product
          </button>
        </div>
        {/*title.-.$price.*/}
        {allProds.map((prod, index) => (
          <div>
            {" "}
            {prod.title} - ${prod.price}{" "}
          </div>
        ))}
      </section>
      <section>
        <h3>Coupon Codes</h3>
        <div className="my-control">
          <label>Code:</label>
          <input onChange={handleCCChange} name="code" type="text"></input>
        </div>

        <div className="my-control">
          <label>Discount:</label>
          <input onChange={handleCCChange} name="discount" type="text"></input>
        </div>

        <div className="my-control">
          <button onClick={saveCoupon} className="btn btn-dark">
            Save Coupon Code
          </button>
        </div>

        <div className="coupon-list">
          {allCoupons.map((coupon, index) => (
            <div key={index}>
              {" "}
              <label>{coupon.code}</label> - <label>{coupon.discount}</label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admin;
