import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { create } from "zustand";
import { useNavigateWithLoading } from "@/hooks/useNavigateWithLoading";

// ============================================================
// STORE - Sidebar
// ============================================================
const useSidebarStore = create((set) => ({
  isOpen: false,
  toggle: () =>
    set((state) => {
      const next = !state.isOpen;
      document.body.style.overflow = next ? "hidden" : "";
      return { isOpen: next };
    }),
  open: () => {
    document.body.style.overflow = "hidden";
    set({ isOpen: true });
  },
  close: () => {
    document.body.style.overflow = "";
    set({ isOpen: false });
  },
}));

// ============================================================
// DATA
// ============================================================
const aboutList = [
  { name: "Our Story", url: "/about/story" },
  { name: "Our Team", url: "/about/team" },
  { name: "Our Mission", url: "/about/mission" },
  { name: "Careers", url: "/careers" },
];

// ============================================================
// ICONS
// ============================================================
function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function PlaceholderIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

// Ganti value di sini dengan icon component asli milikmu
const solutionIcons = {
  Enterprise: PlaceholderIcon,
  Startup: PlaceholderIcon,
  Government: PlaceholderIcon,
  Education: PlaceholderIcon,
};

// ============================================================
// THEME TOGGLE
// ============================================================
function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative w-10 h-6 rounded-full transition-colors duration-300 focus:outline-none bg-[#2AB857]"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300
          ${isDark ? "translate-x-4" : "translate-x-0"}`}
      />
    </button>
  );
}

// ============================================================
// NAVLINK
// ============================================================
// ============================================================
// NAVLINK — update ini
// ============================================================
function Navlink({ href, target = "_self", className = "", children }) {
  const location = useLocation();
  const navigateTo = useNavigateWithLoading();
  const isExternal = /^https?:\/\//.test(href);
  const isActive = location.pathname === href;

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={`relative inline-block ${className}`}
      >
        {children}
      </a>
    );
  }

  // Gunakan navigateTo, bukan <Link>
  return (
    <button
      onClick={() => navigateTo(href)}
      className={`relative inline-block font-instrument ${isActive ? "font-[700] text-[#EEEEEE]" : "font-[500] text-[#D1D5DB]"} ${className}`}
    >
      {children}
    </button>
  );
}

// ============================================================
// SIMPLE DROPDOWN (About, Products, Technology)
// ============================================================
function SimpleDropdown({ items }) {
  return (
    <div className="absolute left-0 top-full z-50 pt-8">
      <div className="w-full h-auto p-[1px] bg-gradient-to-r from-[#565656]/0 to-[#BCBCBC]/50 rounded-2xl shadow-lg">
        <div className="flex flex-col w-auto p-4 rounded-2xl shadow-lg gap-5 bg-[#1D2426]">
          {items.map((item, index) => (
            <Navlink
              key={index}
              href={item.url}
              className="flex justify-start items-start text-start w-[300px]"
            >
              <span className="text-[15px] font-[500] text-[#FAFAFA]">
                {item.name}
              </span>
            </Navlink>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SOLUTIONS DROPDOWN
// ============================================================
function SolutionsDropdown() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="absolute lg:-left-[400px] xl:-left-[300px] top-full z-50 w-max h-auto pt-8">
      <div className="w-full h-auto p-[1px] bg-gradient-to-r from-[#565656]/0 to-[#BCBCBC]/30 rounded-2xl shadow-lg">
        <div className="w-full h-auto flex flex-col py-6 px-5 rounded-2xl bg-[#1D2426]">
          <div className="w-full h-auto flex mb-4">
            <p className="text-white font-[500] lg:text-[18px]">Solutions</p>
          </div>
          <div className="grid grid-cols-2 w-auto gap-3">
            {SolutionLists.map((solution, index) => {
              const IconComponent =
                solutionIcons[solution.title] ?? PlaceholderIcon;
              return (
                <Navlink
                  key={index}
                  href={solution.url}
                  className="flex justify-start items-start group transition-all duration-300"
                >
                  <div
                    className="w-full h-auto flex flex-row gap-x-3 justify-center items-center p-2 rounded-md transition-colors duration-200"
                    style={{
                      backgroundColor:
                        hoveredIndex === index ? solution.bgColor + "40" : "",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Icon */}
                    <div className="w-fit h-auto flex justify-center items-start">
                      <div
                        className="w-9 h-9 rounded-md flex justify-center items-center p-2"
                        style={{
                          backgroundColor: isDark
                            ? solution.darkBgColor
                            : solution.bgColor,
                          color: isDark
                            ? solution.darkIconColor
                            : solution.iconColor,
                        }}
                      >
                        <IconComponent className="w-full h-full" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="w-full h-auto flex flex-col justify-center items-start">
                      <span className="text-[14px] font-[600] text-transparent bg-clip-text bg-gradient-to-br from-[#FAFAFA] via-[#D4D4D4] to-[#AAAAAA]">
                        {solution.title}
                      </span>
                      <span
                        className="text-[12px] font-[500] transition-colors duration-200"
                        style={{
                          color:
                            hoveredIndex === index
                              ? solution.iconColor
                              : "#9CA3AF",
                        }}
                      >
                        {solution.content}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="w-fit h-auto flex justify-center items-start">
                      <div className="w-9 h-auto rounded-md flex justify-center items-center p-2">
                        <span
                          className="w-full h-full transition-colors duration-200"
                          style={{
                            color:
                              hoveredIndex === index
                                ? solution.iconColor
                                : "#C9C9C9",
                          }}
                        >
                          <ArrowRightIcon className="w-full h-full" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Navlink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MENU NAV
// ============================================================
function MenuNav({ isScrolled }) {
  const navigateTo = useNavigateWithLoading();
  const [hoveringAbout, setHoveringAbout] = useState(false);
  const [hoveringProduct, setHoveringProduct] = useState(false);
  const [hoveringTechnology, setHoveringTechnology] = useState(false);
  const [hoveringSolution, setHoveringSolution] = useState(false);

  const linkClass = `cursor-pointer relative inline-block font-[500] text-[12pt] lg:text-[10pt] xl:text-[12pt]`;
  const plainLinkClass = `text-[12pt] lg:text-[10pt] xl:text-[12pt] font-[500]`;

  return (
    <ul
      className={`w-full h-auto flex flex-row justify-between items-start text-md font-[400] transition-all duration-500 ease-in text-[#DEDEDE]
        ${isScrolled ? "px-20" : " px-20"}`}
    >
      <li>
        <Navlink className={plainLinkClass} href="/">
          Platform
        </Navlink>
      </li>

      <li>
        <Navlink className={plainLinkClass} href="/applications">
          Applications
        </Navlink>
      </li>

      <li>
        <Navlink className={plainLinkClass} href="/science">
          Science
        </Navlink>
      </li>

      <li>
        <Navlink className={plainLinkClass} href="/">
          Developer
        </Navlink>
      </li>

      <li>
        <Navlink className={plainLinkClass} href="/">
          Insight
        </Navlink>
      </li>

      <li>
        <Navlink className={plainLinkClass} href="/">
          Company
        </Navlink>
      </li>

      {/* <li
        className="relative list-none"
        onMouseEnter={() => setHoveringAbout(true)}
        onMouseLeave={() => setHoveringAbout(false)}
      >
        <span className={linkClass}>About ▾</span>
        {hoveringAbout && <SimpleDropdown items={aboutList} />}
      </li> */}
    </ul>
  );
}

// ============================================================
// LOGO — Ganti isi ini dengan <img src={logo} /> jika pakai asset
// ============================================================
function Logo() {
  const navigateTo = useNavigateWithLoading();
  return (
    <div className="flex items-center gap-2" onClick={() => navigateTo("/")}>
      <img src="/logo.svg" alt="" />
    </div>
  );
}

// ============================================================
// NAVBAR — Main Export
// ============================================================
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const openSidebar = useSidebarStore((s) => s.open);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0  w-full z-50 transition-all duration-500 ease-in flex justify-center
        ${isScrolled ? "px-12 pt-4" : "bg-transparent px-0 pt-8"}`}
    >
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex flex-row w-full max-w-[1440px] h-auto transition-all duration-500 ease-in gap-x-4
          ${
            isScrolled
              ? "py-2 px-8 lg:px-6 xl:px-6 rounded-[10px] bg-[#17181A]/50 backdrop-blur-sm border-[0.5px] border-[#DEDEDE] border-[#FAFAFA]/30"
              : "bg-transparent justify-between px-8 lg:px-6 xl:px-12"
          }`}
      >
        {/* Kiri: Logo */}
        <div className="w-[13%] ">
          <Link to="/" className="flex w-full items-center h-full">
            <Logo />
          </Link>
        </div>

        {/* Tengah: Menu */}
        <div className="flex items-center w-[74%] ">
          <nav className="hidden lg:flex items-center w-full justify-center">
            <MenuNav isScrolled={isScrolled} />
          </nav>
        </div>

        {/* Kanan: Theme Toggle */}
        <div className="w-[13%] flex justify-center items-center ">
          <div className="w-full h-auto flex justify-center items-center py-2 bg-[#23DDF6] rounded-md">
            Request Demo
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`flex lg:hidden flex-row w-full h-auto justify-between transition-all duration-500 ease-in
          ${
            isScrolled
              ? "px-4 md:px-10 py-2 rounded-[10px] bg-[#17181A] backdrop-blur-3xl border-[0.5px] border-[#DEDEDE] border-[#FAFAFA]/30"
              : "px-6 sm:px-8 bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Kanan: Theme + Hamburger */}
        <div className="w-[60%] h-auto flex items-center flex-row justify-end">
          <div className="w-auto h-auto ml-4 sm:ml-8 flex items-center justify-end p-[1px] bg-gradient-to-r from-[#17181A] from-45% to-[#565656] rounded-lg">
            <button
              type="button"
              aria-label="Open sidebar menu"
              className="bg-[#323232] p-2 rounded-lg shadow-md text-[#FAFAFA]"
              onClick={openSidebar}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
