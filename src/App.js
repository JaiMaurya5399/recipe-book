import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header searchQuery={searchQuery} onSearch={handleSearch} />
      <Home searchQuery={searchQuery} /> {/* Passing searchQuery prop */}
    </div>
  );
}

export default App;
