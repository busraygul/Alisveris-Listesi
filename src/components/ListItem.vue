<template>
    <li class="flex items-center justify-between gap-3 py-2 border-b">
        <label class="flex items-center gap-3 flex-1 pr-3">
            <input type="checkbox" :checked="props.item.done" @change="toggle" />
            <span :class="{ 'line-through opacity-60': props.item.done }" class="uppercase truncate">
                {{ props.item.text }} </span>
        </label>
        <button @click="remove"
            class="shrink-0 ml-3 px-2 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring">Sil</button>
    </li>
</template>
<script setup>

import { useStore } from 'vuex'
const props = defineProps({
    item: { type: Object, required: true }
});

const store = useStore()

const toggle = () => store.commit('TOGGLE_ITEM', props.item.id)
const remove = () => store.commit('REMOVE_ITEM', props.item.id)

</script>