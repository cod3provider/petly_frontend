import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import LinesEllipsis from 'react-lines-ellipsis'
// import EllipsisText from "react-ellipsis-text";
import {
  Card,
  CardImage,
  ContactLinks,
  FriendName,
  FriendLink,
  ContactsList,
  ContactText, ContactsItem,
} from './FriendItem.styled.js';

import defaultImg from '../../../assets/defaultFriend.png';

const FriendItem = ({
  _id,
  title,
  url,
  map,
  imageUrl,
  address,
  workDays,
  phone,
  email,
}) => {
  return (
    <>
      <Card key={_id}>
        <FriendName href={url} data-tooltip="text">
          {title}
        </FriendName>

        <ContactLinks>
          <CardImage src={imageUrl ?? defaultImg} alt="Logo" />
          {/*<LinkWrap>*/}
            <ContactsList>
              <ContactsItem>
                <ContactText data-tooltip='Helper text'>Time:</ContactText>
                {/*<p>Час роботи: {workDays}*/}
                  {/*<LinesEllipsis*/}
                  {/*  text={workDays}*/}
                  {/*  maxLine='1'*/}
                  {/*  ellipsis='...'*/}
                  {/*  trimRight*/}
                  {/*  basedOn='letters'*/}
                  {/*/>*/}
                {/*</p>*/}
              </ContactsItem>

              <ContactsItem>
                <FriendLink
                  href={map}
                  target="_blank"
                >
                  <ContactText>Address:</ContactText>
                  {map ? (
                    <FriendLink href={map} target='_blank'>{address}</FriendLink>
                  ) : (
                    <ContactText>website only</ContactText>
                  )}

                  {/*<ContactText>*/}
                  {/*  Address:*/}
                  {/*</ContactText>*/}
                  {/*{address}*/}
                  {/*<LinesEllipsis*/}
                  {/*  text={address}*/}
                  {/*  maxLine='1'*/}
                  {/*  ellipsis='...'*/}
                  {/*  trimRight*/}
                  {/*  basedOn='letters'*/}
                  {/*/>*/}
                  {/*<EllipsisText text={address} length={"5"} />*/}
                </FriendLink>
              </ContactsItem>

              <ContactsItem>
                  <ContactText>Email:</ContactText>
                  {email ? (
                    <FriendLink href={`mailto:${email}`}>{email}</FriendLink>
                  ) : (
                    <ContactText>website only</ContactText>
                  )}
              </ContactsItem>

              <ContactsItem>
                  <ContactText>Phone:</ContactText>
                  {phone ? (
                    <FriendLink href={`tel:${phone}`}>{phone}</FriendLink>
                  ) : (
                    <ContactText>email only</ContactText>
                  )}
              </ContactsItem>
            </ContactsList>
          {/*</LinkWrap>*/}
        </ContactLinks>
        {/*<button onClick={() => handleWorkingHoursClick(partner.workingHours)}>*/}
        {/*  Робочі години*/}
        {/*</button>*/}
      </Card></>
  )
}

export default FriendItem;

FriendItem.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  map: PropTypes.string,
  imageUrl: PropTypes.string,
  address: PropTypes.string,
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
      isOpen: PropTypes.bool,
    })
  ),
  phone: PropTypes.string,
  email: PropTypes.string,
};

// EllipsisText.propTypes = {
//   text: PropTypes.string.isRequired,
//   length: PropTypes.number.isRequired,
//   // tail: PropTypes.string,
//   // tailClassName: PropTypes.string,
//   // tooltip: PropTypes.shape({
//   //   copyOnClick: PropTypes.bool,
//   //   onAppear: PropTypes.func,
//   //   onDisapepear: PropTypes.func
//   // })
// };