<script setup lang="ts">
import { Check } from '@lucide/vue'
</script>

<template>
  <section class="px-8 py-16">
    <div class="flex flex-col gap-2">
      <h2>Over ons</h2>
      <div class="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-4">
        <div class="card border-gray-200 border">
          <h3>Onze aanpak</h3>
          <p>
            Wij geloven in een persoonlijke en duidelijke werkwijze. Elk project start met een
            plaatsbezoek waarbij we alles bekijken en uw wensen bespreken. Daarna ontvangt u binnen
            2 dagen een duidelijke en transparante offerte. Na akkoord plannen we de werken in en
            zorgen we voor een vlotte uitvoering door ons team.
          </p>
        </div>
        <div class="card border-gray-200 border">
          <h3>Ons team</h3>
          <p>
            Wij werken met een team van ervaren vakmensen die elk hun specialisatie hebben. Door
            samen te werken kunnen we efficiënt werken en zorgen voor een kwalitatief resultaat, tot
            in de details afgewerkt.
          </p>
        </div>
        <div class="card border-gray-200 border md:col-start-2 md:row-span-2 md:row-start-1">
          <h3>Waar wij voor staan</h3>
          <ul class="diensten-list diensten-list--two">
            <li class="diensten-li">
              <span class="diensten-bullet"><Check class="diensten-icon" /></span>
              <span>Meer dan 12 jaar ervaring</span>
            </li>
            <li class="diensten-li">
              <span class="diensten-bullet"><Check class="diensten-icon" /></span>
              <span>Gedetailleerd werk volgens uw wensen</span>
            </li>
            <li class="diensten-li">
              <span class="diensten-bullet"><Check class="diensten-icon" /></span>
              <span>Kwaliteit en klanttevredenheid centraal</span>
            </li>
            <li class="diensten-li">
              <span class="diensten-bullet"><Check class="diensten-icon" /></span>
              <span>Nette en verzorgde afwerking</span>
            </li>
            <li class="diensten-li">
              <span class="diensten-bullet"><Check class="diensten-icon" /></span>
              <span>Correcte en competitieve prijzen</span>
            </li>
            <li class="diensten-li">
              <span class="diensten-bullet"><Check class="diensten-icon" /></span>
              <span>Actief binnen 50 km rond Leuven</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
</style>
