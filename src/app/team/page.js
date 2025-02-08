import React from "react";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const OurTeam = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      <Navbar />
      <main className="container mx-auto p-6 flex flex-col space-y-6 gap-6 flex-1">
      <div className="flex-grow bg-white shadow-lg p-8 mt-6 rounded-lg">
        <h2 className="text-maroon text-2xl font-semibold">Our Team</h2>
        <h3 className="text-maroon text-xl font-semibold mt-6">Leadership</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <img src="./images/Jonathan-Guajardo-Photo-150x150.jpg" alt="Prof. Jonathan Guajardo" className="w-24 h-24 rounded-full" />
            <h4 className="mt-2 font-semibold">Prof. Jonathan Guajardo</h4>
            <p>Faculty Advisor</p>
          </div>
          <div className="text-center">
            <img src="./images/Charles-Schlichenmeyer-Photo-150x150.jpg" alt="Charles Schlichenmeyer '27" className="w-24 h-24 rounded-full" />
            <h4 className="mt-2 font-semibold">Charles Schlichenmeyer '27</h4>
            <p>President</p>
          </div>
          <div className="text-center">
            <img src="./images/018_Day1_Fall.jpg" alt="Arlin Birkby '27" className="w-24 h-24 rounded-full" />
            <h4 className="mt-2 font-semibold">Arlin Birkby '27</h4>
            <p>Treasurer and Debate Captain</p>
          </div>
        </div>
        <h3 className="text-maroon text-xl font-semibold mt-6">Officer Team</h3>
        <p className="mt-2 text-gray-700">Our officer team is composed of dedicated students leading various aspects of our team.</p>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;
