<script setup>
    import Product from '@/components/home/Product.vue'
</script>

<template>
    <div class="mt-4 space-y-4">

        <p class="flex items-center uppercase gap-2"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg> Mis seguros 
        </p>

        <section>
            <div class="flex justify-start gap-1">
                <button
                    class="bg-black text-white border px-3 py-1 rounded-full cursor-pointer hover:opacity-75 dark:bg-transparent dark:border-slate-700"> 
                        TODO 
                </button>
                <button
                    class="bg-black text-white border px-3 py-1 rounded-full cursor-pointer hover:opacity-75 dark:bg-transparent dark:border-slate-700"> 
                        AXA 
                </button>
                <button
                    class="bg-black text-white border px-3 py-1 rounded-full cursor-pointer hover:opacity-75 dark:bg-transparent dark:border-slate-700"> 
                        ZURICH 
                </button>
                <button
                    class="bg-black text-white border px-3 py-1 rounded-full cursor-pointer hover:opacity-75 dark:bg-transparent dark:border-slate-700"> 
                        CHUBB 
                </button>
            </div>

            <div class="mt-5">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-3">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </section>

    </div>
</template>