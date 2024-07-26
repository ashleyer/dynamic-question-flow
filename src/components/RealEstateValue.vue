<template>
    <div>
      <h2>Real Estate Value</h2>
      <form @submit.prevent="nextPage">
        <div>
          <label for="realEstateValue">What is the approximate value of your primary residence or other real estate?</label>
          <input type="text" v-model="formData.realEstateValue" required />
        </div>
        <NavigationButtons :currentStep="5" @nextStep="nextPage" @previousStep="previousPage" />
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
        this.$router.push('/preview');
      },
      previousPage() {
        if (this.$root.formData.ownOtherRealEstate === 'yes') {
          this.$router.push('/other-real-estate');
        } else {
          this.$router.push('/primary-residence');
        }
      }
    }
  };
  </script>
  