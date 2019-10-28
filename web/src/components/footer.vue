<template>
	<footer>
		<nav>
			<router-link to="/" tag="div" :class="$route.path=='/'&& active">
				<div><img src="../assets/shop.png"/></div>
				<span>商城</span>
			</router-link>
			
			<router-link to="/shopcar" tag="div" :class="$route.path=='/shopcar'&& active">
				<div><img src="../assets/server.png"/></div>
				<span>购物车</span>
			</router-link>
			
			<router-link to="/order" tag="div" :class="$route.path=='/order'&& active">
				<div><img src="../assets/order.png"/></div>
				<span>订单</span>
			</router-link>
			
			<router-link to="/my" tag="div" :class="$route.path=='/my'&& active">
				<div><img src="../assets/my.png"/></div>
				<span>我的</span>
			</router-link>
			
		</nav>
	</footer>
</template>

<script>
	export default{
		data(){
			return {
				active:"active"
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
footer{
		nav{
			position:fixed; left: 0;bottom: 0;width: 100%;
			background: #eee;height: 1.1rem;
			color: #999;
			background: #000000;
			display: flex;justify-content: space-around;align-items: center;
			font-size: 0.3rem;
			div{
				flex: 1;text-align: center;
								
				div{
					width: 30%;
					margin: 0 auto;
				}
			}
			
		}
		
		.active{
			color: #fff;
			img{
				filter: brightness(1.5);
			}
		}
}

</style>