import React from 'react';
import './SelectionCard.scss';
import HexIcon, { IconType } from '../../CustomIcons/HexIcon/HexIcon';

interface SelectionCardProps {
  cardId: string;
  cardHeader: string;
  cardDescription?: string;
  color: 'dark' | 'green' | 'purple' | 'blue' | 'red' | 'yellow';
  icon: IconType;
  onClick(selectedId: string): void;
}

function SelectionCard({ cardId, cardHeader, cardDescription, color, icon, onClick }: SelectionCardProps) {
  const clickHandler = () => {
    onClick(cardId);
  };

  return (
    <div className={`selection-card-wrapper ${color}-card ${cardId}-card flex-h-center`} onClick={clickHandler}>
      <div className="card-text">
        <h6>{cardHeader}</h6>
        {cardDescription && <p>{cardDescription}</p>}
      </div>
      <div className="card-hex-icon">
        <HexIcon icon={icon} colorTheme={color} size="regular" />
      </div>
    </div>
  );
}

export default SelectionCard;
