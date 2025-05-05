<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>
<template>
    <h1 class="text-gray-800 text-4xl mb-8">Whoops!</h1>
    <main class="text-center">
        <div class="text-gray-800 text-lg mb-8">We haven't found what you're looking for!</div>
        <RouterLink class="text-teal-700 text-2xl animate-pulse" to="/">Go back to the Storefront</RouterLink>
    </main>
</template>