<template>
  <div>
    <h2>Partner Information</h2>
    <form @submit.prevent="next">
      <label>
        Partner's Full Legal Name:
        <input v-model="answers.Q5" type="text" required />
      </label>
      <label>
        Partner's Birth Year:
        <input v-model="answers.Q6" type="text" required />
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
