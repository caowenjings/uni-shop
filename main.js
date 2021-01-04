import Vue from 'vue'
import App from './App'
import commont from './utils/commntData.js'

import {get,post,del,put} from "utils/httpApi"

Vue.config.productionTip = false

Vue.prototype.$http = {post,get,put,del}
Vue.prototype.commont=commont;


// 定义全局过绿方法
Vue.filter('formatDate',(date)=>{
	const nDate=new Date(date);
	const year =nDate.getFullYear();
	const month=nDate.getMonth().toString().padStart(2,0);
	const day=nDate.getDay().toString().padStart(2,0);
	return year+"-"+month+'-'+day;
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
