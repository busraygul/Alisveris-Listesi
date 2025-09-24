<template>
    <ul class="space-y-1">
        <ListItem v-for="(item, index) in props.items" :key="index" :item="item" />
    </ul>
</template>

<script setup>
import ListItem from './ListItem.vue';

const props = defineProps({
    items: { type: Array, default: () => [] }
});
</script>