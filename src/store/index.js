/**
 * Created by Administrator on 2017/4/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    echartDayIdx:0,
    active:null
  },
  mutations:{
    doRefesh(){
      $(".ui-ultabs").addClass("show")
      setTimeout(function(){
        $(".ui-ultabs").removeClass("show")
      },100)
    }
  }
})
export default store
