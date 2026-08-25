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
