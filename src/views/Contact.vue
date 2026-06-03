
<script setup>
import { useI18n } from '../services/i18n.js'

const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-screen bg-cover bg-center text-white" style="background-image: url('/photo6.png');">
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <p class="mb-3 text-sm uppercase tracking-[0.35em] text-green-300">{{ t('contact_label') }}</p>
      <h1 class="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">{{ t('contact_title') }}</h1>
      <p class="mb-10 max-w-3xl text-lg text-white/90 sm:text-xl">{{ t('contact_desc') }}</p>

      <div class="grid w-full gap-6 text-left md:grid-cols-2 xl:grid-cols-4">
        <article class="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md">
          <h2 class="text-xl font-semibold text-green-200">{{ t('contact_card_title') }}</h2>
          <p class="mt-2 text-white/90">{{ t('contact_card_desc') }}</p>
          <a href="tel:+250788000000" class="mt-4 inline-block text-green-300 hover:text-green-100">+250 788 000 000</a>
        </article>

        <article class="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md">
          <h2 class="text-xl font-semibold text-green-200">{{ t('contact_email_label') }}</h2>
          <p class="mt-2 text-white/90">{{ t('contact_desc') }}</p>
          <a href="mailto:info@sostravel.rw" class="mt-4 inline-block text-green-300 hover:text-green-100">info@sostravel.rw</a>
        </article>

        <article class="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md">
          <h2 class="text-xl font-semibold text-green-200">{{ t('contact_address_label') }}</h2>
          <p class="mt-2 text-white/90">{{ t('contact_card_desc') }}</p>
          <p class="mt-4 text-green-100">Kigali, Rwanda</p>
        </article>

        <article class="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md">
          <h2 class="text-xl font-semibold text-green-200">{{ t('contact_phone_label') }}</h2>
          <p class="mt-2 text-white/90">{{ t('contact_desc') }}</p>
          <p class="mt-4 text-green-100">Mon – Sat: 8:00 AM – 6:00 PM</p>
        </article>
      </div>

      <div class="mt-10 rounded-2xl border border-green-400/30 bg-green-900/30 p-6 text-left shadow-xl backdrop-blur-md sm:p-8">
        <h2 class="text-2xl font-semibold text-white">Why contact us?</h2>
        <p class="mt-3 max-w-4xl text-white/90">
          We provide friendly support for trip planning, tourism information, bookings, and local recommendations.
          Our goal is to make your Rwanda experience smooth, enjoyable, and memorable from the first message to the final destination.
        </p>
      </div>
    </div>
  </section>
</template>