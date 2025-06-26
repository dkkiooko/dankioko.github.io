import { skills } from '@/data/personal';

export default function Skills() {
  const skillCategories = [
    { name: 'Frontend', skills: skills.frontend, color: 'emerald', icon: '🎨' },
    { name: 'Backend', skills: skills.backend, color: 'blue', icon: '⚙️' },
    { name: 'Tools', skills: skills.tools, color: 'purple', icon: '🛠️' },
    { name: 'Other', skills: skills.other, color: 'orange', icon: '📚' },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: 'from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-800',
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-800',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-800',
      orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-800',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className={`bg-gradient-to-br ${getColorClasses(category.color)} rounded-xl p-6 border hover:shadow-lg transition-all duration-300`}>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">{category.icon}</span>
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars (Optional Enhancement) */}
        <div className="mt-16">
          <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: 'React/Next.js', level: 90 },
              { skill: 'TypeScript', level: 85 },
              { skill: 'Node.js', level: 80 },
              { skill: 'Python', level: 75 },
              { skill: 'AWS/Cloud', level: 70 },
              { skill: 'UI/UX Design', level: 65 },
            ].map((item) => (
              <div key={item.skill} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{item.skill}</span>
                  <span className="text-sm text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}