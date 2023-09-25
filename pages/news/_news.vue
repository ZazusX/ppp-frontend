<template>
  <article :class="'show-' + show">
    <main v-if="show">
      <time>
        {{ new Date(newsDetail.attributes.Datum).getFullYear() }}-{{
          new Date(newsDetail.attributes.Datum).getMonth() + 1
        }}-{{ new Date(newsDetail.attributes.Datum).getDate() }}
      </time>
      <h1 v-html="formatTitle(newsDetail.attributes.Title)"></h1>
      <div v-html="newsDetail.attributes.Text"></div>
      <p>
        <br />
        <NuxtLink to="/news/">&lt; Zurück</NuxtLink>
      </p>
    </main>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "news",
  layout: "news",
  // nuxtI18n: {
  //   paths: {
  //     de: "/news/:news",
  //     en: "/news/:news",
  //   },
  // },
  data() {
    return {
      title: "",
      show: false,
      news: null,
    };
  },
  methods: {
    async fetchContents() {
      const getNews = await axios.get(
        "https://api.ppp.co.at/api/news?populate=*&locale=" + this.$i18n.locale
      );
      this.news = getNews.data.data;
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
    document.body.removeAttribute("class");
    document.body.classList.add("page-news");
    this.show = true;
  },
  computed: {
    newsDetail() {
      if (this.news == null) return false;
      let filtered_news = this.news;
      let article = filtered_news.filter((e) => {
        // return e.attributes.Slug === this.$route.params.news;
        return e.attributes.Slug === this.$route.fullPath.split("/").at(-1);
      });
      this.title = "PPP - " + article[0].attributes.Title.replace(/\/n/g, "");
      return article[0];
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title,
        },
      ],
    };
  },
};
</script>
