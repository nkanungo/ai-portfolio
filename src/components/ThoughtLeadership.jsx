import React from "react";

const thoughtLeadershipItems = [
  {
    id: "user-journey",
    title: (
      <>
        User Journey
        <br />
        Mapping to Agents
      </>
    ),
    tagline: "MAP · ORCHESTRATE · DELIVER",
    href:
      "https://himadriabm-beep.github.io/Business-User-Journey---Requirement-to-Prototype/",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="18" r="6" stroke="currentColor" strokeWidth="4" />
        <circle cx="16" cy="32" r="6" stroke="currentColor" strokeWidth="4" />
        <circle cx="16" cy="46" r="6" stroke="currentColor" strokeWidth="4" />
        <path
          d="M22 18H42C48 18 48 25 42 25H22"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M22 32H42C48 32 48 39 42 39H22"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    id: "coe",
    title: (
      <>
        Center of
        <br />
        Excellence
      </>
    ),
    tagline: "LEAD · SCALE · ENABLE",
    href: "https://himadriabm-beep.github.io/COE/",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20L32 10L52 20L32 30L12 20Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M12 30L32 40L52 30"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M12 40L32 50L52 40"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    id: "governance",
    title: (
      <>
        AI Native
        <br />
        Governance Model
      </>
    ),
    tagline: "GOVERN · ASSURE · TRUST",
    href: "https://himadriabm-beep.github.io/ai-governance-model/",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 8L50 15V29C50 41 43 50 32 56C21 50 14 41 14 29V15L32 8Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 31L29 36L40 24"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    id: "revenue",
    title: (
      <>
        AI-Based Revenue
        <br />
        Model
      </>
    ),
    tagline: "COMING SOON",
    href: null,
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 46L25 31L35 39L53 18"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 18H53V29"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function ThoughtLeadershipBubble({ item }) {
  const content = (
    <>
      {/* Icon */}
      <div className="mb-5 flex justify-center text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-center text-[18px] font-bold leading-[1.35] text-white sm:text-[19px]">
        {item.title}
      </h3>

      {/* Tagline */}
      <div
        className={
          "mt-3 text-center text-[13px] font-semibold tracking-[0.16em] " +
          (item.href
            ? "text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text"
            : "text-purple-400")
        }
      >
        {item.tagline}
      </div>
    </>
  );

  const commonClasses =
    "group relative flex aspect-square w-full max-w-[240px] flex-col items-center justify-center rounded-full border border-cyan-400/70 bg-[#080d28] px-8 shadow-[0_0_35px_rgba(34,211,238,0.18),0_0_80px_rgba(99,102,241,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.28),0_0_100px_rgba(99,102,241,0.22)]";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
        aria-label={`Open ${item.id}`}
      >
        <div className="pointer-events-none absolute inset-[-1px] rounded-full bg-cyan-400/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10">{content}</div>
      </a>
    );
  }

  return (
    <div className={`${commonClasses} cursor-default`}>
      <div className="relative z-10">{content}</div>
    </div>
  );
}

export default function ThoughtLeadership() {
  return (
    <section
      id="thought-leadership"
      className="relative overflow-hidden bg-[#11153b] py-20 text-white sm:py-24"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Central atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[520px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-[100px]" />

      {/* Cyan glow behind bubbles */}
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-[280px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Thought Leadership
          </h2>

          <p className="mt-5 text-lg font-medium text-slate-400 sm:text-xl">
            Perspectives and prototypes shaping how AI-native organizations operate
          </p>

        </div>

        {/* Bubbles */}
        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {thoughtLeadershipItems.map((item) => (
            <ThoughtLeadershipBubble
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}