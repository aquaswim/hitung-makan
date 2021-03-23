<template>
  <div class="container">
    <div class="columns is-mobile is-gapless is-centered">
      <div class="column is-half-tablet">
        <h1 class="title is-1">Hitung Makan</h1>
        <Quote/>
        <InputOrder v-if="!calculated"/>
        <ResultDisplay :result="calculatedPayment" v-if="calculated"/>
        <button type="button" class="button is-danger" @click="resetCalculatedPayment" v-if="calculated">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quote";
import InputOrder from "@/components/InputOrder";
import ResultDisplay from "@/components/ResultDisplay";
import {mapMutations, mapState} from "vuex";

export default {
  name: 'App',
  components: {
    Quote,
    InputOrder,
    ResultDisplay
  },
  methods: {
    ...mapMutations([
        "resetCalculatedPayment"
    ])
  },
  computed: mapState([
      "calculated",
      "calculatedPayment"
  ])
}
</script>

<style>

</style>
