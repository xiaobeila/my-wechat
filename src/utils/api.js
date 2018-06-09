// 工具函数库
import { get } from '@/utils'

// 配置项

const host = 'https://api.ithome.com'

const api = {
  host,
  getNewsList: (r) => get(`/json/newslist/news`)
}
export default api
