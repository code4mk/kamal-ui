import React, { useState, useRef, useEffect } from 'react';
import { Minus, Plus, X, Maximize2, ChevronLeft, ChevronRight, RotateCcw, Search, Menu, Minimize, Maximize } from 'lucide-react';
import Iframe from 'react-iframe'

// Device presets with dimensions and display names
const DEVICE_PRESETS = [
  { id: 'mobile-s', name: 'Mobile S', width: '320px', height: '568px', displayName: 'iPhone SE' },
  { id: 'mobile-m', name: 'Mobile M', width: '375px', height: '667px', displayName: 'iPhone 12/13' },
  { id: 'mobile-l', name: 'Mobile L', width: '414px', height: '736px', displayName: 'iPhone 8 Plus' },
  { id: 'tablet', name: 'Tablet', width: '768px', height: '1024px', displayName: 'iPad Mini' },
  { id: 'laptop', name: 'Laptop', width: '1024px', height: '768px', displayName: 'Laptop' },
  { id: 'laptop-l', name: 'Laptop L', width: '1440px', height: '900px', displayName: 'Large Laptop' },
  { id: 'full', name: 'Full Width', width: '100%', height: '100%', displayName: 'Full Width' }
];

const ResponsiveLayout = ({ name, height="" }) => {
  const [zoom, setZoom] = useState(100);
  const [selectedDevice, setSelectedDevice] = useState(DEVICE_PRESETS[6]); // Default to full width
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
    setSelectedDevice(device || DEVICE_PRESETS[6]);
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

  useEffect(() => {
    const updateDeviceByScreenSize = () => {
      const width = window.innerWidth;
      let newDevice;
      
      if (width <= 320) newDevice = DEVICE_PRESETS[0];
      else if (width <= 375) newDevice = DEVICE_PRESETS[1];
      else if (width <= 414) newDevice = DEVICE_PRESETS[2];
      else if (width <= 768) newDevice = DEVICE_PRESETS[3];
      else if (width <= 1024) newDevice = DEVICE_PRESETS[4];
      else if (width <= 1440) newDevice = DEVICE_PRESETS[5];
      else newDevice = DEVICE_PRESETS[6];

      setSelectedDevice(newDevice);
    };

    window.addEventListener('resize', updateDeviceByScreenSize);
    updateDeviceByScreenSize(); // Set initial device
    return () => window.removeEventListener('resize', updateDeviceByScreenSize);
  }, []);

  return (
    <div ref={componentRef} className="flex flex-col bg-gray-200 rounded-lg overflow-hidden shadow-xl" style={{ maxWidth: '100%', margin: '20px auto', height: isFullscreen ? '100vh' : 'auto' }}>
      {/* Browser chrome */}
      <div className="bg-gray-300 p-2 flex items-center space-x-2">
        <div className="flex space-x-2">
          <button className="w-3 h-3 rounded-full bg-red-500" />
          <button className="w-3 h-3 rounded-full bg-yellow-500" />
          <button className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-grow flex items-center space-x-2 bg-white rounded px-2 py-1">
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
          <RotateCcw size={16} />
          <div className="flex-grow bg-gray-100 rounded px-2 py-1 text-sm flex items-center">
            <Search size={14} className="mr-2" />
            example.com
          </div>
        </div>
        <Menu size={20} />
      </div>

      {/* Toolbar with device selection */}
      <div className="bg-gray-100 p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <select 
            value={selectedDevice.id} 
            onChange={handleDeviceChange}
            className="p-1 border rounded bg-white text-sm"
          >
            {DEVICE_PRESETS.map(device => (
              <option key={device.id} value={device.id}>
                {device.displayName} ({device.width} × {device.height})
              </option>
            ))}
          </select>
          <span className="text-xs text-gray-500">
            {selectedDevice.width} × {selectedDevice.height}
          </span>

          <div>
            <a 
              target="_blank" 
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/demo-preview?i=${name}`}>
              Go to preview
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => handleZoom(Math.max(50, zoom - 10))} className="p-1 bg-white rounded shadow">
            <Minus size={16} />
          </button>
          <span className="text-sm">{zoom}%</span>
          <button onClick={() => handleZoom(Math.min(150, zoom + 10))} className="p-1 bg-white rounded shadow">
            <Plus size={16} />
          </button>
          <button onClick={toggleFullscreen} className="p-1 bg-white rounded shadow ml-2">
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="bg-white p-4 overflow-auto flex-grow">
        <div 
          ref={contentRef}
          style={{ 
            width: selectedDevice.width,
            maxWidth: '100%', 
            margin: '0 auto', 
            transition: 'width 0.3s ease'
          }}
        >
          <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-auto">
            <Iframe 
              url={`${process.env.NEXT_PUBLIC_BASE_URL}/demo-preview?i=${name}`}
              width={selectedDevice.width}
              height={selectedDevice.height}
              id=""
              
            />

          {/* <iframe
            src={`http://localhost:3000/demo-preview?i=${name}`}
            width={selectedDevice.width}
            height={selectedDevice.height}
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;