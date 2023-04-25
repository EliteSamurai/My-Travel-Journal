import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'



function Header() {
    return(
        <header>
            <span className="title">
            <FontAwesomeIcon icon={faEarthAmericas} size="xl" />
            <p>my travel journal.</p>
            </span>
        </header>
    )
}

export default Header