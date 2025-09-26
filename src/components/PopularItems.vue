<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('SÜT')" @keydown.enter="addQuick('SÜT')">
            SÜT</div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('YUMURTA')"
            @keydown.enter="addQuick('YUMURTA')">YUMURTA</div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('EKMEK')"
            @keydown.enter="addQuick('EKMEK')">EKMEK</div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('SALATALIK')"
            @keydown.enter="addQuick('SALATALIK')">SALATALIK</div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('MAKARNA')"
            @keydown.enter="addQuick('MAKARNA')">MAKARNA</div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('BULAŞIK DETERJANI')"
            @keydown.enter="addQuick('BULAŞIK DETERJANI')">BULAŞIK DETERJANI</div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('SU')" @keydown.enter="addQuick('SU')">SU
        </div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('CİPS')"
            @keydown.enter="addQuick('CİPS')">CİPS</div>
        <div class="populerItems" role="button" tabindex="0" @click="addQuick('ÇİKOLATA')"
            @keydown.enter="addQuick('ÇİKOLATA')">ÇİKOLATA</div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const props = defineProps({
    // İstersen dışarıdan geçersin; geçmezsen varsayılanlar kullanılır
    suggestions: {
        type: Array,
        default: () => ['Ekmek', 'Süt', 'Yumurta', 'Peynir', 'Domates']
    },
    // Aynısını tekrar eklemeyi istemiyorsan true bırak
    dedupe: { type: Boolean, default: true }
})

const store = useStore()

function addQuick(text) {
    const v = String(text).trim()
    if (!v) return

    if (props.dedupe) {
        const exists = store.state.items.some(it => it.text.toLowerCase() === v.toLowerCase())
        if (exists) return // varsa tekrar ekleme
    }

    store.commit('ADD_ITEM', v)  // veya store.dispatch('add', v)
}
</script>