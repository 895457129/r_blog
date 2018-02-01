<template>
  <div>
    <header id="header" class="reveal alt">
      <h1 id="logo"><a href="index.html">Ding-ding collect<span> power by RY</span></a></h1>
      <nav id="nav">
        <ul>
          <li class="current" style="white-space: nowrap;"><a href="index.html">常用网站</a></li>
          <li class="submenu opener" style="user-select: none; cursor: pointer; white-space: nowrap; opacity: 1;">
            <a href="#">常用工具</a>
            <ul class="" style="user-select: none; display: none; position: absolute;">
              <li style="white-space: nowrap;"><a href="left-sidebar.html" style="display: block;">Left Sidebar</a></li>
              <li style="white-space: nowrap;"><a href="right-sidebar.html" style="display: block;">Right Sidebar</a></li>
              <li style="white-space: nowrap;"><a href="no-sidebar.html" style="display: block;">No Sidebar</a></li>
              <li style="white-space: nowrap;"><a href="contact.html" style="display: block;">Contact</a></li>
              <li class="submenu opener" style="user-select: none; cursor: pointer; white-space: nowrap;">
                <a href="#" style="display: block;">Submenu</a>
                <ul style="user-select: none; display: none; position: absolute;" class="dropotron">
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">JSON在线解析</a></li>
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">时间戳格式化</a></li>
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">Lorem Magna</a></li>
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">Sed Magna</a></li>
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">Ipsum Nisl</a></li>
                </ul>
              </li>
            </ul></li>
          <li style="white-space: nowrap;">
            <a href="#" @click.stop.prevent="showLogin" class="button special" v-if="!userName">登录</a>
            <a class="button special" v-else>{{ userName }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <section id="banner">
      <div class="inner">
        <header>
          <h2>Ding-DING</h2>
        </header>
        <p>This is <strong>Ding-Ding collect</strong>, a free
          <br>
          favorites box
          <br>
          by <a href="#">ry</a></p>
        <footer>
          <ul class="buttons vertical">
            <li><a href="#main" class="button fit scrolly"><!--[-->Tell Me More<!--]--></a></li>
          </ul>
        </footer>
      </div>
    </section>
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form :inline="true" :model="formInline" :rules="rules" ref="loginForm" class="demo-form-inline">
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="formInline.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="formInline.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit" :loading="loading">登 录</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios';
  import { API } from '~/util/const';
  import md5 from 'md5';

  export default {
    data() {
      return {
        dialogVisible: false,
        loading: false,
        formInline: {
          email: '',
          password: '',
        },
        rules: {
          email: [
            { required: true, message: '请选择邮箱', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请选择密码', trigger: 'change' }
          ],
        }
      };
    },
    computed: {
      userName: function () {
        return this.$store.state.userName;
      },
    },
    methods: {
      showLogin() {
        this.dialogVisible = true;
      },
      submit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.login();
          }
          return false;
        });
      },
      async login() {
        this.loading = true;
        const {data} = await axios.post(`${API}user/login`, {
          email: this.formInline.email,
          password: md5(md5(this.formInline.password))
        });
        this.loading = false;
        if(0 === data.code) {
          this.dialogVisible = false;
          this.$store.commit("setUserName", data.data.email);
        }
      },
    }
  }
</script>
<style>

</style>
