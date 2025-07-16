import React, { useState } from 'react';
import { 
  Clock, 
  Award, 
  AlertTriangle, 
  Heart, 
  Star, 
  BookOpen,
  Gamepad2,
  Palette,
  Music,
  Target,
  CheckCircle,
  XCircle
} from 'lucide-react';

const ChildInterface = () => {
  const [selectedChild, setSelectedChild] = useState('Emma');
  const [showPanicModal, setShowPanicModal] = useState(false);

  const children = [
    { name: 'Emma', age: 12, avatar: 'bg-pink-500' },
    { name: 'Lucas', age: 9, avatar: 'bg-blue-500' },
    { name: 'Sophie', age: 15, avatar: 'bg-purple-500' }
  ];

  const childData = {
    Emma: {
      timeLeft: '1h 25m',
      totalToday: '2h 35m',
      nextBreak: '15 min',
      badges: [
        { name: 'Lectrice assidue', icon: BookOpen, earned: true },
        { name: 'Artiste créative', icon: Palette, earned: true },
        { name: 'Temps respecté', icon: Clock, earned: false }
      ],
      currentChallenges: [
        { 
          name: 'Lecture 30 min', 
          progress: 75, 
          reward: 'Badge Bibliothèque',
          icon: BookOpen
        },
        { 
          name: 'Création artistique', 
          progress: 50, 
          reward: '+ 30 min écran',
          icon: Palette
        }
      ],
      todaySchedule: [
        { time: '16:00-17:00', activity: 'Temps libre écran', status: 'completed' },
        { time: '17:00-17:30', activity: 'Pause obligatoire', status: 'completed' },
        { time: '17:30-18:30', activity: 'Temps libre écran', status: 'current' },
        { time: '20:00', activity: 'Couvre-feu numérique', status: 'upcoming' }
      ]
    },
    Lucas: {
      timeLeft: '45m',
      totalToday: '1h 15m',
      nextBreak: '20 min',
      badges: [
        { name: 'Gamer respectueux', icon: Gamepad2, earned: true },
        { name: 'Temps respecté', icon: Clock, earned: true },
        { name: 'Ami musical', icon: Music, earned: false }
      ],
      currentChallenges: [
        { 
          name: 'Jeux créatifs', 
          progress: 60, 
          reward: 'Badge Créateur',
          icon: Gamepad2
        }
      ],
      todaySchedule: [
        { time: '15:00-16:00', activity: 'Temps libre écran', status: 'completed' },
        { time: '16:00-16:15', activity: 'Pause obligatoire', status: 'current' },
        { time: '16:15-17:00', activity: 'Temps libre écran', status: 'upcoming' },
        { time: '19:30', activity: 'Couvre-feu numérique', status: 'upcoming' }
      ]
    },
    Sophie: {
      timeLeft: '2h 10m',
      totalToday: '1h 50m',
      nextBreak: '45 min',
      badges: [
        { name: 'Étudiante modèle', icon: BookOpen, earned: true },
        { name: 'Créatrice de contenu', icon: Palette, earned: true },
        { name: 'Mentor famille', icon: Heart, earned: true }
      ],
      currentChallenges: [
        { 
          name: 'Aide aux devoirs', 
          progress: 90, 
          reward: 'Badge Mentor',
          icon: Heart
        }
      ],
      todaySchedule: [
        { time: '14:00-16:00', activity: 'Temps libre écran', status: 'completed' },
        { time: '16:00-16:30', activity: 'Pause créative', status: 'current' },
        { time: '16:30-18:00', activity: 'Temps libre écran', status: 'upcoming' },
        { time: '21:00', activity: 'Couvre-feu numérique', status: 'upcoming' }
      ]
    }
  };

  const activitiesSuggestions = [
    { name: 'Lecture', icon: BookOpen, color: 'bg-blue-100 text-blue-700' },
    { name: 'Dessin', icon: Palette, color: 'bg-purple-100 text-purple-700' },
    { name: 'Musique', icon: Music, color: 'bg-green-100 text-green-700' },
    { name: 'Jeux créatifs', icon: Gamepad2, color: 'bg-orange-100 text-orange-700' }
  ];

  const currentChild = childData[selectedChild];

  const PanicModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-full">
            <AlertTriangle size={24} className="text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Besoin d'aide ?</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Si tu vis quelque chose de désagréable en ligne, nous sommes là pour t'aider.
        </p>
        
        <div className="space-y-3 mb-6">
          <button className="w-full p-3 bg-red-100 hover:bg-red-200 rounded-lg text-red-700 font-medium">
            🚨 Urgence - Contacter immédiatement
          </button>
          <button className="w-full p-3 bg-orange-100 hover:bg-orange-200 rounded-lg text-orange-700 font-medium">
            😔 Harcèlement en ligne
          </button>
          <button className="w-full p-3 bg-yellow-100 hover:bg-yellow-200 rounded-lg text-yellow-700 font-medium">
            🤔 Contenu inapproprié
          </button>
          <button className="w-full p-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 font-medium">
            💬 Juste envie de parler
          </button>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowPanicModal(false)}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Fermer
          </button>
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Envoyer message
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Child Selector */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Mon espace numérique</h1>
        <div className="flex space-x-3">
          {children.map((child) => (
            <button
              key={child.name}
              onClick={() => setSelectedChild(child.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                selectedChild === child.name 
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-300' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className={`w-8 h-8 ${child.avatar} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                {child.name[0]}
              </div>
              <span className="font-medium">{child.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Time Status */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Temps restant</h2>
                <p className="text-3xl font-bold mt-2">{currentChild.timeLeft}</p>
                <p className="text-blue-100">Utilisé aujourd'hui : {currentChild.totalToday}</p>
              </div>
              <div className="text-right">
                <p className="text-blue-100">Prochaine pause dans</p>
                <p className="text-xl font-semibold">{currentChild.nextBreak}</p>
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Mon planning aujourd'hui</h2>
            <div className="space-y-3">
              {currentChild.todaySchedule.map((item, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                  item.status === 'completed' ? 'bg-green-50' :
                  item.status === 'current' ? 'bg-blue-50' :
                  'bg-gray-50'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'current' ? 'bg-blue-500' :
                    'bg-gray-300'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle size={16} className="text-white" />
                    ) : item.status === 'current' ? (
                      <Clock size={16} className="text-white" />
                    ) : (
                      <XCircle size={16} className="text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.time}</p>
                    <p className="text-sm text-gray-600">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Mes défis en cours</h2>
            <div className="space-y-4">
              {currentChild.currentChallenges.map((challenge, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <challenge.icon size={20} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{challenge.name}</h3>
                      <p className="text-sm text-purple-600">{challenge.reward}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{challenge.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Panic Button */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <button
              onClick={() => setShowPanicModal(true)}
              className="w-full p-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
            >
              <AlertTriangle size={20} className="mx-auto mb-2" />
              Besoin d'aide ?
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Si tu vis quelque chose de désagréable en ligne
            </p>
          </div>

          {/* Badges */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Mes badges</h2>
            <div className="space-y-3">
              {currentChild.badges.map((badge, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                  badge.earned ? 'bg-yellow-50' : 'bg-gray-50'
                }`}>
                  <div className={`p-2 rounded-lg ${
                    badge.earned ? 'bg-yellow-100' : 'bg-gray-100'
                  }`}>
                    <badge.icon size={16} className={badge.earned ? 'text-yellow-600' : 'text-gray-400'} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${badge.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                      {badge.name}
                    </p>
                  </div>
                  {badge.earned && <Star size={16} className="text-yellow-500" />}
                </div>
              ))}
            </div>
          </div>

          {/* Activity Suggestions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Activités suggérées</h2>
            <div className="grid grid-cols-2 gap-3">
              {activitiesSuggestions.map((activity, index) => (
                <button
                  key={index}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${activity.color} hover:opacity-80`}
                >
                  <activity.icon size={16} className="mx-auto mb-1" />
                  {activity.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Quiz */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quiz du jour</h2>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Sécurité en ligne</h3>
              <p className="text-sm text-blue-700 mb-3">
                Que fais-tu si quelqu'un que tu ne connais pas te contact en ligne ?
              </p>
              <button className="w-full p-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                Répondre au quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPanicModal && <PanicModal />}
    </div>
  );
};

export default ChildInterface;