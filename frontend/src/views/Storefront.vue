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
    <div class="flex flex-row space-x-4 justify-center p-3 text-xl border-slate-400 mb-10">
      <div class="cursor-pointer"
      @click="setFilter('')" 
      :class="filter == '' ? 'text-purple-800': 'text-gray-800'">All</div>
      <div class=" cursor-pointer" 
        @click="setFilter(cat)" 
        v-for="cat in productsStore.categories"
        :class="filter == cat? 'text-purple-800': 'text-gray-800'">{{ cat }}</div>
    </div>
    <ul class="mx-auto max-w-4xl">
    <li class="p-4 border-2 rounded-sm border-teal-600 mb-8 cursor-pointer
        hover:border-teal-800 hover:bg-slate-200 hover:text-teal-800" v-for="p in getProducts()"
        @click="navigateToProduct(p.id)">
        <div class="flex flex-row">
            <img :src="p.image" class="mr-4"/>
            <div class="flex flex-col">
            <h1 class="text-gray-800 font-medium text-3xl ">{{ p.name }}</h1>
            <div class="text-gray-800 font-semibold text-2xl mb-4">{{productPrice(p)}}</div>

            <div class="text-gray-800 mr-2 text-lg mb-3">{{ p.shortDescription}}</div>
            <div class="text-gray-800">🏷️ {{ p.category }}</div>
            </div>
        </div>

    </li>
    </ul>
</template>