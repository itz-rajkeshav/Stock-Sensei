import React, { useEffect, useState } from "react";
import Search from "./search.jsx";
import "./Detail.css";
import axios from "axios";

function Detail(props) {
  const [logoUrl, setLogoUrl] = useState("");
  const Api_key = "TK6pV4xIDJ2q4Ue2dCRphw==kUBcyy0EavEX7wfU";
  // const clientId = "58a7140a04f3d6e20d80a244aa26d935126038358124";
  // const domain = `${props.CompanyName}.com`;
  const logo = `https://api.api-ninjas.com/v1/logo?ticker=${props.CompanyName}&apikey=${Api_key}`;
  useEffect(() => {
    axios
      .get(logo)
      .then((response) => {
        console.log(response.data);
        setLogoUrl(response.data.url);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.CompanyName]);
  return (
    <div>
      <div className="parent_company_logo">
        <div className="company_logo">
          {logoUrl && <img src={logoUrl} alt="Company Logo" />}
        </div>
      </div>
    </div>
  );
}

export default Detail;
