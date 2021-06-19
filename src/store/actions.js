export default {
    // addCar(context,payload){
    //     // 1.遍历    
    //     //2.把新传进来的payload商品和原来数组中对比 看看是否存在
    //     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
    //     if(oldProduct){
    //      context.commit('addCounter',oldProduct)
    //     }else{
    //      payload.count = 1;     
    //      context.commit('addToCar',payload)
                            
    //     }
    // }

    addCar(context,payload){
        return new Promise((resolve,reject) => {
            // 1.遍历    
        //2.把新传进来的payload商品和原来数组中对比 看看是否存在
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
        if(oldProduct){
         context.commit('addCounter',oldProduct)
         resolve('数量增加1')
        }else{
         payload.count = 1;     
         context.commit('addToCar',payload)
         resolve('新商品哦')                          
        }
        })
    }
}