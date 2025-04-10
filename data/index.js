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
  iconsSummary: [
    {
      iconUrl: "https://www.tiktok.com/@organizacion_ari_hn?",
      iconImg: "fa-brands fa-tiktok",
    },
    {
      iconUrl: "https://www.youtube.com/channel/UCea08yuG74bs6IwPZVUsnxQ",
      iconImg: "fa-brands fa-youtube",
    },
    {
      iconUrl: "https://www.instagram.com/organizacion.ari/",
      iconImg: "fa-brands fa-instagram",
    },
    {
      iconUrl: "https://www.facebook.com/OrganizacionARI",
      iconImg: "fa-brands fa-facebook",
    },
  ],
};

export const getPageContext = (pagePath) => {
  let pageData = {};
  switch (pagePath) {
    case "index.html":
      pageData = {iconsSummary: socialIcons.iconsSummary}
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
  console.log('Context Data:', {
    ...commonData,
    ...pageData,
  });
  return {
    ...commonData,
    ...pageData,
  };
};
