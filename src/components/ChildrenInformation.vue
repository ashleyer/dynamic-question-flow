<template>
  <div>
    <h2>Children Information</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="childrenCount">How many children do you have?</label>
        <input type="text" v-model="formData.childrenCount" required />
      </div>
      <NavigationButtons :currentStep="2" @nextStep="nextPage" @previousStep="previousPage" />
    </form>
  </div>
</template>

<script>
import NavigationButtons from './NavigationButtons.vue';

export default {
  components: {
    NavigationButtons
  },
  data() {
    return {
      formData: this.$root.formData
    };
  },
  methods: {
    nextPage() {
      this.$router.push('/primary-residence');
    },
    previousPage() {
      this.$router.push('/');
    }
  }
};
</script>