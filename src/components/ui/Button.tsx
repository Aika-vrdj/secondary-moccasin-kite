'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded transition-colors";
  const variantStyles = {
    primary: "bg-green-500 text-black hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed",
    danger: "bg-red-500 text-black hover:bg-red-400"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
