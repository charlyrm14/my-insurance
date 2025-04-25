<script setup>
</script>

<template>
    <div class="border-1 border-gray-300 dark:border-slate-700 rounded-lg p-3 shadow-lg relative">
        <span class="absolute top-5 right-5 bg-indigo-500 flex items-center gap-2 uppercase px-3 text-white rounded-lg font-light">
            90985
        </span>
        <div> 
            <img
                class="w-full h-40 rounded-lg border border-gray-300 dark:border-slate-700"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80" 
                alt="Imagen travel anual">
        </div>
        <div class="mt-3">
            <p class="uppercase font-light"> Travel Anual familiar </p>
            <span class="text-gray-400 uppercase font-light"> AXA </span>
            <div class="bg-gray-200 dark:bg-slate-600 mt-3 mb-1 rounded-lg border-1 border-gray-300 dark:border-none">
                <div class="grid grid-cols-2 px-3 py-1">
                    <div class="border-r-1 border-gray-400 dark:border-gray-500 cursor-pointer">
                        <p class="font-light flex justify-center items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg> PDF
                        </p>
                    </div>
                    <div class="flex justify-center items-center">
                        <RouterLink
                            :to="{
                                name: 'policy-detail',
                                params: {
                                    id: 1
                                }
                            }"
                            class="font-light text-center cursor-pointer">
                                MÁS
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>