import React from 'react';
import Button from '../atoms/button';


interface CardProps {
    title: string;
    content: string;
    onAction: () => void;
}

const Card = ({ title, content, onAction }: CardProps) => {
    return (
        <div className="border p-4 rounded">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2">{content}</p>
            <Button onClick={onAction}>Click Me</Button>
        </div>
    );
};

export default Card;