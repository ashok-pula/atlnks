import {
  Dashboard,
  EmojiEvents,
  Handshake,
  HelpCenter,
  LiveHelp,
  Payments,
  People,
} from "@mui/icons-material";
import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarImgContainer">
          <img
            src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/aff2c7c41798a9e8d510293d676b1308.png"
            alt=""
            className="sidebarImg"
          />
          <span className="sidebarText">A.T. lnks</span>
        </div>
        <div className="sidebarLinks">
          <div className="sidebarLink">
            <Dashboard className="sidebar-icon" />
            Dashboard
          </div>
          <div className="sidebarLink">
            <Dashboard className="sidebar-icon" />
            Orders
          </div>
          <div className="sidebarLink">
            <People className="sidebar-icon" />
            Team Members"
          </div>
          <div className="sidebarLink">
            <Handshake className="sidebar-icon" />
            Partners
          </div>
          <div className="sidebarLink">
            <Dashboard className="sidebar-icon" />
            Product Listings
          </div>
          <div className="sidebarLink">
            <EmojiEvents className="sidebar-icon" />
            Awards & Honours
          </div>
          <div className="sidebarLink">
            <HelpCenter className="sidebar-icon" />
            About Us
          </div>
          <div className="sidebarLink">
            <Payments className="sidebar-icon" />
            Payment Info
          </div>
        </div>
        <div className="sidebarHelp">
          <span>
            <LiveHelp className="sidebar-help-icon" />
          </span>

          <h3 className="sidebarHelpHeading">Need Help?</h3>
          <span className="sidebarHelpText">
            Our support team is at your disposal
          </span>
          <button className="sidebarButton">Get Help</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
