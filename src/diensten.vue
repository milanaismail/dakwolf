<script setup lang="ts">
import { Check } from '@lucide/vue'
</script>

<template>
  <section class="px-8 py-16 flex flex-col gap-2">
    <h2>Diensten</h2>

    <div class="flex flex-col gap-12">
      <div class="card border-gray-200 border grid grid-cols-1 md:grid-cols-2 p-0 overflow-hidden">
        <img
          src="./assets/diensten-dakwerken.webp"
          class="w-full h-full object-cover"
          alt="Dakwerken"
        />
        <div class="flex items-center justify-center p-16">
          <div>
            <h3>Dakwerken</h3>
            <p>
              Van kleine herstellingen tot volledige dakrenovaties. Wij verzorgen alle werken aan uw
              dak.
            </p>

            <p class="mt-6">Onze dakwerken omvatten:</p>
            <ul class="diensten-list diensten-list--two">
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Herstellingen bij lekkages en schade</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Vernieuwing van oude daken</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Plaatsing van nieuwe daken (hellend en plat)</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Velux dakramen plaatsen</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Afwerking van Velux aan de binnenzijde</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Plaatsing van zonnepanelen</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Detail- en afwerkingswerken</span>
              </li>
            </ul>

            <p class="mt-6">
              Wij zorgen ervoor dat uw dak opnieuw stevig, veilig en volledig afgewerkt is.
            </p>
          </div>
        </div>
      </div>

      <div class="card border-gray-200 border grid grid-cols-1 md:grid-cols-2 p-0 overflow-hidden">
        <img
          src="./assets/diensten-dakwerken.webp"
          class="w-full h-full object-cover md:col-start-2"
          alt="Dakwerken"
        />
        <div class="flex items-center justify-center p-16 md:col-start-1 md:row-start-1">
          <div>
            <h3>Isolatie</h3>
            <p>Een goede isolatie is essentieel voor comfort en energiebesparing.</p>

            <p class="mt-6">Wij werken met:</p>
            <ul class="diensten-list">
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>PIR isolatie</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Glaswol</span>
              </li>
            </ul>

            <p class="mt-6">Toepassingen:</p>
            <ul class="diensten-list">
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Dakisolatie</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Zolderisolatie</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Gevelisolatie met crepi afwerking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card border-gray-200 border grid grid-cols-1 md:grid-cols-2 p-0 overflow-hidden">
        <img
          src="./assets/diensten-dakwerken.webp"
          class="w-full h-full object-cover"
          alt="Dakwerken"
        />
        <div class="flex items-center justify-center p-16">
          <div>
            <h3>Schilderwerken</h3>
            <p>Voor een verzorgde en professionele afwerking van uw woning.</p>

            <p class="mt-6">Onze schilderwerken:</p>
            <ul class="diensten-list">
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Binnen schilderwerken</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Buiten schilderwerken</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Opfrissingswerken en renovatie</span>
              </li>
              <li class="diensten-li">
                <span class="diensten-bullet"><Check class="diensten-icon" /></span>
                <span>Lakken en vernissen</span>
              </li>
            </ul>

            <p class="mt-6">
              Wij zorgen voor een nette afwerking met oog voor detail en kwaliteit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
