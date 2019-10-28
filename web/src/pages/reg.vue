<template>
	<div class="reg">
		<!--头部-->
		<header>
			<img src="../assets/logo.png"/>
		</header>
		
		<nav>
			<h5>用户注册</h5>
			
			<div>
				<p>用户名</p>
				<input type="text"  id="userName" v-model="obj.userName"  placeholder="请输入用户名"/>
			</div>
			
			<div>
				<p>密码</p>
				<input type="text"	id="pwd" v-model="obj.pwd"  placeholder="请输入密码"/>
			</div>
			
			<div>
				<p>确定密码</p>
				<input type="text"  id="pwds" v-model="pwds"  placeholder="请确认密码"/>
			</div>
			
			<div>
				<p>手机号</p>
				<input type="text"	id="tel" v-model.number="obj.tel" placeholder="请输入手机号"/>
			</div>
			
		</nav>
		
		<div class="btn">
			<button class="submint" @click="submint()">注册</button>
			<button class="reset" @click="reset()">重置</button>
		</div>
		
		<router-link to="/login" tag="div">
			<h5>我有账号</h5>
		</router-link>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				obj:{
					userName:"",
					pwd:"",
					tel:""
				},
				pwds:""
			}
		},
		
		
		methods:{
			async  submint(){
				if(!this.obj.userName||!this.obj.pwd||!this.obj.tel||!this.pwds){
				alert("不能为空")
				return false
			}
				if(this.obj.pwd!=this.pwds){
					alert("两次密码不一样")
					return false
				}
				let res =await this.$http.post("/user",this.obj)
				console.log(res)
				this.$router.push("/login")
			},
			reset(){
				this.obj.userName="";
				this.obj.pwd="";
				this.obj.tel="";
				this.pwds="";
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.reg{
		text-align: center;
		
		header{
			width: 40%;height: auto;
			margin: 0 auto;
			margin-top: 0.8rem;
		}
		nav{
			h5{
				font-size: 0.2rem;
			}
			div{
					display: flex;justify-content: flex-start;align-items: center;
				border-top: solid 1px gainsboro;font-size: 0.13rem;width: 4rem;margin: 0.1rem auto;
				height: 0.5rem;
			
				input{
					border-style: none;
					text-align: center;
					text-align: justify;
					display: inline-block;
					line-height: 0.5rem;
				}
				
				p{
					width: 1rem;
					display: inline;
				}
			}
		}
		
		.btn{
			
			.btn_reg,.btn_clear{
				margin-top: 0.2rem;
				border-radius: 0.07rem;
				color: #FFFFFF;
				border: none;
				padding: 0.13rem 0.2rem;
				margin-bottom: 0.2rem;
			}
			.btn_reg{
				background: dodgerblue;
				margin-right: 0.3rem;
			}
			.btn_clear{
				background: red;
			
			}
		}
		
		
	}
	
</style>