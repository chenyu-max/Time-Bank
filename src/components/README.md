# Avatar

<img src="http://mdrs.yuanjin.tech/img/20201130153821.png" alt="image-20201130153821293" style="zoom:50%;" />

## 属性

| 属性名 | 含义               | 类型   | 必填 | 默认值 |
| ------ | ------------------ | ------ | ---- | ------ |
| url    | 头像图片路径       | String | 是   | 无     |
| size   | 头像尺寸，宽高相等 | Number | 否   | 150    |



# Pager

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |



# ImageLoader

该组件可以实现一个渐进式图片

![渐进式图片](https://img-blog.csdnimg.cn/4f679afde52d4fafa76273f56d0a56b4.gif)

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | -------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                               | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数 | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发 | 无       | 无       |



# changeCitySelector

![](https://img-blog.csdnimg.cn/87c81404f56141848ee1a5fd949f3297.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xlb3dhaGFoYQ==,size_16,color_FFFFFF,t_70)

## 事件

| 事件名        | 含义     | 事件参数     | 参数类型 |
| ------------- | -------- | ------------ | -------- |
| changeNowCity | 城市更换 | 新的城市列表 | Array    |



# projectNav



![](https://img-blog.csdnimg.cn/8c826536d71744faa8f7eeadc25099db.png)



## 属性

| 属性名  | 含义               | 类型   | 必填 | 默认值 |
| ------- | ------------------ | ------ | ---- | ------ |
| project | 展示的项目信息对象 | Object | 是   | 无     |



## 事件

| 事件名      | 含义         | 事件参数 | 参数类型 |
| ----------- | ------------ | -------- | -------- |
| checkDetail | 查看项目详情 | 项目对象 | Object   |



# selectNav

![在这里插入图片描述](https://img-blog.csdnimg.cn/e68c0e32f50f448fbd28128ffd1ef3d1.png)



## 属性

| 属性名   | 含义                 | 类型   | 必填 | 默认值 |
| -------- | -------------------- | ------ | ---- | ------ |
| title    | 导航栏的标题         | String | 是   | 无     |
| propList | 导航栏展示的各个item | Array  | 是   | 无     |



## 事件

| 事件名         | 含义                   | 事件参数   | 参数类型 |
| -------------- | ---------------------- | ---------- | -------- |
| changeSelector | 传出导航列表切换的item | item的名字 | String   |

