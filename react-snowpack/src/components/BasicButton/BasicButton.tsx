import React from 'react';

interface BasicButtonProps {
    onClick: () => void
    name: string
}

const BasicButton: React.FC<BasicButtonProps> = ({ name, onClick }) => (
    <input
        type="button"
        onClick={e => {
            e.preventDefault();
            onClick();
        }}
        value={name}
    />
);

export default BasicButton;