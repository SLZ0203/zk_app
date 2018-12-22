/*
* 定义接口请求函数的模块
* */

import axios from 'axios'
import ajax from './ajax'

const baseUrl = 'http://yixin.581vv.com';
//获取轮播图
export const reqBanners = () => axios.get(baseUrl + '/api/get_banner');
//获取资讯分类
export const reqNewsCate = () => axios.get(baseUrl + '/api/get_news_cate');
//获取新闻资讯
export const reqNews = (cid, page) => ajax(baseUrl + '/api/get_news', {cid, page});
