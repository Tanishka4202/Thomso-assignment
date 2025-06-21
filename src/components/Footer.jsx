import React from 'react';
import logo from "../assets/Logo.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import tele from "../assets/telegram.png";
import '../output.css';


function Footer() {
  return (
    <footer className="bg-gray-100 px-6 md:px-20 py-12 text-gray-700">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Logo and social icons */}
        <div className="flex flex-col items-start gap-6">
          <img src={logo} alt="logo" className="w-24" />
          <div className="flex gap-4">
            <img src={youtube} alt="YouTube" className="w-6 h-6" />
            <img src={insta} alt="Instagram" className="w-6 h-6" />
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            <img src={tele} alt="Telegram" className="w-6 h-6" />
          </div>
        </div>

        {/* Company & Explore */}
        <div className="flex gap-20">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About</li>
              <li>Blogs</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Explore</h4>
            <ul className="space-y-1 text-sm">
              <li>APIs</li>
              <li>Documentation</li>
              <li>Benchmarks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Bottom Info */}
      <div className="text-sm flex flex-col gap-4 md:gap-2">
        <div className="flex flex-col md:flex-row justify-between">
          <p>© API MONK. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <p>
          For help and support contact us on <b>+91 9999999999</b> or mail us at{' '}
          <b>support@apimonk.com</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
