

const NewsCard = ({ news }) => {
  const handleReadMore = () => {
    window.open(news.url, '_blank');
  };

  return (
    <div className="news-card">
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <p>{news.date}</p>
      <button className="read-more-button" onClick={handleReadMore}>
        Read more
      </button>
    </div>
  );
};

export default NewsCard;