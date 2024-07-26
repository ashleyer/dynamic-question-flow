<template>
    <div>
      <button v-if="currentStep > 0" @click="previousStep">Previous</button>
      <button v-if="currentStep < totalSteps - 1" @click="nextStep">Next</button>
      <button v-if="currentStep === totalSteps - 1" @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['currentStep'],
    computed: {
      totalSteps() {
        return this.$root.totalSteps;
      },
      nextRoute() {
        // Determine the next route based on the current step
        const routes = [
          '/', // step 0
          '/partner-information', // step 1
          '/children-information', // step 2
          '/primary-residence', // step 3
          '/other-real-estate', // step 4
          '/real-estate-value', // step 5
          '/preview' // step 6
        ];
        return routes[this.currentStep + 1];
      }
    },
    methods: {
      previousStep() {
        this.$emit('previousStep');
        this.$router.back();
      },
      nextStep() {
        this.$emit('nextStep');
        // Navigate to the next route only if it's different from the current one
        if (this.$route.path !== this.nextRoute) {
          this.$router.push(this.nextRoute);
        }
      },
      submitForm() {
        this.$emit('submitForm');
        // Navigate to the preview page only if it's different from the current one
        if (this.$route.path !== '/preview') {
          this.$router.push('/preview');
        }
      }
    }
  };
  </script>