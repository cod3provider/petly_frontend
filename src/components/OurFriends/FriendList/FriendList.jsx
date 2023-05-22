// import defaultImg from '../../../assets/defaultFriend.png';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardContainer } from './FriendList.styled.js';
import FriendItem from '../FriendItem/FriendItem.jsx';
import { TitleStyled } from '../../Title/Title.styled.js';


const FriendList = ({partners}) => {
  return(
    <>
      <TitleStyled>Our friends</TitleStyled>
      <CardContainer>
        {partners.map(
          ({
             _id,
             title,
             url,
             addressUrl,
             imageUrl,
             address,
             workDays,
             phone,
             email,
           }) => (
             <FriendItem key={_id}
                         title={title}
                         url={url}
                         map={addressUrl}
                         imageUrl={imageUrl}
                         address={address}
                         workDays={workDays}
                         phone={phone}
                         email={email}
             />
          )
        )}
      </CardContainer>
    </>
  )
}

export default FriendList;

FriendList.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      addressUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      address: PropTypes.string,
      workDays: PropTypes.array,
      phone: PropTypes.string,
      email: PropTypes.string,
    })
  )
}