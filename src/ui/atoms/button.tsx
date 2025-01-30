import React from 'react';

interface ButtonProps {
    children: React.ReactNode; // Content inside the button
    onClick?: () => void; // Click handler
    type?: 'button' | 'submit' | 'reset'; // Button type
    disabled?: boolean; // Disabled state
    className?: string; // Custom CSS classes
    variant?: 'primary' | 'secondary' | 'outline'; // Button variant
    size?: 'sm' | 'md' | 'lg'; // Button size
}

/**
 * Button Component
 * 
 * A reusable and customizable button component for your application.
 * 
 * @param {ButtonProps} props - Props for the button.
 * @returns {JSX.Element} - A styled and accessible button.
 */
const Button = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    variant = 'primary',
    size = 'md',
}: ButtonProps) => {
    // Define base styles
    const baseStyles = 'font-semibold rounded transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Define variant styles
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
        outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500',
    };

    // Define size styles
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedStyles}
            aria-disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;