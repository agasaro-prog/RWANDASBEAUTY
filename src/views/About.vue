
<script setup>
import { useI18n } from '../services/i18n.js'
const { t } = useI18n()
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Hero -->
    <div
      class="relative h-[80vh] bg-cover bg-center flex items-center"
      style="background-image: url('/src/assets/images/image11.png');"
    >
      <div class="absolute inset-0 bg-slate-900/70"></div>
      <div class="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
        <p class="inline-flex items-center gap-2 rounded-full bg-emerald-100/20 px-4 py-2 text-sm uppercase tracking-[0.24em] text-emerald-200">
          {{ t('about_section_title') }}
        </p>
        <h1 class="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight">
          {{ t('about_title') }}
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          {{ t('about_paragraph') }}
        </p>
      </div>
    </div>

    <!-- Info Grid -->
    <section class="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">{{ t('about_why') }}</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {{ t('about_subtitle') }}
        </h2>
        <p class="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          {{ t('about_intro_desc') }}
        </p>

        <div class="mt-10 space-y-6">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">{{ t('about_culture') }}</h3>
            <p class="mt-3 text-slate-600">
              {{ t('about_culture_desc') }}
            </p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">{{ t('about_wildlife') }}</h3>
            <p class="mt-3 text-slate-600">
              {{ t('about_wildlife_desc') }}
            </p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">{{ t('about_adventure') }}</h3>
            <p class="mt-3 text-slate-600">
              {{ t('about_adventure_desc') }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 lg:mt-0">
        <div class="grid gap-6 rounded-[32px] bg-slate-950/90 p-6 text-slate-100 shadow-2xl sm:p-8">
          <div>
            <span class="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-200">
              {{ t('about_our_mission') }}</span>
            <p class="mt-5 text-lg font-semibold leading-tight">
              {{ t('about_our_mission_desc') }}
            </p>
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <div class="rounded-3xl bg-slate-900/90 p-6">
              <p class="text-4xl font-extrabold text-emerald-300">300+</p>
              <p class="mt-3 text-sm text-slate-400">{{ t('about_visitors') }}</p>
            </div>
            <div class="rounded-3xl bg-slate-900/90 p-6">
              <p class="text-4xl font-extrabold text-emerald-300">5</p>
              <p class="mt-3 text-sm text-slate-400">{{ t('about_regions') }}</p>
            </div>
          </div>
          <div class="rounded-3xl bg-emerald-500/10 p-6 text-slate-50">
            <h4 class="text-lg font-semibold">{{ t('about_balance') }}</h4>
            <p class="mt-3 text-sm leading-6 text-slate-200">
              {{ t('about_balance_desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values section -->
    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-12 lg:grid-cols-3">
          <div class="rounded-3xl bg-white p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">{{ t('about_sustainability') }}</h3>
            <p class="mt-4 text-slate-600 leading-7">{{ t('about_sustainability_desc') }}</p>
          </div>
          <div class="rounded-3xl bg-white p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">{{ t('about_local_stories') }}</h3>
            <p class="mt-4 text-slate-600 leading-7">{{ t('about_local_stories_desc') }}</p>
          </div>
          <div class="rounded-3xl bg-white p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">{{ t('about_meaningful_travel') }}</h3>
            <p class="mt-4 text-slate-600 leading-7">{{ t('about_meaningful_travel_desc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
