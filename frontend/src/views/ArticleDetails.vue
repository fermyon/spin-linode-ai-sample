<script setup lang="ts">
import { computed, getCurrentInstance, ref, watch } from 'vue'
import type {Ref} from 'vue'
import {useRoute, useRouter, RouterLink} from 'vue-router';
import {useProductsStore, type Product} from '@/stores/products';
import { useUserStore, type User } from '@/stores/users';
import { marked } from 'marked';

const product: Ref<Product | undefined> = ref(undefined);
const isGenerating: Ref<boolean> = ref(false)
const selectedUserId: Ref<number> = ref(0);
const router = useRouter();
const route = useRoute();
const productsStore = useProductsStore();
const userStore = useUserStore();
const aiResponse = ref('')

const productPrice = computed(()=> {
    const currency = "$";
    if(!product.value){
        return `${currency}0.00`;
    }
    return `${currency}${product.value!.price.toFixed(2)}`
})

watch(() => route.params.id, (newId) => {

    let found = productsStore.products.find(product => product.id === newId);
    if (!found) {
        
        router.replace('/not-found')
    }else{
    product.value = found
    }
    
}, { immediate: true })

async function generateProductDescription(event: Event) {
    if (selectedUserId.value == 0) {
        return
    }
    isGenerating.value = true
    let selectedIdentity = userStore.users.find(user => user.id == selectedUserId.value);
    try{
        if (!!selectedIdentity) {
            const payload = {
                productDescription: product.value!.description,
                customer: {
                    firstName: selectedIdentity.firstName,
                    lastName: selectedIdentity.lastName,
                    gender: selectedIdentity.gender,
                    nationality: selectedIdentity.nationality,
                    age: selectedIdentity.age,
                    recentPurchases: selectedIdentity.purchaseHistory
                }
            };
            const response = await fetch("/api/personalize-with-streaming", {
                body: JSON.stringify(payload),
                method: "POST",
                headers: {
                "content-type": "application/json"
                }
            });
            isGenerating.value = false
            const reader = response.body!.getReader();
            const decoder = new TextDecoder('utf-8');
            let accumulatedMarkdown = '';
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                accumulatedMarkdown += chunk;
                aiResponse.value = await marked.parse(accumulatedMarkdown);
            }
            }
        }
        catch (error) {
            console.log(`Error happened: ${error}`);
        }
        finally {
            isGenerating.value = false
            event.preventDefault();
            return false;
        }
     
}
</script>
<template>
    <main v-if="!!product" class="max-w-5xl">
        <aside class="mb-2"><RouterLink class="text-lg text-purple-600" to="/">&lt; Go Back</RouterLink></aside>
        <h1 class="text-gray-800 text-5xl mb-2">{{ product!.name }}</h1>
        <header class="flex flex-row items-start mb-10 mt-5">
            <img :src="product.image" class="mr-8 max-w-md max-h-md"/>
            <div class="flex flex-col">
                <h1 class="text-gray-800 text-3xl mb-2">{{ productPrice }}</h1>
                <h2 class="text-gray-800 text-lg mb-2">{{ product!.shortDescription }}</h2>
                <h2 class="text-gray-800 text-lg">🏷️ Category: {{ product!.category }}</h2>
            </div>
        </header>
        <aside class="mb-10">
            <h2 class="text-gray-800 text-3xl mb-5">Product Description</h2>
            <div class="text-gray-800 text-lg text-wrap leading-10">{{  product!.description }}</div>
            
        </aside>   
        <aside class="mb-10">
            <h2 class="text-gray-800 text-3xl mb-5">Personalize</h2>
            <div class="flex flex-col space-y-5 max-w-2xl">
            <select v-model="selectedUserId" 
                class="border rounded-md text-gray-800 px-4 py-2"
                :class="[selectedUserId == 0 ? 'border-red-400': 'border-teal-800' ]">
                <option value="0" selected>Please select an Identity for creating a personalized product description</option>
                <option v-for="u in userStore.users" 
                    :value="u.id">{{ u.firstName }} {{ u.lastName }} ({{ u.age }} {{ u.gender }})</option>
            </select>

        
            <div class="flex flex-row space-x-5">
                <button @click="generateProductDescription" 
                    :class="[isGenerating? 'disabled cursor-default text-gray-600': 'cursor-pointer bg-slate-400 text-gray-800']"
                class="border grow border-teal-800  p-2 text-lg rounded-lg" type="button">Generate Personalized Product Description</button>
                <div class="items-center" role="status" v-if="isGenerating">
                <svg aria-hidden="true" class="mx-auto w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
              </div>
            </div>
        </div>
        </aside>
        <aside>
            <div class="mt-10 mb-20" v-if="!!aiResponse">
                <h2 class="text-gray-800 text-2xl mb-5">Personalized Product Description</h2>
                <div id="ai-response" class="text-gray-800 text-lg text-wrap leading-10" v-html="aiResponse"></div>
            </div>
        </aside>
    </main>
</template>