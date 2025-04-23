<script setup>
    import Header from '@/components/layouts/Header.vue'
    import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
    <div class="h-screen overflow-hidden relative">
        <div class="flex flex-col h-full">
            <Header/>
            <main class="flex-1 overflow-y-auto p-4">
                <RouterView/>
            </main>
            <Footer/>
        </div>
    </div>
</template>