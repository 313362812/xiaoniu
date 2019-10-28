<template>
	<header>
			<div class="logo">
				<img src="../assets/logo.png"/>
			</div>
			<div class="head_right">
				<router-link to="/login" class="user" tag="div">
					<img src="../assets/user.png"/>
				</router-link>
				<div class="star">
					<img src="../assets/star.png"/>
				</div>
			</div>
		</header>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
header{
			display: flex;justify-content: space-between;
			
			.logo{
				width: 30%;margin-left: 0.1rem;
				margin-top: 0.1rem;
			}
			.head_right{
				width: 20%;display: flex;justify-content: space-between;
				margin-right: 0.1rem;
				
				div{
					width: 0.66rem;
				}
			}
			
		}
</style>