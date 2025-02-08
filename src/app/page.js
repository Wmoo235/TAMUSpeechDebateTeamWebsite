"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const IndexPage = () => {
  const images = [
    "/images/team1.jpg",
    "/images/team2.jpg",
    "/images/team3.jpg",
    "/images/team4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  

  

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      {/* Header */}
      <Header />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto p-6 flex flex-col space-y-6 gap-6 flex-1">
        {/* Welcome Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg ">
          <h2 className="text-2xl font-bold text-tamuMaroon">Welcome to the TAMU Speech and Debate Team</h2>
          <p className="mt-4 text-gray-700">
            The Texas A&M University Speech and Debate Team is a competitive academic organization that focuses on
            developing public speaking, critical thinking, and argumentation skills.
          </p>
          <p className="mt-2 text-gray-700">
            Our team participates in various competitions throughout the year, representing TAMU at regional and
            national levels.
          </p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-lg ">
          <h3 className="text-xl font-bold text-tamuMaroon">Upcoming Events</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✅</span>
              <p className="text-gray-700">Weekly Team Meeting - Thursday Nights @ 7 PM in Rudder 404</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✅</span>
              <p className="text-gray-700">University of Houston Debate Tournament - Oct 12-13, 2024</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✅</span>
              <p className="text-gray-700">Harvard University Debate Tournament - Oct 25-27, 2024</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✅</span>
              <p className="text-gray-700">Big Tent Online Debate Tournament - Dec 6-8, 2024</p>
            </li>
          </ul>
        </section>
        {/* Sidebar - Recent Activities */}
        <aside className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-tamuMaroon">Recent Activities</h3>
          <ul className="mt-4 space-y-3">
            <li className="border-l-4 border-tamuMaroon pl-3">
              <h4 className="font-semibold text-tamuMaroon">MSU Debate Tournament</h4>
              <p className="text-sm text-gray-700">Congratulations to Arlin Birkby and Marie Zinman!</p>
            </li>
            <li className="border-l-4 border-tamuMaroon pl-3">
              <h4 className="font-semibold text-tamuMaroon">Team Pizza Party</h4>
              <p className="text-sm text-gray-700">Great turnout! We had an amazing time.</p>
            </li>
            <li className="border-l-4 border-tamuMaroon pl-3">
              <h4 className="font-semibold text-tamuMaroon">New Member Recruitment</h4>
              <p className="text-sm text-gray-700">We welcomed 30 new members this fall.</p>
            </li>
          </ul>
        </aside>
        
      </main>

      {/* Footer */}
        <Footer />
      </div>
  );
};

export default IndexPage;
