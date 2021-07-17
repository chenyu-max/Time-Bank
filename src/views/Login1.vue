<template>
    <div class="login-register">
        <div class="contain">
            <div class="big-box" :class="{active:isLogin}">
                <div class="big-contain" v-if="isLogin">
                    <div class="btitle">账户登录</div>
                    <div class="bform">
                        <input type="email" placeholder="邮箱" v-model="form.useremail">
                        <span class="errTips" v-if="emailError">*邮箱填写错误*</span>

                        <input type="password" placeholder="密码" v-model="form.userpwd">
                        <span class="errTips" v-if="emailError">*密码填写错误*</span>
                    </div>
                    <button class="bbutton" @click="login">登录</button>
                </div>

                <div class="big-contain" v-else>
                    <div class="btitle">创建账户</div>
                    <div class="bform">
                        <input type="text" placeholder="用户名" v-model="form.username">
                        <span class="errTips" v-if="existed">*用户名已经存在*</span>
                        <input type="email" placeholder="邮箱" v-model="form.useremail">
                        <input type="password" placeholder="密码" v-model="form.userpwd">
                    </div>
                    <button class="bbutton" @click="register">注册</button>
                </div>
            </div>

            <div class="small-box" :class="{active:isLogin}">
                <div class="small-contain" v-if="isLogin">
                    <div class="stitle">你好，my friend</div>
                    <p class="scontent">开始注册，let's play games</p>
                    <button class="sbutton" @click="changeType">注册</button>
                </div>

                <div class="small-contain" v-else>
                    <div class="stitle">欢迎回来</div>
                    <p class="scontent">与我们保持联系，请登录你的账户</p>
                    <button class="sbutton" @click="changeType">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"login-register",
    data(){
        return{
            isLogin:false,
            emailError:false,
            passwordError:false,
            existed:false,
            form:{
                username:'',
                useremail:'',
                userpwd:''
            }
        }
    },
    methods: {
        changeType(){
            this.isLogin=!this.isLogin
            this.form.username=''
            this.form.useremail=''
            this.form.userpwd=''
        },
        login(){
            consolea.log("error");
            alert("现在还在吗？");
            const self=this;
            if(self.form.useremail!=""&&self.form.userpwd!=""){
                self.$axios({
                    method:'post',
                    url:'http://127.0.0.1:8084/api/user/login',
                    data:{
                        email:self.form.useremail,
                        password:self.form.userpwd
                    }
                }).then(res=>{
                    switch(res.data){
                        case 0:
                            alert("登录成功!");
                            break;
                        case -1:
                            this.emailError=true;
                            alert("登录失败-1");
                            break;
                        case 1:
                            alert("登录失败1");
                            this.passwordError=true;
                            break;
                    }
                }).catch(err=>{
                    alert(err);
                    console.log(err);
                })
                alert("反馈");
            }
            
            else{
                alert("不能为空");
            }
        },

        register(){
				const self = this;
				if(self.form.useremail!=""&&self.form.userpwd!=""&&self.form.pwd!=""){
					self.$axios({
						method:'post',
						url: 'http://127.0.0.1:8084/api/user/add',
						data: {
							username: self.form.username,
							email: self.form.useremail,
							password: self.form.userpwd
						}
					})
					.then( res => {
						switch(res.data){
							case 0:
								alert("注册成功！");
								this.login();
								break;
							case -1:
								this.existed = true;
								break;
						}
					})
					.catch( err => {
						console.log(err);
					})
				} else {
					alert("填写不能为空！");
				}
			}
    }
}
</script>

<style scoped lang="scss">
    @mixin main_size($width,$height){
        height: $height;
        width: $width;
    }
    @mixin choose_color($color){
        background-color: $color;
    }
    @mixin ele-position($position,$top,$left){
        position:$position;
        top:$top;
        left:$left;
    }
    @mixin flex-center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @mixin transform-button($left,$border-top-left-radiu,$border-bottom-left-radius,$border-top-right-radius,$border-bottom-right-radius,$transition){
        left:$left;
        
        border-top-left-radius: $border-top-left-radiu;
		border-bottom-left-radius: $border-bottom-left-radius;
		border-top-right-radius: $border-top-right-radius;
		border-bottom-right-radius: $border-bottom-right-radius;
        transform: translateX(-100%);
        transition: all $transition;
    }

    .login-register{
        @include main_size(100vw,100vh );
        box-sizing: border-box;
        
    }

    .contain{
        @include main_size(60%,60%);
        @include ele-position(relative, 50%, 50%);
        @include choose_color(#fff);
        transform: translate(-50%,-50%);//居中主部件
        border-radius: 20px;
        box-shadow: 0 0 3px #f0f0f0,
                    0 0 6px #f0f0f0;
    }

    .big-box{
        @include main_size(70%, 100%);
        @include ele-position(absolute, 0, 30%);
        background: linear-gradient(135deg,rgb(137,207,235),rgb(83, 181, 219));
        transition: all 1s;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        
    }

    .big-contain{
        @include main_size(100%,100% );
        @include flex-center();
        
    }

    .btitle{
        font-size: 1.5em;
        font-weight: bold;
        color:#fff;
    }

    .bform{
        @include main_size(100%, 40%);
        padding: 2em 0;
        display: flex;
        flex-direction: column;
		justify-content: space-around;
		align-items: center;
    }

    .beform .errTips{
        width:50%;
        margin-left: 1em;
        display: block;
        text-align: left;
        color: red;
        font-size:0.7em;
    }

    .bform input{
        @include main_size(50%, 40px);
        border: none;
        outline: none;
        border-radius: 10px;
        padding-left: 2em;
        background-color: #f0f0f0;
    }

    .bbutton{
        @include main_size(20%, 40px);
        border: none;
        outline: none;
        border-radius: 24px;
        color: #fff;
        background-color: deepskyblue;
        cursor: pointer;
    }

    .small-box{
        @include main_size(30%, 100%);
        @include ele-position(absolute,0,0);
        background: linear-gradient(135deg,rgb(57,167,176),rgb(56,183,145));
        transition: all 1s;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .small-contain{
        @include main_size(100%, 100%);
        @include flex-center();
    }

    .stitle{
        color: #fff;
        font-size: 1.5em;
    }

    .scontent{
        color:#fff;
        padding: 2em 4em;
        line-height: 1.7em;
        font-size: 0.8em;
        text-align: center;
    }

    .sbutton{
        @include main_size(60%, 40px);
        font-size: 0.9em;
        outline: none;
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 24px;
        cursor:pointer;
    }

    .big-box.active{
       @include transform-button(70%,20px,20px,0,0,0.5s);
    }

    .small-box.active{
        @include transform-button(100%,0,0,20px,20px,1s);
    }
</style>