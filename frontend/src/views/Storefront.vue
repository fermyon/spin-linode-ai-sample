<script setup lang="ts">
import {useProductsStore, type Product} from '@/stores/products'
import { useRouter } from 'vue-router'
import {ref, type Ref} from 'vue'
const router = useRouter()
const productsStore = useProductsStore();
const filter: Ref<string> = ref('')

function productPrice(p: Product) {
    const currency = "$";
    if(!p){
        return `${currency}0.00`;
    }
    return `${currency}${p!.price.toFixed(2)}`
}

function navigateToProduct(id: string){
    router.push({ name: 'articleDetails', params: { id: id } })
}

function setFilter(category: string) {
    if (filter.value === category) {
        filter.value = ''
        return
    }
    filter.value = category
}

function getProducts() {
    if (filter.value === ''){
        return productsStore.products;
    }
    return productsStore.products.filter(p=> p.category.toLowerCase() === filter.value.toLowerCase())

}
</script>
<template>
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-teal-50 to-blue-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to SmartShop</h1>
        <p class="text-xl text-gray-600 mb-8">Discover personalized product descriptions powered by Fermyon Wasm Functions</p>
      </div>
    </div>

    <!-- Category Filter Navigation -->
    <div class="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-2 py-4">
          <button
            @click="setFilter('')" 
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-200',
              filter === '' 
                ? 'bg-teal-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
            ]"
          >
            All Products
          </button>
          <button
            v-for="cat in productsStore.categories"
            :key="cat"
            @click="setFilter(cat)" 
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-200',
              filter === cat 
                ? 'bg-teal-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>
    <!-- Products Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="p in getProducts()"
          :key="p.id"
          @click="navigateToProduct(p.id)"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200 hover:border-teal-300"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img :src="p.image" :alt="p.name" class="w-full h-48 object-cover"/>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                {{ p.category }}
              </span>
              <span class="text-2xl font-bold text-teal-600">{{ productPrice(p) }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{{ p.name }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ p.shortDescription }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">Click to view details</span>
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="getProducts().length === 0" class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3>
        <p class="mt-1 text-sm text-gray-500">Try adjusting your filter or check back later.</p>
      </div>
    </div>
</template>