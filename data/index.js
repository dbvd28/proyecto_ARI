const base = process.env.DEPLOY_BASE_URL || '/';


const commonData = {
  navigation: [
    { url: `/index.html`, label: 'Inicio' },
    { url: `/faq.html`, label: 'Galería' },
    { url: `/eventos.html`, label: 'Noticias' },
    { url: `/aboutus.html`, label: 'Acerca de FLL' }
  ]
};

export const getPageContext = (pagePath) => {
  let pageData = {};
  switch (pagePath) {
    case '/index.html':
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
