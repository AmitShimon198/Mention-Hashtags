import React from 'react';
import './ConveyorBelt.css';

interface Card {
    id: number;
    content: string;
}

interface ConveyorBeltProps {
    cards: Card[];
}

const ConveyorBelt: React.FC<ConveyorBeltProps> = ({ cards }) => {
    const duplicatedCards = [...cards, ...cards];

    return (
        <div className="conveyor-belt">
            <div>
                {duplicatedCards.map((card, index) => (
                    <div key={`${index}-card-${card.id}`}>{card.content}</div>
                ))}
            </div>
        </div>
    );
};

export default ConveyorBelt;
