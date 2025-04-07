const base = process.env.DEPLOY_BASE_URL || '/';


const commonData = {
  navigation: [
    { url: `${base}index.html`, label: 'Inicio' },
    { url: `/faq.html`, label: 'Faq' },
    { url: `/Eventos.html`, label: 'Eventos' },
    { url: `/aboutus.html`, label: 'Acerca de nosotros' }
  ]
};

export const getPageContext = (pagePath) => {
  let pageData = {};
  switch (pagePath) {
    case 'index.html':
      break;
    case '/Eventos.html':
      break;
    case '/faq.html':
      break;
    case '/aboutus.html':
      break;
    default:
      break;
  }
  return {
    ...commonData,
    ...pageData
  };
};
