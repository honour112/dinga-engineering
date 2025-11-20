import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-dark hover:bg-brand-gold shadow-[0_0_20px_rgba(255,195,0,0.3)]",
    secondary: "bg-brand-navy text-white hover:bg-brand-blue border border-white/10",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    ghost: "text-brand-navy hover:bg-brand-navy/5",
    white: "bg-white text-brand-dark hover:bg-gray-100 shadow-lg"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (external) {
      return (
        <a href={to} className={combinedStyles} target="_blank" rel="noopener noreferrer">
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </a>
      );
    }
    return (
      <Link to={to} className={combinedStyles}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};