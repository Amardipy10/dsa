import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Sparkles, 
  Save, 
  Heart, 
  Copy, 
  Trash2, 
  Eye, 
  Github, 
  LogIn, 
  User, 
  Plus,
  Download,
  Shuffle,
  Settings,
  Moon,
  Sun
} from 'lucide-react';

const PalettePro = () => {
  const [user, setUser] = useState(null);
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [savedColors, setSavedColors] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('generate');
  const [visualizerMode, setVisualizerMode] = useState('website');
  const [darkMode, setDarkMode] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  // Sample palettes for demo
  const samplePalettes = [
    ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
    ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'],
    ['#2C3E50', '#34495E', '#7F8C8D', '#BDC3C7', '#ECF0F1', '#FFFFFF'],
    ['#FF9A8B', '#FECFEF', '#FECFEF', '#FFECD2', '#FCB69F', '#FFECD2'],
    ['#667eea', '#764ba2', '#667eea', '#764ba2', '#667eea', '#764ba2']
  ];

  const paletteTypes = [
    'Modern Gradient', 'Monochromatic', 'Corporate', 'Pastel Dream', 
    'Ocean Breeze', 'Sunset Vibes', 'Forest Theme', 'Neon Cyber',
    'Minimal Clean', 'Warm Earth', 'Cool Winter', 'Vintage Retro'
  ];

  // Generate random palette
  const generateRandomPalette = () => {
    const palette = [];
    for (let i = 0; i < 6; i++) {
      const hue = Math.floor(Math.random() * 360);
      const saturation = 50 + Math.floor(Math.random() * 50);
      const lightness = 40 + Math.floor(Math.random() * 40);
      palette.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    return palette;
  };

  // Convert HSL to HEX
  const hslToHex = (hsl) => {
    const match = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (!match) return hsl;
    
    const h = parseInt(match[1]) / 360;
    const s = parseInt(match[2]) / 100;
    const l = parseInt(match[3]) / 100;
    
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = Math.round(hue2rgb(p, q, h + 1/3) * 255);
    const g = Math.round(hue2rgb(p, q, h) * 255);
    const b = Math.round(hue2rgb(p, q, h - 1/3) * 255);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // Generate AI palette (simulated)
  const generateAIPalette = async () => {
    setIsGenerating(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const randomPalette = samplePalettes[Math.floor(Math.random() * samplePalettes.length)];
    setCurrentPalette(randomPalette);
    setIsGenerating(false);
  };

  // Copy color to clipboard
  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    // Show toast notification (simplified)
    alert(`Copied ${color} to clipboard!`);
  };

  // Save palette
  const savePalette = () => {
    if (currentPalette.length === 0) return;
    
    const newPalette = {
      id: Date.now(),
      colors: [...currentPalette],
      name: `Palette ${savedPalettes.length + 1}`,
      liked: false,
      createdAt: new Date().toISOString()
    };
    
    setSavedPalettes([...savedPalettes, newPalette]);
    alert('Palette saved successfully!');
  };

  // Save individual color
  const saveColor = (color) => {
    const newColor = {
      id: Date.now(),
      color: color,
      name: `Color ${savedColors.length + 1}`,
      liked: false,
      createdAt: new Date().toISOString()
    };
    
    setSavedColors([...savedColors, newColor]);
    alert(`Color ${color} saved!`);
  };

  // Toggle like for palette
  const toggleLikePalette = (id) => {
    setSavedPalettes(savedPalettes.map(palette => 
      palette.id === id ? { ...palette, liked: !palette.liked } : palette
    ));
  };

  // Delete palette
  const deletePalette = (id) => {
    setSavedPalettes(savedPalettes.filter(palette => palette.id !== id));
  };

  // Website visualizer component
  const WebsiteVisualizer = ({ colors }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="h-16" style={{ backgroundColor: colors[0] || '#333' }}>
        <div className="flex items-center justify-between h-full px-6">
          <div className="text-white font-bold">Brand</div>
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="h-8 rounded mb-4" style={{ backgroundColor: colors[1] || '#666' }}></div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {colors.slice(2, 5).map((color, index) => (
            <div key={index} className="h-20 rounded" style={{ backgroundColor: color || '#999' }}></div>
          ))}
        </div>
        <div className="h-4 rounded mb-2" style={{ backgroundColor: colors[5] || '#ccc' }}></div>
        <div className="h-4 rounded w-3/4" style={{ backgroundColor: colors[5] || '#ccc' }}></div>
      </div>
    </div>
  );

  // Mobile app visualizer
  const MobileVisualizer = ({ colors }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto">
      <div className="h-12" style={{ backgroundColor: colors[0] || '#333' }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-sm font-bold">App Name</div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {colors.slice(1, 5).map((color, index) => (
            <div key={index} className="h-16 rounded" style={{ backgroundColor: color || '#999' }}></div>
          ))}
        </div>
        <div className="h-8 rounded mb-3" style={{ backgroundColor: colors[5] || '#ccc' }}></div>
        <div className="flex space-x-2">
          <div className="flex-1 h-6 rounded" style={{ backgroundColor: colors[2] || '#888' }}></div>
          <div className="flex-1 h-6 rounded" style={{ backgroundColor: colors[3] || '#888' }}></div>
        </div>
      </div>
    </div>
  );

  // Initialize with a random palette
  useEffect(() => {
    setCurrentPalette(generateRandomPalette());
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Palette className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold">Palette Pro</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              {user ? (
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="text-sm">{user.name}</span>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`border-b transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['generate', 'saved', 'colors'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab === 'generate' && 'Generate'}
                {tab === 'saved' && 'Saved Palettes'}
                {tab === 'colors' && 'Saved Colors'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'generate' && (
            <motion.div
              key="generate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Generator Controls */}
              <div className={`p-6 rounded-xl transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl font-bold">Generate Palette</h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setCurrentPalette(generateRandomPalette())}
                      className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Shuffle className="h-4 w-4" />
                      <span>Random</span>
                    </button>
                    <button
                      onClick={generateAIPalette}
                      disabled={isGenerating}
                      className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors disabled:opacity-50"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>{isGenerating ? 'Generating...' : 'AI Generate'}</span>
                    </button>
                  </div>
                </div>

                {/* Current Palette */}
                {currentPalette.length > 0 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                      {currentPalette.map((color, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="group"
                        >
                          <div
                            className="h-24 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
                            style={{ backgroundColor: color }}
                            onClick={() => copyColor(color)}
                          >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                              <Copy className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                          <div className="mt-2 text-center">
                            <p className="text-sm font-mono">{hslToHex(color)}</p>
                            <button
                              onClick={() => saveColor(color)}
                              className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              Save Color
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={savePalette}
                        className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save Palette</span>
                      </button>
                      <button
                        onClick={() => copyColor(currentPalette.join(', '))}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                        <span>Copy All</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Visualizer */}
              <div className={`p-6 rounded-xl transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Visualizer</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setVisualizerMode('website')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        visualizerMode === 'website'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Website
                    </button>
                    <button
                      onClick={() => setVisualizerMode('mobile')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        visualizerMode === 'mobile'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Mobile
                    </button>
                  </div>
                </div>

                <div className="flex justify-center">
                  {visualizerMode === 'website' ? (
                    <WebsiteVisualizer colors={currentPalette.map(hslToHex)} />
                  ) : (
                    <MobileVisualizer colors={currentPalette.map(hslToHex)} />
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'saved' && (
            <motion.div
              key="saved"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold mb-6">Saved Palettes</h2>
              {savedPalettes.length === 0 ? (
                <div className={`text-center py-12 rounded-xl transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <Palette className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">No saved palettes yet. Generate and save some palettes!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedPalettes.map((palette) => (
                    <motion.div
                      key={palette.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-xl transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                    >
                      <div className="grid grid-cols-6 gap-1 mb-3">
                        {palette.colors.map((color, index) => (
                          <div
                            key={index}
                            className="h-8 rounded cursor-pointer"
                            style={{ backgroundColor: color }}
                            onClick={() => copyColor(color)}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{palette.name}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => toggleLikePalette(palette.id)}
                            className={`p-1 rounded transition-colors ${
                              palette.liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${palette.liked ? 'fill-current' : ''}`} />
                          </button>
                          <button
                            onClick={() => deletePalette(palette.id)}
                            className="p-1 rounded text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'colors' && (
            <motion.div
              key="colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold mb-6">Saved Colors</h2>
              {savedColors.length === 0 ? (
                <div className={`text-center py-12 rounded-xl transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-400 to-blue-400 rounded-full mb-4"></div>
                  <p className="text-gray-500">No saved colors yet. Save some colors from generated palettes!</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {savedColors.map((colorItem) => (
                    <motion.div
                      key={colorItem.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-3 rounded-xl transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                    >
                      <div
                        className="h-20 rounded-lg mb-2 cursor-pointer hover:shadow-md transition-shadow"
                        style={{ backgroundColor: colorItem.color }}
                        onClick={() => copyColor(colorItem.color)}
                      />
                      <p className="text-xs font-mono text-center mb-2">{colorItem.color}</p>
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => copyColor(colorItem.color)}
                          className="p-1 rounded text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => setSavedColors(savedColors.filter(c => c.id !== colorItem.id))}
                          className="p-1 rounded text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Auth Modal */}
      <AnimatePresence>
        {showAuth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowAuth(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`p-8 rounded-xl transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl max-w-md w-full mx-4`}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Sign In to Palette Pro</h2>
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setUser({ name: 'Demo User', email: 'demo@example.com' });
                    setShowAuth(false);
                  }}
                  className="w-full flex items-center justify-center space-x-3 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>Continue with GitHub</span>
                </button>
                <button
                  onClick={() => {
                    setUser({ name: 'Demo User', email: 'demo@example.com' });
                    setShowAuth(false);
                  }}
                  className="w-full flex items-center justify-center space-x-3 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`border-t mt-16 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Made with ❤️ by <span className="font-semibold text-blue-600">Amardip Yadav</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Powered by Gemini AI • Built with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PalettePro;