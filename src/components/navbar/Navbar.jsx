import { ExpandMore, Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <div className="navbarLogoContainer">
            <img
              src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/aff2c7c41798a9e8d510293d676b1308.png"
              alt=""
              className="navbarImg"
            />
            <span className="navbarText">A.T. lnks</span>
          </div>
          <div className="navbarSearchContainer">
            {/* <Search /> */}
            {/* <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            <ShoppingCartOutlined className="searchIcon" /> */}
            <Search className="searchIcon" />

            <input
              type="text"
              className="navbarSearch"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarCheckout">
            <button className="navbarButton">
              {/* <Serach /> */}
              {/* <i className="addcart fa-solid fa-cart-shopping"></i> */}
              <ShoppingCartOutlined className="addcart" />
              Checkout(200)
            </button>
          </div>
          <div className="navbarUserprofile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/64/64572.png?w=740&t=st=1678638509~exp=1678639109~hmac=d23807f0b829d486561ab0f213a2f984f03f5c1e7552c4a121e3c124310ca184"
              alt=""
              className="navbarProfileImg"
            />
            <span className="navbarUsername">
              User Admin
              <ExpandMore className="angle-down" />
            </span>
            {/* <Icon /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
