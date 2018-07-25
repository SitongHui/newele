### 饿了么首页练习
##### 未解决的bug：
- 在进入到具体商家时，弹出相应的补充信息，鼠标离开该商家信息时，补充信息应该消失；但此时鼠标离开商家信息，进入到补充信息区域时，补充信息未消失。
- 补充信息左侧有个小三角，没有解决层级问题。
- 注意点：
    - 尽量不要写宽高；
    - 尽量不写重复样式，利用CSS继承原则；
    - 熟练掌握flex布局；
    - reset.css的两种方式
         - \*  ——粗暴的方式
         - normalize.css  ——柔和的方式


### 修改后
- 补充信息左侧的小三角已经实现，利用:before和:after来解决三角的部分边带边框问题。
- 删除冗余代码。
- 利用flex布局。