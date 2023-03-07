import React, { useState } from 'react';
import styled from 'styled-components';
import { RiDashboardFill, RiMusic2Fill, RiGameFill } from 'react-icons/ri';
import { MdAnimation } from 'react-icons/md';
import { TbMoodKid } from 'react-icons/tb';
import { FcFilmReel } from 'react-icons/fc';
import { GiAnimalSkull } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <RiDashboardFill />,
    },
    {
      path: '/anime',
      name: 'Anime',
      icon: <MdAnimation />,
    },
    {
      path: "/kid's show",
      name: 'KidsShow',
      icon: <TbMoodKid />,
    },
    {
      path: '/actors',
      name: 'Actors',
      icon: <FcFilmReel />,
    },
    {
      path: '/musicians',
      name: 'Musicians',
      icon: <RiMusic2Fill />,
    },
    {
      path: '/animals',
      name: 'Animals',
      icon: <GiAnimalSkull />,
    },
  ];
  return (
    <Div className="sidebar__container">
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top__section">
          <RiGameFill style={{ display: isOpen ? 'block' : 'none' }} className="logo" />
          <FaBars style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars" onClick={toggle} />
        </div>
        {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="nav__links" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? 'block' : 'none' }} className="link__text">{item.name}</div>
              </NavLink>
            ))
        }
      </div>
      <main>{children}</main>
    </Div>
  );
};

export default Sidebar;

const Div = styled.div`
display: flex;

main {
    width: 100%;
    padding: 20px;
}

.sidebar {
    background: black;
    color: #fff;
    width: 300px;
    height: 100vh;
    transition: all 0.5s;

    .top__section {
        display: flex;
        align-items: center;
        padding: 20px 15px;

        .logo {
            font-size: 30px;
        }

        .bars{
            font-size: 25px;
            margin-left: 50px;
        }
    }

    .nav__links {
        display: flex;
        color: #fff;
        padding: 10px 15px;
        gap: 15px;
        text-decoration: none;
        transition: all 0.5s;

        &:hover {
            background: blue;
            color: black;
            transition: all 0.5s;
        }

        &:active {
            background: blue;
            color: #fff;
            transition: all 0.5s;
        }

        .icon {
            font-size: 22px;
        }

        .link__text {
            font-size: 20px;
        }
    }
}
`;
