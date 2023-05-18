import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import getFriends from '../../utils/getFriends.js';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10px;
`;

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
    <div>
      <h1>Our friends</h1>
      <CardContainer>
        {partners.map(({ _id, imageUrl, title, address, email, phone }) => (
          <Card key={_id}>
            <CardImage src={imageUrl} alt="Logo" />
            <h2>{title}</h2>
            {/*<p>Час роботи: {partner.workDays}</p>*/}
            <ContactLinks>
              <Link
                to={`/map?address=${encodeURIComponent(address)}`}
                target="_blank"
              >
                Address: {address}
              </Link>
              <a href={`mailto:${email}`}>
                Email:
                <span> {email}</span>
              </a>
              <a href={`tel:${phone}`}>
                Телефон:
                <span> {phone}</span>
              </a>
            </ContactLinks>
            {/*<button onClick={() => handleWorkingHoursClick(partner.workingHours)}>*/}
            {/*  Робочі години*/}
            {/*</button>*/}
          </Card>
        ))}
      </CardContainer>
    </div>
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
