<script setup>

</script>

<template>
    <div class="mt-4 space-y-4">

        <div class="p-4 space-y-4">
            
            <div class="flex justify-end items-start space-x-3">
                <div>
                    <div class="bg-blue-300 dark:bg-blue-500 text-black px-4 py-2 rounded-xl rounded-br-none max-w-xs">
                        <p class="font-medium text-end">Do you mind sending me the brief for the new campaign? Ethan told me about it and I want to go over it with him.</p>
                    </div>
                    <div class="text-xs text-gray-400 mt-1 text-end">Noah Martinez · 09:08 AM</div>
                </div>
            </div>

            <!-- Mensaje ia -->
            <div class="flex justify-start">
                <div class="text-right">
                    <div class="bg-violet-300 dark:bg-violet-400 text-black px-4 py-2 rounded-xl rounded-bl-none max-w-xs inline-block">
                        <p class="font-medium text-start">Of course. I'll go through the specs and get back to you shortly.</p>
                    </div>
                    <div class="text-xs text-gray-400 mt-1 flex justify-start items-center space-x-1">
                        <span class="flex items-center gap-2"> 
                            ARAMISIN · 09:11 AM
                        </span>
                        <span class="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div class="fixed bottom-20 left-0 w-full dark:bg-gray-800 text-white p-4 text-center">
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            </div>
            <input
                type="text"
                placeholder="Escribe..."
                class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
        </div>
    </div>

</template>