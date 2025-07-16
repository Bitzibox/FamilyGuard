import React, { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Wifi, 
  Users, 
  Clock, 
  Shield,
  Smartphone,
  Monitor,
  Gamepad2,
  Tablet,
  Settings,
  Heart
} from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [familyMembers, setFamilyMembers] = useState([
    { name: '', age: '', role: 'child' }
  ]);
  const [detectedDevices, setDetectedDevices] = useState([
    { name: 'iPad Emma', type: 'tablet', detected: true, selected: false },
    { name: 'Nintendo Switch', type: 'gaming', detected: true, selected: false },
    { name: 'Smart TV', type: 'tv', detected: true, selected: false },
    { name: 'iPhone Lucas', type: 'phone', detected: true, selected: false }
  ]);

  const steps = [
    { title: 'Bienvenue', icon: Heart },
    { title: 'Configuration réseau', icon: Wifi },
    { title: 'Famille', icon: Users },
    { title: 'Appareils', icon: Shield },
    { title: 'Règles de base', icon: Clock },
    { title: 'Finalisation', icon: CheckCircle }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, { name: '', age: '', role: 'child' }]);
  };

  const updateFamilyMember = (index: number, field: string, value: string) => {
    const updated = [...familyMembers];
    updated[index][field] = value;
    setFamilyMembers(updated);
  };

  const toggleDevice = (index: number) => {
    const updated = [...detectedDevices];
    updated[index].selected = !updated[index].selected;
    setDetectedDevices(updated);
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'tablet': return <Tablet size={20} className="text-blue-600" />;
      case 'gaming': return <Gamepad2 size={20} className="text-purple-600" />;
      case 'tv': return <Monitor size={20} className="text-green-600" />;
      case 'phone': return <Smartphone size={20} className="text-orange-600" />;
      default: return <Wifi size={20} className="text-gray-600" />;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Shield size={48} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Bienvenue dans FamilyGuard</h2>
              <p className="text-lg text-gray-600 mb-6">
                Votre solution de contrôle parental nouvelle génération
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">Configuration en 3 minutes</p>
                <p className="text-blue-600 text-sm">Aucune compétence technique requise</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <Users size={24} className="text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Universel</h3>
                <p className="text-sm text-gray-600">Tous vos appareils protégés</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <Heart size={24} className="text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Bienveillant</h3>
                <p className="text-sm text-gray-600">Approche positive et éducative</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <Settings size={24} className="text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Simple</h3>
                <p className="text-sm text-gray-600">Configuration automatique</p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Configuration réseau</h2>
              <p className="text-gray-600">Détection automatique de votre réseau domestique</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle size={24} className="text-green-600" />
                <h3 className="font-semibold text-green-800">Réseau détecté avec succès</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Nom du réseau:</span>
                  <span className="font-medium text-gray-800">FamilyHome_WiFi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Signal:</span>
                  <span className="font-medium text-green-600">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sécurité:</span>
                  <span className="font-medium text-gray-800">WPA3</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Prochaines étapes</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Configuration du filtrage intelligent</li>
                <li>• Mise en place des règles de sécurité</li>
                <li>• Synchronisation avec l'application mobile</li>
              </ul>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Votre famille</h2>
              <p className="text-gray-600">Ajoutez les membres de votre famille pour personnaliser les règles</p>
            </div>

            <div className="space-y-4">
              {familyMembers.map((member, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => updateFamilyMember(index, 'name', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
                      <input
                        type="number"
                        value={member.age}
                        onChange={(e) => updateFamilyMember(index, 'age', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Âge"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rôle</label>
                      <select
                        value={member.role}
                        onChange={(e) => updateFamilyMember(index, 'role', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="child">Enfant</option>
                        <option value="teen">Adolescent</option>
                        <option value="parent">Parent</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={addFamilyMember}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700"
            >
              + Ajouter un membre de la famille
            </button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Appareils détectés</h2>
              <p className="text-gray-600">Sélectionnez les appareils à protéger</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detectedDevices.map((device, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    device.selected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => toggleDevice(index)}
                >
                  <div className="flex items-center space-x-3">
                    {getDeviceIcon(device.type)}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{device.name}</h3>
                      <p className="text-sm text-gray-600">
                        {device.type === 'tablet' ? 'Tablette' :
                         device.type === 'gaming' ? 'Console de jeu' :
                         device.type === 'tv' ? 'Télévision' :
                         device.type === 'phone' ? 'Téléphone' : 'Appareil'}
                      </p>
                    </div>
                    {device.selected && (
                      <CheckCircle size={20} className="text-blue-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Détection automatique</h4>
              <p className="text-sm text-green-700">
                {detectedDevices.length} appareils détectés sur votre réseau. 
                Vous pourrez en ajouter d'autres plus tard.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Règles de base</h2>
              <p className="text-gray-600">Définissons ensemble les premières règles familiales</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Temps d'écran quotidien</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jours d'école</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="120">2h par jour</option>
                      <option value="90">1h30 par jour</option>
                      <option value="60">1h par jour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weekend</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="180">3h par jour</option>
                      <option value="150">2h30 par jour</option>
                      <option value="120">2h par jour</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Couvre-feu numérique</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Heure limite en semaine</label>
                    <input
                      type="time"
                      defaultValue="20:00"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Heure limite le weekend</label>
                    <input
                      type="time"
                      defaultValue="21:00"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Contenu autorisé</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm text-gray-700">Contenus éducatifs (toujours autorisés)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm text-gray-700">Outils créatifs (dessin, musique)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Réseaux sociaux (avec limitations)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Personnalisation</h4>
              <p className="text-sm text-blue-700">
                Ces règles pourront être ajustées plus tard avec la participation de toute la famille.
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={48} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Configuration terminée !</h2>
              <p className="text-lg text-gray-600 mb-6">
                Votre système de contrôle parental est maintenant actif
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 mb-4">Récapitulatif</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <p className="font-medium text-gray-700">Famille configurée</p>
                  <p className="text-gray-600">{familyMembers.filter(m => m.name).length} membres</p>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-700">Appareils protégés</p>
                  <p className="text-gray-600">{detectedDevices.filter(d => d.selected).length} appareils</p>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-700">Règles actives</p>
                  <p className="text-gray-600">Temps d'écran + Couvre-feu</p>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-700">Filtrage</p>
                  <p className="text-gray-600">Intelligent et adaptatif</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Prochaines étapes</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Explorez votre tableau de bord familial</li>
                <li>• Créez ensemble votre premier défi</li>
                <li>• Découvrez la communauté FamilyGuard</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle size={20} />
                  ) : (
                    <step.icon size={20} />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-20 h-1 mx-2 ${
                    index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            {steps.map((step, index) => (
              <span key={index} className={index <= currentStep ? 'font-medium' : ''}>
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Précédent
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            <span>{currentStep === steps.length - 1 ? 'Commencer' : 'Suivant'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;