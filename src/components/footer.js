import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer()
{
    
    return(
        <div className="footer">
            <a href="https://www.linkedin.com/in/anusha-peddoju-945a7320b" className="icon"><FaLinkedin/></a>
            <a href="https://github.com/anusha-peddoju" className="icon"><FaGithub/></a>
        </div>
    );
}