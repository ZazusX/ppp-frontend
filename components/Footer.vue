<template>
  <footer>
    <NuxtLink :to="localePath('kontakt')"> {{ this.$t("kontakt") }}</NuxtLink>
    &nbsp; . &nbsp;
    <NuxtLink :to="localePath('impressum')">
      {{ this.$t("impressum") }}</NuxtLink
    >
    &nbsp; . &nbsp;
    <NuxtLink :to="localePath('agb')"> {{ this.$t("agb") }}</NuxtLink>
    &nbsp; . &nbsp;
    <NuxtLink :to="localePath('datenschutzerklaerung')">
      {{ this.$t("datenschutz") }}</NuxtLink
    >
    &nbsp; . &nbsp;
    <NuxtLink :to="localePath('index', 'de')">DEUTSCH</NuxtLink>&nbsp; | &nbsp;
    <NuxtLink :to="localePath('index', 'en')">ENGLISH</NuxtLink>
  </footer>
</template>