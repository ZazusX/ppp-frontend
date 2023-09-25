<template>
  <article :class="'show-' + show">
    <main v-if="show">
      <h1>News</h1>
      <div class="news-list">
        <div
          class="news-item"
          v-for="(article, index) in sortedNews"
          :key="index"
        >
          <NuxtLink :to="localePath('/news/' + article.attributes.Slug)">
            <time>
              {{ new Date(article.attributes.Datum).getFullYear() }}-{{
                new Date(article.attributes.Datum).getMonth() + 1
              }}-{{ new Date(article.attributes.Datum).getDate() }}
            </time>
            <h2 v-html="formatTitle(article.attributes.Title)"></h2>
          </NuxtLink>
        </div>
      </div>
    </main>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "news",
  data() {
    return {
      show: false,
      news: null,
    };
  },
  head: {
    title: "PPP - NEWS",
  },
  methods: {
    async fetchContents() {
      const getNews = await axios.get(
        "https://api.ppp.co.at/api/news?populate=*&locale=" + this.$i18n.locale
      );
      this.news = getNews.data.data;
    },
    formatRte(str) {
      if (str !== null && str !== undefined) {
        return marked(str);
      } else {
        return "";
      }
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
    sortedNews: function () {
      return this.news.sort(
        (a, b) =>
          new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt)
      );
    },
  },
};
</script>
