const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");

if (menuButton instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.removeAttribute("data-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.toggleAttribute("data-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });
}

const preparedContact = document.querySelector("[data-prepared-contact]");
if (preparedContact instanceof HTMLElement) preparedContact.focus();

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm instanceof HTMLFormElement) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[+\d\s().-]{7,24}$/;

  const showError = (field, message) => {
    field.setAttribute("aria-invalid", "true");
    const error = document.createElement("small");
    error.className = "field-error client-field-error";
    error.textContent = message;
    const container = field.closest(".field, .checkbox-field");
    if (container) container.append(error);
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.querySelectorAll(".client-field-error, .client-error-summary, .prepared-contact").forEach((node) => node.remove());
    contactForm.querySelectorAll('[aria-invalid="true"]').forEach((node) => node.removeAttribute("aria-invalid"));

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim().slice(0, 100);
    const company = String(data.get("company") || "").trim().slice(0, 120);
    const email = String(data.get("email") || "").trim().toLowerCase().slice(0, 254);
    const phone = String(data.get("phone") || "").trim().slice(0, 24);
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim().slice(0, 2000);
    const consent = data.get("consent") === "yes";
    const website = String(data.get("website") || "");
    const fields = {
      name: [name.length >= 2, "Escribe tu nombre."],
      email: [emailPattern.test(email), "Escribe un correo válido."],
      phone: [!phone || phonePattern.test(phone), "Revisa el formato del teléfono."],
      service: [Boolean(service), "Selecciona el servicio relacionado."],
      message: [message.length >= 20, "Cuéntanos un poco más; utiliza al menos 20 caracteres."],
      consent: [consent, "Confirma que podemos usar estos datos para responder tu consulta."]
    };

    let firstInvalid;
    for (const [id, [valid, error]] of Object.entries(fields)) {
      if (valid) continue;
      const field = contactForm.elements.namedItem(id);
      if (field instanceof HTMLElement) {
        showError(field, error);
        firstInvalid ||= field;
      }
    }

    if (website || firstInvalid) {
      firstInvalid?.focus();
      return;
    }

    const serviceField = contactForm.elements.namedItem("service");
    const serviceLabel = serviceField instanceof HTMLSelectElement
      ? serviceField.options[serviceField.selectedIndex].text
      : service;
    const preparedMessage = [
      "Hola, RF Consulting.", "",
      `Mi nombre es ${name}${company ? ` y escribo de ${company}` : ""}.`,
      `Servicio de interés: ${serviceLabel}.`, "", message, "",
      `Correo: ${email}${phone ? `\nTeléfono: ${phone}` : ""}`
    ].join("\n");
    const whatsappUrl = `https://wa.me/50761555815?text=${encodeURIComponent(preparedMessage)}`;
    const emailUrl = `mailto:ventas@rfcpty.com?subject=${encodeURIComponent(`Consulta web — ${serviceLabel}`)}&body=${encodeURIComponent(preparedMessage)}`;
    const panel = document.createElement("div");
    panel.className = "prepared-contact";
    panel.tabIndex = -1;
    panel.innerHTML = `<span>Consulta preparada</span><h3>Elige el canal para enviarla.</h3><p>Revisa el mensaje en la aplicación elegida antes de enviarlo.</p><div class="button-group"><a class="button button-signal" href="${whatsappUrl}" target="_blank" rel="external noopener">Abrir WhatsApp <span aria-hidden="true">↗</span></a><a class="button" href="${emailUrl}">Abrir correo <span aria-hidden="true">→</span></a></div>`;
    contactForm.before(panel);
    panel.focus();
  });
}
