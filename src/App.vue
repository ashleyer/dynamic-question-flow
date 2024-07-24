<template>
  <div>
    <router-view></router-view>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
