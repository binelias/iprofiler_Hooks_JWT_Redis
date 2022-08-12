import React, {useState} from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="pa4 tc">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          data-toggle="dropdown"
          tag="span">
          <img
            src="https://raw.githubusercontent.com/binelias/binelias.github.io/main/assets/profile.png"
            className="br-100 pa1 ba b--black-10 h3 w3 pointer" alt="http://tachyons.io/img/logo.jpg"/>
        </DropdownToggle>

        <DropdownMenu 
          className='b--transparent shadow-5' 
          style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
          <DropdownItem onClick={() => onRouteChange('login')}>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ProfileIcon;