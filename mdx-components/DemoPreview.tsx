import React, { useState, useRef } from 'react';
import { 
  Minus, 
  Plus,
  Maximize,
  Minimize,
  ExternalLink
} from 'lucide-react';

const DEVICE_PRESETS = [
  // Mobile
  { id: 'iphone-14', name: 'iPhone 14', width: '393px', height: '852px' },
  { id: 'galaxy-s23', name: 'Galaxy S23', width: '384px', height: '854px' },
  
  // Tablet
  { id: 'ipad', name: 'iPad', width: '768px', height: '1024px' },
  { id: 'ipad-pro', name: 'iPad Pro', width: '1024px', height: '1366px' },
  
  // Desktop
  { id: 'laptop', name: 'Laptop', width: '1366px', height: '768px' },
  { id: 'full', name: 'Full Width', width: '100%', height: '100%' }
];

const ResponsiveLayout = ({ name, height = "200px" }) => {
  const [zoom, setZoom] = useState(100);
  const [selectedDevice, setSelectedDevice] = useState(DEVICE_PRESETS[5]); // Default to full width
  const [isFullscreen, setIsFullscreen] = useState(false);
  const contentRef = useRef(null);
  const componentRef = useRef(null);

  const handleZoom = (newZoom) => {
    setZoom(newZoom);
    if (contentRef.current) {
      contentRef.current.style.transform = `scale(${newZoom / 100})`;
      contentRef.current.style.transformOrigin = 'top left';
    }
  };

  const handleDeviceChange = (event) => {
    const device = DEVICE_PRESETS.find(d => d.id === event.target.value);
    setSelectedDevice(device || DEVICE_PRESETS[5]);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      componentRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const getContainerHeight = () => {
    if (isFullscreen) return '100vh';
    if (selectedDevice.id === 'full') return height || '100vh';
    return 'auto';
  };

  const dimensions = {
    width: selectedDevice.width,
    height: selectedDevice.height
  };

  return (
    <div 
      ref={componentRef} 
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200" 
      style={{ 
        maxWidth: '100%', 
        margin: '20px auto',
        height: getContainerHeight()
      }}
    >
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-200 pl-4 pr-4 p-1 flex items-center justify-between">
        {/* Device Selection */}
        <div className="flex items-center space-x-3">
          <select 
            value={selectedDevice.id} 
            onChange={handleDeviceChange}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[180px] shadow-sm"
          >
            <optgroup label="Mobile">
              <option value="iphone-14">iPhone 14</option>
              <option value="galaxy-s23">Galaxy S23</option>
            </optgroup>
            <optgroup label="Tablet">
              <option value="ipad">iPad</option>
              <option value="ipad-pro">iPad Pro</option>
            </optgroup>
            <optgroup label="Desktop">
              <option value="laptop">Laptop</option>
              <option value="full">Full Width</option>
            </optgroup>
          </select>
          
          <span className="text-sm text-gray-600 font-medium">
            {dimensions.width} × {dimensions.height}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm">
            <button 
              onClick={() => handleZoom(Math.max(50, zoom - 10))} 
              className="p-2 hover:bg-gray-50 rounded-l-lg transition-colors border-r border-gray-200"
              title="Zoom out"
            >
              <Minus size={16} className="text-gray-600" />
            </button>
            <span className="text-sm font-medium text-gray-600 w-14 text-center">{zoom}%</span>
            <button 
              onClick={() => handleZoom(Math.min(150, zoom + 10))} 
              className="p-2 hover:bg-gray-50 rounded-r-lg transition-colors border-l border-gray-200"
              title="Zoom in"
            >
              <Plus size={16} className="text-gray-600" />
            </button>
          </div>
          
          <button 
            onClick={toggleFullscreen} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 shadow-sm"
            title="Toggle fullscreen"
          >
            {isFullscreen ? 
              <Minimize size={18} className="text-gray-600" /> : 
              <Maximize size={18} className="text-gray-600" />
            }
          </button>

          <a 
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/demo-preview?i=${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Preview</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-gray-100 p-6 overflow-auto flex-grow">
        <div 
          ref={contentRef}
          className="mx-auto"
          style={{ 
            width: dimensions.width,
            height: dimensions.height,
            transition: 'width 0.3s ease, height 0.3s ease'
          }}
        >
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg h-full">
            <iframe
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/demo-preview?i=${name}`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              title="Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;