import Image from "next/image";
import { SparkleIcon } from "./icons";

// Gradient label chip that sits above most section headings
export function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#e3ebff] to-[#f3e4ff] px-3.5 py-1.5 text-[13px] font-semibold ${className}`}
    >
      <SparkleIcon />
      {children}
    </span>
  );
}

// Promora-style label: pink → yellow gradient chip
export function WarmPill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(90deg,#fed3f1,#ffe9cc_22%,#fff2bd_50%,#f4f8b5_69%,#f7fe8e)] py-1.5 pr-3 pl-2 text-[14px] font-medium ${className}`}
    >
      <SparkleIcon />
      {children}
    </span>
  );
}

// Dark pill whose label rolls up to a second copy on hover
export function RollButton({ href, className = "", children }) {
  return (
    <a
      href={href}
      className={`group inline-flex h-[57px] items-center justify-center rounded-full bg-[#0b1220] px-6 text-[16px] font-medium text-white transition-colors hover:bg-[#1c2538] hover:text-white ${className}`}
    >
      <span className="relative block h-[27px] overflow-hidden leading-[27px]">
        <span className="block transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span aria-hidden="true" className="block transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:-translate-y-full">
          {children}
        </span>
      </span>
    </a>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`font-display text-[clamp(36px,4.6vw,62px)] leading-none font-bold ${className}`}
    >
      {children}
    </h2>
  );
}

// Solid pill link. `variant` picks the fill; the rest is shared.
export function ButtonLink({ href, variant = "dark", className = "", children, ...rest }) {
  const variants = {
    dark: "bg-[#0b1220] text-white hover:bg-[#1c2538] hover:text-white",
    blue: "bg-[#1447e6] text-white shadow-[0_16px_34px_rgba(20,71,230,.35)] hover:bg-[#0d34b0] hover:text-white",
    light: "bg-white text-[#0b1220] shadow-[0_0_0_1px_#dfe5f2] hover:text-[#0b1220] hover:shadow-[0_0_0_1px_#b6bfcf]",
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

// The white Klux mark on its blue rounded tile
export function LogoMark({ size = 38, radius, className = "" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-[#1447e6] ${className}`}
      style={{ width: size, height: size, borderRadius: radius ?? size * 0.3 }}
    >
      <Image
        src="/images/landing/klux-mark.png"
        alt=""
        width={158}
        height={166}
        style={{ width: size * 0.58, height: "auto" }}
      />
    </span>
  );
}

// Three traffic-light dots on mock app windows
export function WindowDots({ colors = ["#f9a8d4", "#c4b5fd", "#86efac"], size = 9 }) {
  return (
    <div className="flex gap-1.5 px-1 pt-0.5 pb-3">
      {colors.map((c) => (
        <span key={c} className="rounded-full" style={{ width: size, height: size, background: c }} />
      ))}
    </div>
  );
}
