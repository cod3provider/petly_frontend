import { useState, useEffect } from 'react';
// import './App.css';
import { useSearchParams } from 'react-router-dom';
import NewsCard from './NewsCard';
import getNews from '../../utils/getNews.js';

import { TitleStyled } from '../../components/Title/Title.styled.js';
import { NewsCardContainer } from '../../components/News/News.styled.js';

const NewsList = () => {
const [news, setNews] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const [searchKeyword, setSearchKeyword] = useState('');
const query = searchParams.get('query') ?? '';
const [filteredNews, setFilteredNews] = useState([]);
const [search, setSearch] = useState(query);
const [currentPage, setCurrentPage] = useState(1);
const [newsPerPage] = useState(6);


  const fetchNews = async searchKeyword => {
    try {
      const news = await getNews(searchKeyword);
      const result = news.data;
      setNews(result);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

    const filterNews = () => {
    if (searchKeyword) {
      const filtered = news.filter((newsItem) =>
        newsItem.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredNews(filtered);
    } else {
      setFilteredNews(news);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleInputChange = (evt) => {
    setSearchParams({ query: evt.currentTarget.value.toLowerCase().trim() });
    setSearch(evt.currentTarget.value.toLowerCase());
  };

    const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    fetchNews(search);
    // console.log('Search keyword:', searchKeyword);
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  const handleSearch = () => {
    
    filterNews();
  };

  // console.log();
  // Отримання поточних новин для відображення на поточній сторінці
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  // Визначення загальної кількості сторінок
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App">
      <h1>News</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
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
        {currentNews.map((newsItem) => (
          <NewsCard key={newsItem.id} news={newsItem} />
        ))}
      </div>
      <div className="pagination">
        <button
          className="prev-page-button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`page-button ${
                pageNumber === currentPage ? 'active' : ''
              }`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className="next-page-button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsList;