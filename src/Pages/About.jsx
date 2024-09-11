import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-12 px-6 mx-auto md:lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Junktion</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Welcome to <span className="font-semibold text-green-600">Junktion</span>, a platform
          designed to connect scrap dealers and kabadiwalas, making it easier for businesses to
          collaborate and thrive in the recycling industry. Our goal is to bridge the gap between
          suppliers and buyers of scrap materials, creating a seamless and sustainable network.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* About Us Section */}
          <div className="bg-base-200 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Junktion, we aim to streamline the scrap material trade by providing a simple and
              efficient platform where businesses can interact, find the right resources, and expand
              their reach. We believe that by empowering kabadiwalas and scrap dealers, we
              contribute to a cleaner and more sustainable environment.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600">
              Junktion is developed by a dedicated duo with a passion for both technology and
              environmental sustainability. We saw the need to digitize and modernize the scrap
              industry, and thus, Junktion was born. Our platform supports small to large scrap
              businesses in their journey to grow.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-base-200 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Team Member 1"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold mr-2">Dev Mulkalwar</h3>
                    <div className="flex space-x-2">
                      <a
                        href="https://github.com/devmulkalwar"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub className="text-gray-600 hover:text-black" size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dev-mulkalwar-b2745a258/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-600 hover:text-blue-800" size={20} />
                      </a>
                      <a
                        href="https://www.instagram.com/dev_mulkalwar/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 hover:text-pink-700" size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600">Co-Founder &amp; Developer</p>
                  <p className="text-sm text-gray-500">
                    Dev is a full-stack developer with a passion for building digital solutions for
                    environmental sustainability.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Team Member 2"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold mr-2">Harsh Ninave</h3>
                    <div className="flex space-x-2">
                      <a
                        href="https://github.com/Harshninave04"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub className="text-gray-600 hover:text-black" size={20} />
                      </a>
                      <a
                        href="https://linkedin.com/in/harshninave2004"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-600 hover:text-blue-800" size={20} />
                      </a>
                      <a
                        href="https://instagram.com/harsh__ninave_"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 hover:text-pink-700" size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600">Co-Founder &amp; Designer | Developer</p>
                  <p className="text-sm text-gray-500">
                    Harsh is a UX/UI designer and Full Stack Developer with a deep commitment to
                    making tech accessible and user-friendly for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid gap-8 mt-8 lg:grid-cols-2">
          {/* Company Values Section */}
          <div className="bg-base-200 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Sustainability</li>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Community Engagement</li>
            </ul>
          </div>

          {/* Achievements Section */}
          <div className="bg-base-200 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Successfully onboarded over 500 scrap dealers in the first year.</li>
              <li>Won the "Best Green Initiative" award in 2023.</li>
            </ul>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-base-200 shadow-lg rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <p className="text-gray-600">
            Junktion has facilitated over 1,000,000 kg of recyclable materials being processed more
            efficiently, contributing significantly to reducing waste and promoting a greener
            environment.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="bg-base-200 shadow-lg rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">What People Say</h2>
          <blockquote className="text-gray-600 italic">
            “Junktion has revolutionized the way we handle scrap materials. It's a game-changer in
            the recycling industry!”
          </blockquote>
          <p className="text-gray-500">— John Doe, CEO of EcoRecycling Inc.</p>
        </div>

        {/* Call to Action Section */}
        <div className="bg-base-200 shadow-lg rounded-lg p-8 mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <p className="text-gray-600 mb-4">
            Want to be part of our mission?{' '}
            <a href="/" className="text-blue-500 hover:underline">
              Check out our career opportunities
            </a>{' '}
            or{' '}
            <a href="/contact" className="text-blue-500 hover:underline">
              contact us
            </a>{' '}
            to learn more.
          </p>
          <a
            href="https://www.linkedin.com/in/dev-mulkalwar-b2745a258/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Follow Us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
