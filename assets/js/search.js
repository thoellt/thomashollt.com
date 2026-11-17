// Search palette: ⌘K / Ctrl-K or the search button opens it; type to filter the
// index in search-data.js; arrow keys move, Enter opens, Esc closes.
// Every word typed must occur in the entry (title, keywords, year), ignoring case and accents.
(function () {
  const data = window.searchData;
  if (!data) return;

  const fold = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const entries = data.map((item) => ({ ...item, text: fold([item.title, item.keywords, item.meta].join(" ")) }));

  const dialog = document.createElement("dialog");
  dialog.className = "search";
  dialog.setAttribute("aria-label", "Search");
  dialog.innerHTML = `
    <input type="text" inputmode="search" enterkeyhint="search" placeholder="Search papers, authors, venues, pages…" autocomplete="off" spellcheck="false"
           role="combobox" aria-expanded="true" aria-controls="search-results" aria-autocomplete="list">
    <div class="search-results" id="search-results" role="listbox"></div>
    <p class="search-hints"><span><kbd>↵</kbd> open</span><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>esc</kbd> close</span></p>`;
  document.body.append(dialog);
  const input = dialog.querySelector("input");
  const list = dialog.querySelector(".search-results");
  let shown = [];
  let current = 0;

  function render() {
    const words = fold(input.value).split(/\s+/).filter(Boolean);
    shown = entries.filter((e) => words.every((w) => e.text.includes(w)));
    current = 0;
    let section = null;
    list.innerHTML = "";
    shown.forEach((e, i) => {
      if (e.section !== section) {
        section = e.section;
        const head = document.createElement("p");
        head.className = "search-section";
        head.textContent = section;
        list.append(head);
      }
      const row = document.createElement("div");
      row.className = "search-item";
      row.id = "search-item-" + i;
      row.setAttribute("role", "option");
      row.dataset.index = i;
      row.textContent = e.title;
      if (e.meta) {
        const meta = document.createElement("span");
        meta.className = "search-meta";
        meta.textContent = e.meta;
        row.append(meta);
      }
      list.append(row);
    });
    if (!shown.length) list.innerHTML = '<p class="search-empty">Nothing found.</p>';
    select(0);
  }

  function select(i) {
    if (!shown.length) return;
    current = (i + shown.length) % shown.length;
    list.querySelectorAll(".search-item").forEach((row) => row.setAttribute("aria-selected", row.dataset.index == current));
    const row = list.querySelector(`#search-item-${current}`);
    input.setAttribute("aria-activedescendant", row.id);
    row.scrollIntoView({ block: "nearest" });
  }

  function go(item) {
    dialog.close();
    if (item.action === "theme") document.querySelector(".theme-toggle")?.click();
    else if (item.external) window.open(item.url, "_blank", "noopener");
    else window.location.href = item.url;
  }

  function open() {
    if (dialog.open) return;
    input.value = "";
    render();
    dialog.showModal();
    input.focus();
  }

  input.addEventListener("input", render);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); select(current + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); select(current - 1); }
    else if (e.key === "Enter" && shown.length) { e.preventDefault(); go(shown[current]); }
  });
  list.addEventListener("mousemove", (e) => {
    const row = e.target.closest(".search-item");
    if (row && row.dataset.index != current) select(+row.dataset.index);
  });
  list.addEventListener("click", (e) => {
    const row = e.target.closest(".search-item");
    if (row) go(shown[+row.dataset.index]);
  });
  // a click on the backdrop (outside the box) closes it
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      dialog.open ? dialog.close() : open();
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".search-toggle")) open();
  });

  // show the shortcut the visitor's keyboard actually has
  if (!/Mac|iPhone|iPad/.test(navigator.platform)) {
    document.querySelectorAll(".search-key").forEach((k) => (k.textContent = "Ctrl K"));
  }
})();
