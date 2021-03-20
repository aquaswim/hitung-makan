<template>
  <div class="content">
    <blockquote>
      {{ quote }}
      <p class="author">- {{author}}</p>
    </blockquote>
  </div>
</template>

<script>
import ALLQUOTES from "@/commons/quotes";

export default {
  name: "Quote",
  data(){
    return {
      quote: "",
      author: ""
    }
  },
  mounted() {
    const qotd = ALLQUOTES[Math.floor(Math.random()*ALLQUOTES.length)];
    this.quote = qotd.quote;
    this.author = qotd.author;
  }
}
</script>

<style scoped>
.author {
  font-weight: bold;
  text-align: right;
  font-size: 0.75em;
  font-style: italic;
}
</style>
