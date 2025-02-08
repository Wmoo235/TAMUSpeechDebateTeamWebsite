// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white py-3">
        <ul className="flex justify-center space-x-6">
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"><Link href="/">Home</Link></li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"><Link href="/about">About</Link></li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"><Link href="/team">Our Team</Link></li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"><Link href="/contact">Contact</Link></li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"><Link href="/policy-debate">Policy Debate</Link></li>
        </ul>
      </nav>
    );
  }
  