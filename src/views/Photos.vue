<template>
  <!-- Hero section -->
  <section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url('/src/assets/images/image7.png');">
    <div class="bg-black/40 bg-opacity-50 absolute inset-0"></div>
    <div class="relative text-center px-4">
      <h1 class="text-5xl font-bold mb-4">WELCOME TO PHOTOS</h1>
      <p class="text-lg mb-8 text-green-300">LAND OF A THOUSAND HILLS</p>
    </div>
  </section>

  <section class="py-12 px-4 max-w-6xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-semibold">Photo Gallery</h2>
      <p class="text-gray-600 mt-2">Explore our featured photos below.</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <img :src="image1" alt="Gallery photo 1" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image2" alt="Gallery photo 2" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image3" alt="Gallery photo 3" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image4" alt="Gallery photo 4" class="rounded-2xl shadow-md object-cover h-72 w-full" />
    </div>
  </section>
</template>

<script setup>
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
</script>