<template>
  <div>
    <h2>Primary Residence Information</h2>
    <form @submit.prevent="next">
      <label>
        Do you own your primary residence?
        <input type="radio" v-model="answers.Q8" value="yes" /> Yes
        <input type="radio" v-model="answers.Q8" value="no" /> No
      </label>
      <div v-if="answers.Q8 === 'yes'">
        <label>
          Is your primary residence also your preferred mailing address?
          <input type="radio" v-model="answers.Q9" value="yes" /> Yes
          <input type="radio" v-model="answers.Q9" value="no" /> No
        </label>
        <label>
          What is the approximate value of your real estate?
          <input v-model="answers.Q10" type="text" required />
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
      if (this.answers.Q8 === "yes") {
        this.$router.push("/real-estate");
      } else {
        this.$router.push("/preview");
      }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
