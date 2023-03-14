import { Edit, Verified } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import List from "../list/List";
import "./aboutus.css";

const AboutUs = () => {
  const [paragraph, setParagraph] = useState(
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos nesciunt tempora quaerat, et odit odio consequuntur, quas impedit natus aliquam explicabo modi alias praesentium quam sint? Dolore, aut minima.`
  );
  const [edit, setEdit] = useState(false);
  return (
    <div className="aboutus">
      <h2 className="aboutUsHeading">About US</h2>
      <div className="aboutusImageContainer">
        <img
          src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/aff2c7c41798a9e8d510293d676b1308.png"
          alt=""
          className="aboutusImg"
        />
        <div className="aboutusTexts">
          <h2 className="aboutusText1">A.T.lnks</h2>
          <span className="aboutusText2">Digital lnks</span>
        </div>
        <div className="aboutUsVerify">
          <Verified className="aboutus-icon " />
          <a href="#" className="aboutusverify">
            Verify Company
          </a>
        </div>
      </div>
      <div className="aboutUsParagraphEdit">
        {!edit && (
          <div className="aboutUsParagraphdetails">
            <span className="aboutusParagraph">{paragraph}</span>

            <Edit className="edit-icon " onClick={() => setEdit(true)} />
          </div>
        )}
        {edit && (
          <div className="aboutUsInputContainer">
            <textarea
              type="text"
              className="aboutUsInput"
              placeholder={paragraph}
              onChange={(e) =>
                setParagraph(
                  e.target.value === null ? paragraph : e.target.value
                )
              }
            />
            <button className="aboutUsSave" onClick={() => setEdit(false)}>
              save
            </button>
          </div>
        )}
      </div>
      <List />
    </div>
  );
};

export default AboutUs;
