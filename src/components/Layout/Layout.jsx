import React, { useState, useEffect } from 'react';
import Sidebar from "../Sidebar";
import Footer from '../../pages/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToTop = () => {
    const container = document.querySelector('.flex-1');
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const saveScrollPosition = () => {
      const container = document.querySelector('.flex-1');
      const scrollPosition = container ? container.scrollTop : window.scrollY;
      localStorage.setItem('scrollPosition', scrollPosition);
    };

    window.addEventListener('beforeunload', saveScrollPosition);

    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      const container = document.querySelector('.flex-1');
      if (container) {
        container.scrollTo(0, parseInt(scrollPosition, 10));
      } else {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }
    }
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden overflow-y-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 p-1 px-2 mr-2 bg-sky-500 text-white rounded-full lg:hidden z-10"
      >
        <i className={`bi ${isSidebarOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
      </button>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-2 px-3 mr-3 bg-sky-500 text-white rounded-full z-10"
      >
        <i className="bi bi-arrow-up text-xl h-1"></i>
      </button>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
