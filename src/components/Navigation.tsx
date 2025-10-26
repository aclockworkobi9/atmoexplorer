import { Home } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: true },
    { id: 'about', label: 'About Us' },
    { id: 'data', label: 'Data' },
    { id: 'material', label: 'Material' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">AtmoExplorer</div>
          <div className="flex gap-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-sky-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon && <Home size={20} />}
                {!item.icon && item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
