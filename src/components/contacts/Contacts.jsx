import { Add, ArrowBack, West } from "@mui/icons-material";
import React, { useState } from "react";
import ContactTeam from "../contactTeam/ContactTeam";
import "./contacts.css";

const Contacts = ({ data, setEditContacts, setData }) => {
  const [contactData, setContactData] = useState(data);
  const [editContactDetails, setEditContactDetails] = useState(false);
  const [emails, setEmails] = useState([]);
  const [phonenumbers, setPhonenumbers] = useState([]);
  const [editId, setEditId] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  console.log(contactData);
  const editHandler = (id) => {
    //   setData(data.filter((i) => i.id !== id));
    console.log(id);
    setEditContactDetails(true);
    setEditId(id);
  };
  const deleteHandler = (id) => {
    console.log(data);
    setContactData(contactData.filter((i) => i.id !== id));
    console.log(id);
  };
  const saveHanlder = () => {
    setData(contactData);
    setEditContacts(false);
  };
  const addEmailHandler = (e) => {
    e.preventDefault();
    console.log(editId);
    setEmails([...emails, email]);
  };
  const addPhoneHandler = (e) => {
    e.preventDefault();
    setPhonenumbers([...phonenumbers, phonenumber]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    contactData[editId].email = [...contactData[editId].email, ...emails];
    contactData[editId].phone = [...contactData[editId].phone, ...phonenumbers];
    setData(contactData);
    console.log(data);
    setEditContacts(false);
  };
  return (
    <div className="contacts">
      <div className="contactsWrapper">
        {!editContactDetails ? (
          <>
            <div className="contactsTitle">
              <West
                className="arrowBack"
                onClick={() => setEditContacts(false)}
              />
              <span>Contacts</span>
            </div>
            <span className="contactsDescription">
              Please provide the company's email & contacts
            </span>
            {contactData?.map((item) => (
              <ContactTeam
                item={item}
                editContact={editHandler}
                deleteContact={deleteHandler}
              />
            ))}

            <button className="contactsSaveButton" onClick={saveHanlder}>
              Save
            </button>
          </>
        ) : (
          <>
            <div className="contactsTitle">
              <West
                className="arrowBack"
                onClick={() => setEditContacts(false)}
              />
              <span>Contacts</span>
            </div>
            <span className="contactsDescription">
              Please provide the company's email & contacts
            </span>
            <form className="editForm" onSubmit={submitHandler}>
              <label htmlFor="">Email ID</label>
              <input
                type="email"
                name=""
                id=" "
                placeholder="eg. salesteam@br.in"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="addMore" onClick={addEmailHandler}>
                <Add /> Add More
              </button>
              {emails && emails?.map((email) => <span>{email}</span>)}
              <label htmlFor="">Contact Number</label>
              <input
                type="text"
                name=""
                id=" "
                placeholder="eg. 7987987984"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <button className="addMore" onClick={addPhoneHandler}>
                <Add /> Add More
              </button>
              {phonenumbers &&
                phonenumbers?.map((number) => <span>{number}</span>)}
              <button className="contactsSaveButton" type="submit">
                Save
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contacts;
