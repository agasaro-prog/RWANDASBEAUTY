<script setup>
import { ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

const count = ref(0)
</script>

<template>
  <section class ="bg-gray-500 min-h-screen flex items-center justify-center">
  <div class="text-center">
    <h1 class=text-4xl  font-bold mb-4>SOS BLOG</h1>
    <p class="text-lg text-gray-700 mb-6">Welcome to SOS High school.</p>
    <table border="2" cellpadding="12" cellspacing="0">
      <th>
        <tr>NDUWAYEZU John</tr>
        <tr>HAKIZAYEZU Jean de dieu</tr>
        <tr>MANIRARORA Pierre</tr>
        <tr>MUREKATETE Jeanette</tr>
      </th>
      <th>
        <tr></tr>
      </th>
    </table>
    
  </div>
</section>
</template>

