<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Booking from './Booking.vue';
import Overview from './Overview.vue';

const router = useRouter()
const activeMenu = ref('overview')

function logout() {
    router.push('/login')
}
</script>

<template>
    <div class="flex h-screen bg-gray-100">
        <!--a sidebar which will be used to call the items content -->
        <aside class="w-68 bg-green-800 text-white flex flex-col">
            <div class="p-6 text-2x1 font-bold border-b border-green-700">Dashboard</div>

            <nav class="flex-1 p-4">
                <button @click="activeMenu='overview'":class="activeMenu==='overview'?'bg-green-700':'hover:bg-green-700'"
                class="w-full text-left px-4 py-3 rounded mb-2"> Overview</button>
                
                <button @click="activeMenu='booking'":class="activeMenu==='booking'?'bg-green-700':'hover:bg-green-700'"
                class="w-full text-left px-4 py-3 rounded mb-2"> Booking</button>

                <button @click="activeMenu='users'":class="activeMenu==='users'?'bg-green-700':'hover:bg-green-700'"
                class="w-full text-left px-4 py-3 rounded mb-2"> Users</button>



            </nav>
            <!--button for logout-->
            <div class="p-4 border-t border-green-700">

                <button @click="logout" class="w-full bg-red-600 hover:bg-red-800 px-4 py-2 rounded">Logout</button> </div>

        </aside>
        <!-- Main content -->
         <main class="flex-1 overflow-y-auto p-8">
            <!-- this will contain overView -->
            <Overview v-if="activeMenu==='overview'"/>

            <!-- this will contain Booking -->
            <Booking v-if="activeMenu==='booking'"/>
         </main>
    </div>
</template>