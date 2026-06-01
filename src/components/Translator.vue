<script setup>
import { computed } from 'vue'
import useI18n from '../services/i18n.js'

const { locale, setLocale, supported, t } = useI18n()
const current = computed({
  get: () => locale.value,
  set: (value) => setLocale(value)
})
</script>

<template>
  <div class="flex items-center gap-2 text-sm text-white">
    <label class="hidden sm:inline-block">{{ t('nav_language') }}</label>
    <select v-model="current" class="rounded-md bg- px-3 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-emerald-300">
      <option v-for="(label, code) in supported" :key="code" :value="code">{{ label }}</option>
    </select>
  </div>
</template>
