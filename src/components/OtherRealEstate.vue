<template>
    <div>
      <h2>Other Real Estate Information</h2>
      <form @submit.prevent="nextPage">
        <div>
          <label for="ownOtherRealEstate">Do you own any other type of real estate (e.g., vacation, rental, etc.)?</label>
          <select v-model="formData.ownOtherRealEstate" @change="handleOtherRealEstateChange" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div v-if="formData.ownOtherRealEstate === 'yes'">
          <label for="otherRealEstateValue">What is the approximate value of your other real estate?</label>
          <input type="text" v-model="formData.otherRealEstateValue" required />
        </div>
        <div v-if="formData.ownOtherRealEstate === 'no'">
          <label for="futureRealEstate">Do you want to buy real estate in the future?</label>
          <select v-model="formData.futureRealEstate" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div v-if="formData.futureRealEstate === 'yes'">
          <label for="financialGoals">Do you have any financial goals already created?</label>
          <select v-model="formData.financialGoals" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <NavigationButtons :currentStep="4" @nextStep="nextPage" @previousStep="previousPage" />
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
        this.$router.push('/real-estate-value');
      },
      previousPage() {
        this.$router.push('/primary-residence');
      },
      handleOtherRealEstateChange(event) {
        if (event.target.value === 'no') {
          delete this.$root.formData.otherRealEstateValue;
        }
      }
    }
  };
  </script>