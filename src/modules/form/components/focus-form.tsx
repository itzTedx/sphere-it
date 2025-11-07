"use client";

import { IconArrowRight } from "@/assets/icons";

export const FocusForm = () => {
  function handleClick() {
    const nameInput = document.getElementById("name");
    if (nameInput) {
      nameInput.focus();
      nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <button
      aria-label="Go to inquiry form"
      className="group flex w-full cursor-pointer items-center justify-between p-3"
      onClick={handleClick}
      type="button"
    >
      <div className="min-w-0 flex-1 text-start">
        <label className="font-mono text-badge text-muted-background uppercase" htmlFor="inquiry-form">
          Form
        </label>
        <p className="text-base sm:text-lg" id="inquiry-form">
          Submit an inquiry
        </p>
      </div>
      <div className="inline-flex size-9 items-center justify-center rounded-full bg-stone-alpha-10 transition-colors group-hover:bg-stone-300 group-hover:text-foreground">
        <IconArrowRight className="flex-shrink-0 text-stone-400" />
      </div>
    </button>
  );
};
