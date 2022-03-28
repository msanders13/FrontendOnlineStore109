import "./home.css";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="home-page">
            <div className="top-banner">
                <div className="top-banner-text">
                    <h1>Cheese Store</h1>
                    <h2>We've got cheese</h2>
                </div>
                <img src="/images/cheeseAssorted3.jfif" alt="foodpic" />
            </div>

<Link to="/catalog" className= "btn btn-info">
    Check our amazing catalog!
    </Link>

        </div>
    );
};

export default Home;