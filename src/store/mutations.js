export default {
        addCounter(state,pay){
            pay.count += 1; 
            
        },
        addToCar(state,payload){
            payload.checked = true;
            state.cartList.push(payload);
        }
        // addCar(state,payload){
        //     let oldProduct = state.cartList.find(item => item.iid === payload.iid);
        //     if(oldProduct){
        //         oldProduct.count += 1;
        //     } else{
        //      payload.count = 1; 
        //      payload.checked = true;
        //      state.cartList.push(payload);                        
        //     }
        // }       
}