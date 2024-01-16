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
    const extendedCards = [...cards, ...cards, ...cards];

    return (
        <div className="conveyor-belt">
            <div>
                {extendedCards.map((card, index) => (
                    <div key={`${index}-card-${card.id}`} className="card">{card.content}</div>
                ))}
            </div>
        </div>
    );
};

export default ConveyorBelt;
