import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Created by the Footy Fellas</p>
            <div>
                <a href="https://www.instagram.com/footyfellaspod/" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white" size="4x" /></a>
                <a href="https://twitter.com/footyfellaspod" target="_blank"><FontAwesomeIcon icon={faTwitter} color="white" size="4x" /></a>
                <a href="https://www.tiktok.com/@footyfellaspod?lang=en" target="_blank"><FontAwesomeIcon icon={faTiktok} color="white" size="4x" /></a>
            </div>
        </footer>
    );
};

export default Footer;