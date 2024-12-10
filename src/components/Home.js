import React from 'react';
import Dental from '../assets/image01.jpg';
import img from '../assets/image02.jpg';
import dental from '../assets/image03.jpg';
import root from '../assets/image04.jpg';
import teet from '../assets/image05.jpg';

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${Dental})` }}>
                <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <h1 className="text-white text-5xl md:text-7xl font-bold">Cosmetic Dentistry in Colombo</h1>
                </div>
                <div className="absolute bottom-10 w-full flex justify-center">
                    <a href="#about-us" className="text-white text-4xl p-4">&#8595; Learn More About us!</a>
                </div>
            </section>

            {/* Your Smile, Our Commitment Section */}
            <section className="w-full py-16 px-8 md:px-32">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <img src={img} alt="Dental Implant Center" className="rounded shadow-lg"/>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8">
                        <h2 className="text-4xl font-semibold mb-4">Your Smile, Our Commitment</h2>
                        <p className="text-lg mb-4">Welcome to the Dental Implant Center, Colombo's premier destination for advanced dental care. Led by the experienced and compassionate Dr. Yoosuf Haris, our clinic combines state-of-the-art technology with a warm, patient-focused approach. Whether you need a routine check-up or advanced dental implants, our team is dedicated to providing the highest standard of care in a comfortable and welcoming environment. Join us on a journey to a healthier, brighter smile!</p>
                        <a href="#services" className="text-blue-500 hover:underline">View our Treatments</a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="w-full py-16 px-8 md:px-32 bg-gray-100">
                <h2 className="text-4xl font-semibold mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <img src={dental} alt="Service 1" className="rounded shadow-lg mb-4"/>
                        <p className="text-lg">Dental Implants</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={root} alt="Service 2" className="rounded shadow-lg mb-4"/>
                        <p className="text-lg">Root Canal Treatments</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={teet} alt="Service 3" className="rounded shadow-lg mb-4"/>
                        <p className="text-lg">Orthodontic Treatments</p>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about-us" className="w-full py-10 px-5 md:px-32 bg-slate-400 text-white">
                <h2 className="text-4xl font-semibold mb-5 text-center">About Us</h2>
                <p className="text-lg text-center mb-5">At the Dental & Implant Center in Colombo, we offer a wide range of dental services to meet all your oral health needs. From dental implants and cosmetic procedures to orthodontics and routine care, Dr. Yoosuf Haris and our skilled team ensure every treatment is tailored for optimal results. Discover how we can enhance your smile today.</p>
               <p className="text-lg text-center">Cosmetic Dentistry</p>
               <p className="text-lg text-center">238/3 Bagathala Road,</p>
               <p className="text-lg text-center">Colobmo 07</p>
                <p className="text-lg text-center mb-5">Sri lanka</p>
                <p className="text-lg text-center">cosmeticdentistry12@gmail.com</p>
                <p className="text-lg text-center">0729498945</p>
            </section>
            <div className="w-full py-4 bg-gray-800 text-white text-center">
                <p>Copyright © @2024. All rights reserved. Designed By Yoosuf Haris</p>
            </div>
        </div>
    );
};

export default Home;
