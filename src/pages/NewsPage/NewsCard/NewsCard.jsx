import PropTypes from 'prop-types';
import { NewsItem, Image, TextWrap, FlexWrap, NewsTitle, NewsText } from './NewsCard.styled.js';
import LinesEllipsis from 'react-lines-ellipsis';

const NewsCard = ({ news }) => {
  const { imgUrl, title, text, url, date } = news;

  const handleReadMore = () => {
    window.open(url, '_blank');
  };

  const newDate = new Date(date);
  const formatDate = newDate.toLocaleDateString('en-GB');

  return (
    <NewsItem>
      <Image src={imgUrl} alt='' />
      <TextWrap>
        <NewsTitle>
          <LinesEllipsis
            text={title}
            maxLine='1'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          {/*{title}*/}
        </NewsTitle>
        <NewsText>
          <LinesEllipsis
            text={text}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          {/*{text}*/}
        </NewsText>
        <FlexWrap>
          <p>{formatDate}</p>
          <button className="read-more-button" onClick={handleReadMore}>
            Read more
          </button>
        </FlexWrap>
      </TextWrap>
    </NewsItem>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.shape({
      title: PropTypes.string,
      imgUrl: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
      date: PropTypes.string,
    })
}