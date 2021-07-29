# 概述

所有的服务端接口在接收到请求后，均响应以下JSON格式：

```yaml
{
  "code": 0, // 错误码
  "msg": "", // 错误消息
  "data": null // 具体的消息内容，如果code不为0，则必为null
}
```

其中，`code`、`msg`、`data`对应的结果如下：

| code                      | msg                                                  | data           |
| ------------------------- | ---------------------------------------------------- | -------------- |
| 0：无错误                 | ""                                                   | 具体的业务结果 |
| 406: 验证失败             | 具体验证错误的错误消息，如：<br />"评论内容不能为空" | null           |
| 500: 服务器内部的未知错误 | "服务器内部错误"                                     | null           |



# 接口文档



域名：xxx



## 用户登录



url: /api/passport/login



method: post



请求参数：

| 字段        |  类型  | 是否必须 | 备注     |
| :---------- | :----: | :------: | -------- |
| phoneNumber | String |   必须   | 手机号   |
| password    | String |   必须   | 登录密码 |



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		appkey:String,
		username: String,
		phoneNumber：String，
		role: String, // 用户角色 普通用户 审核人 
		avatarUrl: url, // 用户头像地址
		userIDNumber：String， // 用户身份证号
		userRealName：String， // 用户真实姓名
		userBirthday：xxx, // 用户出生年月日
		userMoney:Number // 时间货币余额
		userWorkTime:Number // 用户志愿时长
	}
}
```

- 说明：appkey是每个用户唯一的id，一个用户一个appkey

## 用户注册



url: /api/passport/register



method: post



请求参数：

| 字段        |  类型  | 是否必须 | 备注     |
| :---------- | :----: | :------: | -------- |
| phoneNumber | String |   必须   | 用户邮箱 |
| password    | String |   必须   | 用户密码 |
| code        | String |   必须   | 验证码   |
| username    | String |   必须   | 用户名   |

- 说明，此时注册之后，只是普通游客账号，进入页面之后会提醒进行账号信息绑定，否则只有查看权限。还需要去个人信息页面绑定身份证和手机号等相关信息



## 获取验证码



url: /api/passport/getCode



method: post



请求参数：

| 字段        |  类型  | 是否必须 | 备注       |
| :---------- | :----: | :------: | ---------- |
| phoneNumber | String |   必须   | 用户手机号 |

响应的验证码是 6位数字

- 说明：用户点击获取验证码按钮后，后台将验证码发送至响应手机号



## 找回密码



url: /api/passport/findBack



method: post



请求参数：

| 字段        |  类型  | 是否必须 | 备注       |
| :---------- | :----: | :------: | ---------- |
| phoneNumber | String |   必须   | 用户手机号 |
| password    | String |   必须   | 用户新密码 |
| code        | String |   必须   | 验证码     |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: null
}
```



## 更改密码



url: /api/passport/changepwd



method: post



请求参数：

| 字段        |  类型  | 是否必须 | 备注       |
| :---------- | :----: | :------: | ---------- |
| appkey      | String |   必须   | 用户appkey |
| oldPassword | String |   必须   | 用户旧密码 |
| newPassword | String |   必须   | 用户新密码 |



## 用户信息填写



url: /api/userinfo/submit



method: post



请求参数：

| 字段         |  类型  | 是否必须 | 备注         |
| :----------- | :----: | :------: | ------------ |
| appkey       | String |   必须   | 用户appkey   |
| avatarUrl    |  Url   |   必须   | 用户头像url  |
| username     | String |   必须   | 用户名       |
| userIDNumber | String |   必须   | 用户身份证号 |
| userRealName | String |   必须   | 用户真实姓名 |
| userBirthday |  xxx   |   必须   | 用户生日     |

- 说明：用户生日可以在填写身份证号码之后获取，传递数据格式是时间戳还是什么后期讨论



## 获取城市列表

url: /api/getCityList



method: get



请求参数：

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: [
		name:String, // 省份名字
		city:[
			{
				name: String, // 城市名字
				area: [
					String,  // 城市地区名字  比如 xx区
					String,
				]
			}
		]
	],
}
```



## 公益项目列表获取

url: /api/getProjectsList



method:get



请求参数：

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |
| city   | String |   必须   | 所在城市   |



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		total: Number,
		list:[
			{
				id: String , // 项目的唯一编号id
				name:String, // 项目的名称
				ownerName:String, // 项目发起者的用户名
				value:Sting, // 项目的时间货币
				time:Number, // 项目所需要的时间
				category:String, // 项目的分类
				state:String,// 项目的完成情况 可承接 已满员 已完成（已完成的需要公示两天）
				createTime: date, // 项目的发布时间
				startTime: date, // 项目的开始时间
				endTime: date, // 项目的结束时间
			}
		]
	}
}
```



## 通过id获取公益项目详细信息

url: /api/getProjectById

method:get

请求参数：

| 字段      |  类型  | 是否必须 | 备注       |
| :-------- | :----: | :------: | ---------- |
| appkey    | String |   必须   | 用户appkey |
| projectId | String |   必须   | 项目的ID   |



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
        id: String , // 项目的唯一编号id
        name:String, // 项目的名称
        ownerName: String // 项目发起者的信息
        contactPerson: {
        	name: String,
        	phone: String,
        	sex: String, // male or female 用来显示 是 x先生 or x女士
        }, // 联系人信息
        value:Sting, // 项目的时间货币
        time:Number, // 项目所需要的时间
        address: String, // 具体地址
        workTime: date, // 具体工作时间
        needPeople: Number， // 项目所需要的人数
        nowPeople: Number, // 目前报名的人数
        state:String,// 项目的完成情况 可承接 已满员 已完成（已完成的需要公示两天）
        createTime: date, // 项目的发布时间
        startTime: date, // 项目的开始时间
        endTime: date, // 项目的结束时间
        description: String, // 项目的描述
        userList: [
        	{
        		userName:String,
        		userAvatar: url, // 用户头像
        		userState: String, // 承接人任务完成状态
        		acceptTime: String, // 承接人接收任务的时间
        		overTime: String, // 承接人完成任务的时间
        		userComment: String, // 承接人完成任务的评价
        		star: Number, // 承接人 对该项目的 星级评价 【0~5】
        	}
        ]
	}
}
```



## 商场物品列表获取

**url:**/api/getshoplist



**method**:get

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: [
		{
			goodsId: String,
			name: String,
			value: Number,
			img: url,
			total: Number, // 库存
		}
	],        
}
```



## 通过商品id获取商品信息

**url:**/api/getgoodsdetails



**method**:get

| 字段    |  类型  | 是否必须 | 备注       |
| :------ | :----: | :------: | ---------- |
| appkey  | String |   必须   | 用户appkey |
| goodsId | String |   必须   | 商品id     |



**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		goodsName: String, // 物品的名字 minLength=10
		goodsNumber: String, // 商品数字编号
		goodsTotal: Number, // 商品库存
		goodsValue: Number, // 商品价值
		saleNumber: Number, // 已兑换数量
		goodsTitleImgList:[url], // 商品轮播图展示的图片信息数组  maxLength=4
		goodsInfoImg: [url], // 存放物品的具体信息图片数组
	}，       
}
```



## AI客服发送信息接口

**url:**/api/aimsgsend

**method**:post

| 字段   |  类型  | 是否必须 | 备注             |
| :----- | :----: | :------: | ---------------- |
| appkey | String |   必须   | 用户appkey       |
| text   | String |   必须   | 用户所提问的信息 |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: [String,String...]，// 可以是一条信息，也可以是两条信息       
}
```

