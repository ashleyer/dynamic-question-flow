<template>
  <div>
    <h2>Other Real Estate Information</h2>
    <form @submit.prevent="next">
      <label>
        Do you own any other type of real estate (e.g., vacation, rental, etc.)?
        <input type="radio" v-model="answers.Q11" value="yes" /> Yes
        <input type="radio" v-model="answers.Q11" value="no" /> No
      </label>
      <div v-if="answers.Q11 === 'yes'">
        <label>
          What is the approximate value of your other real estate?
          <input v-model="answers.Q12" type="text" required />
        </label>
      </div>
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
      this.$router.push("/preview");
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
