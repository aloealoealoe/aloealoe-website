// Base64-encoded email address (to avoid plaintext-scraping email harvesters)
let encoded = 'Y2xhaXJlQGFsb2VhbG9lc2NpLmNvbQo=';
let decoded = atob(encoded);

// Insert panel below "Email" link in about-me section
// (a bit awkward - but lets us insert into the middle of the Quarto template)
document.querySelector(".about-link[href*='#email']").insertAdjacentHTML("afterend", `
  <div id="email" class="collapse">
    <div id="email-field">
      <span>
        <a rel target href="mailto:${decoded}">${decoded}</a>
      </span>
      <button onclick="copyEmail()"><i class="bi bi-clipboard2"></i></button>
    </div>
  </div>
`);

// Attach attributes to allow "Email" link to expand panel (via Bootstrap)
document.querySelector(".about-link[href*='#email']").setAttribute("data-bs-toggle", "collapse");
document.querySelector(".about-link[href*='#email']").setAttribute("data-bs-target", "#email");


function copyEmail() {
  navigator.clipboard.writeText(decoded);
}
