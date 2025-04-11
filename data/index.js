let base = process.env.DEPLOY_BASE_URL || "/";
if (!base.endsWith("/")) base += "/";
import { helpcards } from "./pages/helpPage.js";
import { carrouselItems } from "./pages/indexpage.js";
const commonData = {
  navigation: [
    { url: `${base}index.html`, label: "Inicio" },
    { url: `${base}faq.html`, label: "FAQ" },
    { url: `${base}Eventos.html`, label: "Eventos" },
    { label: 'Ayudar',
      children:[
       { url: `${base}help.html`, label: "Como ayudarnos" },
       {url: `${base}donaciones.html`, label: "Donaciones"}
      ]
    },
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
  switch (pagePath.replace(/^\//, "")) {
    case "index.html":
      pageData = { photos: carrouselItems.photos}
      break;
    case "Eventos.html":
      break;
    case "faq.html":
      break;
    case "help.html":
      pageData={cards: helpcards.cards}
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
