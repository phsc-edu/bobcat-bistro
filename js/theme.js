/* Auto follows the operating system; Light/Dark override and persist. */
(function () {
  "use strict";
  const key = "bobcat-bistro-theme";
  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll("[data-theme-choice]"));
  let preference = "auto";
  try {
    const saved = localStorage.getItem(key);
    if (saved === "light" || saved === "dark") preference = saved;
  } catch (error) { /* Storage may be unavailable in private browsing. */ }
  function apply(choice) {
    preference = choice;
    if (choice === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", choice);
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.themeChoice === choice)));
  }
  buttons.forEach(button => button.addEventListener("click", function () {
    const choice = button.dataset.themeChoice;
    apply(choice);
    try {
      if (choice === "auto") localStorage.removeItem(key);
      else localStorage.setItem(key, choice);
    } catch (error) { /* Current-page selection still works. */ }
  }));
  apply(preference);
})();
