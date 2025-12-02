"use client"

import { ArrowRight } from "lucide-react"

export default function ButtonCTA({ href, children, variant = "primary", icon = true }) {
  const baseClass = "inline-flex items-center gap-2 font-semibold transition-all duration-200 rounded-lg px-6 py-3"

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:translate-y-[-2px]",
    secondary: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-50",
  }

  const finalClass = `${baseClass} ${variants[variant]}`

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={finalClass}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    )
  }

  return (
    <a href={href} className={finalClass}>
      {children}
      {icon && <ArrowRight size={18} />}
    </a>
  )
}
