let base = process.env.DEPLOY_BASE_URL || "/";
if (!base.endsWith("/")) base += "/";

const commonData = {
  navigation: [
    { url: `${base}index.html`, label: "Inicio" },
    { url: `${base}faq.html`, label: "Faq" },
    { url: `${base}Eventos.html`, label: "Eventos" },
    { url: `${base}help.html`, label: "Ayuda" },
    { url: `${base}contactanos.html`, label: "Contactanos" },
  ],
};

export const getPageContext = (pagePath) => {
  let pageData = {};
  switch (pagePath) {
    case "index.html":
      break;
    case "Eventos.html":
      break;
    case "faq.html":
      break;
    case "aboutus.html":
      break;
    case "contactanos.html":
      break;
    default:
      break;
  }
  return {
    ...commonData,
    ...pageData,
  };
};
