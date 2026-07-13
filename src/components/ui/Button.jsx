import React from "react";
import { cn } from "../../utils/cn";

const variantClasses = {
  primary: "bg-primary-container text-on-primary-container border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none brutalist-button-shadow cursor-pointer",
  secondary: "bg-secondary text-on-secondary-container border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none brutalist-button-shadow cursor-pointer",
  outline: "bg-transparent text-secondary border-2 border-secondary hover:bg-secondary hover:text-on-secondary",
  ghost: "border-2 border-outline-variant hover:bg-primary hover:text-on-primary hover:border-black cursor-pointer"
};

const sizeClasses = {
  sm: "text-label-caps font-label-caps px-md py-xs",
  md: "font-display-lg font-black text-headline-md px-lg py-sm uppercase",
  lg: "font-display-lg font-black text-headline-lg px-xl py-md uppercase"
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center font-display-lg transition-all",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
