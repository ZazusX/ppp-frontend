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
      <Transition>
        <a
          v-if="showEx || showPub"
          class="close"
          @click="(showEx = false), (showPub = false)"
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_0_1"
              style="mask-type: luminance"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="24"
              height="24"
            >
              <path
                d="M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <path
                d="M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z"
                fill="#B1AA8D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.883832 28.9307L28.9362 0.878295L26.4095 -1.64844L-1.6429 26.4039L0.883832 28.9307Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.9392 26.4055L0.886779 -1.64685L-1.63995 0.879883L26.4124 28.9323L28.9392 26.4055Z"
                fill="white"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.420959 0.412598H26.877V26.8686H0.420959V0.412598ZM3.88763 3.87927V23.402H23.4103V3.87927H3.88763Z"
              fill="#B1AA8D"
            />
          </svg>
        </a>
      </Transition>
      <Transition>
        <div v-if="!showEx && !showPub">
          <h1 v-html="formatTitle(getPage.attributes.Title)"></h1>
          <div v-html="formatRte(getPage.attributes.Content)"></div>
        </div>
      </Transition>
      <Transition>
        <div class="detail" v-if="showEx">
          <div v-html="formatRte(getPage.attributes.Examples)"></div>
        </div>
      </Transition>
      <Transition>
        <div class="detail" v-if="showPub">
          <div v-html="formatRte(getPage.attributes.Publications)"></div>
        </div>
      </Transition>
      <Transition>
        <div class="menu" v-if="!showEx && !showPub">
          <a
            class="switch"
            v-if="getPage.attributes.Examples"
            @click="showEx = !showEx"
            >BEISPIELE ></a
          >
          <br />
          <a
            class="switch"
            v-if="getPage.attributes.Publications"
            @click="showPub = !showPub"
            >PUBLIKATIONEN ></a
          >
        </div>
      </Transition>
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
    <aside v-if="show && !showEx && !showPub">
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
  name: "karriere",
  data() {
    return {
      title: "PPP",
      showEx: false,
      showPub: false,
      show: false,
      pages: null,
    };
  },
  methods: {
    async fetchContents() {
      const getPages = await axios.get(
        "https://api.ppp.co.at//api/pages?populate=*&locale=" +
          this.$i18n.locale
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
    document.body.classList.add("page-karriere");
    this.show = true;
  },
  computed: {
    getPage() {
      if (this.pages == null) return false;
      let filtered_pages = this.pages;
      let page = filtered_pages.filter((e) => {
        // return e.attributes.Slug === this.$route.params.karriere;
        return e.attributes.Slug === this.$route.fullPath.split("/").at(-1);
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
