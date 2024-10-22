import React, { useState, useRef, useEffect } from 'react';
import { Minus, Plus, X, Maximize2, ChevronLeft, ChevronRight, RotateCcw, Search, Menu, Minimize, Maximize } from 'lucide-react';

const ResponsiveLayout = ({ children }) => {
  const [zoom, setZoom] = useState(100);
  const [selectedWidth, setSelectedWidth] = useState('100%');
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

  const handleSelectChange = (event) => {
    setSelectedWidth(event.target.value);
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
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width <= 320) setSelectedWidth('320px');
      else if (width <= 414) setSelectedWidth('414px');
      else if (width <= 576) setSelectedWidth('576px');
      else if (width <= 768) setSelectedWidth('768px');
      else setSelectedWidth('100%');
    };

    window.addEventListener('resize', updateWidth);
    updateWidth(); // Set initial width
    return () => window.removeEventListener('resize', updateWidth);
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

      {/* Toolbar */}
      <div className="bg-gray-100 p-2 flex items-center justify-between">
        <select 
          value={selectedWidth} 
          onChange={handleSelectChange}
          className="p-1 border rounded bg-white text-sm"
        >
          <option value="320px">320px</option>
          <option value="414px">414px</option>
          <option value="576px">576px</option>
          <option value="768px">768px</option>
          <option value="100%">100%</option>
        </select>
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
            width: selectedWidth, 
            maxWidth: '100%', 
            margin: '0 auto', 
            transition: 'width 0.3s ease'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;