export function initFaq() {
  document.querySelectorAll<HTMLElement>(".faq-item").forEach((item) => {
    const button = item.querySelector<HTMLButtonElement>("button");
    const content = item.querySelector<HTMLElement>(".faq-content");
    button?.addEventListener("click", () => {
      const open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
      if (content) content.style.maxHeight = open ? content.scrollHeight + "px" : "0px";
    });
  });
}
