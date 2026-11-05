// Theme toggle (day / evening), remembered across pages.
(function () {
  // the saved theme is applied by the inline script in the head, before the first paint
  const root = document.documentElement;

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    const next = root.dataset.theme === "evening" ? "day" : "evening";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
})();

// Menu on narrow screens: the button folds the nav links in and out.
(function () {
  const header = document.querySelector(".site-header");
  const button = header && header.querySelector(".menu-toggle");
  if (!button) return;
  const set = (open) => {
    header.classList.toggle("menu-open", open);
    button.setAttribute("aria-expanded", open);
  };
  button.addEventListener("click", () => set(!header.classList.contains("menu-open")));
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) || e.target.closest(".site-nav a")) set(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
})();

// Publication filters: one active chip per group (kind / paper type / year).
// Chips that would give an empty list together with the other groups' choices are hidden.
(function () {
  const filters = document.querySelector(".filters");
  if (!filters) return;
  const active = { type: "all", paper: "all", year: "all" };
  const pubs = [...document.querySelectorAll(".year-group .pub")].map((p) => ({
    type: p.dataset.type,
    paper: p.dataset.paper,
    year: p.closest(".year-group").dataset.year,
  }));
  // would any publication remain with `value` chosen in `group` (other groups as they are)?
  const matches = (group, value) =>
    pubs.some((p) => Object.keys(active).every((g) => {
      const want = g === group ? value : active[g];
      return want === "all" || p[g] === want;
    }));

  filters.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const group = chip.dataset.group;
    const value = chip.dataset.value;
    active[group] = active[group] === value ? "all" : value;

    filters.querySelectorAll(`.chip[data-group="${group}"]`).forEach((c) =>
      c.setAttribute("aria-pressed", c.dataset.value === active[group])
    );

    document.querySelectorAll(".year-group").forEach((g) => {
      const yearOk = active.year === "all" || g.dataset.year === active.year;
      let visible = 0;
      g.querySelectorAll(".pub").forEach((p) => {
        const ok =
          yearOk &&
          (active.type === "all" || p.dataset.type === active.type) &&
          (active.paper === "all" || p.dataset.paper === active.paper);
        p.classList.toggle("is-hidden", !ok);
        if (ok) visible++;
      });
      g.classList.toggle("is-empty", visible === 0);
      const count = g.querySelector(".count");
      if (count) count.textContent = visible + (visible === 1 ? " paper" : " papers");
    });

    filters.querySelectorAll(".chip").forEach((c) => {
      const g = c.dataset.group;
      const ok = active[g] === c.dataset.value || matches(g, c.dataset.value);
      c.classList.toggle("is-unavailable", !ok);
    });
  });
})();

// Copy buttons: copy the text of the element named in data-copy.
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;
  const target = document.querySelector(btn.dataset.copy);
  if (!target) return;
  const text = target.tagName === "PRE" ? target.textContent : target.textContent.replace(/\s+/g, " ").trim();
  const label = btn.textContent;
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "Copied";
  } catch {
    btn.textContent = "Copy failed";
  }
  setTimeout(() => (btn.textContent = label), 1500);
});
