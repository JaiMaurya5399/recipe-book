import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'; // Import the Footer component

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header searchQuery={searchQuery} onSearch={handleSearch} />
      <Home searchQuery={searchQuery} />
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
