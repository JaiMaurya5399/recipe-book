import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About'; // Import the About component
import PrivacyPolicy from './PrivacyPolicy'; // Import the Privacy Policy component
import Terms from './Terms'; // Import the Terms component
import Footer from './Footer'; // Import the Footer component

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <Header searchQuery={searchQuery} onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer /> {/* Footer after the routes */}
      </div>
    </Router>
  );
}

export default App;
