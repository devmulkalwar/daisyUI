import React from 'react';
import { FaHandshake, FaDollarSign, FaUsers, FaInfoCircle } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="text-lg md:text-xl mt-4">
          Connecting Kabadiwalas and Scrap Dealers for a Seamless Business Experience
        </p>
      </header>

      {/* Introduction Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Overview</h2>
        <p className="text-lg bg-base-200 p-8 rounded-lg shadow-md">
          We specialize in bridging the gap between kabadiwalas (ragpickers) and scrap dealers. Our
          platform facilitates the smooth sale of materials from kabadiwalas to scrap dealers,
          ensuring both parties benefit from fair transactions and efficient operations.
        </p>
      </section>

      {/* Service Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service for Kabadiwalas */}
          <div className="bg-base-200 shadow-md rounded-lg p-8 flex items-start space-x-6">
            <FaUsers className="text-blue-500 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">For Kabadiwalas</h3>
              <p className="text-lg text-gray-600">
                We provide kabadiwalas with a platform to easily sell their collected materials to
                scrap dealers. Our service ensures competitive pricing, prompt payments, and a
                hassle-free selling process.
              </p>
            </div>
          </div>

          {/* Service for Scrap Dealers */}
          <div className="bg-base-200 shadow-md rounded-lg p-8 flex items-start space-x-6">
            <FaDollarSign className="text-green-500 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">For Scrap Dealers</h3>
              <p className="text-lg text-gray-600">
                Scrap dealers can access a reliable source of materials through our service. We
                guarantee high-quality materials, consistent supply, and streamlined procurement
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kabadiwalas */}
          <div className="bg-base-200 shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">For Kabadiwalas</h3>
            <ol className="list-decimal pl-5 text-lg text-gray-600 space-y-2">
              <li>Sign up on our platform.</li>
              <li>List your materials.</li>
              <li>Receive offers from scrap dealers.</li>
              <li>Finalize the sale and get paid.</li>
            </ol>
          </div>

          {/* Scrap Dealers */}
          <div className="bg-base-200 shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">For Scrap Dealers</h3>
            <ol className="list-decimal pl-5 text-lg text-gray-600 space-y-2">
              <li>Register on our platform.</li>
              <li>Browse available materials from kabadiwalas.</li>
              <li>Place orders for the materials you need.</li>
              <li>Receive deliveries and make payments.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-base-200 shadow-lg rounded-lg p-8 flex flex-col h-full">
            <blockquote className="italic text-lg text-gray-600 mb-4">
              "This platform has transformed how we do business. It’s now much easier to sell and
              buy scrap materials efficiently."
            </blockquote>
            <footer className="text-gray-500">- Kabadiwala</footer>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-base-200 shadow-lg rounded-lg p-8 flex flex-col h-full">
            <blockquote className="italic text-lg text-gray-600 mb-4">
              "The service provided is top-notch. I can always count on high-quality materials and
              timely deliveries."
            </blockquote>
            <footer className="text-gray-500">- Scrap Dealer</footer>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-100 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Get Started Today!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our platform and unlock the full potential of your scrap materials. Experience
            seamless transactions and maximize your returns with our efficient services.
          </p>
          <a
            href="/shop-now"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
