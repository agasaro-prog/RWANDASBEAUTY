
<script setup>
import { useI18n } from '../services/i18n.js'

const { t } = useI18n()
</script>

<template>
    <!-- Hero section -->
     <section class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
     style="background-image: url('/image6.png');"
     > 
     <div class="bg-black/40 bg-opacity-50 absolute inset-0">

     </div>
     <div class="relative mx-auto max-w-4xl px-6 text-center">
        <h1 class="text-4xl font-bold mb-4 sm:text-5xl">{{ t('dest_kigali_title') }}</h1>
        <p class="text-lg mb-8 text-emerald-100 leading-8">{{ t('dest_kigali_desc') }}</p>
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-200">{{ t('common_land_of_thousand_hills') }}</p>
     </div>
     </section>
</template>