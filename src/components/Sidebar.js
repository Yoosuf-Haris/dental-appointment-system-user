

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => { //sidebar
    const location = useLocation();
    const getActiveClass = (path) => location.pathname === path ? 'bg-gray-700' : '';

    return (
        <aside className={`w-64 bg-gray-800 text-white h-full fixed top-16 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <ul className="space-y-4 p-4">
                <li><Link to="/appointment-scheduling" className={`hover:underline p-2 block rounded ${getActiveClass('/appointment-scheduling')}`}>Appointment Scheduling</Link></li>
                <li><Link to="/dentist-selection" className={`hover:underline p-2 block rounded ${getActiveClass('/dentist-selection')}`}>Dentist Selection</Link></li>
                <li><Link to="/availability-calendar" className={`hover:underline p-2 block rounded ${getActiveClass('/availability-calendar')}`}>Availability Calendar</Link></li>
                <li><Link to="/appointment-reminders" className={`hover:underline p-2 block rounded ${getActiveClass('/appointment-reminders')}`}>Upcoming Appointment</Link></li>
                <li><Link to="/patient-profiles" className={`hover:underline p-2 block rounded ${getActiveClass('/patient-profiles')}`}>Patient Profiles</Link></li>
                <li><Link to="/online-payment" className={`hover:underline p-2 block rounded ${getActiveClass('/online-payment')}`}>Online Payment</Link></li>
                <li><Link to="/reviews-and-ratings" className={`hover:underline p-2 block rounded ${getActiveClass('/reviews-and-ratings')}`}>Reviews and Ratings</Link></li>
            </ul>
            <button onClick={() => setSidebarOpen(false)} className="text-white p-2">Close</button>
        </aside>
    );
};

export default Sidebar;
