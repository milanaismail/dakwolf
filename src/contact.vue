<script setup lang="ts">
import { useHead } from '@vueuse/head'
import ContactSection from '@/components/ContactSection.vue'

useHead({
  title: 'Contact | Dakwolf - Vraag een offerte aan',

  meta: [
    {
      name: 'description',
      content:
        'Neem contact op met Dakwolf voor dakwerken, isolatie of schilderwerken in Leuven en omgeving. Vraag eenvoudig een vrijblijvende offerte aan. U ontvangt binnen 2 dagen een antwoord.',
    },

    {
      name: 'keywords',
      content:
        'contact Dakwolf, offerte dakwerken Leuven, dakwerker Leuven contact, isolatie Leuven offerte, schilderwerken Leuven',
    },

    {
      property: 'og:title',
      content: 'Contact | Dakwolf',
    },

    {
      property: 'og:description',
      content:
        'Vraag vrijblijvend een offerte aan voor dakwerken, isolatie of schilderwerken. Dakwolf helpt klanten in Leuven en omgeving.',
    },

    {
      property: 'og:type',
      content: 'website',
    },

    {
      property: 'og:url',
      content: 'https://www.dakwolf.be/contact',
    },
  ],

  link: [
    {
      rel: 'canonical',
      href: 'https://www.dakwolf.be/contact',
    },
  ],
})
</script>

<template>
  <ContactSection />
</template>
