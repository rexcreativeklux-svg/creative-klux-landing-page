"use client";

import { SUPPORT_EMAIL } from "./content";

// Email pill from Promora's footer. There is no newsletter backend yet, so a
// submit opens the visitor's mail app with a pre-filled request to support.
export default function FooterSignup() {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const subject = encodeURIComponent("Keep me posted on Creativeklux");
    const body = encodeURIComponent(`Please add ${email} to Creativeklux updates.`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-[290px] items-center rounded-full border border-[#ededed] bg-white p-1">
      <label className="min-w-0 flex-1 pl-4">
        <span className="sr-only">Your email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full bg-transparent text-[14px] outline-none placeholder:text-[#576470]"
        />
      </label>
      <button
        type="submit"
        className="cursor-pointer rounded-full bg-[#0b1220] px-5 py-2.5 text-[16px] font-medium text-white transition-colors hover:bg-[#1c2538]"
      >
        Submit
      </button>
    </form>
  );
}
