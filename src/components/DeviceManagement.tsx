import React, { useState } from 'react';
import { 
  Wifi, 
  Smartphone, 
  Monitor, 
  Gamepad2, 
  Tablet, 
  Watch,
  Plus,
  Settings,
  Pause,
  Play,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Users,
  Edit3
} from 'lucide-react';

const DeviceManagement = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  
  const devices = [
    {
      id: 'ipad-emma',
      name: 'iPad Emma',
      type: 'tablet',
      owner: 'Emma',
      status: 'active',
      lastSeen: '2 min ago',
      screenTime: '2h 35m',
      timeLeft: '1h 25m',
      macAddress: '00:1B:63:84:45:E6',
      ipAddress: '192.168.1.102',
      restrictions: ['social-media', 'gaming'],
      schedule: {
        weekdays: [{ start: '16:00', end: '18:00' }],
        weekends: [{ start: '14:00', end: '17:00' }]
      },
      apps: [
        { name: 'Safari', time: '45m', category: 'browser' },
        { name: 'YouTube', time: '1h 20m', category: 'video' },
        { name: 'Procreate', time: '30m', category: 'creative' }
      ]
    },
    {
      id: 'switch-famille',
      name: 'Nintendo Switch',
      type: 'gaming',
      owner: 'Lucas',
      status: 'paused',
      lastSeen: '5 min ago',
      screenTime: '1h 45m',
      timeLeft: '45m',
      macAddress: '00:1B:63:84:45:E7',
      ipAddress: '192.168.1.103',
      restrictions: ['online-gaming'],
      schedule: {
        weekdays: [{ start: '17:00', end: '18:30' }],
        weekends: [{ start: '14:00', end: '16:00' }]
      },
      apps: [
        { name: 'Super Mario', time: '1h 10m', category: 'gaming' },
        { name: 'Minecraft', time: '35m', category: 'gaming' }
      ]
    },
    {
      id: 'tv-salon',
      name: 'Smart TV Salon',
      type: 'tv',
      owner: 'Famille',
      status: 'active',
      lastSeen: 'now',
      screenTime: '3h 10m',
      timeLeft: 'illimité',
      macAddress: '00:1B:63:84:45:E8',
      ipAddress: '192.168.1.104',
      restrictions: ['adult-content'],
      schedule: {
        weekdays: [{ start: '19:00', end: '21:00' }],
        weekends: [{ start: '14:00', end: '22:00' }]
      },
      apps: [
        { name: 'Netflix', time: '2h 15m', category: 'streaming' },
        { name: 'YouTube', time: '55m', category: 'video' }
      ]
    },
    {
      id: 'iphone-lucas',
      name: 'iPhone Lucas',
      type: 'phone',
      owner: 'Lucas',
      status: 'limited',
      lastSeen: 'now',
      screenTime: '45m',
      timeLeft: '30m',
      macAddress: '00:1B:63:84:45:E9',
      ipAddress: '192.168.1.105',
      restrictions: ['social-media', 'app-store'],
      schedule: {
        weekdays: [{ start: '16:00', end: '17:00' }],
        weekends: [{ start: '14:00', end: '16:00' }]
      },
      apps: [
        { name: 'Messages', time: '20m', category: 'communication' },
        { name: 'Scratch Jr', time: '25m', category: 'education' }
      ]
    }
  ];

  const detectedDevices = [
    { name: 'iPhone Sophie', type: 'phone', macAddress: '00:1B:63:84:45:EA' },
    { name: 'MacBook Pro', type: 'laptop', macAddress: '00:1B:63:84:45:EB' },
    { name: 'Amazon Echo', type: 'smart-speaker', macAddress: '00:1B:63:84:45:EC' }
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'tablet': return <Tablet size={24} className="text-blue-600" />;
      case 'gaming': return <Gamepad2 size={24} className="text-purple-600" />;
      case 'tv': return <Monitor size={24} className="text-green-600" />;
      case 'phone': return <Smartphone size={24} className="text-orange-600" />;
      case 'laptop': return <Monitor size={24} className="text-gray-600" />;
      case 'smart-speaker': return <Wifi size={24} className="text-pink-600" />;
      default: return <Wifi size={24} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-orange-100 text-orange-800';
      case 'limited': return 'bg-yellow-100 text-yellow-800';
      case 'offline': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle size={16} className="text-green-600" />;
      case 'paused': return <Pause size={16} className="text-orange-600" />;
      case 'limited': return <Clock size={16} className="text-yellow-600" />;
      case 'offline': return <AlertTriangle size={16} className="text-gray-600" />;
      default: return <AlertTriangle size={16} className="text-gray-600" />;
    }
  };

  const DeviceDetails = ({ device }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getDeviceIcon(device.type)}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{device.name}</h3>
            <p className="text-sm text-gray-600">Propriétaire: {device.owner}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Edit3 size={16} className="text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Statut:</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
              {device.status === 'active' ? 'Actif' : 
               device.status === 'paused' ? 'En pause' :
               device.status === 'limited' ? 'Limité' : 'Hors ligne'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Dernière activité:</span>
            <span className="text-sm text-gray-600">{device.lastSeen}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Temps aujourd'hui:</span>
            <span className="text-sm text-gray-600">{device.screenTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Temps restant:</span>
            <span className="text-sm text-gray-600">{device.timeLeft}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Adresse MAC:</span>
            <span className="text-sm text-gray-600 font-mono">{device.macAddress}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">IP:</span>
            <span className="text-sm text-gray-600 font-mono">{device.ipAddress}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Restrictions actives</h4>
          <div className="flex flex-wrap gap-2">
            {device.restrictions.map((restriction, index) => (
              <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                {restriction === 'social-media' ? 'Réseaux sociaux' :
                 restriction === 'gaming' ? 'Jeux' :
                 restriction === 'online-gaming' ? 'Jeux en ligne' :
                 restriction === 'adult-content' ? 'Contenu adulte' :
                 restriction === 'app-store' ? 'Boutique d\'apps' :
                 restriction}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-2">Horaires autorisés</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Semaine:</span>
              {device.schedule.weekdays.map((slot, index) => (
                <span key={index} className="text-sm text-gray-800">
                  {slot.start} - {slot.end}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Weekend:</span>
              {device.schedule.weekends.map((slot, index) => (
                <span key={index} className="text-sm text-gray-800">
                  {slot.start} - {slot.end}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-2">Applications utilisées</h4>
          <div className="space-y-2">
            {device.apps.map((app, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-800">{app.name}</span>
                <span className="text-sm text-gray-600">{app.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex space-x-2 mt-6">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Modifier les règles
        </button>
        <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
          Pause immédiate
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gestion des équipements</h1>
            <p className="text-gray-600">Surveillez et contrôlez tous les appareils connectés</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Plus size={16} />
              <span>Ajouter un appareil</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Wifi size={16} />
              <span>Scanner réseau</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Appareils gérés</h2>
          <div className="space-y-3">
            {devices.map((device) => (
              <div
                key={device.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  selectedDevice === device.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setSelectedDevice(device.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getDeviceIcon(device.type)}
                    <div>
                      <h3 className="font-medium text-gray-800">{device.name}</h3>
                      <p className="text-sm text-gray-600">{device.owner}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(device.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
                      {device.status === 'active' ? 'Actif' : 
                       device.status === 'paused' ? 'Pause' :
                       device.status === 'limited' ? 'Limité' : 'Hors ligne'}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                  <span>Temps: {device.screenTime}</span>
                  <span>Restant: {device.timeLeft}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detected Devices */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Appareils détectés</h2>
            <div className="space-y-3">
              {detectedDevices.map((device, index) => (
                <div key={index} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getDeviceIcon(device.type)}
                      <div>
                        <h3 className="font-medium text-gray-800">{device.name}</h3>
                        <p className="text-sm text-gray-600 font-mono">{device.macAddress}</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                      Gérer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device Details */}
        <div>
          {selectedDevice ? (
            <DeviceDetails device={devices.find(d => d.id === selectedDevice)} />
          ) : (
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <Shield size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Sélectionnez un appareil
              </h3>
              <p className="text-gray-500">
                Cliquez sur un appareil pour voir ses détails et le configurer
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceManagement;