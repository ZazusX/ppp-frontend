(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    131: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(19),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "footer",
              [
                e("NuxtLink", { attrs: { to: "kontakt/impressum" } }, [
                  t._v("IMPRESSUM"),
                ]),
                t._v("   .  \n  "),
                e("NuxtLink", { attrs: { to: "kontakt/agb" } }, [t._v("AGB")]),
                t._v("   .  \n  "),
                e("NuxtLink", { attrs: { to: "kontakt/datenschutz" } }, [
                  t._v("DATENSCHUTZERKLÄRUNG"),
                ]),
                t._v("   .\n    "),
                e("NuxtLink", { attrs: { to: "kontakt/impressum" } }, [
                  t._v("ENGLISCH"),
                ]),
                t._v("   .  \n  "),
                e("NuxtLink", { attrs: { to: "kontakt/suche" } }, [
                  t._v("SUCHE"),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { Footer: n(131).default });
    },
    193: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(19),
        component = Object(r.a)(
          {},
          function () {
            var t = this._self._c;
            return t("header", [
              t("a", { staticClass: "logo", attrs: { href: "/" } }),
              this._v(" "),
              t("button", { staticClass: "toggle" }, [
                t(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "48",
                      viewBox: "0 96 960 960",
                      width: "48",
                    },
                  },
                  [
                    t("path", {
                      attrs: {
                        fill: "currentColor",
                        d: "M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z",
                      },
                    }),
                  ]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { Header: n(193).default });
    },
    201: function (t, e, n) {
      "use strict";
      var r = n(19),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "page" },
              [
                e("Header"),
                t._v(" "),
                e("Navigation"),
                t._v(" "),
                e("div", [e("Nuxt")], 1),
                t._v(" "),
                e("Footer"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      installComponents(component, {
        Header: n(193).default,
        Navigation: n(276).default,
        Footer: n(131).default,
      });
    },
    202: function (t, e, n) {
      "use strict";
      var r = n(19),
        component = Object(r.a)(
          {},
          function () {
            var t = this._self._c;
            return t(
              "div",
              { staticClass: "page page-start" },
              [t("Nuxt"), this._v(" "), t("Footer")],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      installComponents(component, { Footer: n(131).default });
    },
    203: function (t, e, n) {
      n(204), (t.exports = n(205));
    },
    276: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(12),
        o = (n(40), n(20), n(45), n(48), n(278)),
        l = {
          name: "Navigation",
          data: function () {
            return { data: { mains: [], subs: [], pages: [], profiles: [] } };
          },
          methods: {
            fetchContents: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r, l, c;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            o.a.get(
                              "https://api.ppp.co.at//api/mains?populate=*"
                            )
                          );
                        case 2:
                          return (
                            (n = e.sent),
                            (e.next = 5),
                            o.a.get(
                              "https://api.ppp.co.at//api/subs?populate=*"
                            )
                          );
                        case 5:
                          return (
                            (r = e.sent),
                            (e.next = 8),
                            o.a.get(
                              "https://api.ppp.co.at//api/pages?populate=*"
                            )
                          );
                        case 8:
                          return (
                            (l = e.sent),
                            (e.next = 11),
                            o.a.get(
                              "https://api.ppp.co.at//api/profiles?populate=*"
                            )
                          );
                        case 11:
                          (c = e.sent),
                            (t.data.mains = n.data.data),
                            (t.data.subs = r.data.data),
                            (t.data.pages = l.data.data),
                            (t.data.profiles = c.data.data);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            pages: function (t) {
              return this.data.pages.filter(function (e) {
                return (
                  null !== e.attributes.main_category.data &&
                  e.attributes.main_category.data.id === t
                );
              });
            },
            subs: function (t) {
              return this.data.subs.filter(function (e) {
                return e.attributes.main_category.data.id === t;
              });
            },
            profiles: function (t) {
              return this.data.profiles.filter(function (e) {
                return e.attributes.sub_category.data.id === t;
              });
            },
            currentRouteName: function (t) {
              return Object.keys(this.$route.params)[0] == t ? "active" : "";
            },
          },
          mounted: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.fetchContents();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          computed: {},
        },
        c = n(19),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e("nav", [
              e(
                "ul",
                t._l(t.data.mains, function (n, r) {
                  return e(
                    "li",
                    { key: r },
                    [
                      e(
                        "NuxtLink",
                        {
                          class: t.currentRouteName(n.attributes.Slug),
                          attrs: {
                            to:
                              "/" +
                              n.attributes.Slug +
                              "/" +
                              (null !== n.attributes.page.data
                                ? n.attributes.page.data.attributes.Slug
                                : n.attributes.profile.data.attributes.Slug),
                          },
                        },
                        [
                          t._v(
                            "\n        " + t._s(n.attributes.Title) + "\n      "
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "ul",
                        [
                          t._l(t.pages(n.id), function (r, o) {
                            return e(
                              "li",
                              { key: o },
                              [
                                e(
                                  "NuxtLink",
                                  {
                                    attrs: {
                                      to:
                                        "/" +
                                        n.attributes.Slug +
                                        "/" +
                                        r.attributes.Slug,
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(r.attributes.Title) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            );
                          }),
                          t._v(" "),
                          t._l(t.subs(n.id), function (sub, r) {
                            return e("li", { key: r }, [
                              e(
                                "a",
                                { attrs: { href: "javascript:void(0)" } },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(sub.attributes.Title) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e(
                                "ul",
                                t._l(t.profiles(sub.id), function (r, o) {
                                  return e(
                                    "li",
                                    { key: o },
                                    [
                                      e(
                                        "NuxtLink",
                                        {
                                          attrs: {
                                            to:
                                              "/" +
                                              n.attributes.Slug +
                                              "/" +
                                              r.attributes.Slug,
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(r.attributes.Profile_title) +
                                              "\n              "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                0
                              ),
                            ]);
                          }),
                        ],
                        2
                      ),
                    ],
                    1
                  );
                }),
                0
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
  [[203, 10, 2, 11]],
]);
