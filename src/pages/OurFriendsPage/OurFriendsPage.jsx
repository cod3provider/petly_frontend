import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  justify-content: space-around;
  margin-top: 10px;
`;

const Friends = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('/api/friends'); // Замінити '/api/friends' на URL бекенду
        const data = await response.json();
        setPartners(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleWorkingHoursClick = (workingHours) => {
    
    alert(`Робочі години: ${workingHours}`);
  };

  return (
    <div>
      <h1>Our friends</h1>
      <CardContainer>
        {partners.map((partner) => (
          <Card key={partner.id}>
            <CardImage src={partner.logo} alt="Logo" />
            <h2>{partner.name}</h2>
            <p>Час роботи: {partner.workingHours}</p>
            <ContactLinks>
              <Link
                to={`/map?address=${encodeURIComponent(partner.address)}`}
                target="_blank"
              >
                Адреса
              </Link>
              <a href={`mailto:${partner.email}`}>Email</a>
              <a href={`tel:${partner.phone}`}>Телефон</a>
            </ContactLinks>
            <button onClick={() => handleWorkingHoursClick(partner.workingHours)}>
              Робочі години
            </button>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default Friends;