import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
// import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

import { useState } from 'react';

import {
  // Button,
  Card,
  CardImage,
  ContactLinks,
  FriendName,
  FriendLink,
  ContactsList,
  ContactText, ContactsItem, SpanHours, ContactSpan, HoveredSpan,
} from './FriendItem.styled.js';

import defaultImg from '../../../assets/img/defaultFriend.png';

import WorkingHours from './WorkingHours/WorkingHours.jsx';

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
  const weekDays = ['MN', 'TU', 'WD', 'TH', 'FR', 'ST', 'SN'];


  const workingDays =
          workDays &&
          workDays.map((day, idx) => {
            return {day: weekDays[idx], ...day};
          });

  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Card key={_id}>
        <FriendName href={url}>
          {title}
        </FriendName>

        <ContactLinks>
          <CardImage src={imageUrl ?? defaultImg} alt="Logo" />
            <ContactsList>

              <ContactsItem
                onClick={() => {
                if (workingDays) setIsVisible(!isVisible);
              }}
              >
                <ContactText>Time:</ContactText>
                <SpanHours>{workDays === undefined || workDays === null ? (
                  <>
                    <ContactSpan>day and night</ContactSpan>
                  </>
                ) : (
                  <>
                  {workDays[0]?.isOpen ? (
                      <>
                        <HoveredSpan>
                          {workDays[0].from} - {workDays[0].to}
                        </HoveredSpan>
                      </>
                  ) : (
                      <>
                        <HoveredSpan>
                          closed
                        </HoveredSpan>
                      </>
                    )}
                    {isVisible || <WorkingHours workingDays={workingDays} />}
                  </>
                )}</SpanHours>
              </ContactsItem>

              <ContactsItem>
                <ContactText>Address:</ContactText>
                {map ? (
                  <FriendLink href={map} target='_blank' data-tooltip-id="my-tooltip"
                              data-tooltip-content={address}
                              data-tooltip-place="top">
                    <Tooltip id="my-tooltip" style={{ backgroundColor: "#54ADFF", color: "#FFF" }} />
                    <LinesEllipsis
                      text={address}
                      maxLine='1'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                    />
                  </FriendLink>
                ) : (
                  <ContactSpan>website only</ContactSpan>
                )}
              </ContactsItem>

              <ContactsItem>
                  <ContactText>Email:</ContactText>

                  {email ? (
                    <FriendLink href={`mailto:${email}`}>{email}</FriendLink>
                  ) : (
                    <ContactSpan>website only</ContactSpan>
                  )}
              </ContactsItem>

              <ContactsItem>
                  <ContactText>Phone:</ContactText>
                  {phone ? (
                    <FriendLink href={`tel:${phone}`}>{phone}</FriendLink>
                  ) : (
                    <ContactSpan>email only</ContactSpan>
                  )}
              </ContactsItem>
            </ContactsList>
        </ContactLinks>
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