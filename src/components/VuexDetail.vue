<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <el-button type="primary" @click="callMutation">call mutation</el-button>
    </div>
    <span>{{ result }}</span><br>
    <el-button @click="$router.push({name: 'Vuex'})">prev page</el-button>
    <el-button @click="dataParser">parser</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'VuexDetail',
  components: {

  },
  data() {
    return {
      vuexName: '',
      json: '',
      result: '',
    }
  },
  computed: {

  },

  methods: {
    callMutation() {
      this.$store.commit('SET_TYPE', this.$route.meta.dataType)
      this.dataParser()
      console.log('##component## router type: ', this.$route.meta.dataType)
    },

    dataParser() {
      console.log('####', this.$store.state.res.type_1)
      const caseObj = {
        0: () => { this.result = 'Vuex not allowed!' },
        1: () => { this.result = this.$store.state.res.type_1 },
        2: () => { this.result = this.$store.state.res.type_2 },
      }
      caseObj[this.$store.state.type]()
    },
  },
  created() {
    // 先發action請求非同步data
    this.$store.dispatch('getData')
    console.log('router: ', this.$route)
    console.log('store type: ', this.$store.state.type)
    console.log('res:', this.$store.state.res);
  },
}
</script>
