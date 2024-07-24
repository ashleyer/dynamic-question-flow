<template>
  <div>
    <h2>Personal Information</h2>
    <form @submit.prevent="next">
      <label>
        Full Legal Name: <input v-model="answers.Q1" type="text" required />
      </label>
      <label>
        Birth Year: <input v-model="answers.Q2" type="text" required />
      </label>
      <label>
        Marital Status:
        <select v-model="answers.Q3" required>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
          <option>Domestic Partner</option>
        </select>
      </label>
      <label>
        Do you have any children?
        <input type="radio" v-model="answers.Q4" value="yes" /> Yes
        <input type="radio" v-model="answers.Q4" value="no" /> No
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
      if (this.answers.Q4 === "yes") {
        this.$router.push("/children");
      } else {
        this.$router.push("/residence");
      }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
