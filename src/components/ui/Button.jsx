import React from "react";

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#0F172A] text-white hover:bg-[#1E293B] focus:ring-[#06B6D4]",

    secondary:
      "border border-[#0F172A] text-[#0F172A] hover:bg-[#F8FAFC] focus:ring-[#06B6D4]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;