<template>
  <article :class="'show-' + show">
    <main v-if="show">
      <h1 v-html="formatTitle(page.attributes.Title)"></h1>
      <div v-html="page.attributes.Content"></div>
    </main>
  </article>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    slug() {
      return this.$route.fullPath.split("/").at(-1);
    },
  },

  data() {
    return {
      title: "PPP - KONTAKT",
      show: false,
      restData: null,
    };
  },

  methods: {
    async fetchContents() {
      const getContact = await axios.get(
        "https://api.ppp.co.at/api/pages?filters[Slug][$eq]=" +
          this.slug +
          "&locale=" +
          this.$i18n.locale
      );
      this.page = getContact.data.data[0];
      this.title = "PPP - " + this.page.attributes.Title.replace(/\/n/g, "");
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
