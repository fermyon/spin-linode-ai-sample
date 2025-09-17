<script setup lang="ts">  
import { useProductsStore } from './stores/products';
import { ref } from 'vue';
const productsStore = useProductsStore()
const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 w-full bg-white shadow-lg border-b border-gray-200 z-50">
    <!-- Main Navigation -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="flex items-center">
            <span class="text-3xl font-bold text-teal-600">Smart<em class="text-teal-800">Shop</em></span>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <RouterLink 
              to="/" 
              class="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-teal-600 bg-teal-50"
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/" 
              class="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Products
            </RouterLink>
            <div class="relative group">
              <button class="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                Categories
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <!-- Dropdown would go here -->
            </div>
            <a href="#" class="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              About
            </a>
            <a href="#" class="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-teal-600 p-2 rounded-md transition-colors duration-200"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink 
          to="/" 
          class="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          @click="toggleMobileMenu"
        >
          Home
        </RouterLink>
        
      </div>
    </div>
  </nav>

  <!-- Main content with top padding to account for fixed nav -->
  <main class="pt-16">
    <RouterView />
  </main>
</template>
