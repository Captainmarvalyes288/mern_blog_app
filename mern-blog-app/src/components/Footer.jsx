import React from "react";

const Footer = () => {
    return (
        <footer>
            <ul className="footer_categries">
            <li> <link to="/post/categaries/Agriculture">Agriculture</link></li>
            <li> <link to="/post/categaries/Business">Business</link></li>
            <li> <link to="/post/categaries/Education">Education"</link></li>
            <li> <link to="/post/categaries/Entertainment">Entertainment</link></li>
            <li> <link to="/post/categaries/Art">Art</link></li>
            <li> <link to="/post/categaries/Investment">Investment</link></li>
            <li> <link to="/post/categaries/Uncategories">Uncategories</link></li>
            <li> <link to="/post/categaries/Weather">Weather</link></li>
            </ul>
            <div className="footer_copyright">
                <small> All rights reserved &copy; Copyright @ 2024 </small>
            </div>
        </footer>
        
   )
}

export default Footer;