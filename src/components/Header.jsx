
import { Bell, Briefcase, Menu, X } from 'lucide-react'; 
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-green-700 p-3">
      <div className=" mx-auto flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <div className='flex'>
          <span className='text-white'><Briefcase /></span>
          <a href="#" className="text-white text-xl font-bold ml-4">
            KaamPe
          </a>
        </div>
        
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        </div>
        <div
          ref={menuRef}
          className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute lg:static top-16 right-0 w-1/4 lg:w-auto bg-green-500 lg:bg-transparent`}
        >
          <a href="#" className="block hover:underline text-white lg:inline-block py-3 px-5 lg:mt-0 lg:p-0 lg:ml-4">
            Jobs
          </a>
          <a href="#" className="block hover:underline text-white lg:inline-block py-3 px-5 lg:mt-0 lg:p-0 lg:ml-4">
            Employers
          </a>
          <a href="#" className="block hover:underline text-white lg:inline-block py-3 px-5 lg:mt-0 lg:p-0 lg:ml-4">
            Profile
          </a>
        </div>
        <button className='ml-5 text-white'>
          <Bell />
        </button>
      </div>
    </nav>
  );
};

export default Header;




