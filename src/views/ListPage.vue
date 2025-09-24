<template>
    <AddItem :showItems="true" />
    <ListItems />
</template>

<script setup>
import AddItem from '@/components/AddItem.vue';
import ListItems from '@/components/ListItems.vue';
</script>