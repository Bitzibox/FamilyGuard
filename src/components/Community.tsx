import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Calendar, 
  Globe, 
  Heart, 
  Star,
  MessageCircle,
  Share2,
  Award,
  Target,
  TrendingUp,
  Crown,
  Medal
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('challenges');

  const globalChallenges = [
    {
      id: 1,
      title: 'Weekend sans écran',
      description: 'Défi famille : 48h sans aucun écran de divertissement',
      participants: 2847,
      duration: '2 jours',
      reward: 'Badge Déconnexion totale',
      difficulty: 'Difficile',
      category: 'Famille',
      startDate: '2025-01-20',
      endDate: '2025-01-22',
      progress: 65,
      joined: false
    },
    {
      id: 2,
      title: 'Créateurs en herbe',
      description: 'Utilisez vos écrans uniquement pour créer du contenu original',
      participants: 1523,
      duration: '1 semaine',
      reward: 'Badge Créativité',
      difficulty: 'Moyen',
      category: 'Créativité',
      startDate: '2025-01-15',
      endDate: '2025-01-22',
      progress: 80,
      joined: true
    },
    {
      id: 3,
      title: 'Lecture collective',
      description: 'Lire ensemble 30 minutes par jour en famille',
      participants: 3921,
      duration: '10 jours',
      reward: 'Badge Bibliothèque collective',
      difficulty: 'Facile',
      category: 'Éducation',
      startDate: '2025-01-10',
      endDate: '2025-01-20',
      progress: 90,
      joined: true
    }
  ];

  const leaderboard = [
    { 
      rank: 1, 
      family: 'Famille Martin', 
      score: 2840, 
      badges: 15, 
      streak: 12,
      location: 'Paris'
    },
    { 
      rank: 2, 
      family: 'Famille Dupont', 
      score: 2735, 
      badges: 13, 
      streak: 8,
      location: 'Lyon'
    },
    { 
      rank: 3, 
      family: 'Famille Bernard', 
      score: 2690, 
      badges: 14, 
      streak: 10,
      location: 'Marseille'
    },
    { 
      rank: 4, 
      family: 'Votre famille', 
      score: 2654, 
      badges: 12, 
      streak: 7,
      location: 'Toulouse',
      isUser: true
    },
    { 
      rank: 5, 
      family: 'Famille Petit', 
      score: 2598, 
      badges: 11, 
      streak: 5,
      location: 'Nice'
    }
  ];

  const sharedPractices = [
    {
      id: 1,
      title: 'Contrat familial évolutif',
      author: 'Famille Rousseau',
      likes: 89,
      category: 'Règles',
      description: 'Un système de règles qui s\'adapte à l\'âge et aux réussites des enfants',
      tags: ['Évolutif', 'Collaboration', 'Âge']
    },
    {
      id: 2,
      title: 'Coin lecture numérique',
      author: 'Famille Chen',
      likes: 67,
      category: 'Aménagement',
      description: 'Créer un espace dédié avec liseuses et contenus éducatifs',
      tags: ['Lecture', 'Espace', 'Éducation']
    },
    {
      id: 3,
      title: 'Système de récompenses créatives',
      author: 'Famille Anderson',
      likes: 124,
      category: 'Motivation',
      description: 'Récompenses basées sur la créativité plutôt que sur le temps passé',
      tags: ['Créativité', 'Récompenses', 'Motivation']
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Journée mondiale sans écran',
      date: '2025-02-15',
      time: '00:00',
      participants: 50000,
      type: 'global',
      description: 'Événement mondial de sensibilisation'
    },
    {
      id: 2,
      title: 'Atelier parents-enfants',
      date: '2025-01-25',
      time: '14:00',
      participants: 150,
      type: 'local',
      description: 'Webinaire sur la médiation numérique'
    },
    {
      id: 3,
      title: 'Défi créatif mensuel',
      date: '2025-02-01',
      time: '09:00',
      participants: 2500,
      type: 'challenge',
      description: 'Concours de créations numériques'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      case 'Difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown size={20} className="text-yellow-500" />;
      case 2: return <Medal size={20} className="text-gray-400" />;
      case 3: return <Medal size={20} className="text-amber-600" />;
      default: return <span className="text-gray-600 font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Communauté FamilyGuard</h1>
            <p className="text-purple-100">Connectez-vous avec d'autres familles pour des défis et du partage</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-2xl font-bold">2,654</p>
                <p className="text-sm text-purple-100">Votre score</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-purple-100">Rang global</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('challenges')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'challenges' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Défis collectifs
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'leaderboard' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Classement
          </button>
          <button
            onClick={() => setActiveTab('sharing')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'sharing' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Partage
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'events' 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Événements
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Défis actifs</h2>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Proposer un défi
                </button>
              </div>
              
              <div className="grid gap-4">
                {globalChallenges.map((challenge) => (
                  <div key={challenge.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Target size={20} className="text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{challenge.title}</h3>
                          <p className="text-sm text-gray-600">{challenge.description}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{challenge.participants} participants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{challenge.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award size={14} />
                        <span>{challenge.reward}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${challenge.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{challenge.progress}%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {challenge.startDate} - {challenge.endDate}
                        </span>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        challenge.joined 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}>
                        {challenge.joined ? 'Participez' : 'Rejoindre'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Classement des familles</h2>
              <div className="space-y-3">
                {leaderboard.map((entry) => (
                  <div key={entry.rank} className={`flex items-center justify-between p-4 rounded-lg ${
                    entry.isUser ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10">
                        {getRankIcon(entry.rank)}
                      </div>
                      <div>
                        <p className={`font-semibold ${entry.isUser ? 'text-blue-800' : 'text-gray-800'}`}>
                          {entry.family}
                        </p>
                        <p className="text-sm text-gray-600">{entry.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="font-bold text-gray-800">{entry.score}</p>
                          <p className="text-xs text-gray-500">Points</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-gray-800">{entry.badges}</p>
                          <p className="text-xs text-gray-500">Badges</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-gray-800">{entry.streak}</p>
                          <p className="text-xs text-gray-500">Jours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sharing' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Bonnes pratiques partagées</h2>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Partager une pratique
                </button>
              </div>
              
              <div className="grid gap-4">
                {sharedPractices.map((practice) => (
                  <div key={practice.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{practice.title}</h3>
                        <p className="text-sm text-gray-600">Par {practice.author}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-red-500 hover:text-red-600">
                          <Heart size={16} />
                          <span className="text-sm">{practice.likes}</span>
                        </button>
                        <button className="text-gray-500 hover:text-gray-600">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3">{practice.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {practice.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Voir plus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Événements à venir</h2>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          event.type === 'global' ? 'bg-blue-100' :
                          event.type === 'local' ? 'bg-green-100' :
                          'bg-purple-100'
                        }`}>
                          {event.type === 'global' ? <Globe size={20} className="text-blue-600" /> :
                           event.type === 'local' ? <Users size={20} className="text-green-600" /> :
                           <Trophy size={20} className="text-purple-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">{event.date}</p>
                        <p className="text-sm text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Users size={14} />
                        <span>{event.participants} participants</span>
                      </div>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                        Participer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;