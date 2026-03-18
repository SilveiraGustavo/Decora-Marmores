import React from "react";

type ButtonProps<T extends React.ElementType> = {
  children: React.ReactNode
  variant?: "primary" | "outline" | "secondary" | "ghost"
  as?: T
} & React.ComponentPropsWithoutRef<T>

export default function Button<T extends React.ElementType = "button">({
  children,
  variant = "primary",
  as,
  ...props
}: ButtonProps<T>) {

  const Component = as || "button";

  const baseStyle =
    "inline-block px-6 py-3 rounded transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-center"

  const variants = {
    primary: "bg-[#b81716] text-white hover:bg-red-700",
    outline: "border border-[#b81716] text-gray-700 hover:bg-gray-100",
    secondary: "border border-white text-white",
    ghost: "inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition font-semibold"
  }

  return (
    <Component
      className={`${baseStyle} ${variants[variant]}`}
      {...props}
    >
      {children}
    </Component>
  );
}