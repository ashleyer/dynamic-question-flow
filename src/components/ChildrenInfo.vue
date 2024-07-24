<template>
  <div>
    <h2>Children Information</h2>
    <form @submit.prevent="next">
      <label>
        How many children do you have?
        <input v-model="answers.Q7" type="text" required />
      </label>
      <button type="submit">Next</button>
    </form>
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
    next() {
      localStorage.setItem("answers", JSON.stringify(this.answers));
      this.$router.push("/residence");
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
