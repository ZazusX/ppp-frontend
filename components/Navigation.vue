<template>
  <nav>
    <ul>
      <li v-for="(category, index) in data.mains" :key="index">
        <NuxtLink
          :class="currentRouteName(category.attributes.Slug)"
          :to="
            localePath(
              '/' +
                category.attributes.Slug +
                '/' +
                (category.attributes.page.data !== null
                  ? category.attributes.page.data.attributes.Slug
                  : category.attributes.profile.data.attributes.Slug)
            )
          "
        >
          {{ category.attributes.Title }}
        </NuxtLink>
        <div class="submenu">
          <div>
            <ul>
              <li v-for="(page, index) in pages(category.id)" :key="index">
                <NuxtLink
                  :to="
                    localePath(
                      '/' +
                        category.attributes.Slug +
                        '/' +
                        page.attributes.Slug
                    )
                  "
                >
                  <span v-html="formatTitle(page.attributes.Title)"></span>
                </NuxtLink>
              </li>
              <li v-for="(sub, index) in subs(category.id)" :key="index">
                <a href="javascript:void(0)">
                  {{ sub.attributes.Title }}
                </a>
                <ul>
                  <li
                    v-for="(profiles, index) in profiles(sub.id)"
                    :key="index"
                  >
                    <NuxtLink
                      :to="
                        localePath(
                          '/' +
                            category.attributes.Slug +
                            '/' +
                            profiles.Slug
                        )
                      "
                    >
                      {{ profiles.Profile_title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <NuxtLink :to="localePath('news')"> News </NuxtLink>
      </li>
    </ul>
  </nav>

</template>
<script>
import axios from "axios";
export default {
  name: "Navigation",
  data() {
    return {
      data: {
        mains: [],
        subs: [],
        pages: [],
        profiles: [],
      },
    };
  },

  methods: {
    async fetchContents() {
      const getMains = await axios.get(
        "https://api.ppp.co.at//api/mains?populate=*&locale=" +
          this.$i18n.locale
      );
      const getSubs = await axios.get(
        "https://api.ppp.co.at//api/subs?populate=*&locale=" + this.$i18n.locale
      );
      const getPages = await axios.get(
        "https://api.ppp.co.at//api/pages?populate=*&locale=" +
          this.$i18n.locale
      );
      const getProfiles = await axios.get(
        "https://api.ppp.co.at//api/profiles?populate=*&locale=" +
          this.$i18n.locale
      );
      this.data.mains = getMains.data.data;
      this.data.subs = getSubs.data.data;
      this.data.pages = getPages.data.data;
      this.data.profiles = getProfiles.data.data;
    },
    pages(id) {
      let filtered_pages = this.data.pages;
      return filtered_pages.filter((e) => {
        if (e.attributes.main_category.data !== null) {
          return e.attributes.main_category.data.id === id;
        } else {
          return false;
        }
      });
 
    },
    subs(id) {
      let filtered_subs = this.data.subs;
      return filtered_subs.filter((e) => {
        if (e.attributes.main_category.data !== null) {
        return e.attributes.main_category.data.id === id;
      } else {
          return false;
        }
      });
    },
    profiles(id) {
      let filtered_profiles = this.data.profiles;
      // filter items
      let temp= filtered_profiles.filter((e) => {
        if (e.attributes.sub_category.data !== null) {
        return e.attributes.sub_category.data.id === id;
        }
      })
      // map and sort by ordernumber
      return  temp.map(item => {
        const container = {};
        container.Slug = item.attributes.Slug;
        container.Profile_title = item.attributes.Profile_title;
        container.order = item.attributes.order;
        return container;
      }).sort((a,b) => (a.order > b.order))
    },
    // profiles(id) {
    //   let filtered_profiles = this.data.profiles;
    //   return filtered_profiles.filter((e) => {
    //     if (e.attributes.sub_category.data !== null) {
    //     return e.attributes.sub_category.data.id === id;
    //     }
    //   });
    // },
    currentRouteName(slug) {
      //console.log(this.$route.fullPath.split("/").at(-2));
      return this.$route.fullPath.split("/").at(-2) == slug ? "active" : "";
      //return Object.keys(this.$route.params)[0] == slug ? "active" : "";
    },
    formatTitle(str) {
      if (str !== null && str !== undefined) {
        return str.replace(/\/n/g, "<br />");
      } else {
        return "";
      }
    },
  },
  async mounted() {
    await this.fetchContents();
    this.lang = this.$i18n.locale;
  },
};
</script>
