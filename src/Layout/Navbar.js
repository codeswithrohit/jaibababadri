import React, { useState } from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiUserStarLine } from 'react-icons/ri';
import { MdOutlineLocalParking } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');

  const handleClick = (nav) => {
    setActiveNav(nav === activeNav ? '' : nav);
  };

  const renderTitle = (nav, title) => {
    return (
      <span className={`absolute bottom-0 left-0 right-0 text-blue-200 text-center text-xs font-medium ${activeNav === nav ? 'block' : 'hidden'}`}>{title}</span>
    );
  };

  const renderIcon = (nav, icon) => {
    return (
      <a href={`#${nav}`} onClick={() => handleClick(nav)} className={`p-3 rounded-full flex items-center justify-center text-white text-lg transition-colors duration-300 ${activeNav === nav ? 'bg-gray-800' : 'bg-transparent hover:bg-gray-700'}`}>{icon}</a>
    );
  };

  return (
    <div>
      <nav className="bg-opacity-30 bg-black w-max px-5 py-2 z-20 fixed left-1/2 transform -translate-x-1/2 bottom-7 flex gap-3 rounded-full backdrop-blur">
        <div className="relative">
          {renderIcon('', <MdOutlineLocalParking />)}
          {renderTitle('', 'PadhoG')}
        </div>
       
        <div className="relative">
          {renderIcon('projects', <AiOutlineFundProjectionScreen />)}
          {renderTitle('projects', 'Projects')}
        </div>
        <div className="relative">
          {renderIcon('contact', <RiUserStarLine />)}
          {renderTitle('contact', 'Contact')}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
