import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, Info, Users, Briefcase, Calendar, Image as ImageIcon, 
  HeartHandshake, Mail, Phone, MapPin, ChevronRight, CheckCircle2, Heart 
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'who-we-are', label: 'Who We Are', icon: Users },
    { id: 'what-we-do', label: 'What We Do', icon: Briefcase },
    { id: 'activities', label: 'Our Activities', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigateTo={navigateTo} />;
      case 'about': return <AboutPage />;
      case 'who-we-are': return <WhoWeArePage />;
      case 'what-we-do': return <WhatWeDoPage />;
      case 'activities': return <ActivitiesPage />;
      case 'gallery': return <GalleryPage />;
      default: return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="bg-emerald-600 p-2 rounded-full mr-3 text-white">
                <HeartHandshake size={28} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-emerald-800 leading-tight">Beltola Social Welfare Society</h1>
                <p className="text-sm text-emerald-600 font-medium">Jhargram, West Bengal</p>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      currentPage === item.id ? 'bg-emerald-50 text-emerald-700' : 'text-gray-600 hover:bg-gray-100 hover:text-emerald-600'
                    }`}
                  >
                    <Icon size={16} className="mr-1.5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 p-2">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">{renderPage()}</main>
      <footer className="bg-emerald-900 text-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Beltola Social Welfare Society. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Minimal placeholder pages for structure
const HomePage = ({navigateTo}) => (
  <div className="py-20 text-center">
    <h1 className="text-5xl font-bold mb-4">Welcome to Beltola Society</h1>
    <button onClick={() => navigateTo('about')} className="bg-emerald-600 text-white px-6 py-2 rounded">About Us</button>
  </div>
);
const AboutPage = () => <div className="p-20 text-center">About Content...</div>;
const WhoWeArePage = () => <div className="p-20 text-center">12 Members List...</div>;
const WhatWeDoPage = () => <div className="p-20 text-center">Our Initiatives...</div>;
const ActivitiesPage = () => <div className="p-20 text-center">Recent Activities...</div>;
const GalleryPage = () => <div className="p-20 text-center">Gallery Photos...</div>;