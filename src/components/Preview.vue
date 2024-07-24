<template>
  <div>
    <h2>Preview Your Answers</h2>
    <ul>
      <li v-for="(value, key) in answers" :key="key">{{ key }}: {{ value }}</li>
    </ul>
    <button @click="goBack">Edit Answers</button>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answers: JSON.parse(localStorage.getItem("answers")) || {},
    };
  },
  methods: {
    goBack() {
      this.$router.push("/personal");
    },
    submit() {
      // Handle the form submission logic here
      alert("Answers submitted!");
      // Clear the localStorage
      localStorage.removeItem("answers");
      // Redirect to the start or thank you page
      this.$router.push("/personal");
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
