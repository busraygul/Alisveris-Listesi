<script setup>
import ListItems from './ListItems.vue';
import PopularItems from './PopularItems.vue';
import { ref } from 'vue'

const props = defineProps({
  showPopular: { type: Boolean, default: false },
  showItems: { type: Boolean, default: false },
  newItem: { type: String }
})

const newItem = ref('')
const items = ref([])

function addItem() {
  if (newItem.value.trim() !== '') {
    items.value.push(newItem.value.trim());
    newItem.value = '';
  }
}



</script>

<template>
  <div class="card-container">
    <div class="card ">
      <div class="form-group mt-5 mb-20">
        <input v-model="newItem" class="mr-5" type="text" placeholder="Ürün adı" />
        <button @click="addItem" class="bg-red-500">Ekle</button>
      </div>
      <PopularItems v-if="props.showPopular" />
      <ListItems v-if="props.showItems" :items="items" />
    </div>
  </div>

</template>