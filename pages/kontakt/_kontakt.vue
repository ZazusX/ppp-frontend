<template>
  <article :class="'show-' + show">
    <main v-if="show">
      <Transition>
        <img
          v-if="getPage.attributes.Image_mobile.data !== null"
          class="background-mobile"
          :src="
            'https://api.ppp.co.at/' +
            getPage.attributes.Image_mobile.data.attributes.url
          "
          alt=""
        />
      </Transition>
      <h1 v-html="formatTitle(getPage.attributes.Title)"></h1>
      <div v-html="formatRte(getPage.attributes.Content)"></div>
    </main>
    <div v-if="show">
      <img
        v-if="getPage.attributes.Image_desktop.data !== null"
        class="background"
        :src="
          'https://api.ppp.co.at/' +
          getPage.attributes.Image_desktop.data.attributes.url
        "
        alt=""
      />
    </div>
    <aside v-if="show">
      <div v-html="formatRte(getPage.attributes.Hashtags)"></div>
    </aside>
  </article>
</template>

<script>
import axios from "axios";
import { marked } from "marked";
marked.use({
  gfm: true,
  breaks: true,
});
export default {
  name: "kontakt",
  data() {
    return {
      title: "PPP",
      show: false,
      pages: null,
    };
  },
  methods: {
    async fetchContents() {
      const getPages = await axios.get(
        "https://api.ppp.co.at/api/pages?populate=*"
      );
      this.pages = getPages.data.data;
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
    document.body.classList.add("page-kontakt");
    this.show = true;
  },
  computed: {
    getPage() {
      if (this.pages == null) return false;
      let filtered_pages = this.pages;
      let page = filtered_pages.filter((e) => {
        return e.attributes.Slug === this.$route.params.kontakt;
      });
      this.title = "PPP - " + page[0].attributes.Title.replace(/\/n/g, "");
      return page[0];
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
