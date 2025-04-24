<script setup>
    import Product from '@/components/shop/Product.vue'
    import Category from '@/components/shop/Category.vue'
</script>

<template>
    <div class="mt-4 space-y-4">
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z" />
                </svg>
            </div>
            <input
                type="text"
                placeholder="Buscar"
                class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
        </div>

        <section class="mt-10">
            <div class="flex justify-between items-center">
                <p class="uppercase mb-3 font-light"> Lo más vendido </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
            </div>
            <div class="overflow-x-auto whitespace-nowrap space-x-4 flex mt-5">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </section>

        <section class="mt-10">
            <div class="flex justify-between items-center">
                <p class="uppercase mb-3 font-light"> Regala protección a tu familia </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
            </div>
            <div class="overflow-x-auto whitespace-nowrap space-x-4 flex mt-5">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </section>

        <section class="mt-10">
            <p class="uppercase mb-3 font-light"> Categorías </p>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </section>

    </div>
</template>