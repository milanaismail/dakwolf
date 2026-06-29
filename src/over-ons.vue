<script setup lang="ts">
import { Check } from '@lucide/vue'
import { useHead } from '@vueuse/head'
import overOns400 from '@/assets/over-ons-400.webp'
import overOns800 from '@/assets/over-ons-800.webp'
import overOns1200 from '@/assets/over-ons-1200.webp'
useHead({
  title: 'Over ons | Dakwolf - Ervaren dakwerker in Leuven',

  meta: [
    {
      name: 'description',
      content:
        'Maak kennis met Dakwolf. Meer dan 12 jaar ervaring in dakwerken, isolatie en schilderwerken in Leuven en omgeving. Kwaliteit, vakmanschap en een nette afwerking staan centraal.',
    },

    {
      name: 'keywords',
      content:
        'over Dakwolf, dakwerker Leuven, dakwerken Leuven, isolatie Leuven, schilderwerken Leuven, ervaren dakwerker, dakrenovatie Leuven',
    },

    {
      property: 'og:title',
      content: 'Over Dakwolf | Ervaren vakmanschap in Leuven',
    },

    {
      property: 'og:description',
      content:
        'Ontdek wie Dakwolf is en waarom klanten kiezen voor meer dan 12 jaar ervaring, kwalitatieve afwerking en betrouwbare service.',
    },

    {
      property: 'og:type',
      content: 'website',
    },

    {
      property: 'og:url',
      content: 'https://www.dakwolf.be/over-ons',
    },
  ],

  link: [
    {
      rel: 'canonical',
      href: 'https://www.dakwolf.be/over-ons',
    },
  ],
})
</script>

<template>
  <section class="px-8 py-8 flex flex-col gap-12">
    <div>
      <h2>Over ons</h2>
      <div class="card">
        <h3 class="text-xl font-semibold mb-4">Waarom voor ons kiezen?</h3>

        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li class="flex gap-4 items-start">
            <span class="diensten-bullet"><Check class="diensten-icon" /></span>
            <span>Meer dan 12 jaar ervaring</span>
          </li>
          <li class="flex gap-4 items-start">
            <span class="diensten-bullet"><Check class="diensten-icon" /></span>
            <span>Gedetailleerd werk volgens uw wensen</span>
          </li>
          <li class="flex gap-4 items-start">
            <span class="diensten-bullet"><Check class="diensten-icon" /></span>
            <span>Kwaliteit en klanttevredenheid centraal</span>
          </li>
          <li class="flex gap-4 items-start">
            <span class="diensten-bullet"><Check class="diensten-icon" /></span>
            <span>Nette en verzorgde afwerking</span>
          </li>
          <li class="flex gap-4 items-start">
            <span class="diensten-bullet"><Check class="diensten-icon" /></span>
            <span>Correcte en competitieve prijzen</span>
          </li>
          <li class="flex gap-4 items-start">
            <span class="diensten-bullet"><Check class="diensten-icon" /></span>
            <span>Actief binnen 50 km rond Leuven</span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h3>Onze aanpak</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="card flex flex-col gap-3">
          <span class="text-sm font-semibold text-[#22385F]">01</span>
          <h3 class="text-xl font-semibold">Plaatsbezoek</h3>
          <p class="text-gray-700">
            We komen langs, bekijken de werken en luisteren naar uw wensen.
          </p>
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
    </div>
    <div>
      <div class="card text-white bg-[#22385f] grid grid-cols-1 md:grid-cols-2 p-0 overflow-hidden">
        <div class="flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div>
            <h3 class="text-white">Ons team</h3>
            <p>
              Wij werken met een team van ervaren vakmensen die elk hun specialisatie hebben. Door
              samen te werken kunnen we efficiënt werken en zorgen voor een kwalitatief resultaat,
              tot in de details afgewerkt.
            </p>
            <div class="mt-6">
              <RouterLink to="/contact" class="button-secondary inline-flex"
                >Vraag offerte aan</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="relative w-full h-64 md:h-full self-stretch">
          <img
            :src="overOns800"
            :srcset="`${overOns400} 400w, ${overOns800} 800w, ${overOns1200} 1200w`"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Over ons"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>
