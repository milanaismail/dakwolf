<template>
  <section class="px-8 py-16">
    <div
      class="card relative bg-[#22385F] text-white grid md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8 overflow-hidden"
    >
      <div
        v-if="status === 'sending'"
        class="absolute inset-0 z-10 flex items-center justify-center bg-[#22385F]/80"
        aria-live="polite"
        aria-label="Bericht wordt verstuurd"
      >
        <div class="flex flex-col items-center gap-3">
          <PulseLoader :loading="true" color="#fff" size="10px" margin="3px" />
          <span class="text-sm">Versturen</span>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <p class="text-3xl">Contacteer ons</p>
        <div class="items-center gap-2 flex">
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

        <form class="relative flex flex-col gap-3" @submit.prevent="onSubmit">
          <input
            v-model="form.name"
            name="name"
            type="text"
            placeholder="Naam"
            class="input-field"
            autocomplete="name"
            :disabled="status === 'sending'"
            required
          />
          <input
            v-model="form.phone"
            name="phone"
            type="tel"
            placeholder="GSM nummer"
            class="input-field"
            autocomplete="tel"
            :disabled="status === 'sending'"
          />
          <input
            v-model="form.email"
            name="email"
            type="email"
            placeholder="E-mailadres"
            class="input-field"
            autocomplete="email"
            :disabled="status === 'sending'"
            required
          />

          <textarea
            rows="1"
            placeholder="Korte beschrijving "
            class="input-field resize-none"
            v-model="form.description"
            name="message"
            :disabled="status === 'sending'"
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
<script setup lang="ts">
import { Phone, Mail } from '@lucide/vue'
import { PulseLoader } from 'vue-spinner'
import emailjs from '@emailjs/browser'
import { nextTick, reactive, ref } from 'vue'

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

  await nextTick()

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
const loading = ref(true)
const color = ref('#5dc596')
const size = ref('15px')
</script>
