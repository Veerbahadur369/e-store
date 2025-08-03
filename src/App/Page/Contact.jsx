import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Contact <span className="text-blue-600">Online Shop</span></h2>
          <p className="text-lg text-gray-600 mt-2">We’re here to help! Reach out with any questions or feedback.</p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Market Street, New Delhi, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@onlineshop.com</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-6 ">
             <iframe
             className="w-full h-56 rounded-3xl shadow-xl"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449395.96914409276!2d77.19889542810249!3d28.361691122551616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1753885809595!5m2!1sen!2sin" ></iframe>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
