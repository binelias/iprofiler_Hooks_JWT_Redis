import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isLoggedIn, toggleModal }) => { 
	if(isLoggedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal}/>
			</nav>
		);
	}
}


export default Navigation;