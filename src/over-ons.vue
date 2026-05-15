<script setup lang="ts">
import { Check } from '@lucide/vue'
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
            class="absolute inset-0 w-full h-full object-cover"
            src="./assets/over-ons.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
</style>
