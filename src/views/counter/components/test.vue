<script setup lang="ts">
import { debounce, throttle } from '@/common/js/utils';
import time from '@/common/js/utils/time';
const throttleTest = throttle(() => {
  console.log('throttleTest');
}, 3000);
let inputValue = ref('');
const debounceTest = debounce(() => {
  console.log(inputValue);
}, 1000);
var timeStamp = 1652339855; //时间戳
console.log(time.timestampTransfer(timeStamp, 'Y/M/D h:m:s')); //转换为日期：2017/03/03 03:03:03
console.log(time.timestampTransfer(timeStamp, 'h:m')); //转换为日期：03:03
console.log(time.timestampTransfer(timeStamp, 'h:m:s')); //转换为日期：03:03:03
console.log(time.timestampTransfer(timeStamp, 'D h:m:s')); // 转换为日期：03 03:03:03
console.log(time.timestampFormat(timeStamp));
</script>

<template>
  <el-button @click="throttleTest">tap me to test throttle</el-button>
  test debounce:
  <el-input @input="debounceTest" v-model="inputValue" placeholder="type here to test debounce"></el-input>
</template>

<style scoped>
.el-input {
  width: 200px;
}
</style>
