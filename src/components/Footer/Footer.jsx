import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="list-none space-y-2">
              <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
              <li><NavLink to="/aboutUs" className="hover:underline">About Us</NavLink></li>
              <li><NavLink to="/contactUs" className="hover:underline">Contact Us</NavLink></li>
              <li><NavLink to="/admissions" className="hover:underline">Admissions</NavLink></li>
              <li><NavLink to="/events" className="hover:underline">Events</NavLink></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">Springdale Public School</p>
            <p className="mb-2">123 Education Lane, Cityville, State, ZIP Code</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p>Email: <a href="mailto:info@springdale.edu" className="hover:underline">info@springdale.edu</a></p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
