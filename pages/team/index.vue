<template>
  <article :class="'show-' + show">
    <pre>
    <!-- {{showProfile}} -->
  </pre>
    <Transition>
      <a
        v-if="showCV || showPub"
        class="close"
        @click="(showCV = false), (showPub = false)"
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
    <main v-if="show">
      <Transition>
        <div v-if="!showCV && !showPub && showProfile">
          <div v-html="formatRte(showProfile.attributes.Basic_info)"></div>
          <br />
          <span v-html="breakIfSlash(showProfile.attributes.Telephone) "></span><br />
          {{ showProfile.attributes.Email }}<br />
          <br />
        </div>
      </Transition>
      <Transition>
        <div v-if="!showCV && !showPub && showProfile">
          <div v-html="formatRte(showProfile.attributes.Introduction)"></div>
        </div>
      </Transition>
      <Transition>
        <div v-if="showCV">
          <h1>{{$t('werdegang')}}</h1>
          <div v-html="formatRte(showProfile.attributes.CV)"></div>
        </div>
      </Transition>
      <Transition>
        <div v-if="showPub">
          <h1>{{$t('publikationen')}}</h1>
          <div
            class="downloads"
            v-if="showProfile.attributes.Downloads !== null"
          >
            <template v-for="download in showProfile.attributes.Downloads">
   
              <template v-if="download.Pdf.data !== null">
                <a
                  :key="download.id"
                  :href="
                    'https://api.ppp.co.at/' + download.Pdf.data.attributes.url
                  "
                  target="_blank"
                >
                  <div v-html="download.Description"></div>
                </a>
              </template>
              <template v-else>
                <div :key="download.id" v-html="download.Description"></div>
              </template>
            </template>
          </div>
          <div
            v-else
            v-html="formatRte(showProfile.attributes.Publications)"
          ></div>
        </div>
      </Transition>
    </main>
    <img
      v-if="showProfile && showProfile.attributes.Profile_image.data !== null"
      class="profile"
      :src="
        'https://api.ppp.co.at/' +
        showProfile.attributes.Profile_image.data.attributes.url
      "
      alt=""
    />
    <aside>
      <div v-if="(showCV || showPub) && showProfile">
        <div v-html="formatRte(showProfile.attributes.Basic_info)"></div>
        <br />
        {{ showProfile.attributes.Telephone }}<br />
        {{ showProfile.attributes.Email }}<br />
      </div>
      <div v-else>
        <br />
        <a
          class="switch"
          v-if="showProfile && showProfile.attributes.CV"
          @click="showCV = !showCV"
          >{{$t('werdegang')}} ></a
        ><br />
        <br />
        <a
          class="switch"
          v-if="showProfile && showProfile.attributes.Publications"
          @click="showPub = !showPub"
          >{{$t('publikationen')}} ></a
        >
      </div>

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
  name: "team",
  layout: "team",
  data() {
    return {
      title: "PPP",
      show: false,
      showCV: false,
      showPub: false,
      profiles: null,
    };
  },
  methods: {
    async fetchContents() {
      const getProfiles = await axios.get(
        "https://api.ppp.co.at//api/profiles?populate=deep&locale=" +
          this.$i18n.locale
      );
      this.profiles = getProfiles.data.data;
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
    breakIfSlash(str){
      return str.replace(/\//g, '<br>') + '<br>'
    }
  },
  async mounted() {
    await this.fetchContents();
    document.body.removeAttribute("class");
    document.body.classList.add("page-team");
    this.show = true;
  },
  computed: {
    showProfile() {
      
      if (this.profiles == null) return false;
      let filtered_profiles = this.profiles;
      
      let profile = filtered_profiles.filter((e) => {
        return e.attributes.Slug === this.$route.fullPath.split("/").at(-1);
      });
      this.title =
        "PPP - " + profile[0].attributes.Profile_title.replace(/\/n/g, "");
      return profile[0];
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
