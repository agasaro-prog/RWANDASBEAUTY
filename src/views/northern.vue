
<script setup>
import { useI18n } from '../services/i18n.js'

const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url(/src/assets/images/photo4.png);">
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative mx-auto max-w-4xl px-6 text-center">
      <h1 class="text-4xl font-bold mb-4 sm:text-5xl">{{ t('dest_northern_title') }}</h1>
      <p class="text-lg mb-8 text-emerald-100 leading-8">{{ t('dest_northern_desc') }}</p>
      <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">{{ t('common_land_of_thousand_hills') }}</p>
    </div>
  </section>

  <section class="bg-slate-50 py-16 text-slate-800">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-700">Northern Rwanda</p>
        <h2 class="mt-3 text-3xl font-bold sm:text-4xl">Why this region is special</h2>
        <p class="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          The northern part of Rwanda is known for its cool climate, dramatic volcanoes, scenic lakes, and rich cultural heritage.
          It is one of the best places for adventure, nature, and unforgettable community experiences.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 class="text-xl font-semibold text-emerald-800">Wildlife and adventure</h3>
          <p class="mt-3 text-slate-600">
            Visit Volcanoes National Park for gorilla trekking, golden monkey tracking, and breathtaking hikes through the rainforest.
          </p>
        </article>

        <article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 class="text-xl font-semibold text-emerald-800">Scenic beauty</h3>
          <p class="mt-3 text-slate-600">
            Enjoy peaceful views of Lake Burera, Lake Ruhondo, and the green hills that make northern Rwanda one of the most beautiful regions in the country.
          </p>
        </article>

        <article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 class="text-xl font-semibold text-emerald-800">Culture and community</h3>
          <p class="mt-3 text-slate-600">
            Discover local traditions, welcoming villages, and cultural experiences that give visitors a deeper connection to Rwanda’s people and history.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>