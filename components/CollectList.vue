<template>
  <article id="main">
    <header class="special collect-list">
      <span class="icon fa-bar-chart-o"></span>
      <h2>常用工具</h2>
    </header>
    <section class="my-container collect-box">
      <div class="collect-item">
        <a href="https://www.iviewui.com/" target="_blank">
          <div class="img-box"><img src="https://cn.vuejs.org/images/logo.png" alt=""></div>
          <h5>Vue</h5>
          <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</p>
        </a>
      </div>
      <div class="collect-item">
        <a href="https://www.iviewui.com/" target="_blank">
          <div class="img-box"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></div>
          <h5>iView</h5>
          <p>iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
        </a>
      </div>
      <div></div>
    </section>
    <header class="special collect-list">
      <span class="icon fa-bar-chart-o"></span>
      <h2>和Vue相关的API</h2>
    </header>
    <section class="my-container collect-box">
      <div class="collect-item">
        <a href="https://www.iviewui.com/" target="_blank">
          <div class="img-box"><img src="https://cn.vuejs.org/images/logo.png" alt=""></div>
          <h5>Vue</h5>
          <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</p>
        </a>
      </div>
      <div class="collect-item">
        <a href="https://www.iviewui.com/" target="_blank">
          <div class="img-box"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></div>
          <h5>iView</h5>
          <p>iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
        </a>
      </div>
      <div></div>
    </section>
    <header class="special collect-list">
      <span class="icon fa-bar-chart-o"></span>
      <h2>和Vue相关的API</h2>
    </header>
    <section class="my-container collect-box">
      <div class="collect-item">
        <a href="https://www.iviewui.com/" target="_blank">
          <div class="img-box"><img src="https://cn.vuejs.org/images/logo.png" alt=""></div>
          <h5>Vue</h5>
          <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</p>
        </a>
      </div>
      <div class="collect-item">
        <a href="https://www.iviewui.com/" target="_blank">
          <div class="img-box"><img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt=""></div>
          <h5>iView</h5>
          <p>iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
        </a>
      </div>
      <div></div>
    </section>
  </article>
</template>
<script>
  import axios from 'axios';

  export default {
    async asyncData ({ params }) {
      let { data } = await axios.get(`https://my-api/posts/${params.id}`);
      console.warn(data);
      return { title: data.title }
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
    margin-bottom: 10em;
  }
  .collect-item {
    width: 20%;
    height: 400px;
    text-align: center;
    margin-right: 50px;
    border: 1px solid #ddd;
    padding: 4px;
  }
  .collect-item a{
    border: none;
  }
  .img-box{
    height: 230px;
    background: #5a5a71;
  }
  .collect-item img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
  .collect-item h5{
    color: #1e1e1e;
    text-transform: none;
  }
  .collect-item p{
    font-size: 16px;
    line-height: 20px;
  }
</style>
