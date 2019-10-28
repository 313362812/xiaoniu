<template>
	<div>
		<el-table :data="tableData" style="width: 100%" >
			<el-table-column prop="time" label="注册日期" width="180">
			</el-table-column>
			<el-table-column prop="userName" label="管理员姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
		<el-pagination
		  background
		  layout="sizes,prev, pager, next"
		  :total="total"
		  :page-sizes="sizes"
		  :page-size="size"
		  @current-change="change"
		  >
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				size:3,
				total:1,
				sizes:[1,2,3,4]
			}
		},
		created() {
			this.getData(1)
		},
		methods:{
			format(time) {
				time = new Date(time)
				return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
			},
			change(current){
				this.getData(current)
			},
			async getData(current){
				let res = await this.$http.get("/admin",{
					params:{size:this.size,current}
				});
				console.log(res)
				this.total = res.data.total;
				this.tableData = res.data.data.map(i=>{
					i.time = this.format(i.time)
					return i
				});
			}

		}
	}
</script>

<style scoped="scoped" lang="less">
	.el-table .warning-row {
		background: oldlace;
	}
	
	.el-table .success-row {
		background: #f0f9eb;
	}
</style>