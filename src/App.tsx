import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Settings, 
  Users, 
  Award, 
  Shield, 
  Play, 
  Pause, 
  Bell,
  Menu,
  X
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import FamilyContract from './components/FamilyContract';
import ChildInterface from './components/ChildInterface';
import Community from './components/Community';
import DeviceManagement from './components/DeviceManagement';
import Onboarding from './components/Onboarding';
import PauseButton from './components/PauseButton';
import NotificationCenter from './components/NotificationCenter';

type View = 'dashboard' | 'contract' | 'child' | 'community' | 'devices' | 'onboarding';

function App() {
  const [currentView, setCurrentView] = useState<View>('onboarding');
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      message: 'Défi "Soirée jeux de société" terminé avec succès ! 🎉',
      timestamp: new Date(),
      read: false
    },
    {
      id: 2,
      type: 'info',
      message: 'Nouvelle suggestion IA : Pause créative recommandée',
      timestamp: new Date(Date.now() - 3600000),
      read: false
    }
  ]);

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('onboarding-complete');
    if (hasCompletedOnboarding === 'true') {
      setIsFirstTime(false);
      setCurrentView('dashboard');
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboarding-complete', 'true');
    setIsFirstTime(false);
    setCurrentView('dashboard');
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'contract', label: 'Contrat familial', icon: Settings },
    { id: 'child', label: 'Espace enfant', icon: Users },
    { id: 'community', label: 'Communauté', icon: Award },
    { id: 'devices', label: 'Équipements', icon: Shield },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  if (isFirstTime) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id as View);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === item.id 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">FamilyGuard</h1>
                  <p className="text-xs text-gray-500">Contrôle parental NextGen</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <NotificationCenter 
                notifications={notifications}
                onMarkAsRead={(id) => {
                  setNotifications(prev => 
                    prev.map(n => n.id === id ? { ...n, read: true } : n)
                  );
                }}
              />
              <PauseButton isPaused={isPaused} onToggle={handlePause} />
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar - Desktop */}
        <nav className="hidden lg:block w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as View)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === item.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {isPaused && (
            <div className="mb-6 bg-orange-100 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Pause size={20} className="text-orange-600" />
                <span className="font-medium text-orange-800">
                  Mode pause activé - Tous les équipements sont en pause
                </span>
              </div>
            </div>
          )}

          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'contract' && <FamilyContract />}
          {currentView === 'child' && <ChildInterface />}
          {currentView === 'community' && <Community />}
          {currentView === 'devices' && <DeviceManagement />}
        </main>
      </div>
    </div>
  );
}

export default App;