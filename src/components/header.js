import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {IoTriangleOutline} from 'react-icons/io5'
import {FaBars} from 'react-icons/fa'
import styled from "styled-components"
import {menuData} from '../data/MenuData'

const Header = () => (
<Nav>
      <NavLink to="/">
        DIGITAL DELTA
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item,index) => (
          <NavItem to={item.link} key={index}>
            {item.title}
          </NavItem>
        ))}
      </NavMenu>
    </Nav>
)



export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;
  transition: 0.3s !important;
  font-weight: bold;
  font-size: 2rem;

  &:hover {
    color: #0280c2;
  }

`

const NavItem = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;
  transition: 0.3s !important;
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    border-bottom-color: #2B3CD0;
    border-bottom-width: 3px;
    color: #2B3CD0;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  } 

  &:hover {
    color:#2B3CD0;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //margin-right: 48px;

  @media screen and (max-width: 768px) {
    display:none;
  }
`