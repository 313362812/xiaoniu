<template>
	<div>
		<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
			<el-table-column prop="regTime" label="注册日期" sortable width="180">
			</el-table-column>
			<el-table-column prop="userName" label="用户名" sortable width="180">
			</el-table-column>
			<el-table-column prop="tel" label="电话" >
			</el-table-column>
		</el-table>
		
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="total"
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
				size:3,
				total:100,
				tableData: []
			}
		},
		async created(){
			this.getData(1)
		},
		methods: {
			format(regTime) {
				regTime = new Date(regTime)
				return regTime.getFullYear() + "-" + (regTime.getMonth() + 1) + "-" + regTime.getDate()
			},
			change(current){
				this.getData(current)
			},
			async getData(current){
				let res = await this.$http.get("/user",{
					params:{size:this.size,current}
				});
				console.log(res)
				this.total = res.data.total;
				this.tableData = res.data.data.map(i=>{
					i.regTime = this.format(i.regTime)
					return i
				});
			}
		}
	}
</script>

<style>

</style>