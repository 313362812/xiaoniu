<template>
	<div class="top">
		<div class="left">
			<el-breadcrumb separator-class="el-icon-loading" >
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item v-for="i in $route.meta" :key="i._id">{{i}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="right">
			<el-dropdown trigger="click">
				<span class="el-dropdown-link"><img src="../assets/default.jpg"/></span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-plus">我的</el-dropdown-item>
					<div @click="logout()">
						<el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
					</div>
					

				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			logout() {
				this.$router.push("/")
			}
		}
	}
</script>

<style  lang="less">
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			.el-breadcrumb__separator {
				color: #008877 !important;
			}
		}
		.right {
			display: flex;
			align-content: center;
			height: 60px;
			.el-dropdown-link {
				
				width: 40px;
				height: 40px;
				display: block;
					img {
					margin-top: 10px;
					width: 100%;
					height: auto;
					border-radius: 20px;
				}
				
				
			}
		}
	}
</style>