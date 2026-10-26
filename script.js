// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("hidden") === false;
  menu.classList.toggle("flex", open);
  menuBtn.setAttribute("aria-expanded", open);
});

menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      menuBtn.setAttribute("aria-expanded", false);
    }
  })
);

// Contact form: send via FormSubmit without leaving the page
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";

  try {
    const res = await fetch(form.action.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    if (!res.ok) throw new Error();
    status.textContent = "Thanks! Your message has been sent.";
    form.reset();
  } catch {
    status.textContent = "Something went wrong. Please email kunjal02mahajan@gmail.com directly.";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
