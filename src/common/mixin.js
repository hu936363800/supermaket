import {debounce} from './utils'
import backTop from 'components/content/backtop/backTop'

export const itemListenerMixin = {
    mounted() {
        let newRefresh = debounce(this.$ref.scroll.refresh,100);
        this.itemImgListener = () => {
            newRefresh();
        }
        // this.$bus.$on('itemImgLoad',this.itemImgListener)
    },
}

export const backTopMixin = {
   data() {
       return {
        isShowBackTop:false
       }
   },
   components:{
    backTop
   },
   methods: {
    backClick(){
        this.$refs.scroll.scrollTo(0,0,300)
    }
   }
}