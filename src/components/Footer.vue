<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">

        <div class="flex flex-wrap justify-between gap-8">
            <!-- this is about footer -->
            <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
            <p class="text-sm text-green-200">Discover the beauty of A thousand hills</p>
            </div> 
        

        <!-- Quick links -->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick links</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink><br>
                </li>
                <li>
                    <RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink><br>
                </li>
                <li>     
                    <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink><br>
                </li>
                <li>    
                    <RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink>
                </li>    
            </ul>
         </div>
         <!--Destinations -->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">Northern Province</RouterLink><br>
                </li>
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">Western Province</RouterLink><br>
                </li>
                <li>    
                    <RouterLink to="/" class="hover:text-yellow-300">Southern Province</RouterLink><br>
                </li>
                <li>    
                    <RouterLink to="/" class="hover:text-yellow-300">Eastern Province</RouterLink>
                </li>    
                <li>    
                    <RouterLink to="/" class="hover:text-yellow-300">KIGALI CITY</RouterLink>
                </li>    
            </ul>
         </div>
         <!--contact info -->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact Us</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">agasaropromesse@gmail.com</RouterLink><br>
                </li>
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">0796540328</RouterLink><br>
                </li>
                <li>    
                    <RouterLink to="/" class="hover:text-yellow-300">KAGUGU-KIGALI-RWANDA</RouterLink><br>
                </li>
            </ul>
         </div>
        </div>

        <!-- place for copy right -->
         <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300"></div>
         <p class="text-center">©2025 Visit Rwanda.All rights reserved</p>
    </footer>
</template>