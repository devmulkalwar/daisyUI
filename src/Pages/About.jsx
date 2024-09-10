import React from 'react';

const About = () => {
  return (
    <section className="py-12 px-6 lg:px-24">
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
                  <h3 className="text-lg font-semibold">Dev Mulkalwar</h3>
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
                  <h3 className="text-lg font-semibold">Harsh Ninave</h3>
                  <p className="text-gray-600">Co-Founder &amp; Designer | Developer</p>
                  <p className="text-sm text-gray-500">
                    Harsh is a UX/UI designer and Full Stack Developer with a deep commitment to making tech accessible and
                    user-friendly for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
