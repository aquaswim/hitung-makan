<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label for="in-biaya-tambahan" class="label">Biaya Tambahan</label>
      <div class="control">
        <input id="in-biaya-tambahan" class="input" type="number" v-model.number="biayaTambahan">
      </div>
    </div>
    <div class="field">
      <label for="in-diskon" class="label">Diskon</label>
      <div class="control">
        <input id="in-diskon" class="input" type="number" v-model.number="diskon">
      </div>
    </div>
    <div class="field">
      <label class="label">Yang Ikut Makan: {{nMember}}</label>
      <div class="columns is-mobile is-multiline">
        <div class="column is-half is-one-third-desktop" v-for="member in members" :key="member._id">
          <div class="box">
            <div class="field">
              <label v-bind:for="`in-member-name-${members._id}`" class="label">Nama</label>
              <div class="control">
                <input v-bind:id="`in-member-name-${members._id}`" class="input" type="text" v-model="member.name">
              </div>
            </div>
            <div class="field">
              <label v-bind:for="`in-member-spent-${members._id}`" class="label">Biaya</label>
              <div class="control">
                <input v-bind:id="`in-member-spent-${members._id}`" class="input" type="number" v-model.number="member.spent">
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button @click="removeMember(member._id)" type="button" class="button is-danger">Hapus</button>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-half is-one-third-desktop is-align-self-center is-flex-grow-0">
          <div class="box">
            <button type="button" class="button is-large" @click="addMember">Tambah</button>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <p class="control">
        <button type="submit" class="button is-primary">
          Hitung
        </button>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: "InputOrder",
  data(){
    return {
      biayaTambahan: 0,
      diskon: 0,
      members: []
    }
  },
  methods:{
    submit(){
      // validasi
      if (this.nMember < 1) {
        alert("Member kurang cuy");
        return;
      }
      const priceModifier = (this.biayaTambahan - this.diskon) / this.nMember;
      const result = this.members.map(member => {
        return {
          ...member,
          priceToPay: member.spent + priceModifier
        }
      });
      this.$store.commit("setCalculatedPayment", result);
    },
    addMember(){
      this.members.push({
        _id: Math.ceil(Math.random()*Number.MAX_VALUE),
        name: "",
        spent: 0
      })
    },
    removeMember(id) {
      const removedIndex = this.members.findIndex(member => member._id === id);
      if (removedIndex !== -1) {
        this.members.splice(removedIndex, 1);
      } else {
        // todo error msg
      }
    }
  },
  computed: {
    nMember(){
      return this.members.length;
    }
  }
}
</script>

<style scoped>

</style>
