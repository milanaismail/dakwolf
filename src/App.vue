<script setup lang="ts">
import { ref } from 'vue'
import { House, Paintbrush, Wind, Star, Quote, Phone, Mail, Menu, X } from '@lucide/vue'

const mobileNavOpen = ref(false)
</script>

<template>
  <header class="grid md:grid-cols-[1fr_auto_1fr] grid-cols-2 w-full px-8 py-4 items-center">
    <img class="h-16" src="./assets/logo.svg" alt="Dakwolf logo" />
    <!-- Desktop nav -->
    <div class="hidden md:grid grid-cols-4 gap-2 items-center justify-between w-full">
      <a href="#" class="text-center">Home</a>
      <a href="#diensten" class="text-center">Diensten</a>
      <a href="#overons" class="text-center">Over ons</a>
      <a href="#contact" class="text-center">Contact</a>
    </div>
    <button class="ml-auto button-primary hidden md:block">Bel nu</button>

    <!-- Mobile hamburger -->
    <button class="ml-auto md:hidden" @click="mobileNavOpen = true" aria-label="Open menu">
      <Menu class="size-8" />
    </button>

  <!-- Mobile nav drawer -->
  <transition name="fade">
    <div v-if="mobileNavOpen" class="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div class="flex-1" @click="mobileNavOpen = false"></div>
      <nav class="bg-white w-3/4 max-w-xs h-full p-6 flex flex-col gap-6 shadow-lg animate-slideInRight">
          <button class="absolute right-6 top-6" @click="mobileNavOpen = false" aria-label="Sluit menu">
            <X class="size-7" />
          </button>
        <a href="#" class="py-2 text-lg" @click="mobileNavOpen = false">Home</a>
        <a href="#diensten" class="py-2 text-lg" @click="mobileNavOpen = false">Diensten</a>
        <a href="#overons" class="py-2 text-lg" @click="mobileNavOpen = false">Over ons</a>
        <a href="#contact" class="py-2 text-lg" @click="mobileNavOpen = false">Contact</a>
        <button class="button-primary mt-8" @click="mobileNavOpen = false">Bel nu</button>
      </nav>
    </div>
  </transition>

  </header>

  <section class="grid grid-cols-1 md:grid-cols-2 reverse-col  w-full px-8 py-16 items-center gap-8">
    <div class="flex items-center md:items-start  flex-col gap-4 order-2 md:order-1">
      <h1 class="text-5xl font-bold text-center md:text-left">Dakwerken, isolatie en schilderwerken in Leuven
</h1>
      <p class="text-lg">Vakmanschap voor renovatie en herstellingen.
</p>
      <button class="button-primary ">Vraag offerte aan</button>
    </div>
    <img
      class="rounded-lg shadow-sm object-cover aspect-square order-1 md:order-2"
      src="./assets/hero-background.jpeg"
      alt="Hero image"
    />
  </section>
  <section class="px-8 py-16">
    <h2 >Diensten</h2>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="card flex flex-col gap-4">
        <div>

          <div class="bg-[#b1bdcf] rounded-full w-fit p-3"><Wind class="size-6 text-[#22385F]" /></div>
        </div>
        <div>
        <h3 class="text-xl font-semibold mb-2">Dakreparatie</h3>
          <p class="text-gray-700">
            Last van een lek of beschadigd dak? Wij zorgen voor snelle en duurzame herstellingen,
            zodat uw woning weer volledig beschermd is.
          </p>
        </div>  

        </div>
       <div class="card flex flex-col gap-4">
        <div>

          <div class="bg-[#b1bdcf] rounded-full w-fit p-3"><House class="size-6 text-[#22385F]" /></div>
        </div>
        <div>
        <h3 class="text-xl font-semibold mb-2">Isolatie</h3>
          <p class="text-gray-700">
Bespaar op energiekosten en verhoog uw wooncomfort met professionele dak- en zolderisolatie, correct geplaatst en afgewerkt.
          </p>
        </div>  

        </div>
       <div class="card flex flex-col gap-4">
        <div>

          <div class="bg-[#b1bdcf] rounded-full w-fit p-3"><Paintbrush class="size-6 text-[#22385F]" /></div>
        </div>
        <div>
        <h3 class="text-xl font-semibold mb-2">Schilderwerken</h3>
          <p class="text-gray-700">
           Van binnen- tot buitenschilderwerken: wij zorgen voor een strakke afwerking met oog voor detail en kwaliteit.
          </p>
        </div>  

        </div>
        </div>
  </section>
  <section class="px-8 py-16">
    <h2>Realisaties</h2>
    <div class="grid grid-cols-3 gap-4">
    <div class="grid grid-rows-[1fr_2fr] gap-4 h-[90%]">
        <img
          src="./assets/hero-background.jpeg"
          alt="Realisatie 1"
          class="img-card"
        />
        <img
          src="./assets/zonnepanelen.jpeg"
          alt="Realisatie 2"
          class="img-card"
        />
       
    </div>
 <div class="grid grid-rows-[1fr_1fr] gap-4">
       
        <img
          src="./assets/house-3.jpeg"
          alt="Realisatie 3"
          class="img-card"
        />
          <img
          src="./assets/hero-background.jpeg"
          alt="Realisatie 2"
          class="img-card"
        />
    </div>
     <div class="grid grid-rows-[2fr_1fr] gap-4 h-[90%]">
        <img
          src="./assets/hero-background.jpeg"
          alt="Realisatie 1"
          class="img-card"
        />
        <img
          src="./assets/hero-background.jpeg"
          alt="Realisatie 2"
          class="img-card"
        />
       
    </div>
    </div>
  </section>
    <section class="px-8 py-16">
    <div class="grid grid-cols-[0.5fr_1fr_1fr] grid-rows-2 gap-4">
      <div class="card bg-[#22385F] row-span-3 flex flex-col justify-between">
        <div>
    <p class="text-white text-xl font-semibold">Waarom kiezen voor ons?</p>

     
       </div>
      </div>
      <div class="card grid grid-rows-2">
<p class="text-lg">Specialist in dakwerken, isolatie en schilderwerken</p>
      </div>
       <div class="card grid grid-rows-2">
<p class="text-lg">+ 12 jaar ervaring
</p>
      </div>
        <div class="card grid grid-rows-2">

<p class="text-lg">Correcte prijs-kwaliteitverhouding
</p>
        </div>
        <div class="card grid grid-rows-2">

          <p class="text-lg">Nette afwerking
</p>
        </div>
          <div class="card grid grid-rows-2">

          <p class="text-lg">Actief in Leuven en omgeving

</p>
        </div>
          <div class="card grid grid-rows-2">

          <p class="text-lg">Vrijblijvende offerte

</p>
        </div>
    </div>
    
  </section>
    <section class="px-8 py-16">
    <div class="card bg-[#22385F] text-white grid grid-cols-[2fr_1fr]">
   <div class=" flex flex-col justify-between">
      <p class=" text-3xl">Contacteer ons</p>
      <div class="flex items-center gap-4">
        <a href="tel:+32483819504" title="Bel ons" class="bg-[#b1bdcf] rounded-full w-fit p-3 block">
          <Phone class="size-6 text-[#22385F]" />
        </a>
        <a href="https://wa.me/32483819504" target="_blank" rel="noopener" title="WhatsApp" class="bg-[#b1bdcf] rounded-full w-fit p-3 block">
          <svg class="size-6 text-[#22385F]" viewBox="0 0 510 512.459"><path fill="#111B21" d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"/></svg>
        </a>

</div></div>
      <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <p class="text-xl">Een vraag of project?</p>
        <p>Neem vrijblijvend contact op. Wij bekijken samen uw situatie en zorgen voor een duidelijke offerte.
        </p>
      </div>

<form action="" class="flex flex-col gap-3">
  <input type="text" placeholder="Naam" class="input-field" />
  <input type="phone" placeholder="GSM nummer" class="input-field" />
  <button type="submit" class="button-secondary w-full">Verstuur</button>
</form>
      </div>
    </div>
  </section>
  <footer class="border-t border-[#d6d6d6] px-8 py-16 flex items-start justify-between">
    <div class="flex flex-col items-start gap-4 max-w-lg">

      <img class="h-16" src="./assets/logo.svg" alt="Dakwolf logo" />
      <p class="text-sm">Dakwerken, isolatie en schilderwerken in Leuven nodig? Dakwolf is uw betrouwbare partner voor renovatie en herstellingen in Leuven, Heverlee, Kessel-Lo en omgeving.</p>
    </div>
    <div class="flex items-center gap-2">
       <a href="tel:+32483819504" title="Bel ons" class="bg-[#b1bdcf] rounded-full w-fit p-3 block">
          <Phone class="size-5 text-[#22385F]" />
        </a>
        <a href="https://wa.me/32483819504" target="_blank" rel="noopener" title="WhatsApp" class="bg-[#b1bdcf] rounded-full w-fit p-3 block">
          <svg class="size-5 text-[#22385F]" viewBox="0 0 510 512.459"><path fill="#111B21" d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"/></svg>
        </a>
         <a  target="_blank" rel="noopener" title="WhatsApp" class="bg-[#b1bdcf] rounded-full w-fit p-3 block">
          <Mail class="size-5 text-[#22385F]" />
        </a>
    </div>
  </footer>
</template>

<style scoped>@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slideInRight {
  animation: slideInRight 0.2s cubic-bezier(0.4,0,0.2,1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}</style>
