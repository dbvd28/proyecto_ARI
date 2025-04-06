const base = import.meta.env.BASE_URL || '';

const commonData = {
  navigation: [
    { url: `${base}index.html`, label: 'Inicio' },
    { url: `${base}faq.html`, label: 'Galería' },
    { url: `${base}eventos.html`, label: 'Noticias' },
    { url: `${base}aboutus.html`, label: 'Acerca de FLL' }
  ]
};

export const getPageContext = (pagePath) => {
  let pageData = {};
  switch (pagePath) {
    case './index.html':
      break;
    case './Eventos.html':
      break;
    case './faq.html':
      break;
    case './aboutus.html':
      break;
    default:
      break;
  }
  return {
    ...commonData,
    ...pageData
  };
};
