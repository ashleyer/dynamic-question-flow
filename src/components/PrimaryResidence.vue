<template>
  <div>
    <h2>Primary Residence Information</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="ownPrimaryResidence">Do you or your partner (if not single) own your primary residence?</label>
        <select v-model="formData.ownPrimaryResidence" @change="handlePrimaryResidenceChange" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div v-if="formData.ownPrimaryResidence === 'yes'">
        <label for="primaryResidenceMailing">Is your primary residence also your preferred mailing address?</label>
        <select v-model="formData.primaryResidenceMailing" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div v-if="formData.ownPrimaryResidence === 'yes'">
        <label for="primaryResidenceValue">What is the approximate value of your real estate?</label>
        <input type="text" v-model="formData.primaryResidenceValue" required />
      </div>
      <NavigationButtons :currentStep="3" @nextStep="nextPage" @previousStep="previousPage" />
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
      if (this.formData.ownPrimaryResidence === 'yes') {
        this.$router.push('/other-real-estate');
      } else {
        this.$router.push('/real-estate-value');
      }
    },
    previousPage() {
      if (this.$root.formData.maritalStatus !== 'Single' && !this.$root.formData.children) {
        this.$router.push('/partner-information');
      } else if (this.$root.formData.children === 'yes') {
        this.$router.push('/children-information');
      } else {
        this.$router.push('/');
      }
    },
    handlePrimaryResidenceChange(event) {
      if (event.target.value === 'no') {
        delete this.$root.formData.primaryResidenceMailing;
        delete this.$root.formData.primaryResidenceValue;
      }
    }
  }
};
</script>