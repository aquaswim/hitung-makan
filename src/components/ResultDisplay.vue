<template>
  <div class="columns is-mobile is-multiline">
    <div class="column is-half-desktop" v-for="member in result" :key="member._id">
      <div class="box">
        <p>Nama: {{ member.name }}</p>
        <p>Harga: {{ member.spent }}</p>
        <p>Bayar: {{ member.priceToPay }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultDisplay",
  props: {
    result: Array
  }
}
</script>

<style scoped>

</style>
