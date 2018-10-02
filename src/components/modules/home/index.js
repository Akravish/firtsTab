import Timer from '@/components/modules/home/partials/timer/index.vue'
import Greeting from '@/components/modules/home/partials/greeting/index.vue'

import {mapMutations, mapActions, mapGetters} from 'vuex'

import {
  GET_HOME_CONTENT,
  UPDATE_LOADER_STATE
} from '@/store/mutations-types'

export default {
  name: 'homeModule',
  components: {
    'Timer': Timer,
    'Greeting': Greeting,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      configs: 'configs/getConfigs'
    })
  },
  created(){

    // this.loader([true,['Load Data']]);

    // this.getHomeContent().then(result=>{
    //   this.isContentLoaded = true;
    // }).catch(error=>{
    //
    // }).finally(()=>{
    //   this.loader([false]);
    // });
  },
  methods: {
    // ...mapMutations({
    //   loader: 'loader/' + UPDATE_LOADER_STATE,
    // }),
    // ...mapActions({
    //   getHomeContent: 'home/' + GET_HOME_CONTENT
    // })
  }
}