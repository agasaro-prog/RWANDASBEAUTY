<script setup>
import Translator from './Translator.vue'
import { useI18n } from '../services/i18n.js'
const { t } = useI18n()
</script>

<template>
 <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
   <img src="../assets/images/logo.png" alt="logo"class="h-10">

<ul class="flex gap-8 text-sm font-medium ">
   <li> <a href="/" class="hover:text-yellow-300">{{ t('nav_home') }}</a></li>
   <li> <a href="/about" class="hover:text-yellow-300">{{ t('nav_about') }}</a></li>
   <li> <a href="/services" class="hover:text-yellow-300">{{ t('nav_services') }}</a></li>
   <li class="relative group"> 
      <a href="#" class="hover:text-yellow-300">{{ t('nav_gallery') }} <span>✔</span></a>
   <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
      <li><a href="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav_photos') }}</a></li>
      <li><a href="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav_videos') }}</a></li>
   </ul>
   </li>
  <li class="relative group"> 
      <a href="#" class="hover:text-yellow-300">{{ t('nav_destinations') }} <span>✔</span></a>
   <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
      <li><a href="/northern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav_northern') }}</a></li>
      <li><a href="/southern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav_southern') }}</a></li>
      <li><a href="/eastern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav_eastern') }}</a></li>
      <li><a href="/western" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav_western') }}</a></li>
      <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('nav_kigali') }}</a></li>
   </ul>
   </li>

   <li><a href="/contact" class="hover:text-yellow-300">{{ t('nav_contact') }}</a></li>
</ul>
 <Translator />
 </nav>
</template>