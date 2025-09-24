<template>
    <li class="flex items-center justify-between gap-3 py-2 border-b">
        <label class="flex items-center gap-3 flex-1 pr-3">
            <input type="checkbox" class="shrink-0" />
            <span class="truncate break-words">{{ props.item }}</span>
        </label>
        <button
            class="shrink-0 ml-3 px-2 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring"
            aria-label="Öğeyi sil">Sil</button>
    </li>
</template>
<script setup>

const props = defineProps({
    item: { type: String, required: true }
});
</script>