import React from "react";
import { FaTruck, FaHeadset, FaAward, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">About <span className="text-blue-600">Online Shop</span></h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Online Shop is your one-stop solution for smart shopping. We offer top-quality products, excellent customer service, and a seamless shopping experience.
          </p>
        </div>

        {/* Image and Intro */}
        <div className="md:grid grid-cols-2 gap-10 items-center">
          <img
            src="https://media.istockphoto.com/id/953783164/photo/laptop-and-cart-with-icon-online-shopping-and-social-media-networking-online-marketing-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ShUmJwfac1TewHIt7LNmZn09yGEjX0ZhwmXJR1o5-HY="
            alt="Our Store"
            className="rounded-3xl shadow-xl w-full hover:scale-105 transition duration-300"
          />
          <div className="mt-6 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, Online Shop began with a simple idea: to create an affordable and accessible online marketplace for everyone.
              We now serve thousands of customers across the globe, offering everything from electronics and fashion to lifestyle and home products.
              Our user-friendly platform, reliable delivery, and affordable pricing have earned us a reputation as a trusted e-commerce brand.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver value to our customers through high-quality products, competitive pricing, and unmatched customer support. We aim to empower people to shop with confidence from anywhere.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most customer-centric e-commerce platform, where people can discover anything they want online – conveniently and securely.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <FaTruck className="text-blue-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-700">Fast Delivery</h4>
              <p className="text-gray-500 text-sm mt-2">Get your orders quickly with our optimized delivery service.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <FaHeadset className="text-blue-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-700">24/7 Support</h4>
              <p className="text-gray-500 text-sm mt-2">Our team is always ready to help you, anytime, anywhere.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <FaAward className="text-blue-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-700">Quality Products</h4>
              <p className="text-gray-500 text-sm mt-2">We ensure every product meets top standards and expectations.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <FaShieldAlt className="text-blue-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-700">Secure Shopping</h4>
              <p className="text-gray-500 text-sm mt-2">Your data and payments are protected with industry-level security.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            Contact Us to Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
