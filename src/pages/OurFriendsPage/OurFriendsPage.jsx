import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { theme } from '../../utils/theme.jsx';

import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
import FriendList from '../../components/OurFriends/FriendList/FriendList.jsx';

import getFriends from '../../utils/getFriends.js';



// const TitleStyled = styled.h1`
//   margin: 40px 0 25px;
//
//   @media ${theme.breakpoints.tablet.media} {
//     margin: 80px 0 60px;
//   }
//
//   @media ${theme.breakpoints.desktop.media} {
//     margin: 80px 0 60px;
//   }
// `;

// const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
//
//   @media (max-width: 1279px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//
//   @media (max-width: 767px) {
//     grid-template-columns: 1fr;
//   }
// `;
//
// const Card = styled.div`
//   //border: 1px solid #ccc;
//   padding: 15px 30px;
//   text-align: center;
//   background: #ffffff;
//   box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
//   border-radius: 40px;
//
//   //@media (max-width: 767px) {
//   //  width: 360px;
//   //  height: 250px;
//   //  margin: 0 auto;
//   //}
// `;
//
// const CardImage = styled.img`
//   width: 100px;
//   height: auto;
//   //object-fit: cover;
//
//   @media ${theme.breakpoints.tablet.media} {
//     width: 125px;
//   }
//
//   @media ${theme.breakpoints.desktop.media} {
//     width: 145px;
//   }
// `;
//
// const FriendLink = styled.a`
//   font-weight: 700;
//   font-size: ${theme.fontSizes.ml};
//   line-height: 1.35;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${theme.baseColors.accentColor};
//   transition: all 250ms linear;
//
// //  ADD HOVER <-
// `;
//
// const ContactLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   margin-top: 10px;
//   color: #111111;
// `;

const Friends = () => {
  // const [friends, setFriends] = useState([]);
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFriends()
      .then(response => {
        setPartners(response);
      })
      .catch(error => setError(error.message));
  }, []);

  // const handleWorkingHoursClick = (workingHours) => {
  //
  //   alert(`Робочі години: ${workingHours}`);
  // };

  return (
    <ContainerStyled>
      <FriendList partners={partners} />
    </ContainerStyled>
  );
};

export default Friends;

// import { Helmet, HelmetProvider } from 'react-helmet-async';

// export default function OurFriendsPage() {
//   return (
//     <HelmetProvider>
//       <div>
//         <Helmet>
//           <title>OurFriendsPage</title>
//         </Helmet>
//         <h1>Hello Pasha це сторінка OurFriendsPage</h1>
//       </div>
//     </HelmetProvider>
//   );
// }
