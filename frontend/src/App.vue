<script setup lang="ts">  
import { useProductsStore } from './stores/products';
const productsStore = useProductsStore()
</script>

<template>
  <nav class="fixed top-0 flex flex-col mb-3 bg-slate-800 w-full p-4 border-b-4 border-slate-500">
    <div class="flex flex-row items-center">
      <RouterLink to="/"><span class="text-4xl text-teal-400 mr-3">personali<em>Zon</em></span></RouterLink>
      <span class="text-lg pt-1 text-teal-500">personalized product descriptions - powered by Fermyon Wasm Functions</span>
    </div>
  </nav>

  <RouterView /> 
</template>
