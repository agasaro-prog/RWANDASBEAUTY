
<script setup>
import { useI18n } from '../services/i18n.js'
const { t } = useI18n()
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden bg-slate-950 text-white">
    <div
      class="absolute inset-0 bg-[url('/image1.png')] bg-cover bg-center bg-no-repeat opacity-90"
    ></div>
    <div class="absolute inset-0 bg-slate-950/30"></div>

    <div class="relative mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-center px-6 py-12 lg:px-12">
      <span class="inline-flex items-center gap-2 rounded-full bg-emerald-200/15 px-4 py-2 text-sm uppercase tracking-[0.32em] text-emerald-200">
        {{ t('home_explore_rwanda') }}
      </span>
      <h1 class="mt-8 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
        {{ t('home_hero_title') }}
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
        {{ t('home_hero_subtitle') }}
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a href="/" class="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto">
          {{ t('home_start_exploring') }}
        </a>
        <a href="/about" class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base text-white transition hover:border-emerald-300 sm:w-auto">
          {{ t('home_learn_about') }}
        </a>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-3">
        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
          <p class="text-3xl font-bold text-emerald-300">5</p>
          <p class="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">Regions</p>
        </div>
        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
          <p class="text-3xl font-bold text-emerald-300">300+</p>
          <p class="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">Destinations</p>
        </div>
        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
          <p class="text-3xl font-bold text-emerald-300">24/7</p>
          <p class="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">Support</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Experiences -->
  <section class="bg-slate-50 px-6 py-16 lg:px-12">
    <div class="mx-auto max-w-7xl">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">{{ t('home_highlights') }}</p>
        <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{{ t('home_experiences_title') }}</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          {{ t('home_experiences_subtitle') }}
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <article class="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">{{ t('home_nature') }}</p>
          <h3 class="mt-4 text-2xl font-bold text-slate-900">{{ t('home_gorilla_trekking') }}</h3>
          <p class="mt-4 text-slate-600 leading-7">{{ t('home_gorilla_desc') }}</p>
        </article>
        <article class="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">{{ t('home_culture') }}</p>
          <h3 class="mt-4 text-2xl font-bold text-slate-900">{{ t('home_kigali_discovery') }}</h3>
          <p class="mt-4 text-slate-600 leading-7">{{ t('home_kigali_desc') }}</p>
        </article>
        <article class="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">{{ t('home_adventure') }}</p>
          <h3 class="mt-4 text-2xl font-bold text-slate-900">{{ t('home_lakes_hills') }}</h3>
          <p class="mt-4 text-slate-600 leading-7">{{ t('home_lakes_desc') }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Regions preview -->
  <section class="bg-gray-100 px-6 py-16 lg:px-12">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">{{ t('home_regions') }}</p>
        <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{{ t('home_explore_regions') }}</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/image9.png')] bg-cover bg-center bg-no-repeat p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">{{ t('home_northern') }}</h3>
            <p class="mt-4 text-slate-300">{{ t('home_northern_desc') }}</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/image7.png')] bg-cover bg-center bg-no-repeat p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">{{ t('home_eastern') }}</h3>
            <p class="mt-4 text-slate-300">{{ t('home_eastern_desc') }}</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/image10.png')] bg-cover bg-center bg-no-repeat p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">{{ t('home_western') }}</h3>
            <p class="mt-4 text-slate-300">{{ t('home_western_desc') }}</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/image8.png')] bg-cover bg-center bg-no-repeat p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">{{ t('home_southern') }}</h3>
            <p class="mt-4 text-slate-300">{{ t('home_southern_desc') }}</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl sm:col-span-2 lg:col-span-1">
          <div class="bg-[url('/image4.png')] bg-cover bg-center bg-no-repeat p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">{{ t('home_kigali_city') }}</h3>
            <p class="mt-4 text-slate-300">{{ t('home_kigali_city_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to action -->
  <section class="bg-emerald-500 px-6 py-16 text-white lg:px-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] bg-emerald-600/95 p-10 text-center shadow-2xl sm:p-14">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-100/90">{{ t('home_plan_visit') }}</p>
        <h2 class="mt-4 text-3xl font-bold sm:text-4xl">{{ t('home_ready_title') }}</h2>
      </div>
      <p class="mx-auto max-w-2xl text-base leading-7 text-emerald-100/90">
        {{ t('home_ready_desc') }}
      </p>
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="/contact" class="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">{{ t('home_contact') }}</a>
        <a href="/services" class="inline-flex rounded-full border border-white/75 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">{{ t('home_view_services') }}</a>
      </div>
    </div>
  </section>
</template>