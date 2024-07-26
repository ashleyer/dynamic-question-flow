<template>
  <div>
    <h2>Partner Information</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="partnerFullName">What is your partner's full legal name?</label>
        <input type="text" v-model="formData.partnerFullName" required />
      </div>
      <div>
        <label for="partnerBirthYear">What is your partner's birth year?</label>
        <input type="text" v-model="formData.partnerBirthYear" required />
      </div>
      <NavigationButtons :currentStep="1" @nextStep="nextPage" @previousStep="previousPage" />
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