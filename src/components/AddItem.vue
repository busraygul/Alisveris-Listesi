<script setup>
import PopularItems from './PopulerItems.vue';
import { defineProps } from 'vue'

const props = defineProps({
  showPopular: { type: Boolean, default: false }
})
</script>

<template>
    <div class="card-container">
  <div class="card ">
    <div class="form-group mt-5 mb-20">
      <input type="text" placeholder="Ürün adı" />
      <button class="bg-red-500">Ekle</button>
    </div>
<PopularItems v-if="props.showPopular" />
  </div>
  
</div>

</template>