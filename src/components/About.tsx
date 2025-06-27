import React from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams and stakeholders'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed, accessibility, and user experience'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I'm a multidisciplinary builder and creative technologist with a passion for using code, design, and storytelling to make meaningful tools and experiences. From launching educational games like <strong>Blockade Math</strong> to building web apps, automating systems, and monitoring beehives, I love solving real-world problems with practical technology.
                </p>
                <p className="mb-6">
                  My background spans backend development, business intelligence, hardware prototyping, and tech support. Whether I'm configuring cloud dashboards, creating math games for kids, or composing interactive audio experiences, I bring a detail-oriented and human-first approach to every project.
                </p>
                <p className="mb-6">
                  I believe learning should be playful, accessible, and community-driven. That’s why I document my builds, share my experiments, and mentor others as I grow. I’m especially excited by projects at the intersection of education, sustainability, and creative tech.
                </p>
                <p>
                  Outside the screen, I'm learning guitar, experimenting with AI art, and building a small apiary from scratch. Let's build something awesome — or weird — together.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-900" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;