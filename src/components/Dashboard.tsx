import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Award, 
  TrendingUp, 
  Wifi, 
  Smartphone,
  Monitor,
  Gamepad2,
  Star,
  Heart,
  Target,
  BookOpen
} from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const familyMembers = [
    { name: 'Emma', age: 12, screenTime: '2h 15m', status: 'active', color: 'bg-pink-500' },
    { name: 'Lucas', age: 9, screenTime: '1h 45m', status: 'paused', color: 'bg-blue-500' },
    { name: 'Sophie', age: 15, screenTime: '3h 30m', status: 'active', color: 'bg-purple-500' },
  ];

  const connectedDevices = [
    { name: 'iPad Emma', type: 'tablet', status: 'active', usage: '45m' },
    { name: 'Nintendo Switch', type: 'gaming', status: 'paused', usage: '1h 20m' },
    { name: 'TV Salon', type: 'tv', status: 'active', usage: '2h 15m' },
    { name: 'iPhone Lucas', type: 'phone', status: 'limited', usage: '35m' },
  ];

  const currentChallenges = [
    { 
      title: 'Soirée sans écran', 
      description: 'Pas d\'écran après 19h', 
      progress: 75, 
      participants: 3,
      reward: 'Badge Famille Zen'
    },
    { 
      title: 'Lecture partagée', 
      description: '30 min de lecture en famille', 
      progress: 50, 
      participants: 2,
      reward: 'Points bibliothèque'
    },
  ];

  const weeklyStats = [
    { day: 'Lun', time: 180 },
    { day: 'Mar', time: 150 },
    { day: 'Mer', time: 220 },
    { day: 'Jeu', time: 190 },
    { day: 'Ven', time: 240 },
    { day: 'Sam', time: 120 },
    { day: 'Dim', time: 90 },
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'tablet': return <Smartphone size={16} />;
      case 'gaming': return <Gamepad2 size={16} />;
      case 'tv': return <Monitor size={16} />;
      case 'phone': return <Smartphone size={16} />;
      default: return <Wifi size={16} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">7h 30m</p>
              <p className="text-sm text-gray-500">Temps d'écran total</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">3/3</p>
              <p className="text-sm text-gray-500">Membres actifs</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">12</p>
              <p className="text-sm text-gray-500">Badges obtenus</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp size={20} className="text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">-15%</p>
              <p className="text-sm text-gray-500">vs semaine passée</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Family Members */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Famille</h2>
            <div className="space-y-4">
              {familyMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.age} ans</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{member.screenTime}</p>
                    <p className={`text-sm ${member.status === 'active' ? 'text-green-600' : member.status === 'paused' ? 'text-orange-600' : 'text-gray-500'}`}>
                      {member.status === 'active' ? 'Actif' : member.status === 'paused' ? 'En pause' : 'Limité'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Évolution hebdomadaire</h2>
              <select 
                value={selectedPeriod} 
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="today">Aujourd'hui</option>
                <option value="week">Cette semaine</option>
                <option value="month">Ce mois</option>
              </select>
            </div>
            <div className="flex items-end justify-between h-32 space-x-2">
              {weeklyStats.map((stat, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 rounded-t-md"
                    style={{ height: `${(stat.time / 240) * 100}%` }}
                  />
                  <p className="text-xs text-gray-500 mt-1">{stat.day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Connected Devices */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Équipements connectés</h2>
            <div className="space-y-3">
              {connectedDevices.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-1 bg-gray-100 rounded">
                      {getDeviceIcon(device.type)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{device.name}</p>
                      <p className="text-xs text-gray-500">{device.usage}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    device.status === 'active' ? 'bg-green-500' : 
                    device.status === 'paused' ? 'bg-orange-500' : 'bg-gray-400'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Current Challenges */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Défis en cours</h2>
            <div className="space-y-4">
              {currentChallenges.map((challenge, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star size={16} className="text-yellow-500" />
                    <p className="font-medium text-gray-800">{challenge.title}</p>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{challenge.progress}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{challenge.participants} participants</p>
                    <p className="text-xs text-purple-600 font-medium">{challenge.reward}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions rapides</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 text-sm font-medium transition-colors">
                <Heart size={16} className="mx-auto mb-1" />
                Pause détente
              </button>
              <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 text-sm font-medium transition-colors">
                <Target size={16} className="mx-auto mb-1" />
                Nouveau défi
              </button>
              <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-700 text-sm font-medium transition-colors">
                <BookOpen size={16} className="mx-auto mb-1" />
                Temps lecture
              </button>
              <button className="p-3 bg-orange-50 hover:bg-orange-100 rounded-lg text-orange-700 text-sm font-medium transition-colors">
                <Users size={16} className="mx-auto mb-1" />
                Activité famille
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;