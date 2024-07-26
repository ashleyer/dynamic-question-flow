<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add global styles here */
body {
  font-family: Arial, sans-serif;
}
h2 {
  color: #333;
}
form {
  max-width: 600px;
  margin: 0 auto;
}
label {
  display: block;
  margin-top: 10px;
}
input, select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
}
</style>