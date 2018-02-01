<template>
  <article id="main">
    <header class="special collect-list">
      <span class="icon fa-bar-chart-o"></span>
      <h2>常用工具</h2>
    </header>
    <section class="my-container collect-box">
      <div class="collect-item" v-for="z in items" :key="z.id">
        <a :href="z.target_url" target="_blank">
        <div :class = "z.img_url ? 'img-box' : 'img-box-text'">
            <img v-if="z.img_url" :src="z.img_url" alt="">
            <p v-else>{{ z.name }}</p>
          </div>
        </a>
        <h5>{{ z.name }}</h5>
        <div class="desc">{{ getDesc(z.describe) }}</div>
      </div>
    </section>
  </article>
</template>
<script>
  export default {
    props: ['items'],
    methods: {
      getDesc(text) {
        if (text.length > 70) {
          return text.slice(0, 70) + '...';
        } else {
          return text;
        }
      }
    }
  }
</script>
<style>
  .sub-title{
    font-weight: bold;
  }
  .collect-box{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 10em;
  }
  .collect-item {
    width: 22%;
    height: 400px;
    text-align: center;
    margin-right: 3%;
    margin-bottom: 50px;
    border: 1px solid #ddd;
    padding: 4px;
  }
  .collect-item:nth-child(4n) {
    margin-right: 0;
  }
  .collect-item a{
    border: none;
  }
  .img-box, .img-box-text{
    height: 230px;
    background: #5a5a71;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .collect-item img {
    max-width: 90%;
    max-height: 90%;
    margin: 0 auto;
  }
  .collect-item h5{
    color: #1e1e1e;
    text-transform: none;
  }
  .desc{
    font-size: 16px;
    line-height: 20px;
    height: 104px;
    overflow: hidden;
    text-align: left;
  }
  .collect-item .img-box-text p{
    font-size: 24px;
    color: white;
  }
</style>
