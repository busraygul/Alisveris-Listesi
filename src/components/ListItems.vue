<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ListItem from './ListItem.vue'

const store = useStore()
const items = computed(() => store.getters.items)
const total = computed(() => store.getters.total)
const doneCount = computed(() => store.getters.doneCount)

const filter = ref('all')
const filteredItems = computed(() => {
    if (filter.value === 'done') return items.value.filter(i => i.done)
    if (filter.value === 'todo') return items.value.filter(i => !i.done)
    return items.value
})
</script>

<template>
    <div>
        <div class="filters flex gap-2">
            <button @click="filter = 'all'" class="px-3 py-1 rounded-md border text-sm"
                :class="filter === 'all' ? 'bg-rose-500 text-white border-rose-500' : 'bg-white border-rose-300'">
                Hepsi
            </button>

            <button @click="filter = 'todo'" class="px-3 py-1 rounded-md border text-sm"
                :class="filter === 'todo' ? 'bg-rose-500 text-white border-rose-500' : 'bg-white border-rose-300'">
                Satın alınmadı
            </button>

            <button @click="filter = 'done'" class="px-3 py-1 rounded-md border text-sm"
                :class="filter === 'done' ? 'bg-rose-500 text-white border-rose-500' : 'bg-white border-rose-300'">
                Satın alındı
            </button>
        </div>

        <div class="text-right mb-2">
            <small>Satın Alınan Ürün: {{ doneCount }} </small>
            <br>
            <small>Toplam Ürün: {{ total }}</small>
            <br>
        </div>
        <ul class="space-y-1">
            <ListItem v-for="it in filteredItems" :key="it.id" :item="it" />
        </ul>
    </div>
</template>
