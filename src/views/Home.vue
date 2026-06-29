<script setup lang="ts">
import { House, Paintbrush, Wind, ArrowUpRight } from '@lucide/vue'
import { useHead } from '@vueuse/head'
import heroBackground400 from '@/assets/hero-background-400.webp'
import heroBackground800 from '@/assets/hero-background-800.webp'
import heroBackground1200 from '@/assets/hero-background-1200.webp'

import zonnepanelen400 from '@/assets/zonnepanelen-400.webp'
import zonnepanelen800 from '@/assets/zonnepanelen-800.webp'
import zonnepanelen1200 from '@/assets/zonnepanelen-1200.webp'
import ContactSection from '@/components/ContactSection.vue'

import house3400 from '@/assets/house-3-400.webp'
import house3800 from '@/assets/house-3-800.webp'
import house31200 from '@/assets/house-3-1200.webp'

import house4400 from '@/assets/house-4-400.webp'
import house4800 from '@/assets/house-4-800.webp'
import house41200 from '@/assets/house-4-1200.webp'

useHead({
  title: 'Dakwolf - Dakwerken, Isolatie & Schilderwerken in Leuven',

  meta: [
    {
      name: 'description',
      content:
        'Dakwolf is gespecialiseerd in dakwerken, isolatie en schilderwerken in Leuven en omgeving. 12+ jaar ervaring, snelle service en offerte binnen 2 dagen.',
    },

    {
      name: 'keywords',
      content:
        'dakwerken Leuven, dakwerker Leuven, dakreparatie Leuven, dakrenovatie Leuven, isolatie Leuven, schilderwerken Leuven, Dakwolf',
    },

    // Open Graph
    {
      property: 'og:title',
      content: 'Dakwolf - Dakwerken, Isolatie & Schilderwerken in Leuven',
    },
    {
      property: 'og:description',
      content:
        'Voor dakherstellingen, renovaties, isolatie en schilderwerken in Leuven en omgeving.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.dakwolf.be',
    },
    {
      property: 'og:image',
      content: 'https://www.dakwolf.be/social.jpg',
    },

    // Twitter / X
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Dakwolf - Dakwerken, Isolatie & Schilderwerken in Leuven',
    },
    {
      name: 'twitter:description',
      content:
        'Betrouwbare vakman voor dakwerken, isolatie en schilderwerken in Leuven en omgeving.',
    },
    {
      name: 'twitter:image',
      content: 'https://www.dakwolf.be/social.jpg',
    },

    // Theme
    {
      name: 'theme-color',
      content: '#22385F',
    },
  ],

  link: [
    {
      rel: 'canonical',
      href: 'https://www.dakwolf.be',
    },
    {
      rel: 'alternate',
      hreflang: 'nl-be',
      href: 'https://www.dakwolf.be',
    },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'RoofingContractor',

        name: 'Dakwolf',

        url: 'https://www.dakwolf.be',

        telephone: '+32483819504',

        email: 'info@dakwolf.be',

        description:
          'Dakwolf is gespecialiseerd in dakwerken, isolatie en schilderwerken in Leuven en omgeving.',

        areaServed: ['Leuven', 'Heverlee', 'Kessel-Lo', 'Herent', 'Wilsele', 'Oud-Heverlee'],

        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Leuven',
          addressCountry: 'BE',
        },

        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '18:00',
          },
        ],

        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dakwerken',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Isolatiewerken',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Schilderwerken',
            },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 reverse-col w-full px-8 py-16 items-center gap-8 min-h-[calc(100vh-var(--app-header-height))]"
  >
    <div class="flex items-center md:items-start flex-col gap-4 order-2 md:order-1">
      <h1 class="text-5xl font-bold text-center md:text-left">
        Dakwerken, isolatie en schilderwerken in Leuven
      </h1>
      <p class="text-lg text-center md:text-left">
        Voor herstellingen, renovaties en afwerking op maat met 12+ jaar ervaring.
      </p>
      <RouterLink to="/contact" class="button-primary">Vraag offerte aan</RouterLink>
    </div>

    <img
      :src="heroBackground800"
      :srcset="`${heroBackground400} 400w, ${heroBackground800} 800w, ${heroBackground1200} 1200w`"
      sizes="(max-width: 768px) 100vw, 50vw"
      alt="Dakwerken en renovatie door Dakwolf"
      width="1200"
      height="1200"
      class="rounded-lg shadow-sm object-cover aspect-square order-1 md:order-2"
      decoding="async"
      fetchpriority="high"
    />
  </section>

  <section class="px-8 py-16">
    <h2>Diensten</h2>
    <div class="flex flex-col md:flex-row gap-4">
      <RouterLink
        to="/diensten"
        class="card group flex flex-col gap-4 flex-1 relative no-underline cursor-pointer transition will-change-transform hover:-translate-y-0.5 hover:brightness-[0.97] active:translate-y-0 active:brightness-[0.94] motion-reduce:transition-none motion-reduce:hover:transform-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-[#22385F] focus-visible:outline-offset-4"
        aria-label="Bekijk diensten: Dakwerken"
      >
        <span class="absolute right-4 top-4" aria-hidden="true">
          <ArrowUpRight
            class="size-5 text-[#22385F] rotate-12 opacity-70 transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
          />
        </span>
        <div>
          <div class="bg-[#b1bdcf] rounded-full w-fit p-3">
            <House class="size-6 text-[#22385F]" />
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Dakwerken</h3>
          <p class="text-gray-700">
            Van dakherstellingen en renovaties tot nieuwe daken, Velux-afwerking en zonnepanelen.
            Wij zorgen voor een stevig en duurzaam resultaat.
          </p>
        </div>
      </RouterLink>

      <RouterLink
        to="/diensten"
        class="card group flex flex-col gap-4 flex-1 relative no-underline cursor-pointer transition will-change-transform hover:-translate-y-0.5 hover:brightness-[0.97] active:translate-y-0 active:brightness-[0.94] motion-reduce:transition-none motion-reduce:hover:transform-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-[#22385F] focus-visible:outline-offset-4"
        aria-label="Bekijk diensten: Isolatie"
      >
        <span class="absolute right-4 top-4" aria-hidden="true">
          <ArrowUpRight
            class="size-5 text-[#22385F] rotate-12 opacity-70 transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
          />
        </span>
        <div>
          <div class="bg-[#b1bdcf] rounded-full w-fit p-3">
            <Wind class="size-6 text-[#22385F]" />
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Isolatie</h3>
          <p class="text-gray-700">
            Professionele isolatie met PIR of glaswol, inclusief crepi-afwerking waar nodig. Zo
            woont u comfortabeler en energiezuiniger.
          </p>
        </div>
      </RouterLink>

      <RouterLink
        to="/diensten"
        class="card group flex flex-col gap-4 flex-1 relative no-underline cursor-pointer transition will-change-transform hover:-translate-y-0.5 hover:brightness-[0.97] active:translate-y-0 active:brightness-[0.94] motion-reduce:transition-none motion-reduce:hover:transform-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-[#22385F] focus-visible:outline-offset-4"
        aria-label="Bekijk diensten: Schilderwerken"
      >
        <span class="absolute right-4 top-4" aria-hidden="true">
          <ArrowUpRight
            class="size-5 text-[#22385F] rotate-12 opacity-70 transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
          />
        </span>
        <div>
          <div class="bg-[#b1bdcf] rounded-full w-fit p-3">
            <Paintbrush class="size-6 text-[#22385F]" />
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Schilderwerken</h3>
          <p class="text-gray-700">
            Binnen- en buitenschilderwerken met oog voor detail, nette afwerking en duurzame
            kwaliteit.
          </p>
        </div>
      </RouterLink>
    </div>
  </section>

  <section class="px-8 py-16">
    <h2>Realisaties</h2>
    <div class="grid grid-cols-1 h-fit md:grid-cols-2 grid-rows-4 max-h-300 gap-4">
      <div class="relative md:row-span-2 overflow-hidden rounded-lg">
        <img
          :src="heroBackground800"
          :srcset="`${heroBackground400} 400w, ${heroBackground800} 800w, ${heroBackground1200} 1200w`"
          sizes="(max-width: 768px) 100vw, 442px"
          alt="Realisatie 1"
          class="img-card"
          loading="lazy"
          decoding="async"
        />
        <span
          class="absolute left-3 top-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold"
        >
          Herent
        </span>
        <span
          class="absolute left-3 bottom-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold max-w-[80%] text-right whitespace-normal"
        >
          Hellend dak
        </span>
      </div>
      <div class="relative md:row-span-2 overflow-hidden rounded-lg">
        <img
          :src="zonnepanelen800"
          :srcset="`${zonnepanelen400} 400w, ${zonnepanelen800} 800w, ${zonnepanelen1200} 1200w`"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Realisatie 2"
          class="img-card"
          loading="lazy"
          decoding="async"
        />
        <span
          class="absolute left-3 top-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold"
        >
          Herent
        </span>
        <span
          class="absolute left-3 bottom-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold max-w-[80%] text-right whitespace-normal"
        >
          Zonnepanelen, hellend dak & plat dak
        </span>
      </div>
      <div class="relative md:row-span-2 overflow-hidden rounded-lg">
        <img
          :src="house3800"
          :srcset="`${house3400} 400w, ${house3800} 800w, ${house31200} 1200w`"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Realisatie 3"
          class="img-card"
          loading="lazy"
          decoding="async"
        />
        <span
          class="absolute left-3 top-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold"
        >
          Grimbergen
        </span>
        <span
          class="absolute left-3 bottom-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold max-w-[80%] text-right whitespace-normal"
        >
          hellend dak & crepi
        </span>
      </div>
      <div class="relative md:row-span-2 overflow-hidden rounded-lg">
        <img
          :src="house4800"
          :srcset="`${house4400} 400w, ${house4800} 800w, ${house41200} 1200w`"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Realisatie 4"
          class="img-card"
          loading="lazy"
          decoding="async"
        />
        <span
          class="absolute left-3 top-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold"
        >
          Herent
        </span>
        <span
          class="absolute left-3 bottom-3 bg-[#b1bdcf]/90 text-[#22385F] px-4 py-2 rounded-full text-xs md:text-sm font-semibold max-w-[80%] text-right whitespace-normal"
        >
          Gevel
        </span>
      </div>
    </div>
  </section>

  <section class="px-8 py-16">
    <div
      class="grid md:grid-cols-[0.5fr_1fr_1fr] grid-cols-1 md:grid-rows-auto md:grid-rows-2 gap-4"
    >
      <div class="card bg-[#22385F] md:row-span-3 md:col-span-1 flex flex-col justify-between">
        <div>
          <p class="text-white text-xl font-semibold">Waarom kiezen voor ons?</p>
        </div>
      </div>
      <div class="card">
        <p class="text-lg">Dakwerken, isolatie en schilderwerken onder één dak</p>
      </div>
      <div class="card">
        <p class="text-lg">+ 12 jaar ervaring</p>
      </div>
      <div class="card">
        <p class="text-lg">Correcte prijs-kwaliteitverhouding</p>
      </div>
      <div class="card">
        <p class="text-lg">Nette en gedetailleerde afwerking</p>
      </div>
      <div class="card">
        <p class="text-lg">Actief binnen 50 km rond Leuven</p>
      </div>
      <div class="card">
        <p class="text-lg">Offerte binnen 2 dagen</p>
      </div>
    </div>
  </section>
  <section id="werkwijze" class="px-8 py-16">
    <h2>Hoe wij te werk gaan</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="card flex flex-col gap-3">
        <span class="text-sm font-semibold text-[#22385F]">01</span>
        <h3 class="text-xl font-semibold">Plaatsbezoek</h3>
        <p class="text-gray-700">We komen langs, bekijken de werken en luisteren naar uw wensen.</p>
      </div>

      <div class="card flex flex-col gap-3">
        <span class="text-sm font-semibold text-[#22385F]">02</span>
        <h3 class="text-xl font-semibold">Duidelijke offerte</h3>
        <p class="text-gray-700">U ontvangt binnen 2 dagen een duidelijke offerte op maat.</p>
      </div>

      <div class="card flex flex-col gap-3">
        <span class="text-sm font-semibold text-[#22385F]">03</span>
        <h3 class="text-xl font-semibold">Planning & uitvoering</h3>
        <p class="text-gray-700">
          Na akkoord plannen we de werken in en starten we volgens afspraak.
        </p>
      </div>

      <div class="card flex flex-col gap-3">
        <span class="text-sm font-semibold text-[#22385F]">04</span>
        <h3 class="text-xl font-semibold">Nette oplevering</h3>
        <p class="text-gray-700">We werken alles zorgvuldig af en laten de werf netjes achter.</p>
      </div>
    </div>
  </section>
  <ContactSection />
</template>
