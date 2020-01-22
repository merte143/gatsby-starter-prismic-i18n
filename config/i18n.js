const website = require("./website");

module.exports = {
  "de-de": {
    default: true,
    path: "de",
    locale: "de-de",
    siteLanguage: "de",
    ogLang: "de_DE",
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription:
      "Basierend auf gatsby-starter-prismic mit Unterstützung für Lokalisierung (i18n)",
    headline: "Schreiben und Veröffentlichen für LekoArts",
    category: "Kategorie",
    categories: "Kategorien",
    was: "wurde",
    were: "wurden",
    tagged: "markiert mit",
    recent: "Neue",
    projects: "Projekte",
    allCategories: "Alle Kategorien",
    entries: "Einträge"
  },
  "en-us": {
    path: "en",
    locale: "en-us",
    siteLanguage: "en",
    ogLang: "en_US",
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: website.description,
    headline: website.headline,
    category: "Category",
    categories: "Categories",
    was: "was",
    were: "were",
    tagged: "tagged with",
    recent: "Recent",
    projects: "projects",
    allCategories: "All categories",
    entries: "entries"
  }
};
