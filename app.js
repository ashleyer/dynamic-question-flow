const ChildrenInfo = {
  template: `
    <div>
      <h2>Children Information</h2>
      <form @submit.prevent="next">
        <label>How many children do you have? <input v-model="answers.Q7" type="text" required></label>
        <button type="submit">Next</button>
      </form>
    </div>
  `,
  data() {
    return {
      answers: {
        Q7: ''
      }
    };
  },
  methods: {
    next() {
      this.$router.push('/residence');
    }
  }
};

const ResidenceInfo = {
  template: `
    <div>
      <h2>Primary Residence Information</h2>
      <form @submit.prevent="next">
        <label>Do you own your primary residence? 
          <input type="radio" v-model="answers.Q8" value="yes"> Yes
          <input type="radio" v-model="answers.Q8" value="no"> No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  `,
  data() {
    return {
      answers: {
        Q8: ''
      }
    };
  },
  methods: {
    next() {
      if (this.answers.Q8 === 'yes') {
        this.$router.push('/residence-value');
      } else {
        this.$router.push('/other-real-estate');
      }
    }
  }
};

const ResidenceValue = {
  template: `
    <div>
      <h2>Primary Residence Value</h2>
      <form @submit.prevent="next">
        <label>Is your primary residence also your preferred mailing address? 
          <input type="radio" v-model="answers.Q9" value="yes"> Yes
          <input type="radio" v-model="answers.Q9" value="no"> No
        </label>
        <label>Approximate value of your real estate: <input v-model="answers.Q10" type="text" required></label>
        <button type="submit">Next</button>
      </form>
    </div>
  `,
  data() {
    return {
      answers: {
        Q9: '',
        Q10: ''
      }
    };
  },
  methods: {
    next() {
      this.$router.push('/other-real-estate');
    }
  }
};

const OtherRealEstate = {
  template: `
    <div>
      <h2>Other Real Estate Information</h2>
      <form @submit.prevent="next">
        <label>Do you own any other real estate? 
          <input type="radio" v-model="answers.Q11" value="yes"> Yes
          <input type="radio" v-model="answers.Q11" value="no"> No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  `,
  data() {
    return {
      answers: {
        Q11: ''
      }
    };
  },
  methods: {
    next() {
      if (this.answers.Q11 === 'yes') {
        this.$router.push('/residence-value');
      } else {
        this.$router.push('/future-real-estate');
      }
    }
  }
};

const FutureRealEstate = {
  template: `
    <div>
      <h2>Future Real Estate</h2>
      <form @submit.prevent="next">
        <label>Do you want to buy real estate in the future? 
          <input type="radio" v-model="answers.Q12" value="yes"> Yes
          <input type="radio" v-model="answers.Q12" value="no"> No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  `,
  data() {
    return {
      answers: {
        Q12: ''
      }
    };
  },
  methods: {
    next() {
      if (this.answers.Q12 === 'yes') {
        this.$router.push('/financial-goals');
      } else {
        this.$router.push('/preview');
      }
    }
  }
};

const FinancialGoals = {
  template: `
    <div>
      <h2>Financial Goals</h2>
      <form @submit.prevent="next">
        <label>Do you have any financial goals already created? 
          <input type="radio" v-model="answers.Q13" value="yes"> Yes
          <input type="radio" v-model="answers.Q13" value="no"> No
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  `,
  data() {
    return {
      answers: {
        Q13: ''
      }
    };
  },
  methods: {
    next() {
      this.$router.push('/preview');
    }
  }
};

const Preview = {
  template: `
    <div>
      <h2>Preview</h2>
      <div v-for="(answer, question) in answers" :key="question">
        <p><strong>{{ question }}</strong>: {{ answer }}</p>
      </div>
      <button @click="$router.push('/personal')">Edit</button>
    </div>
  `,
  data() {
    return {
      answers: JSON.parse(localStorage.getItem('answers')) || {}
    };
  },
  created() {
    this.answers = JSON.parse(localStorage.getItem('answers')) || {};
  }
};