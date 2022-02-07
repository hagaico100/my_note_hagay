import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    console.log("year:", year);
    return <footer className="footer"> <p>נוצר על ידי חגי כהן © {year} </p> </footer>
}
export default Footer;