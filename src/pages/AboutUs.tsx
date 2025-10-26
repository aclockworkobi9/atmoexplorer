import { Code, Megaphone, Plane } from 'lucide-react';

export default function AboutUs() {
  const teams = [
    {
      name: 'Software Engineering',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: 'Responsible for developing and maintaining the project website, creating intuitive interfaces and robust systems for data visualization and project management.',
      responsibilities: [
        'Website development and design',
        'Data visualization systems',
        'User interface optimization',
        'Technical infrastructure'
      ]
    },
    {
      name: 'Marketing',
      icon: Megaphone,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      description: 'Handles all marketing initiatives including video production, promotional content, and public engagement to showcase our atmospheric exploration project.',
      responsibilities: [
        'Video production and editing',
        'Marketing campaign development',
        'Social media management',
        'Project documentation'
      ]
    },
    {
      name: 'Payload Team',
      icon: Plane,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      description: 'Responsible for designing, building, and testing the high-altitude balloon system and scientific instruments for atmospheric data collection.',
      responsibilities: [
        'Balloon design and construction',
        'Flight system engineering',
        'Sensor integration',
        'Launch operations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated teams behind the AtmoExplorer project
          </p>
        </div>

        <div className="space-y-12">
          {teams.map((team, index) => {
            const Icon = team.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${team.color} h-2`}></div>
                <div className="p-10">
                  <div className="flex items-start gap-6">
                    <div className={`${team.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={team.iconColor} size={40} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">{team.name}</h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {team.description}
                      </p>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Responsibilities:</h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {team.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${team.color}`}></div>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-10 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Working Together</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our success is built on collaboration. Each team brings unique expertise and works in harmony
            to achieve our shared goal of advancing atmospheric research and exploration. Together, we're
            pushing the boundaries of what's possible in high-altitude scientific investigation.
          </p>
        </div>
      </div>
    </div>
  );
}
