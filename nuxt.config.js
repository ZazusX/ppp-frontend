export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "PPP - home",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "PPP ist eine Kooperation der unabhängigen Kanzleien Polak & Partner sowie Preslmayr Rechtsanwälte. ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/assets/fonts/fonts.css" },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/styles.css" },
    ],
    script: [
      { type: "text/javascript", src: "/assets/js/setup.js", body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/i18n",
    // {
    //   locales: ["de", "en"],
    //   defaultLocale: "de",
    // },
  ],

  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    parsePages: false,
    pages: {
      "kanzlei/index": {
        de: "/kanzlei/:slug",
        en: "/law-firm/:slug",
      },
      "team/index": {
        de: "/team/:slug",
        en: "/team-en/:slug",
      },
      "rechtsgebiete/index": {
        de: "/rechtsgebiete/:slug",
        en: "/law-area/:slug",
      },
      "karriere/index": {
        de: "/karriere/:slug",
        en: "/career/:slug",
      },
      "news/index": {
        de: "/news",
        en: "/news",
      },
      kontakt: {
        de: "/kontakt",
        en: "/contact",
      },
      impressum: {
        de: "/impressum",
        en: "/imprint",
      },
      agb: {
        de: "/agb",
        en: "/t-and-c",
      },
      datenschutzerklaerung: {
        de: "/datenschutzrechtliche-aufkl-ae-rung",
        en: "/data-protection-clarification",
      },
    },
    vueI18n: {
      fallbackLocale: "de",
      messages: {
        de: {
          the_firm: "KANZLEI",
          the_team: "TEAM",
          the_areas: "RECHTSGEBIETE",
          the_career: "KARRIERE",
          the_news:"NEWS",
          werdegang: "WERDEGANG",
          publikationen:"PUBLIKATIONEN",
          beispiele:"BEISPIELE",
          ppp: "Als Wirtschaftsanwälte haben wir vieles erreicht. Jetzt wollen wir weitergeben, was <br>uns erfolgreich gemacht hat.",
          kanzlei:
            "Wer wir sind, sieht man an denen, die <br />uns ihr Vertrauen schenken über viele Jahre<br />und Jahrzehnte.",
          team: "Es teamworkt. Horizontal wie vertikal: wir hieven einander höher. Die Gedankenbälle fliegen wie beim Vierertischtennis.",
          rechtsgebiete:
            "Spezialistentum beginnt aus Zufall, wächst durch Erfahrung und endet in nicht immer nachvollziehbarer Begeisterung.",
          karriere:
            "Egal wo Sie „einmal hin wollen“ – wir <br />sind die Kaderschmiede für die Top- Wirtschaftsanwält*innen von Morgen.",
          kontakt: "KONTAKT",
          impressum: "IMPRESSUM",
          agb: "AGB",
          datenschutz: "DATENSCHUTZERKLÄRUNG",
        },
        en: {
          the_firm: "THE FIRM",
          the_team: "THE TEAM",
          the_areas: "THE AREAS OF <br />EXPERTISE",
          the_career: "YOUR CAREER",
          the_news:"NEWS",
          werdegang: "CAREER",
          publikationen:"PUBLICATIONS",
          beispiele:"EXAMPLES",
          ppp: "As corporate attorneys, we have achieved <br />a great deal.  Now, it’s time to pass on what<br /> has made us successful.",
          kanzlei:'“Who we are” is reflected by<br />  those who have placed their trust in us.  <br />Not just for years, but for decades',
          team: "It's all about <br /> teamwork. <br /> Both horizontally and <br /> vertically: we lift each other higher.  <br /> Thoughts bounce back and forth like in a<br />  four players ping-pong match. Our collective “thought-energy” can solve any problem.",
          rechtsgebiete:
            "Specialization begins with a coincidence, develops through experience, and leads to<br />  total dedication.",
          karriere:
            'No matter the goal, we are part of your <br /> journey – a training ground for tomorrow’s top<br />  corporate attorneys.',
          kontakt: "CONTACT",
          impressum: "IMPRINT",
          agb: "T&C",
          datenschutz: "PRIVACY POLICY",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: "/",
    routeNameSplitter: "/",
    linkActiveClass: "active",
    linkExactActiveClass: "active",
  },
};
