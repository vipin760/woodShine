import React, { useState } from "react";
import { Navbar } from "responsive-navbar-react";
const Header = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Doc',
        link: '#docs'
      },
      {
        text: 'Custom',
        link: '#custom-bar'
      },
      {
        text: 'Contact',
        link: '#contact'
      }
    ],
    logo: {
      text: 'Responsive Navbar React'
    },
    style: {
      barStyles: {
        background: '#444'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }
  return (
   <>
   <Navbar {...props} />
   </>
  );
};

export default Header;
