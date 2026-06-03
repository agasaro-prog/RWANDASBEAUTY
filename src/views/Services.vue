
<script setup>
import { useI18n } from '../services/i18n.js'

const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url('/image4.png');">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative mx-auto max-w-6xl px-6 py-20 text-center">
      <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">{{ t('services_label') }}</p>
      <h1 class="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">{{ t('services_title') }}</h1>
      <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">{{ t('services_subtitle') }}</p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a href="/contact" class="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:bg-emerald-300">{{ t('services_cta_plan') }}</a>
        <a href="/about" class="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">{{ t('services_cta_about') }}</a>
      </div>
    </div>
  </section>

  <section class="bg-slate-50 py-16">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-[0.32em] text-emerald-600">{{ t('services_offer') }}</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{{ t('services_offer_title') }}</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('services_card1_title') }}</h3>
          <p class="mt-3 text-slate-600">{{ t('services_card1_desc') }}</p>
        </article>

        <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('services_card2_title') }}</h3>
          <p class="mt-3 text-slate-600">{{ t('services_card2_desc') }}</p>
        </article>

        <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('services_card3_title') }}</h3>
          <p class="mt-3 text-slate-600">{{ t('services_card3_desc') }}</p>
        </article>

        <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('services_card4_title') }}</h3>
          <p class="mt-3 text-slate-600">{{ t('services_card4_desc') }}</p>
        </article>
      </div>

      <div class="mt-10 rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-xl">
        <h3 class="text-2xl font-semibold">{{ t('services_reason_title') }}</h3>
        <p class="mt-4 max-w-3xl text-slate-200 leading-7">{{ t('services_reason_desc') }}</p>
      </div>
    </div>
  </section>
</template>