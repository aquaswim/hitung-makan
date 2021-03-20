<template>
  <div class="container">
    <div class="columns is-mobile is-gapless is-centered">
      <div class="column is-half-tablet">
        <h1 class="title is-1">Hitung Makan</h1>
        <Quote/>
        <InputOrder @calculate="displayData" v-if="!calculated"/>
        <ResultDisplay :result="result" v-if="calculated"/>
        <button type="button" class="button is-danger" @click="reset" v-if="calculated">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quote";
import InputOrder from "@/components/InputOrder";
import ResultDisplay from "@/components/ResultDisplay";

export default {
  name: 'App',
  components: {
    Quote,
    InputOrder,
    ResultDisplay
  },
  methods: {
    displayData(result) {
      this.calculated = true;
      this.result = result;
    },
    reset(){
      this.calculated = false;
      this.result = [];
    }
  },
  data(){
    return {
      result: [],
      calculated: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
