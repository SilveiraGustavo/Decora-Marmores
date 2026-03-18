type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "outline" | "secondary"
}

export default function Button({ children, variant = "primary" }: ButtonProps) {

  const baseStyle =
    "px-6 py-3 rounded transition-all duration-300 hover:scale-105 active:scale-95 font-semibold"

  const variants = {
    primary: "bg-[#b81716] text-white hover:bg-red-700",
    outline: "border border-[#b81716] text-gray-700 hover:bg-gray-100",
    secondary: "border border-white text-white"
  }

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  )
}