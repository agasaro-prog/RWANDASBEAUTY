<script setup>
import { ref } from 'vue'

const fullnames = ref('')
const phonenumber = ref('')
const email = ref('')
const password = ref('')
const gender = ref('')
const age = ref('')

const genderOptions = ['Male', 'Female', 'Other']
</script>

<template>
    <div class="flex items-center justify-center bg-green-100 min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">Registration</h2>
            <form @submit.prevent class="flex flex-col gap-4">
                <input v-model="fullnames" type="text" placeholder="Enter your full names" required
                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />

                <input v-model="phonenumber" type="tel" placeholder="Enter your phone number" required
                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />

                <input v-model="email" type="email" placeholder="Enter your email" required
                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />

                <input v-model="password" type="password" placeholder="Enter your password" required
                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />

                <select v-model="gender" required
                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600 bg-white">
                    <option value="" disabled>Select Gender</option>
                    <option v-for="option in genderOptions" :key="option" :value="option">{{ option }}</option>
                </select>

                <input v-model="age" type="number" min="1" placeholder="Enter your age" required
                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />

                <button type="submit"
                    class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">Register</button>
            </form>

            <p class="text-center text-sm mt-4 text-gray-600">
                Already registered?
                <RouterLink to="/login" class="text-green-700 font-semibold hover:underline">Login</RouterLink>
            </p>
        </div>
    </div>
</template>