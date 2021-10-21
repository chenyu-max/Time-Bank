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



## 用户以及用户信息





### 用户登录



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

### 用户注册



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



### 获取验证码



url: /api/passport/phonecode



method: post



请求参数：

| 字段        |  类型  | 是否必须 | 备注       |
| :---------- | :----: | :------: | ---------- |
| phoneNumber | String |   必须   | 用户手机号 |

响应的验证码是 6位数字

- 说明：用户点击获取验证码按钮后，后台将验证码发送至响应手机号



### 找回密码



url: /api/passport/findback



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



### 更改密码



url: /api/passport/changepwd



method: post



请求参数：

| 字段        |  类型  | 是否必须 | 备注       |
| :---------- | :----: | :------: | ---------- |
| appkey      | String |   必须   | 用户appkey |
| oldPassword | String |   必须   | 用户旧密码 |
| newPassword | String |   必须   | 用户新密码 |



### 用户信息填写



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

url: /api/citylist



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



## 公益项目



### 公益项目列表获取

url: /api/projectslist



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



### 通过id获取公益项目详细信息

url: /api/projectbyid

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
        category: String , // 项目的类别
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
        ], // 用户评价列表
	}
}
```



### 承接任务接口

url: /api/acceptproject

method:post

请求参数：

| 字段      |  类型  | 是否必须 | 备注       |
| :-------- | :----: | :------: | ---------- |
| appkey    | String |   必须   | 用户appkey |
| projectId | String |   必须   | 项目的ID   |





### 获取个人公益项目历史记录接口

**url:**/api/myproject

**method**:get

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		doing:[
			{
				id: String , // 项目的唯一编号id
				name:String, // 项目的名称
				ownerName:String, // 项目发起者的用户名
				value:Sting, // 项目的时间货币
				time:Number, // 项目所需要的时间
				category:String, // 项目的分类
				acceptTime: date, // 项目的承接时间
				startTime: date, // 项目的开始时间
				endTime: date, // 项目的结束时间
			},
		],
		waitForComment:[
			{
		 		id: String , // 项目的唯一编号id
				name:String, // 项目的名称
				ownerName:String, // 项目发起者的用户名
				value:Sting, // 项目的时间货币
				time:Number, // 项目所需要的时间
				category:String, // 项目的分类
				finishtTime: date, // 项目完成时间
				startTime: date, // 项目的开始时间
				endTime: date, // 项目的结束时间
			}  
		],
		finish:[
			{
				id: String , // 项目的唯一编号id
				name:String, // 项目的名称
				ownerName:String, // 项目发起者的用户名
				value:Sting, // 项目的时间货币
				time:Number, // 项目所需要的时间
				category:String, // 项目的分类
				finishtTime: date, // 项目完成时间
				startTime: date, // 项目的开始时间
				endTime: date, // 项目的结束时间
			}
		],
	},        
}
```



## 发起项目



### 上传项目评论接口

**url:**/api/comment

**method**:post



| 字段      |  类型  | 是否必须 | 备注       |
| :-------- | :----: | :------: | ---------- |
| appkey    | String |   必须   | 用户appkey |
| projectId | String |   必须   | 公益项目ID |



### 获取我发布的项目信息接口

url:/api/myaddproject

**method**:get



| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		doing:[
			{
				id: String , // 项目的唯一编号id
				projectName: String, // 项目名称
                description: String, // 项目描述
                nowPeople: Number, // 现在的人数
                needPeople: Number,  // 项目所需要的人数
                category: String,	// 项目的分类
                value: Number,		// 项目每人所需要支付的时间币
                workTime: Number,	// 项目每人所需要工作的时间
                address: String,	// 项目工作的地点
                contactPersonName: String, // 项目联系人名字
                createTime: String, // 项目创建的时间（项目被审核人通过的时间）
                startTime: String,	// 项目开始的时间 "yyyy-MM-dd HH:mm"
                endTime: String,	// 项目结束的时间 "yyyy-MM-dd HH:mm"
			},
		],
		waitCheck:[
            {
            	id: String , // 项目的唯一编号id
				projectName: String, // 项目名称
                description: String, // 项目描述
                needPeople: Number,  // 项目所需要的人数
                category: String,	// 项目的分类
                value: Number,		// 项目每人所需要支付的时间币
                workTime: Number,	// 项目每人所需要工作的时间
                address: String,	// 项目工作的地点
                contactPersonName: String, // 项目联系人名字
                contactPersonSex: String, // 项目联系人的性别
                contactPersonPhone: String,	 // 项目联系人的电话
                startTime: String,	// 项目开始的时间
                endTime: String,	// 项目结束的时间
            }
		],
		finish:[
			{
				id: String , // 项目的唯一编号id
				projectName: String, // 项目名称
                description: String, // 项目描述
                needPeople: Number,  // 项目所需要的人数
                nowPeople: Number, // 现在的人数
                category: String,	// 项目的分类
                value: Number,		// 项目每人所需要支付的时间币
                workTime: Number,	// 项目每人所需要工作的时间
                address: String,	// 项目工作的地点
                contactPersonName: String, // 项目联系人名字
                createTime: String, // 项目创建的时间（项目被审核人通过的时间）
                startTime: String,	// 项目开始的时间
                endTime: String,	// 项目结束的时间
                userList: [
                	{
                		username: String, // 参与用户用户名
                		userAvatar: url, // 用户头像
                		workTime: Number, // 参与用户工作时间
                		overTime: String, // 用户完成时间
                		userComment: String, // 参与用户的评论信息
                		userStar: Number, // 用户对项目的评分
                	}
                ],
			}
		],
	},        
}
```



### 修改项目信息接口

**url:**/api/projectinfo

**method**:put

| 字段               |  类型  | 是否必须 | 备注                     |
| :----------------- | :----: | :------: | ------------------------ |
| appkey             | String |   必须   | 用户appkey               |
| id                 | String |   必须   | 项目id                   |
| projectName        | String |   必须   | 项目名称                 |
| description        | String |   必须   | 项目描述                 |
| needPeople         | Number |   必须   | 项目所需人数             |
| category           | String |   必须   | 项目分类                 |
| value              | Number |   必须   | 每个志愿者给予的时间币   |
| workTime           | Number |   必须   | 每个志愿者需要工作的时间 |
| address            | String |   必须   | 公益项目所在地址         |
| contactPersonName  | String |   必须   | 项目联系人名字           |
| contactPersonSex   | String |   必须   | 项目联系人性别           |
| contactPersonPhone | String |   必须   | 项目联系人电话           |
| startTime          | String |   必须   | 项目有效开始时间         |
| endTime            | String |   必须   | 项目结束时间             |



### 项目申报接口

**url:**/api/declareproject

**method**:post

| 字段       |  类型  | 是否必须 | 备注         |
| :--------- | :----: | :------: | ------------ |
| appkey     | String |   必须   | 用户appkey   |
| projectId  | String |   必须   | 项目id       |
| userList   | Array  |   必须   | 用户评论列表 |
| remarkText | String |   必须   | 备注         |



### 发起项目至审核人接口

**url:**/api/newproject

**method**:post

| 字段               |  类型  | 是否必须 | 备注                     |
| :----------------- | :----: | :------: | ------------------------ |
| appkey             | String |   必须   | 用户appkey               |
| projectName        | String |   必须   | 项目名称                 |
| description        | String |   必须   | 项目描述                 |
| needPeople         | Number |   必须   | 项目所需人数             |
| category           | String |   必须   | 项目分类                 |
| value              | Number |   必须   | 每个志愿者给予的时间币   |
| workTime           | Number |   必须   | 每个志愿者需要工作的时间 |
| address            | String |   必须   | 公益项目所在地址         |
| contactPersonName  | String |   必须   | 项目联系人名字           |
| contactPersonSex   | String |   必须   | 项目联系人性别           |
| contactPersonPhone | String |   必须   | 项目联系人电话           |
| startTime          | String |   必须   | 项目有效开始时间         |
| endTime            | String |   必须   | 项目结束时间             |



### 获取项目报名者申请

**url:**/api/volunteerlist

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
			userId: String,
			userName: String,
			level: Number,
			projectId: String,
			projectName: String,
			time: String,
            workTime: Number,
            cishu: Number, // 完成项目的次数
		}
	]
}
```



### 项目报名者申请处理结果返回

**url:**/api/volunteerapply

**method**:post

| 字段        |  类型   | 是否必须 | 备注                    |
| :---------- | :-----: | :------: | ----------------------- |
| appkey      | String  |   必须   | 用户appkey              |
| userId      | String  |   必须   | 报名用户ID              |
| userProject | String  |   必须   | 报名用户所报名的项目ID  |
| result      | Boolean |   必须   | 同意返回 true 反之false |



## 审核人



### 申请成为审核人

**url:**/api/applyreviewer

**method**:post

| 字段            |  类型  | 是否必须 | 备注             |
| :-------------- | :----: | :------: | ---------------- |
| appkey          | String |   必须   | 用户appkey       |
| name            | String |   必须   | 用户真实姓名     |
| identity_number | String |   必须   | 用户身份证       |
| resource        | String |   必须   | 是否读取信用口碑 |
| desc            | String |   必须   | 申请的理由       |
| xuanyan         | String |   必须   | 竞争宣言         |
| declaration     | String |   必须   | 任职宣言         |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: null,        
}
```



### 候选审核人界面信息获取

**url:**/api/getreviewerinfo

**method**:get

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		likeName: id, // 用户自己今日投票给谁了，如果有，则返回他的id，如果没有，则返回“”
		candidate:[
			{
				name: String, // 候选人用户名
				id: id, // 候选人id
				avatar: url, // 候选人头像
				xuanyan: String, // 候选人竞争宣言
				votes: Number, // 候选人票数
			}
		],
	},        
}
```



### 给审核人投票

**url:**/api/vote

**method**:post

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |
| id     | String |   必须   | 候选人id   |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: null,        
}
```



### 通过候选人ID 查看候选人详细信息

**url:**/api/candidateinfo

**method**:get

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |
| id     | String |   必须   | 候选人id   |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		name: String, // 候选人用户名
		level: Number, // 候选人等级
		workTime: Number, // 候选人志愿服务时长
		xuanyan: String, // 候选人宣言
		desc: String, // 候选人申请理由
		reviewerDays: Number , // 当过审核人的次数
	},        
}
```



### 获取一天的审核人公示列表

**url:**/api/reviewerlist

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
			avatar: url, // 审核人头像
			declaration: String, // 任职宣言
			name: String, // 用户名,
			tasksNumber: Number, // 一天到目前为止处理的任务数量（总）
			reportTasks: Number, // 举报处理数量
			reviewTasks: Number, // 审核处理数量
			reviewAddTasks: Number, // 审核项目添加任务数量
      		reviewDeclareTasks: Number, // 审核项目申报任务数量
			id: String, // 审核人ID
		}
	],        
}
```



## 审核人工作

### 添加项目审核列表获取

**url:**/api/addprojectlist

**method**:get

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		ingProject: Number, // 等待审核的项目
		overProject: Number, // 审核完成的项目
		list: [
			{
                projectId: String,
                projectName: String,
                desc: String, // 简介
                owner: String, // 发起人
                needPeople: Number, // 需要的人数
                agree: Number, // 同意票数
                reject: Number, // 拒绝票数
                state: String, // over：已审核  ing：待审核
			}
		],        
	}
}
```



### 添加项目审核详情页面信息获取

**url:**/api/addprojectdetail

**method**:get

| 字段      |  类型  | 是否必须 | 备注       |
| :-------- | :----: | :------: | ---------- |
| appkey    | String |   必须   | 用户appkey |
| projectId | String |   必须   | 项目id     |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		projectName: String, // 项目名称
		projectId: String, // 项目id
		desc: String, // 项目描述
		needPeople: Number, // 项目所需人数
		category: String, // 项目分类
		value: Number, // 项目单人支付时间币
		workTime: Number, // 项目需要的工作时间
		address: String, // 项目地址
		contactName: String, // 项目联系人姓名
		contactSex: String, // 项目联系人性别
		contactPhone: String, // 项目联系人电话
		startTime: String, // 项目开始时间
		endTime: String, // 项目结束时间
	}
}
```







### 项目申报审核列表获取

**url:**/api/declareprojectlist

**method**:get

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		ingProject: Number, // 等待审核的项目
		overProject: Number, // 审核完成的项目
		list: [
			{
                projectId: String,
                projectName: String,
                desc: String, // 简介
                owner: String, // 发起人
                overTime: String, // 项目结束时间
                agree: Number, // 同意票数
                reject: Number, // 拒绝票数
                state: String, // over：已审核  ing：待审核
			}
		],        
	}
}
```



### 添加项目审核详情页面信息获取

**url:**/api/declareprojectdetail

**method**:get

| 字段      |  类型  | 是否必须 | 备注       |
| :-------- | :----: | :------: | ---------- |
| appkey    | String |   必须   | 用户appkey |
| projectId | String |   必须   | 项目id     |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		projectName: String, // 项目名称
		projectId: String, // 项目id
		needPeople: Number, // 项目所需人数
		category: String, // 项目分类
		value: Number, // 项目单人支付时间币
		workTime: Number, // 项目需要的工作时间
		address: String, // 项目地址
		contactName: String, // 项目联系人姓名
		startTime: String, // 项目开始时间
		endTime: String, // 项目结束时间
		userList: Array, // 用户评论列表
		remarkText: String, // 备注
	}
}
```







### 举报审核列表获取

**url:**/api/reportreviewlist

**method**:get

| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		ingNum: Number, // 等待审核的举报数量
		overNum: Number, // 审核完成的举报数量
		list: [
			{
                reportId: String, // 被举报的
                reportName: String, // 被举报的对象
                desc: String, // 举报理由
                time: String, // 举报任务创建提交时间
                category: String, // 举报类型 ['举报项目','举报审核人','举报发起者']
                ownerName: String, // 举报人
                ownerId: String, // 举报人id
                agree: Number, // 同意票数
                reject: Number, // 拒绝票数
                tips: String, // over：已审核  ing：待审核 back： 已打回
			}
		],        
	}
}
```









## 时间商城



### 商场物品列表获取

**url:**/api/shoplist

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



### 通过商品id获取商品信息

**url:**/api/goodsdetails



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



## 举报

### 举报项目

**url:**/api/reportproject

**method**:post

| 字段        |  类型  | 是否必须 | 备注           |
| :---------- | :----: | :------: | -------------- |
| appkey      | String |   必须   | 用户appkey     |
| projectId   | String |   必须   | 项目ID         |
| projectName | String |   必须   | 项目名称       |
| name        | String |   必须   | 投诉人姓名     |
| phone       | String |   必须   | 投诉人电话号码 |
| desc        | String |   必须   | 具体投诉详情   |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: null，
}
```



### 举报发起者

**url:**/api/reportoriginator

**method**:post

| 字段           |  类型  | 是否必须 | 备注           |
| :------------- | :----: | :------: | -------------- |
| appkey         | String |   必须   | 用户appkey     |
| originatorId   | String |   必须   | 发起者ID       |
| originatorName | String |   必须   | 发起者名称     |
| name           | String |   必须   | 投诉人姓名     |
| phone          | String |   必须   | 投诉人电话号码 |
| desc           | String |   必须   | 具体投诉详情   |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: null，
}
```



### 举报审核人

**url:**/api/reportreviewer

**method**:post

| 字段         |  类型  | 是否必须 | 备注           |
| :----------- | :----: | :------: | -------------- |
| appkey       | String |   必须   | 用户appkey     |
| reviewerId   | String |   必须   | 审核人ID       |
| reviewerName | String |   必须   | 审核人名称     |
| name         | String |   必须   | 投诉人姓名     |
| phone        | String |   必须   | 投诉人电话号码 |
| desc         | String |   必须   | 具体投诉详情   |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: null，
}
```





## 客服



### AI客服发送信息接口

**url:**/api/msgtoai

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



### 人工客服初始化接口

**url:**/api/menserviceinit

**method**:post



| 字段   |  类型  | 是否必须 | 备注       |
| :----- | :----: | :------: | ---------- |
| appkey | String |   必须   | 用户appkey |

**响应规格：**

```yaml
{
	code: 0,
	msg: "",
	data: {
		name: String, // 人工客服名字 如 小王、小李等
	}，//        
}
```



### 人工客服发送信息接口

**url:**/api/msgtomen

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

