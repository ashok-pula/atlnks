import {
  Delete,
  Edit,
  Email,
  PermContactCalendar,
  Phone,
} from "@mui/icons-material";
import React from "react";
import "./contactTeam.css";

const ContactTeam = ({ item, editContact, deleteContact }) => {
  return (
    <div className="contactTeam">
      <div className="contactTeamHeading">
        <span className="contactText">
          <PermContactCalendar /> {item?.name}
        </span>
        <span className="icons">
          <Delete className="icon" onClick={() => deleteContact(item?.id)} />
          <Edit className="icon" onClick={() => editContact(item?.id)} />
        </span>
      </div>
      <div className="contactTeamEmail">
        <span className="contactEmail">
          <Email /> {item?.email[0]} / {item?.email[1]}
        </span>
      </div>
      <div className="contactTeamPhone">
        <span className="contactPhone">
          <Phone /> +91 {item?.phone[0]} / {item?.phone[1]}
        </span>
      </div>
    </div>
  );
};

export default ContactTeam;
