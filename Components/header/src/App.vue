<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
<div>
    <div className="container">
      <h1>Open Component Header</h1>
    <h3>Header is in Vue</h3>
     <button className="button" @click="count++">Count is: {{ count }}</button>
    </div>
</div>
</template>

<style scoped>
.container {
  background-color: #3b246c;
  color: #fff;
  font-family: sans-serif;
  padding: 40px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.button {
  background-color: #a97613;
  border: none;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin-left: 30px;
  text-decoration: none;
  display: inline-block;
  color: inherit;
  cursor: pointer;
}
h1 {
  margin: 0 0 20px 0;
}
</style>
