import  Toast  from './Toast.vue'
const obj = {}
obj.install = function(Vue){
    // 1创建组件构造器
    const toastContrustor = Vue.extend(Toast);
    // 2.通过New的方式，根据组件构造器可以创建一个组件对象
    const toast = new toastContrustor();
    // 3.将组件对象挂载某一个元素  创建一个div
    toast.$mount(document.createElement('div'));
    // 4.将toast.$el 添加到节点 到Body后面
    document.body.appendChild(toast.$el);
    // 通过原型对象 来让 组件中可以使用$toast
    Vue.prototype.$toast = toast;  
}
export default obj