<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MainText from './components/MainText.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hello, world!" />
    </div>
  </header>
  <main>
    <div class="wrapper">
      <MainText msg="Ok"/>
    </div>
  </main>
</template>
