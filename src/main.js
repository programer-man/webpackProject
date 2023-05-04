import $ from 'jquery'
import { sayFuckWebpack } from "./add/add";

//导入css文件
import './css/index.css'
// 入口文件处自定义样式
$('h1').css('backgroundColor', 'hotpink')
// 导入less文件
import './less/fuck.less'
// 导入一张图片
import imgSrc from '../assets/1.jpg'
const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)
// 导入字体图标样式表
import '../assets/fonts/iconfont.css'
const i = document.createElement('i')
i.className = 'iconfont icon-weixin'
document.body.appendChild(i)
// 降级js语法
const haha = () => {
    console.log('haha');
}
console.log(haha)
import './css/fuck.css'