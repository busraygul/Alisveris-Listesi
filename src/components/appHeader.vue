<template>
    <header class="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-pink-200 border-b border-pink-300">
        <h1 class="flex items-center gap-2 text-xl font-bold text-red-700">
            <span class="material-symbols-outlined text-red-600 align-middle">shopping_cart</span>
            ALIŞVERİŞ LİSTEM
        </h1>

        <router-link :to="{ name: 'ListPage'}" class="rounded px-4 py-1 bg-red-500 text-white font-medium hover:bg-red-600 transition">
            LİSTEM
        </router-link>
    </header>
</template>
