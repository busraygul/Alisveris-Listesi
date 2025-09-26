<script setup>
import ListItems from './ListItems.vue';
import PopularItems from './PopularItems.vue';
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
const props = defineProps({
  showPopular: { type: Boolean, default: false },
  showItems: { type: Boolean, default: false },
  newItem: { type: String }
})

const newItem = ref('')
const items = ref([]) //anasayfadan ekleme yaparken array olan itemstan çekiyorum.
const filter = ref('all')

const filteredItems = computed(() => {
  if (filter.value === 'done') return items.value.filter(i => i.done)
  if (filter.value === 'todo') return items.value.filter(i => !i.done)
  return items.value
})
const store = useStore()

function addItem() {
  store.commit('ADD_ITEM', newItem.value)
  if (newItem.value.trim() !== '') {
    items.value.push({ id: Date.now(), text: newItem.value.trim(), done: false });
    newItem.value = '';
  }
}
</script>

<template>
  <div class="card-container">
    <div class="card ">
      <div class="form-group mt-5 mb-20">
        <input v-model="newItem" class="mr-5 uppercase" type="text" placeholder="Ürün adı" @keyup.enter="addItem" />
        <button @click="addItem" class="bg-red-500">Ekle</button>
      </div>
      <PopularItems v-if="props.showPopular" />
      <ListItems v-if="props.showItems" :items="items" />
    </div>
  </div>

</template>