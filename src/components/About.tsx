import { personalInfo, experience, education } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in technology and the experiences that shaped my career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 text-center">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">{personalInfo.name}</h3>
              <p className="text-emerald-600 font-medium mb-4">{personalInfo.title}</p>
              <p className="text-gray-700 leading-relaxed">{personalInfo.bio}</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span>
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-emerald-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="font-poppins text-xl font-semibold text-gray-900">{exp.position}</h4>
                          <p className="text-emerald-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 font-medium bg-white px-3 py-1 rounded-full text-sm">{exp.duration}</span>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="font-poppins text-xl font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-blue-600 font-medium">{edu.institution}</p>
                        </div>
                        <span className="text-gray-500 font-medium bg-white px-3 py-1 rounded-full text-sm">{edu.duration}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}