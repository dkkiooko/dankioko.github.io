import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EduPen – Blockade Math',
      description: 'A mobile-first educational math game designed to make learning fun and accessible for children in Kenya and Sub-Saharan Africa. Features 15 progressive levels with visual learning and gamification.',
      image: '/images/blockade-math.jpg', // or your final URL
      tags: ['React', 'Educational', 'Mobile-First', 'PWA'],
      liveUrl: 'https://edu-pen-emulator-web.vercel.app/', // or your actual deployed link
      githubUrl: 'https://github.com/dkkiooko/blockade-math'
    },
    {
      title: 'CliniCare EMR System',
      description: 'A comprehensive Electronic Medical Records system built to streamline healthcare operations and improve patient care delivery in clinical settings.',
      image: '/images/clinicare.png', // update with hosted image path
      tags: ['Healthcare', 'Flask', 'PostgreSQL', 'EMR'],
      liveUrl: '#', // placeholder, update when deployed
      githubUrl: 'https://github.com/dkkiooko/clinicare' // update if available
    }
  ];


  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions to complex challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;