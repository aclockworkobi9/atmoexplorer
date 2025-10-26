import { Wind, Globe, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            AtmoExplorer
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Exploring the boundaries of atmospheric science through innovative balloon technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Wind className="text-sky-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">High-Altitude Research</h3>
            <p className="text-gray-600">
              Conducting atmospheric research at extreme altitudes to gather crucial environmental data
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Environmental Monitoring</h3>
            <p className="text-gray-600">
              Collecting real-time data to understand climate patterns and atmospheric conditions
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Rocket className="text-amber-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation & Discovery</h3>
            <p className="text-gray-600">
              Pushing the boundaries of what's possible in atmospheric exploration and research
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            AtmoExplorer is a university project dedicated to advancing our understanding of Earth's atmosphere
            through cutting-edge balloon technology. Our multidisciplinary team combines expertise in engineering,
            marketing, and payload systems to create innovative solutions for atmospheric research.
          </p>
        </div>
      </div>
    </div>
  );
}
