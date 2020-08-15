<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    async packageGetData() {
      const url = 'tableData'; // json-server  API 位置
      const res = await this.$api.get(url);
      this.tableData = [...res]; // 透過ES6語法將res的內容直接繼承到tableData
      console.log(res);
    },
  },

  created() {
    this.packageGetData(); // 在created 階段把API資料叫進來
  },
};
</script>
