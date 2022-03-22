import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiTwotoneHome />,
    className: 'nav-text',
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPeople />,
    className: 'nav-text',
  },
  {
    title: 'Weather',
    path: '/Todayweather',
    icon: <AiIcons.AiOutlineCloud />,
    className: 'nav-text',

    subNav:[
      {
        title: '7 days',
        path: '',
        icon: <AiIcons.AiOutlineCloud/>,
        className: 'nav-text',
      },
      {
        title: 'Hourly',
        path: '',
        icon: <AiIcons.AiOutlineCloud />,
        className: 'nav-text',
      }
    ]
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiFillSetting />,
    className: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <AiIcons.AiFillLeftSquare />,
    className: 'nav-text'
  },

];
