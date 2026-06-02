<script setup>
import { RouterView,useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home.vue';
import northern from './views/northern.vue';
import southern from './views/southern.vue';
import western from './views/western.vue';
import eastern from './views/eastern.vue';
import videos from './views/videos.vue';
import Photos from './views/Photos.vue';
import { computed } from 'vue';


const route=useRoute()
const hideLayout=computed(()=>['Dashboard'].includes(route.name))
</script>
<template>
  <NavBar v-if="!hideLayout"/>
  <RouterView/>
  <Footer v-if="!hideLayout" />
  
</template>