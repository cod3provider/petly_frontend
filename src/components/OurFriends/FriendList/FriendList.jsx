// import defaultImg from '../../../assets/defaultFriend.png';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardContainer, Title } from './FriendList.styled.js';
import FriendItem from '../FriendItem/FriendItem.jsx';


const FriendList = ({partners}) => {
  return(
    <>
      <Title>Our friends</Title>
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

            // <Card key={_id}>
            //   <FriendLink>{title}</FriendLink>
            //   <CardImage src={imageUrl ?? defaultImg} alt="Logo" />
            //   {/*<p>Час роботи: {partner.workDays}</p>*/}
            //   <ContactLinks>
            //     <Link
            //       to={`/map?address=${encodeURIComponent(address)}`}
            //       target="_blank"
            //     >
            //       Address: {address}
            //     </Link>
            //     <a href={`mailto:${email}`}>
            //       Email:
            //       <span> {email}</span>
            //     </a>
            //     <a href={`tel:${phone}`}>
            //       Телефон:
            //       <span> {phone}</span>
            //     </a>
            //   </ContactLinks>
            //   {/*<button onClick={() => handleWorkingHoursClick(partner.workingHours)}>*/}
            //   {/*  Робочі години*/}
            //   {/*</button>*/}
            // </Card>

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