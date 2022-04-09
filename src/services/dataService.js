import axios from "axios";

var catalog = [
    {
        _id: "Random ID 1",
        title: "CheeseYellow",
        price: 12.00,
        stock: 5,
        category: "Large Cheese",
        image: "buttercupcheese.jfif",
    },
    {
        _id: "Random ID 2",
        title: "CheeseWhite",
        price: 10.00,
        stock: 3,
        category: "Large Cheese",
        image: "whitecheese.jfif",
    },
    {
        _id: "Random ID 3",
        title: "CheeseAsstd",
        price: 15.00,
        stock: 8,
        category: "Package Cheese",
        image: "cheeseAssorted.jfif",
    },
    {
        _id: "Random ID 4",
        title: "CheeseAsstd2",
        price: 18.00,
        stock: 2,
        category: "Package Cheese",
        image: "cheeseAssorted2.jfif",
    },
    {
        _id: "Random ID 5",
        title: "CheeseSwiss",
        price: 19.00,
        stock: 5,
        category: "Large Cheese",
        image: "swisscheese.jfif",
    },
];


class DataService {
    async getCatalog(){
        //call server
        let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
        return resp.data;
    //return catalog; uncomment this and comment 50 and 51 to use catalog
    }

    async getCoupons() {
        //call server
        let resp = await axios.get("http://127.0.0.1:5000/api/coupons")
        return resp.data;
    }

    saveProduct(prod) {
        console.log("Sending prod to server..... NOT");
    }

    
    async saveCouponCode(code) {
        let resp = await axios.post("http://127.0.0.1:5000/api/couponCode", code);
        return resp.data;
    }
}

export default DataService;
