<template>
  <nav>
    <ul>
      <li v-for="(category, index) in data.mains" :key="index">
        <NuxtLink
          :class="currentRouteName(category.attributes.Slug)"
          :to="
            '/' +
            category.attributes.Slug +
            '/' +
            (category.attributes.page.data !== null
              ? category.attributes.page.data.attributes.Slug
              : category.attributes.profile.data.attributes.Slug)
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
                    '/' + category.attributes.Slug + '/' + page.attributes.Slug
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
                        '/' +
                        category.attributes.Slug +
                        '/' +
                        profiles.attributes.Slug
                      "
                    >
                      {{ profiles.attributes.Profile_title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <NuxtLink to="/news"> News </NuxtLink>
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
        "https://api.ppp.co.at//api/mains?populate=*"
      );
      const getSubs = await axios.get(
        "https://api.ppp.co.at//api/subs?populate=*"
      );
      const getPages = await axios.get(
        "https://api.ppp.co.at//api/pages?populate=*"
      );
      const getProfiles = await axios.get(
        "https://api.ppp.co.at//api/profiles?populate=*"
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
        return e.attributes.main_category.data.id === id;
      });
    },
    profiles(id) {
      let filtered_profiles = this.data.profiles;
      return filtered_profiles.filter((e) => {
        return e.attributes.sub_category.data.id === id;
      });
    },
    currentRouteName(slug) {
      return Object.keys(this.$route.params)[0] == slug ? "active" : "";
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
  },
};
</script>
