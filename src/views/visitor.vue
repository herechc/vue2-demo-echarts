<template>
  <div class="visitorpage">
    <navActive v-on:getActive="recieveActitve"></navActive>
    <div class="vs-bd">
      <div class="vs-tabs ui-ultabs" >
        <transition-group tag="ul" name="slide">
          <li v-for="(item,index) in items" :key="item"  :class="{cur:(active==index)}" >
            <a href="javascript:void(0)" @click.stop.prevent="toggle(index)">
              <span class="icon"></span>
              <span class="txt">{{item.tit}}</span>
              <span class="dir"  ></span>
            </a>
            <div :class="item.name" class="innerinfo" v-if="active==index" >
              <div  style="width;100%;height:5rem" ref="echart"></div>
            </div>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import navActive from '../components/visitor/nav'
  import listErt from '../jsons/list_echarts'
  export default{
    components: {
      navActive
    },
    data(){
      return{
        items:[
          {"tit":"心情起伏", "name":"webspeed-btn"},
          {"tit":"体温记度", "name":"webtraffic-btn"},
          {"tit":"内心挣扎", "name":"tendency-btn"},
          {"tit":"快乐指数", "name":"townub-btn"},
          {"tit":"你幸福吗", "name":"erupt-btn"}
        ],
        active:null,
      }
    },
    watch:{

    },
    computed:{

    },
    updated: function () {
      if(this.$refs.echart[0]){
        this.myChart = echarts.init(this.$refs.echart[0])
        this.myChart.setOption(this.option)
      }
    },
    methods:{
      recieveActitve() {
        this.active = null
      },
      toggle(i){
        this.option = listErt[this.$store.state.echartDayIdx][i]
        this.active==i ? this.active=null : this.active=i;
      }
    }
  }
</script>
<style>
  .slide-enter{opacity:0;}
  .slide-leave-active {opacity:0;}
</style>
