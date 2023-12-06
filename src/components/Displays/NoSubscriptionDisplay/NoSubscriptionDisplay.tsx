import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectionCard from '../../Cards/SelectionCard/SelectionCard';

interface NoSubscriptionDisplayProps {
  accountType: 'personal' | 'school' | any;
}

const cardList = {
  personal: [
    {
      cardId: 'browse',
      cardHeader: 'I want to browse the Site',
      cardDescription: 'Browse the free research and resources',
      color: 'green',
      icon: 'home',
    },
    {
      cardId: 'subscribe',
      cardHeader: 'I want to Subscribe to a Subsite',
      cardDescription: 'Select a Subsite on the left to Subscribe to',
      color: 'red',
      icon: 'tag',
    },
    {
      cardId: 'activate',
      cardHeader: 'I want to activate a Licence',
      cardDescription: 'Activate a Licence that has been assigned to you',
      color: 'purple',
      icon: 'key-outline',
    },
  ],
  school: [
    {
      cardId: 'browse',
      cardHeader: 'I want to browse the Site',
      cardDescription: 'Browse the free research and resources',
      color: 'green',
      icon: 'home',
    },
    {
      cardId: 'subscribe',
      cardHeader: 'I want to subscribe as a School to a subsite',
      cardDescription: 'Select a Subsite on the left to Subscribe to',
      color: 'red',
      icon: 'tag',
    },
  ],
};

function NoSubscriptionDisplay({ accountType }: NoSubscriptionDisplayProps) {
  const navigate = useNavigate();

  const handleCardClick = (cardId: string) => {
    switch (cardId) {
      case 'browse': {
        navigate('/');
        break;
      }
      case 'subscribe': {
        // navigate('/pricing'); // last time
        navigate('/subscription/tr');
        break;
      }
      case 'activate': {
        navigate('/subscription/tr/activatelicence');
        break;
      }
    }
  };

  const getCards = () => {
    if (accountType === 'personal') {
      return cardList.personal.map((item: any, key: number) => <SelectionCard key={key} {...item} onClick={handleCardClick} />);
    } else {
      return cardList.school.map((item: any, key: number) => <SelectionCard key={key} {...item} onClick={handleCardClick} />);
    }
  };
  return (
    <div className="w-100 flex flex-col" style={{ gap: '2rem' }}>
      <>{getCards()}</>
    </div>
  );
}

export default NoSubscriptionDisplay;
