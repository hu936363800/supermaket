import axios from 'axios'

export function request(config){
      const instance = axios.create({
        baseURL : 'http://152.136.185.210:7878/api/m5',
        timeout : 5000 ,
        })

			//axios拦截器
      //请求拦截的作用
			instance.interceptors.request.use(config => {
				 // console.log(config)
        return config
			},err => {return err})

      //2.响应拦截
       instance.interceptors.response.use(res => {
          //console.log(res)
          return res.data
       },err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权的访问'
              break
          }
        }
        return err
       })


   return instance(config)
}
