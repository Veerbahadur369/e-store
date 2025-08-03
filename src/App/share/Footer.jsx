import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8 mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Online Shop</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your favorite shoping destination for all your needs. From fashion to electronics, we have it all!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="/menu" className="hover:text-orange-400 transition-colors">Menu</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-300">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-orange-400 transition-colors">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="/help" className="hover:text-orange-400 transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-300">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@onlineshop.com" className="hover:text-orange-400">support@onlineshop.com</a></li>
            <li>Phone: <a href="tel:+919999999999" className="hover:text-orange-400">+91 99999 99999</a></li>
            <li>Address: 123 Food Street, Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Online Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
