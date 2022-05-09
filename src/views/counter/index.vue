<script setup lang="ts">
/**
 * 本页面是例子页面，用于展示如何使用一系列function
 *
 */
import { useCounterStore } from '@/stores/counter';
import { computed } from 'vue';
const counterStore = useCounterStore();
let counterPlusOne = computed(() => counterStore.counterPlusOne);
let actionCounterPlusOne = () => counterStore.increment();
let randomizeCounter = () => counterStore.randomizeCounter();
import myAxios from '@/common/js/http';

function getListAPI() {
  return myAxios(
    {
      url: '/api/list',
      method: 'get'
    },
    {
      loading: true
    },
    {
      text: '加载中...'
    }
  );
}
const getList = () => {
  getListAPI().then((res) => {
    console.log(res);
  });
};
</script>
<template>
  <el-button @click="getList">test</el-button>
  <h1>HelloWorld</h1>
  <h2>double: {{ counterStore.doubleCounter }}</h2>
  <h3>counterPlusOne: {{ counterPlusOne }}</h3>
  <button @click="actionCounterPlusOne">+</button>
  <h4>counter: {{ counterStore.counter }}</h4>
  <button @click="randomizeCounter">randomize</button>
</template>
