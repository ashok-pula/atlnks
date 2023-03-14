import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./list.css";
import {
  Edit,
  Email,
  Facebook,
  FormatQuote,
  Instagram,
  Language,
  Link,
  LocationOn,
  MedicalInformation,
  PermContactCalendar,
  Phone,
  Twitter,
} from "@mui/icons-material";
import Contacts from "../contacts/Contacts";
import { useState } from "react";

import contactData from "../../contact";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [editContacts, setEditContacts] = useState(false);
  const [data, setData] = useState(contactData);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Info" {...a11yProps(0)} className="tab" />
          <Tab label="FAQ" {...a11yProps(1)} />
          <Tab label="Complaints and feedback" {...a11yProps(2)} />
          <Tab label="Privacy Policy" {...a11yProps(3)} />
          <Tab label="Terms & Conditions" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="infoContainer">
          <div className="infoContact">
            <div className="infoContactEdit">
              <span>
                <PermContactCalendar />
                Contact
              </span>
              <Edit
                className="infoContactEditIcon"
                onClick={() => setEditContacts(true)}
              />
            </div>
            <div className="infoContactEmail">
              <Email />
              <div className="emails">
                <div className="emailList">
                  <span>{data[0]?.email[0]}</span>
                  <span>{data[0]?.email[1]}</span>
                </div>
                {data.length > 1 && (
                  <span className="emailCount">+{data.length - 1}</span>
                )}
              </div>
            </div>
            <div className="infoContactPhone">
              <Phone />
              <div className="contactPhone1">
                <span>
                  +91 {data[0]?.phone[0]} / {data[0]?.phone[1]}
                </span>
                {data.length > 1 && (
                  <span className="phoneCount">+{data.length - 1}</span>
                )}
              </div>
            </div>
          </div>
          <div className="infoContact">
            <div className="infoContactEdit">
              <span>
                <LocationOn />
                Address
              </span>
              <Edit className="infoContactEditIcon" />
            </div>
            <div className="infoContactAddress">
              <span>C-1/351/4,GIDC Makarpura,</span>
              <span>Vadodara -390010 ,Gujarat,India</span>
            </div>
          </div>
          <div className="infoContact">
            <div className="infoContactEdit">
              <span>
                <MedicalInformation />
                Hours of operations
              </span>
              <Edit className="infoContactEditIcon" />
            </div>
            <span className="infoHours">
              Monday to Friday-09:00 Am To 06:00 Pm
            </span>
          </div>
          <div className="infoContact">
            <div className="infoContactEdit">
              <span>
                <Link />
                Social Media & Links
              </span>

              <Edit className="infoContactEditIcon" />
            </div>
            <div className="infoContactMedia">
              <span>
                <Language /> Website
              </span>
              <span>
                <Instagram /> Instagram
              </span>
              <span>
                <Facebook /> Facebook
              </span>
              <span>
                <Twitter /> Twitter
              </span>
            </div>
          </div>
          <div className="infoContact">
            <div className="infoContactEdit">
              <span>
                <FormatQuote />
                Statement
              </span>
              <Edit className="infoContactEditIcon" />
            </div>
            <span className="infoStatement">You think it we ink it</span>
          </div>
          {editContacts && (
            <Contacts
              setEditContacts={setEditContacts}
              data={data}
              setData={setData}
            />
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item foure
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item five
      </TabPanel>
    </Box>
  );
}
