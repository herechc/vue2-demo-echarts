<template>
  <div class="ui-nav vs-nav">
    <a href="javascript:void(0)" v-for="(navtit,index) in navTitle" :class="{active:active==index}" @click="toggle(index)">{{ navtit }}</a>
  </div>
</template>
<script type="es6">
  export default{
    name:"navActive",
    data(){
      return{
        active:0,
        navTitle:["李东","夏南","赵西","高北","黄中"]
      }
    },
    created(){

    },
    methods:{
      toggle(i){
        this.$store.commit("doRefesh")
        this.$emit('getActive')
        this.active=this.$store.state.echartDayIdx = i
      }
    }
  }
</script>
