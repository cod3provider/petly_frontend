import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip'
// import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis'
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
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const workingDays =
    workDays &&
    workDays.map((day, idx) => {
      return {day: weekDays[idx], ...day};
    });

  console.log(workingDays);

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
                <ContactText>Time:</ContactText>
                {workDays === undefined || workDays === null ? (

                  <>
                  {workDays && workDays[0].isOpen ? (
                      <>
                        <ContactText>
                          {/*{t('friends.time')}*/}
                          Time
                        </ContactText>
                        <p>
                          {workDays[0].from}-{workDays[0].to}
                        </p>
                      </>
                    ) : (
                      <>
                        <ContactText>
                          {/*{t('friends.time')}*/}
                          Time
                        </ContactText>
                        <p>
                          {/*{t('friends.closed')}*/}
                          closed
                        </p>
                      </>
                    )}
                  </>

                ) : (
                      <ContactText>day and night</ContactText>
                  )}

                  {/*<LinesEllipsis*/}
                  {/*  text={workDays}*/}
                  {/*  maxLine='1'*/}
                  {/*  ellipsis='...'*/}
                  {/*  trimRight*/}
                  {/*  basedOn='letters'*/}
                  {/*/>*/}
              </ContactsItem>

              <ContactsItem>
                <ContactText>Address:</ContactText>
                {map ? (
                  <FriendLink href={map} target='_blank' data-tooltip-id="my-tooltip"
                              data-tooltip-content={address}
                              data-tooltip-place="top">
                    <Tooltip id="my-tooltip" />
                    <LinesEllipsis
                      text={address}
                      maxLine='1'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                    />
                  </FriendLink>
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
                {/*</FriendLink>*/}
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