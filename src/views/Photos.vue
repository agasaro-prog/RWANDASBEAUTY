<template>
  <!-- Hero section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(/src/assets/images/image11.png)` }"
  >
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
      <img :src="image5" alt="Gallery photo 5" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image6" alt="Gallery photo 6" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image7" alt="Gallery photo 7" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image8" alt="Gallery photo 8" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image9" alt="Gallery photo 9" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image10" alt="Gallery photo 10" class="rounded-2xl shadow-md object-cover h-72 w-full" />
      <img :src="image12" alt="Gallery photo 11" class="rounded-2xl shadow-md object-cover h-72 w-full" />
    </div>
  </section>
</template>

<script setup>
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'
import image8 from '../assets/images/image8.png'
import image9 from '../assets/images/image9.png'
import image10 from '../assets/images/image10.png'
import image12 from '../assets/images/image12.png'
</script>