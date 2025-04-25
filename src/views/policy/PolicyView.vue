<script setup>
    import { ref } from 'vue'

    const showCoverageDetails = ref(false)
    const showDependents = ref(false)
    const showPaymentHistory = ref(false)

</script>

<template>
    <div class="mt-4 space-y-4">

        <RouterLink
            to="/"
            class="flex items-center uppercase gap-2 border w-35 px-3 py-1 rounded-full bg-black text-white"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg> Regresar 
        </RouterLink>

        <section>
            <div class="border border-gray-300 dark:border-slate-700 rounded-lg">
                <div class="flex flex-row p-5 gap-3">
                    <div class="basis-1/3 shadow-lg relative">
                        <span class="absolute top-2 right-2 bg-green-500 flex items-center gap-2 uppercase px-3 text-white rounded-lg font-light text-sm">
                            Vigente
                        </span>
                        <img
                            class="w-50 rounded-lg border border-gray-300 dark:border-slate-700"
                            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80" 
                            alt="Imagen travel anual">
                    </div>
                    <div class="basis-2/3">
                        <p class="uppercase"> Travel Anual familiar </p>
                        <span class="text-sm dark:text-gray-400"> AXA </span>

                        <div class="mt-2">
                            <p class="font-light uppercase flex items-center gap-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg> Vigencia
                            </p>
                            <p class="my-2 dark:text-gray-400"> Del 2025-04-24 al 2026-04-23 </p>
                            <span class="bg-indigo-400 opacity-75 px-3 py-0.5 rounded-full text-white"> USD $130.00 </span>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="bg-gray-200 dark:bg-slate-600 mt-3 mb-1 rounded-lg border-1 border-gray-300 dark:border-none">
                <div class="grid grid-cols-2 px-3 py-2">
                    <div class="border-r-1 border-gray-400 dark:border-gray-500 cursor-pointer">
                        <p class="font-light flex justify-center items-center gap-3 uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg> PDF
                        </p>
                    </div>
                    <div class="flex justify-center items-center">
                        <p
                            class="font-light text-center cursor-pointer uppercase">
                                Póliza: 90985
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-10">

            <div class="mt-5 border-b-1 border-gray-300 dark:border-slate-700 cursor-pointer">
                <div class="flex min-w-0 gap-x-4 items-center mb-3">
                    <div class="min-w-0 flex-auto">
                        <p class="uppercase text-sm"> Coberturas </p>
                        <span class="text-sm dark:text-gray-400"> ¿Que cubre mi seguro? </span>
                    </div>
                    <div>
                        <button
                            @click="showCoverageDetails = !showCoverageDetails"
                            class="cursor-pointer">
                                <svg
                                    v-if="!showCoverageDetails"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div 
                    v-if="showCoverageDetails" 
                    class="mt-3 mb-5 px-5 transition-all">
                        <p class="dark:text-gray-400 font-light flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg> Gastos médicos
                        </p> 

                        <p class="dark:text-gray-400 font-light flex items-center gap-3 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg> Regreso anticipado
                        </p> 

                        <p class="dark:text-gray-400 font-light flex items-center gap-3 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg> Accidente grave o fallecimiento
                        </p> 
                </div>
            </div>
        </section>

        <section class="mt-10">
            <div class="mt-5 border-b-1 border-gray-300 dark:border-slate-700 cursor-pointer">
                <div class="flex min-w-0 gap-x-4 items-center mb-3">
                    <div class="min-w-0 flex-auto">
                        <p class="uppercase text-sm"> Dependientes </p>
                        <span class="text-sm dark:text-gray-400"> Mis dependientes </span>
                    </div>
                    <div>
                        <button
                            @click="showDependents = !showDependents"
                            class="cursor-pointer">
                                <svg
                                    v-if="!showDependents"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div 
                    v-if="showDependents" 
                    class="mt-3 mb-5 px-5 transition-all">
                        <p class="dark:text-gray-400 font-light flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg> Valany
                        </p> 

                        <p class="dark:text-gray-400 font-light flex items-center gap-3 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg> Valentina
                        </p> 
                </div>
            </div>
        </section>

        <section class="mt-10">
            <div class="mt-5 border-b-1 border-gray-300 dark:border-slate-700 cursor-pointer">
                <div class="flex min-w-0 gap-x-4 items-center mb-3">
                    <div class="min-w-0 flex-auto">
                        <p class="uppercase text-sm"> Pagos </p>
                        <span class="text-sm dark:text-gray-400"> Historial de pagos </span>
                    </div>
                    <div>
                        <button
                            @click="showPaymentHistory = !showPaymentHistory"
                            class="cursor-pointer">
                                <svg
                                    v-if="!showPaymentHistory"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div 
                    v-if="showPaymentHistory" 
                    class="mt-3 mb-5 px-5 transition-all">
                        <p class="dark:text-gray-400 font-light flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg> Pago 2: 2025-05-25
                        </p> 

                        <p class="dark:text-gray-400 font-light flex items-center gap-3 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg> Pago 1: 2025-04-25
                        </p> 
                </div>
            </div>
        </section>
    </div>
</template>