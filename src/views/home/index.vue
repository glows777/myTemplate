<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
console.log('hello world');
const router = useRouter();
const toCounter = () => {
  router.push('/counter');
}
</script>

<template>
  <div class="dad">
    dad
    <div class="son">son</div>
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <el-button type="primary" @click="toCounter">toCounter</el-button>
</template>

<style lang="scss">
.dad {
  color: red;
  .son {
    color: blue;
  }
}
</style>
