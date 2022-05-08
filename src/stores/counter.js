import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // 如果代码中获取state是用了解构赋值，为了保持state的响应式特性，需要用storeToRefs进行包裹
    counter: 1
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    counterPlusOne: (state) => state.counter + 1
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter(state) {
      this.counter = Math.round(Math.random() * 100);
    }
  }
});
