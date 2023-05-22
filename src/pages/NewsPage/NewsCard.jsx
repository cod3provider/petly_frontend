import { NewsItem } from '../../components/News/News.styled.js';


const NewsCard = ({ news }) => {
  // const { date, description, title, url } = news.newItem;
  const handleReadMore = () => {
    window.open(news.url, '_blank');
  };

  return (
    <NewsItem>
      <img src={news.imgUrl} alt='' />
      <h2>{news.title}</h2>
      <p>{news.text}</p>
      <p>{news.date}</p>
      <button className="read-more-button" onClick={handleReadMore}>
        Read more
      </button>
    </NewsItem>
  );
};

export default NewsCard;