import request from '../utils/request'


const icode = '13926EAFCAA16CC3'
export function wordCloud(){
  return request({
    url:'/screen/wordcloud',
    method:'get',
    params:{icode}
  })
}

export function mapScatter(){
  return request({
    url:'/screen/map/scatter',
    method:'get',
    params:{icode}
  })
}


export function sceenData(){
  return request({
    url:'/screen/data',
    method:'get',
    params:{icode}
  })
}
