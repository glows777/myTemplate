<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { computed } from 'vue';
const counterStore = useCounterStore();
let counterPlusOne = computed(() => counterStore.counterPlusOne);
let actionCounterPlusOne = () => counterStore.increment();
let randomizeCounter = () => counterStore.randomizeCounter();
</script>
<template>
<h1>HelloWorld</h1>
<h2>double: {{counterStore.doubleCounter}}</h2>
<h3> counterPlusOne: {{counterPlusOne}}</h3>
<button @click="actionCounterPlusOne">+</button>
<h4>counter: {{counterStore.counter}}</h4>
<button @click="randomizeCounter">randomize</button>
</template>