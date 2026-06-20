/**
 * Button Component
 * Props:
 * - variant: primary | secondary | outline
 * - size: sm | md | lg
 * - disabled: boolean
 * - onClick: function
 */

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-green-600 text-white",
    secondary: "bg-gray-600 text-white",
    outline: "border border-green-600 text-green-600",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-lg transition hover:opacity-90 disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

export default Button;