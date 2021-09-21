<template>
  <main>
    <h1 class="red">Halaman Index</h1>
    <NuxtLink to="/home">
        Ke Home
    </NuxtLink>
  </main>
</template>

<script>
  export default {
    head() {
      // Set Meta Tags for this Page
    }
    // ...
  }
</script>

<style>
  .red {
    color: red;
  }
</style>