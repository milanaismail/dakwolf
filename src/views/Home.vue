<script setup lang="ts">
import { House, Paintbrush, Wind, Phone, Mail, ArrowUpRight } from '@lucide/vue'
import { useHead } from '@vueuse/head'
import emailjs from '@emailjs/browser'
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  description: '',
})

const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorMessage = ref<string | null>(null)

const onSubmit = async () => {
  status.value = 'sending'
  errorMessage.value = null

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    status.value = 'error'
    errorMessage.value = 'EmailJS configuratie ontbreekt (VITE_EMAILJS_*).'
    return
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.description,
      },
      { publicKey }
    )

    form.name = ''
    form.phone = ''
    form.email = ''
    form.description = ''
    status.value = 'sent'
  } catch (error) {
    status.value = 'error'
    errorMessage.value = 'Versturen mislukt. Probeer opnieuw.'
    console.error(error)
  }
}

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
      class="rounded-lg shadow-sm object-cover aspect-square order-1 md:order-2"
      src="../assets/hero-background.jpeg"
      alt="Hero image"
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
        <img src="../assets/hero-background.jpeg" alt="Realisatie 1" class="img-card" />
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
        <img src="../assets/zonnepanelen.jpeg" alt="Realisatie 2" class="img-card" />
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
        <img src="../assets/house-3.jpeg" alt="Realisatie 3" class="img-card" />
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
        <img src="../assets/house-4.jpeg" alt="Realisatie 4" class="img-card" />
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
  <section class="px-8 py-16">
    <div class="card bg-[#22385F] text-white grid md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4">
      <div class="flex flex-col justify-between">
        <p class="text-3xl">Contacteer ons</p>
        <div class="items-center gap-2 hidden md:flex">
          <a
            href="tel:+32483819504"
            title="Bel ons"
            class="contact-icon bg-[#b1bdcf] rounded-full w-fit p-3 block"
          >
            <Phone class="size-5 text-[#22385F]" />
          </a>
          <a
            href="https://wa.me/32483819504"
            target="_blank"
            rel="noopener"
            title="WhatsApp"
            class="contact-icon bg-[#b1bdcf] rounded-full w-fit p-3 block"
          >
            <svg class="size-5" viewBox="0 0 510 512.459">
              <path
                fill="#22385F"
                d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"
              />
            </svg>
          </a>
          <a
            href="mailto:info@dakwolf.be"
            title="Mail"
            class="contact-icon bg-[#b1bdcf] rounded-full w-fit p-3 block"
          >
            <Mail class="size-5 text-[#22385F]" />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <p class="text-xl">Een vraag of project?</p>
          <p>Neem vrijblijvend contact op.</p>
        </div>

        <form class="flex flex-col gap-3" @submit.prevent="onSubmit">
          <input
            v-model="form.name"
            name="name"
            type="text"
            placeholder="Naam"
            class="input-field"
            autocomplete="name"
            required
          />
          <input
            v-model="form.phone"
            name="phone"
            type="tel"
            placeholder="GSM nummer"
            class="input-field"
            autocomplete="tel"
          />
          <input
            v-model="form.email"
            name="email"
            type="email"
            placeholder="E-mailadres"
            class="input-field"
            autocomplete="email"
            required
          />

          <textarea
            rows="1"
            placeholder="Korte beschrijving "
            class="input-field resize-none"
            v-model="form.description"
            name="message"
            required
          ></textarea>

          <button
            type="submit"
            class="button-secondary w-full cursor-pointer"
            :disabled="status === 'sending'"
            :aria-busy="status === 'sending'"
          >
            Vraag offerte aan
          </button>

          <p v-if="status === 'sent'" class="text-sm">Bedankt! We nemen snel contact op.</p>
          <p v-else-if="status === 'error'" class="text-sm">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>
