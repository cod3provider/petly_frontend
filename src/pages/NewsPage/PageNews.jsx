import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './App.css';

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    
    fetchNews();
  }, []);

  const fetchNews = async () => {
    
    try {
      const response = await fetch('/news');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = () => {
    
    console.log('Search keyword:', searchKeyword);
    
  };

  const handleClearSearch = () => {
    setSearchKeyword('');
  };

  return (
    <div className="App">
      <h1>News</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search news..."
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
        {searchKeyword && (
          <button className="clear-search-button" onClick={handleClearSearch}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        )}
        <button className="search-button" onClick={handleSearch}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <div className="news-container">
        {news.map((newsItem) => (
          <NewsCard key={newsItem.id} news={newsItem} />
        ))}
      </div>
    </div>
  );
};

export default App;