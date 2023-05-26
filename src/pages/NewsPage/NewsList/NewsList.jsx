import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import NewsCard from '../NewsCard/NewsCard.jsx';

import { TitleStyled } from '../../../components/common/Title/Title.styled.js';
import { NewsCardContainer } from '../NewsCard/NewsCard.styled.js';

import getNews from '../../../utils/getNews.js';

import {
  NoticesSearchButton,
  NoticesSearchClearIcon,
  NoticesSearchForm,
  // NoticesSearchIcon,
  NoticesSearchInput,
} from '../../../components/NoticesPageComponents/NoticesSearch/NoticesSearch.styled.js';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [search, setSearch] = useState('');

  const fetchNews = async searchKeyword => {
    try {
      const news = await getNews(searchKeyword);
      const result = news.data;
      const sortedResult = result.sort((a, b) => {
        const first = new Date(a.date).getTime();
        const second = new Date(b.date).getTime();

        return second - first;
      });
      setNews(sortedResult);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // const sortedNews = news.sort(
  //   (a, b) => b.date - a.date || isNaN(b.date) - isNaN(a.date)
  // );
  const handleInputChange = evt => {
    setSearchParams({ query: evt.currentTarget.value.toLowerCase().trim() });
    setSearch(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: search });
  };

  const getFilteredNews = () => {
    if (news) {
      // news.sort(
      //   (a, b) => b.date - a.date || isNaN(b.date) - isNaN(a.date)
      // );
      return news.filter(
        newsItem =>
          newsItem.title.toLowerCase().includes(query) ||
          newsItem.title.toLowerCase().includes(query)
      );
    }
  };

  const filteredNews = getFilteredNews();

  const handleClearSearch = () => {
    setSearchParams('');
  };

  return (
    <>
      <TitleStyled>News</TitleStyled>
      {/*<div className="search-container">*/}
      <NoticesSearchForm onSubmit={handleSubmit}>
        <NoticesSearchInput
          type="text"
          name="query"
          placeholder="Search news..."
          value={query}
          onChange={handleInputChange}
        />
        {!query || (
          <NoticesSearchButton type="button" onClick={handleClearSearch}>
            <NoticesSearchClearIcon></NoticesSearchClearIcon>
          </NoticesSearchButton>
        )}
        {/*<NoticesSearchButton type='submit'>*/}
        {/*  <NoticesSearchIcon></NoticesSearchIcon>*/}
        {/*</NoticesSearchButton>*/}
        {/*{search && (*/}
        {/*  <button className="clear-search-button" onClick={handleClearSearch}>*/}
        {/*    <i className="fa fa-times" aria-hidden="true"></i>*/}
        {/*  </button>*/}
        {/*)}*/}
        {/*<button className="search-button" onClick={handleSubmit}>*/}
        {/*  <i className="fa fa-search" aria-hidden="true"></i>*/}
        {/*</button>*/}
      </NoticesSearchForm>
      {/*</div>*/}
      <NewsCardContainer className="news-container">
        {filteredNews.map(newsItem => (
          <NewsCard key={newsItem.id} news={newsItem} />
        ))}
      </NewsCardContainer>
      {search !== '' && query && news.length === 0 && <p>not found</p>}
    </>
  );
};

export default NewsList;
