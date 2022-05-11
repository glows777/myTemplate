<script setup lang="ts">
import { debounce, throttle } from '@/common/js/utils';
const debounceTest = debounce(() => {
  console.log('debounceTest');
});
let inputValue = ref("")
const throttleTest = throttle(() => {
  console.log(inputValue);
}, 3000);
</script>

<template>
<el-button @click="debounceTest">tap me to test debounce</el-button>
test debounce:
<el-input @input="throttleTest" v-model="inputValue"></el-input>
</template>

<style scoped>
.el-input {
  width: 200px;
}
</style>
