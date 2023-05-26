import { getNews, getNewsSerch } from '../../services/newsApi';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { TitleStyled } from './../../components/common/Title/Title.styled.js';
import { NewsCardContainer } from './NewsCard/NewsCard.styled.js';

import NoticesSearch from './../../components/NoticesPageComponents/NoticesSearch/NoticesSearch';
import NoticesPaginationButtons from './../../components/NoticesPageComponents/NoticesPaginationButtons/NoticesPaginationButtons';
import NewsCard from './NewsCard/NewsCard';

const NewNewsPage = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1280);
  const [limit, setLimit] = useState(isWideScreen ? '12' : '10');

  useEffect(() => {
    const resizeHandler = () => {
      setIsWideScreen(window.innerWidth >= 1280);
    };

    resizeHandler();

    if (isWideScreen) {
      setLimit('12');
    } else {
      setLimit('10');
    }

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [isWideScreen]);

  const searchNews = query => {
    setQuery(query);
  };

  useEffect(() => {
    const fetchNewsByQuery = async (query, page, limit) => {
      try {
        const response = await getNewsSerch(query, page, limit);
        setNews(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        toast.error(error.message);
      }
    };

    const fetchNews = async (page, limit) => {
      try {
        const response = await getNews(page, limit);
        setNews(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (query !== '') {
      fetchNewsByQuery(query, page, limit);
    }

    if (query === '') {
      fetchNews(page, limit);
    }
  }, [query, page, limit, isWideScreen]);

  return (
    <>
      <TitleStyled>News</TitleStyled>
      <NoticesSearch onSubmit={searchNews} />
      <NewsCardContainer className="news-container">
        {news.map(newsItem => (
          <NewsCard key={newsItem._id} news={newsItem} />
        ))}
      </NewsCardContainer>

      {!news.length || (
        <NoticesPaginationButtons
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
      {news.length === 0 && <p>not found</p>}
    </>
  );
};

export default NewNewsPage;
