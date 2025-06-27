import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend & BI Developer',
      company: 'Targetta OU',
      location: 'Remote (Estonia)',
      period: 'June 2023 – January 2025',
      description: 'Built scalable backend tools and data automation pipelines for World Wide retail clients, while also resolving technical support issues in distributed cloud environments.',
      achievements: [
        'Integrated Shopify and Erply POS data into custom BI dashboards for 3 B2B clients.',
        'Developed Python scripts to automate data cleaning and aggregation, reducing manual effort by 50%.',
        'Reduced ticket resolution time to under 24 hours with Python-based automations.',
        'Saved clients thousands of euros through accurate inventory and reporting workflows.'
      ]
    },
    {
      title: 'Big Data & BI Intern',
      company: 'Safaricom PLC',
      location: 'Nairobi, Kenya',
      period: 'October 2021 – June 2023',
      description: 'Worked on predictive analytics and automated reporting tasks within the Business Intelligence and Data team.',
      achievements: [
        'Built customer churn models that improved retention by 10% during pilot testing.',
        'Automated SQL and Python scripts for data extraction and dashboard updates.',
        'Analyzed chatbot logs to reduce call center load by identifying common issues.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through the tech industry, building impactful solutions and growing as a developer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-900 to-teal-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center text-blue-900 font-medium">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;