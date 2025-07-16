import React, { useState } from 'react';
import { Pause, Play, AlertCircle } from 'lucide-react';

interface PauseButtonProps {
  isPaused: boolean;
  onToggle: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ isPaused, onToggle }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = () => {
    if (isPaused) {
      onToggle();
    } else {
      setShowConfirmation(true);
    }
  };

  const handleConfirm = () => {
    onToggle();
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          isPaused
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-orange-600 hover:bg-orange-700 text-white'
        }`}
      >
        {isPaused ? (
          <>
            <Play size={16} />
            <span>Reprendre</span>
          </>
        ) : (
          <>
            <Pause size={16} />
            <span>Pause générale</span>
          </>
        )}
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-full">
                <AlertCircle size={24} className="text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Pause générale</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Êtes-vous sûr de vouloir mettre en pause tous les appareils connectés ? 
              Cette action sera immédiatement appliquée à tous les équipements de la famille.
            </p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-orange-800 mb-2">Appareils concernés</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• iPad Emma</li>
                <li>• Nintendo Switch</li>
                <li>• Smart TV Salon</li>
                <li>• iPhone Lucas</li>
              </ul>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleCancel}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Annuler
              </button>
              <button 
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Confirmer la pause
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PauseButton;