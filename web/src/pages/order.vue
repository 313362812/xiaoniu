<template>
	<div class="orderbox">
		<my-header2>我的订单</my-header2>
		<div class="order-content">
			<div>
				<div class="content-top">
					<div>订单编号：123123</div>
					<div>已支付</div>
				</div>

				<div class="content-md">
					<div class="md-pic">
						<img src="../assets/n1s01.jpg" />
					</div>
					<div class="md-info">
						<p>N1S都市</p>
						<p>颜色：红色</p>
						<p>数量：21</p>
					</div>
					<div class="md-pay">
						￥12312
					</div>
				</div>
				<div class="content-bt">
					合计：<span>￥12312</span>（含运费0.00）
				</div>

			</div>
		</div>

		<my-footer></my-footer>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.orderbox {
		.order {
			font-size: 0.3rem;
		}
		.content-top {
			display: flex;
			justify-content: space-between;
			padding: 0.2rem;
		}
		.content-md {
			display: flex;
			background: #eee;
			height: 2.5rem;
		}
		.content-md>div {
			flex: 1;
		}
		.md-pic img {
			width: 100%;
			height: 99%;
			vertical-align: top;
		}
		.md-info {
			padding: 0.2rem;
		}
		.md-info p {
			line-height: 0.6rem;
		}
		.md-pay {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #F9080E;
			margin-top: 1rem;
		}
		.content-bt {
			background: #eee;
			padding: 0.2rem;
			border-top: 0.04rem solid #fff;
			display: flex;
			justify-content: flex-end;
		}
		.content-bt span {
			color: #F9080E;
		}
		.order-content {
			margin-bottom: 1.2rem;
		}
	}
</style>