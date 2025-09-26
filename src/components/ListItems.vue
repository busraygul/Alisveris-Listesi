<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ListItem from './ListItem.vue'

const store = useStore()
const items = computed(() => store.getters.items)
const total = computed(() => store.getters.total)
const doneCount = computed(() => store.getters.doneCount)

</script>

<template>
    <div>
        <div class="text-right mb-2">
            <small>Satın Alınan Ürün: {{ doneCount }} </small>
            <br>
            <small>Toplam Ürün: {{ total }}</small>
            <br>
        </div>
        <ul class="space-y-1">
            <ListItem v-for="it in items" :key="it.id" :item="it" />
        </ul>
    </div>
</template>
