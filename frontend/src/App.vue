<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="mainStore.incrementAge()">Increment Age</button>
    {{ mainStore.getAge }}
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

//stores
import {useMainStore} from '@/stores/main'



const title = ref('Hello World');
const mainStore = useMainStore();

onMounted(async() => {
  await getItems();
})

const getItems = async () => {
  await fetch('/api/item')
    .then((response) => {
        return response.json()
        .then((data) => {
            console.log(data);
            return data;
        }).catch((err) => {
            console.log(err);
        }) 
    });
}


</script>

<style lang="scss" scoped>

</style>