import { useState } from "react";
import "./ContactInfo.css";
const ContactInfo = () => {
  const [email, setEmail] = useState("lamducfpt2004@gmail.com");
  const [phone, setPhone] = useState("0966501365");
  const [birthday, setBirthday] = useState("20/04/200*");
  const [address, setAddress] = useState("BMT - Đắk Lắk");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditInfo = () => {
    setIsEditing(true);
  };

  const handleSaveInfo = () => {
    setIsEditing(false);
  };

  return (
    <div className="intro-contact">
      <ul className="intro-contact-list">
        <li className="intro-contact-list__item">
          <span className="overhead"> Email </span>
          {isEditing ? (
            <input
              className="inputEdit"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            email
          )}
        </li>
        <li className="intro-contact-list__item">
          <span className="overhead">Số Điện Thoại</span>
          {isEditing ? (
            <input
              className="inputEdit"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            phone
          )}
        </li>
      </ul>
      <ul className="intro-contact-list">
        <li className="intro-contact-list__item">
          <span className="overhead">Ngày Sinh</span>
          {isEditing ? (
            <input
              className="inputEdit"
              type="text"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          ) : (
            birthday
          )}
        </li>
        <li className="intro-contact-list__item">
          <span className="overhead"> Địa Chỉ </span>
          {isEditing ? (
            <input
              className="inputEdit"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            address
          )}
        </li>
      </ul>
      <ul className="intro-contact-list">
        <li className="intro-contact-list__item">
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
          {isEditing ? (
            <lord-icon
              src="https://cdn.lordicon.com/xsqjakgm.json"
              trigger="loop"
              delay="1500"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              onClick={handleSaveInfo}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/oqaajvyl.json"
              trigger="loop"
              delay="1500"
              colors="primary:#263da3,secondary:#4e2099"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              onClick={handleEditInfo}
            ></lord-icon>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
