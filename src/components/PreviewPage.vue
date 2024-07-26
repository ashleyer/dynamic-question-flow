<template>
  <div>
    <h2>Preview Your Answers</h2>
    <div v-for="(value, key) in filteredFormData" :key="key">
      <strong>{{ key }}:</strong> {{ value }}
    </div>
    <NavigationButtons :currentStep="6" @previousStep="previousPage" @submitForm="submitForm" />
  </div>
</template>

<script>
import NavigationButtons from './NavigationButtons.vue';

export default {
  components: {
    NavigationButtons
  },
  computed: {
    filteredFormData() {
      return Object.keys(this.$root.formData)
        .filter(key => this.$root.formData[key])
        .reduce((obj, key) => {
          obj[key] = this.$root.formData[key];
          return obj;
        }, {});
    }
  },
  methods: {
    previousPage() {
      this.$router.push('/real-estate-value');
    },
    submitForm() {
      console.log('Form submitted:', this.$root.formData);
      alert('Form submitted successfully!');
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>