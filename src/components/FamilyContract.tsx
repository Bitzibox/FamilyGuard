import React, { useState } from 'react';
import { 
  Plus, 
  Edit3, 
  Clock, 
  Globe, 
  Users, 
  Save,
  X,
  Check,
  AlertCircle,
  Lightbulb,
  Calendar,
  Moon,
  Sun
} from 'lucide-react';

const FamilyContract = () => {
  const [activeTab, setActiveTab] = useState('rules');
  const [editingRule, setEditingRule] = useState<number | null>(null);
  const [newRule, setNewRule] = useState({ type: '', description: '', timeSlots: [] });

  const familyRules = [
    {
      id: 1,
      type: 'screen-time',
      title: 'Temps d\'écran quotidien',
      description: 'Maximum 2h par jour en semaine, 3h le weekend',
      members: ['Emma', 'Lucas', 'Sophie'],
      status: 'active',
      createdBy: 'collaborative',
      timeSlots: [
        { start: '16:00', end: '18:00', days: ['lun', 'mar', 'mer', 'jeu', 'ven'] },
        { start: '14:00', end: '17:00', days: ['sam', 'dim'] }
      ]
    },
    {
      id: 2,
      type: 'bedtime',
      title: 'Couvre-feu numérique',
      description: 'Arrêt des écrans 1h avant le coucher',
      members: ['Emma', 'Lucas'],
      status: 'active',
      createdBy: 'parent',
      timeSlots: [
        { start: '20:00', end: '21:00', days: ['lun', 'mar', 'mer', 'jeu', 'ven'] },
        { start: '21:00', end: '22:00', days: ['sam', 'dim'] }
      ]
    },
    {
      id: 3,
      type: 'content',
      title: 'Sites éducatifs privilégiés',
      description: 'Accès libre aux contenus éducatifs et créatifs',
      members: ['Emma', 'Lucas', 'Sophie'],
      status: 'active',
      createdBy: 'collaborative',
      allowedSites: ['khan-academy.org', 'scratch.mit.edu', 'duolingo.com']
    }
  ];

  const scenarios = [
    {
      id: 1,
      name: 'École',
      description: 'Horaires restreints, focus éducatif',
      active: true,
      rules: ['screen-time', 'bedtime', 'content']
    },
    {
      id: 2,
      name: 'Vacances',
      description: 'Horaires flexibles, plus de liberté',
      active: false,
      rules: ['content']
    },
    {
      id: 3,
      name: 'Weekend',
      description: 'Équilibre détente et famille',
      active: false,
      rules: ['bedtime']
    }
  ];

  const aiSuggestions = [
    {
      type: 'optimization',
      title: 'Optimisation détectée',
      description: 'Les enfants respectent bien les créneaux actuels. Vous pourriez envisager d\'étendre de 30 minutes le weekend.',
      confidence: 85
    },
    {
      type: 'alert',
      title: 'Période sensible',
      description: 'Période d\'examens détectée. Suggestion : mode "focus études" avec accès prioritaire aux ressources éducatives.',
      confidence: 92
    },
    {
      type: 'reward',
      title: 'Récompense suggérée',
      description: 'Excellente semaine ! Proposez un "bonus famille" : film ou jeu en famille ce soir.',
      confidence: 78
    }
  ];

  const getRuleIcon = (type: string) => {
    switch (type) {
      case 'screen-time': return <Clock size={20} className="text-blue-600" />;
      case 'bedtime': return <Moon size={20} className="text-purple-600" />;
      case 'content': return <Globe size={20} className="text-green-600" />;
      default: return <AlertCircle size={20} className="text-gray-600" />;
    }
  };

  const getMemberColor = (name: string) => {
    const colors = {
      'Emma': 'bg-pink-100 text-pink-800',
      'Lucas': 'bg-blue-100 text-blue-800',
      'Sophie': 'bg-purple-100 text-purple-800'
    };
    return colors[name] || 'bg-gray-100 text-gray-800';
  };

  const CollaborativeEditor = ({ rule, onSave, onCancel }) => {
    const [editedRule, setEditedRule] = useState(rule);

    return (
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-3">Modification collaborative</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
            <input
              type="text"
              value={editedRule.title}
              onChange={(e) => setEditedRule({ ...editedRule, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={editedRule.description}
              onChange={(e) => setEditedRule({ ...editedRule, description: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSave(editedRule)}
              className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
            >
              <Check size={16} />
              <span>Valider</span>
            </button>
            <button
              onClick={onCancel}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
            >
              <X size={16} />
              <span>Annuler</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Contrat familial numérique</h1>
            <p className="text-gray-600">Créé collaborativement par la famille</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={16} />
            <span>Nouvelle règle</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('rules')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'rules' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Règles actives
          </button>
          <button
            onClick={() => setActiveTab('scenarios')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'scenarios' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Scénarios
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'ai' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            IA éducative
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'rules' && (
            <div className="space-y-4">
              {familyRules.map((rule) => (
                <div key={rule.id} className="border border-gray-200 rounded-lg p-4">
                  {editingRule === rule.id ? (
                    <CollaborativeEditor
                      rule={rule}
                      onSave={(editedRule) => {
                        console.log('Saving rule:', editedRule);
                        setEditingRule(null);
                      }}
                      onCancel={() => setEditingRule(null)}
                    />
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {getRuleIcon(rule.type)}
                          <div>
                            <h3 className="font-semibold text-gray-800">{rule.title}</h3>
                            <p className="text-sm text-gray-600">{rule.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            rule.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {rule.status === 'active' ? 'Active' : 'Inactive'}
                          </span>
                          <button
                            onClick={() => setEditingRule(rule.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Edit3 size={16} className="text-gray-500" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-gray-500" />
                          <span className="text-sm text-gray-600">Concerne :</span>
                          <div className="flex space-x-1">
                            {rule.members.map((member, index) => (
                              <span key={index} className={`px-2 py-1 rounded-full text-xs ${getMemberColor(member)}`}>
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {rule.timeSlots && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Créneaux horaires</h4>
                          <div className="space-y-1">
                            {rule.timeSlots.map((slot, index) => (
                              <div key={index} className="flex items-center space-x-2 text-sm">
                                <Calendar size={14} className="text-gray-500" />
                                <span className="text-gray-600">
                                  {slot.days.join(', ')} : {slot.start} - {slot.end}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                        <span className="text-xs text-gray-500">
                          {rule.createdBy === 'collaborative' 
                            ? 'Créé en collaboration' 
                            : 'Créé par les parents'}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button className="text-sm text-blue-600 hover:text-blue-700">
                            Modifier
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-700">
                            Dupliquer
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'scenarios' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scenarios.map((scenario) => (
                  <div key={scenario.id} className={`p-4 rounded-lg border-2 ${
                    scenario.active 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 bg-white'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{scenario.name}</h3>
                      <div className={`w-3 h-3 rounded-full ${
                        scenario.active ? 'bg-blue-500' : 'bg-gray-300'
                      }`} />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {scenario.rules.length} règles
                      </span>
                      <button className={`px-3 py-1 rounded-md text-sm ${
                        scenario.active 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}>
                        {scenario.active ? 'Actif' : 'Activer'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb size={20} className="text-yellow-500" />
                <h3 className="font-semibold text-gray-800">Suggestions intelligentes</h3>
              </div>
              
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  suggestion.type === 'optimization' ? 'border-blue-200 bg-blue-50' :
                  suggestion.type === 'alert' ? 'border-orange-200 bg-orange-50' :
                  'border-green-200 bg-green-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{suggestion.title}</h4>
                    <span className="text-xs text-gray-500">
                      Confiance : {suggestion.confidence}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      Appliquer
                    </button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300">
                      Plus tard
                    </button>
                    <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200">
                      Ignorer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyContract;