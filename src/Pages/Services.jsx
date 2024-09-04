import React from 'react';
import { FaHandshake, FaDollarSign, FaUsers, FaInfoCircle } from 'react-icons/fa';

const materials = [
  // The materials data remains the same
];

const Services = () => {
  return (
    <div className="min-h-screen p-6 bg-base-100">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-2 truncate">Our Services</h1>
        <p className="text-xl">
          Connecting Kabadiwalas and Scrap Dealers for a Seamless Business Experience
        </p>
      </header>

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Overview</h2>
        <p className="text-lg text-base-content">
          We specialize in bridging the gap between kabadiwalas (ragpickers) and scrap dealers. Our
          platform facilitates the smooth sale of materials from kabadiwalas to scrap dealers,
          ensuring both parties benefit from fair transactions and efficient operations.
        </p>
      </section>

      {/* Service Details */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service for Kabadiwalas */}
          <div className="bg-base-100 shadow-xl rounded-lg p-6 flex items-start space-x-4">
            <FaUsers className="text-accent text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">For Kabadiwalas</h3>
              <p className="text-lg text-base-content">
                We provide kabadiwalas with a platform to easily sell their collected materials to
                scrap dealers. Our service ensures competitive pricing, prompt payments, and a
                hassle-free selling process.
              </p>
            </div>
          </div>

          {/* Service for Scrap Dealers */}
          <div className="bg-base-100 shadow-xl rounded-lg p-6 flex items-start space-x-4">
            <FaDollarSign className="text-success text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">For Scrap Dealers</h3>
              <p className="text-lg text-base-content">
                Scrap dealers can access a reliable source of materials through our service. We
                guarantee high-quality materials, consistent supply, and streamlined procurement
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kabadiwalas */}
          <div className="bg-base-100 shadow-xl rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">For Kabadiwalas</h3>
            <ol className="list-decimal pl-5 text-lg text-base-content space-y-2">
              <li>Sign up on our platform.</li>
              <li>List your materials.</li>
              <li>Receive offers from scrap dealers.</li>
              <li>Finalize the sale and get paid.</li>
            </ol>
          </div>

          {/* Scrap Dealers */}
          <div className="bg-base-100 shadow-xl rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">For Scrap Dealers</h3>
            <ol className="list-decimal pl-5 text-lg text-base-content space-y-2">
              <li>Register on our platform.</li>
              <li>Browse available materials from kabadiwalas.</li>
              <li>Place orders for the materials you need.</li>
              <li>Receive deliveries and make payments.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">What Our Users Say</h2>
        <div className="space-y-6">
          {/* Testimonial 1 */}
          <div className="bg-base-100 shadow-xl rounded-lg p-6">
            <blockquote className="italic text-lg text-base-content">
              "This platform has transformed how we do business. It’s now much easier to sell and
              buy scrap materials efficiently."
            </blockquote>
            <footer className="mt-4 text-base-content">- Kabadiwala</footer>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-base-100 shadow-xl rounded-lg p-6">
            <blockquote className="italic text-lg text-base-content">
              "The service provided is top-notch. I can always count on high-quality materials and
              timely deliveries."
            </blockquote>
            <footer className="mt-4 text-base-content">- Scrap Dealer</footer>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-base-200 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-4">Get Started Today!</h2>
          <p className="text-lg text-base-content mb-6">
            Join our platform and unlock the full potential of your scrap materials. Experience
            seamless transactions and maximize your returns with our efficient services.
          </p>
          <a
            href="/shop-now"
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
