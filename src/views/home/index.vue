<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '../../components/HelloWorld.vue';
console.log('hello world');
</script>

<template>
  <div class="dad">
    dad
    <div class="son">son</div>
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <el-button type="primary">Primary</el-button>
  <el-calendar>
    <template #dateCell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
</template>

<style lang="scss">
.dad {
  color: red;
  .son {
    color: blue;
  }
}
</style>
