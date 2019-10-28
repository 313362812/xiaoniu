<template>
	<div class="shopcar">
		<my-header2>购物车</my-header2>
		<main v-if="userName">
			<div class="goodsList" v-for="(i,j) in list" :key="j">
				<div class="select">
					<input type="checkbox" :value="i._id" v-model="check" />
				</div>
				<div class="goodspic">
					<img :src="i.pic"/>
				</div>
				<div class="info">
					<div class="title">
					名称：{{i.goodsName}}
						</div>
					<div class="price">
						价格：￥{{i.price}}
					</div>
					<div class="count">
						数量：
						<button>-</button>
						<input type="text" v-model="i.count" />
						<button @click="i.count++">+</button>
					</div>
				</div>
				<div class="remove">
					删除
				</div>
			</div>
		</main>
		<div v-else>查看购物车，
			<a href="javascript:;" @click="login()">请先登录</a>
		</div>
		<footer class="footer">
			<div class="select">
				<input type="checkbox" :checked="allCheck" @click="change()" />
			</div>
			<div class="total">
				￥{{total}}
			</div>
			<div class="commit" @click="pay()">
				去结算
			</div>
		</footer>
		<my-footer></my-footer>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	data(){
		return {
			list:[],
			check:[]
		}
	},
	computed:{
		...mapState(["userName"]),
		total(){
			return this.list.reduce((t,i)=>{
				if(this.check.includes(i._id)){
					return t+=i.price*i.count
				}else{
					return t
				}
			},0)
		},
		allCheck(){
			return this.check.length==this.list.length
		}
	},
	async created(){
		if(this.userName){
			let res =await this.$http.get("/car?user="+this.userName);
			console.log(res)
			this.list = res.data
		}
		this.check = this.list.map(i=>i._id)
	},
	methods:{
		login(){
			this.$store.commit("changeBack",this.$route.fullPath)
			this.$router.push("/login")
		},
		change(){
			if(this.allCheck){
				this.check = []
			}else{
				this.check = this.list.map(i=>i._id)
			}
		},
		pay(){
			let send = this.list.filter(i=>this.check.includes(i._id))
			console.log(send)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.shopcar {
	background: #eee; height: 100%;
	main {
		margin-bottom: 1.5rem;
		.goodsList {
			display: flex; background: #fff; margin-top: 0.24rem;
			
			.select {
				width:10%; text-align: center; padding-top: 0.4rem;
				input { width: 0.4rem; height: 0.4rem;}
			}
			.goodspic {
				width:25%
			}
			.info {
				width:40%; padding-top: 0.3rem;
				
				& > div { line-height: 0.6rem;}
				
				.title {
					font-weight: bold;
				}
				.price { color: #f9080e;}
				.count {
					display: flex;
					button { width: 0.5rem; height: 0.5rem; font-size: 0.32rem; 
					background: #efefef; border: 1px solid #ddd;}
					input { height: 0.5rem; font-size: 0.32rem; width: 0.6rem;
					text-align: center;border: 1px solid #ddd;}
					button:nth-child(1) { border-radius:.1rem 0 0 .1rem;}
					button:nth-child(3) { border-radius:0 .1rem .1rem 0;}
				}
			}
			.remove{
				width:25%; display: flex; justify-content: flex-end;
				align-items: flex-end; padding: 0.5rem 0.3rem; color: #555;
			}
		}
	}
	
	.footer {
		position: fixed; left: 0; bottom: 1.1rem; width: 100%;
		background: #ccc; height: 1rem; 
		font-size: 0.24rem;
		display: flex; align-items: center;
		
		.select {
			width:10%; text-align: center; 
			input { width: 0.4rem; height: 0.4rem;}
		}
		.total {
			width: 50%; color: #F9080E; padding-left: 0.16rem; line-height: 1rem;
			color: #fff; font-size: 0.4rem; color: #F30;
		} 
		.commit {
			width: 40%; background: #F9080E; color: #fff; text-align: center;
			color: #fff; line-height: 1rem; font-size: 0.4rem;
		}
	}
}
</style>