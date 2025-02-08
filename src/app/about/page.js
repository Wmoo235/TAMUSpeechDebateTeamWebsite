import React from "react";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      
      <Navbar />
      <main className="container mx-auto p-6 flex flex-col space-y-6 gap-6 flex-1">
      <div className="bg-white shadow-lg p-8 mt-6 rounded-lg">
        <h2 className="text-2xl font-bold text-tamuMaroon">About Our Team</h2>
        <p className="mt-4 text-gray-700">
          The Texas A&M University Speech and Debate Team has a rich history dating back to 2006. Our team consists of passionate and dedicated students from various academic backgrounds who share a common interest in public speaking and argumentation.
          We are a relatively small, close-knit community on campus, who seek to improve our speaking and argumentation skills in a friendly and competitive environment.
        </p>
        <h3 className="text-tamuMaroon text-xl font-semibold mt-6">Our Mission</h3>
        <p className="mt-2 text-gray-700">
          Our mission is to foster critical thinking, effective communication, and leadership skills among our members while representing Texas A&M University at the highest levels of collegiate forensics competition.
        </p>
        <h3 className="text-tamuMaroon text-xl font-semibold mt-6">What We Do</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Participate in regional and national debate tournaments</li>
          <li>Compete in various speech events, including persuasive speaking, informative speaking, and oral interpretation</li>
          <li>Host on-campus debates and speaking events</li>
          <li>Provide public speaking workshops for the TAMU community</li>
        </ul>
        <h3 className="text-tamuMaroon text-xl font-semibold mt-6">Join Us</h3>
        <p className="mt-2 text-gray-700">
          We welcome students from all majors and experience levels. Whether you're a seasoned debater or new to public speaking, there's a place for you on our team. Contact us to learn more about joining or attending our meetings!
        </p>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
