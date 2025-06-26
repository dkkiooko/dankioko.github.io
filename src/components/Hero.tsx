import { personalInfo } from '@/data/personal';

export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-poppins text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-emerald-600">Dan Kioko</span>
                <span className="inline-block ml-2 animate-bounce">👋</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                {personalInfo.title}
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-all duration-200 text-center"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}