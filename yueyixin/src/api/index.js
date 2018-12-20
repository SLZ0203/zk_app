/*
* 定义接口请求函数的模块
* */
import ajax from './ajax'

//获取轮播图
export const reqBanners = () => ajax('http://yixin.581vv.com/api/get_banner');
//获取资讯分类
export const reqNewsCate = () => ajax('http://yixin.581vv.com/api/get_news_cate');
//获取新闻资讯
export const reqNews = (cid, page) => ajax('http://yixin.581vv.com/api/get_news',{cid, page});
