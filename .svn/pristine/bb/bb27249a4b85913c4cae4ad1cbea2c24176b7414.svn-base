<template>
  <div  class="pagecolor">
	  <div >
		  <div v-for="(val,key) in stationList" >
			  <table border="1" bordercolor="#4169E1" cellspacing="0" cellpadding="0" width="400" class="table_1"> 
				 <tr>
				   <td height="30" bgcolor="#FFFFFF">电站名称: {{val.value}}</td>
				 </tr>
			  </table>
		  </div>
		  <img src="../../assets/images-svg/tu1.png"  class="img_1"/>
		  <div v-for="(val,key) in weathList" >
			  <table  width="300"  class="table_2">
				 <tr>
				   <td height="30">温度:{{val.temperature}}</td>
				   <td height="30">湿度：{{val.humidity}}</td>
				 </tr>
				 <tr>
				   <td height="30">风力：{{val.wind}}</td>
				   <td height="30">&nbsp;</td>
				 </tr>
			  </table>
		  </div>
		  <img src="../../assets/images-svg/tu2.png"  class="img_2"/>
		  <div  v-for="(val,key) in headerList">
			  <table   border="1" bordercolor="#4169E1" cellspacing="0" cellpadding="0" width="200"  class="table_3">
				 <tr>
				   <td height="30" bgcolor="#FFFFFF">A相电流（A）:&emsp;&emsp;{{val.Acurrent}}</td>
				 </tr>
				 <tr>
				   <td height="30" bgcolor="#FFFFFF">B相电流（A）:&emsp;&emsp;{{val.Bcurrent}}</td>
				 </tr>
				 <tr>
				   <td height="30" bgcolor="#FFFFFF">C相电流（A）:&emsp;&emsp;{{val.Ccurrent}}</td>
				 </tr>
				 <tr>
				   <td height="30" bgcolor="#FFFFFF">有功功率（kW）:&emsp;{{val.Effpower}}</td>
				 </tr>
				 <tr>
				   <td height="30" bgcolor="#FFFFFF">无功功率（kW）:&emsp;{{val.Invpower}}</td>
				 </tr>
			  </table>
		  </div>
		  <img src="../../assets/images-svg/xian1.png"  class="line_1"/>
		  <img src="../../assets/images-svg/tu3.png"  class="img_3"/>
		  <img src="../../assets/images-svg/xian1.png"  class="line_2"/>
		  <img src="../../assets/images-svg/tu4.png"  class="img_4"/>  
		  <img src="../../assets/images-svg/xian2.png"  class="line_3"/>
	  </div>
	  <div class="page_middle">
		  <div  v-for="(val,key) in powinfoList">
			  <table  border="1" bordercolor="#4169E1" cellspacing="0" cellpadding="0" width="400">
				  <tr>
					<td height="30" bgcolor="#FFFFFF">日发电量（kWh） </td>
					<td height="30" bgcolor="#FFFFFF">{{val.daypower}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">月发电量（kWh）</td>
					<td height="30" bgcolor="#FFFFFF">{{val.monpower}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">发电总量（kWh）</td>
					<td height="30" bgcolor="#FFFFFF">{{val.totpower}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">数据更新时间 </td>
					<td height="30" bgcolor="#FFFFFF">{{val.update}}</td>
				  </tr>  
			  </table>
		  </div>
		  <img src="../../assets/images-svg/tu5.png" class="img_5"/> 
		  <img src="../../assets/images-svg/xian3.png" class="line_4"/> 
		  <div  v-for="(val,key) in inverterList">
			  <table  border="1" bordercolor="#4169E1" cellspacing="0" cellpadding="0" width="200" class="table_4">
				  <tr>
					<td height="30" bgcolor="#FFFFFF">A相电流（A）:&emsp;&emsp;{{val.Acurrent}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">B相电流（A）:&emsp;&emsp;{{val.Bcurrent}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">C相电流（A）:&emsp;&emsp;{{val.Ccurrent}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">A相电压（V）:&emsp;&emsp;{{val.AVoltage}}</td>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">B相电压（V）:&emsp;&emsp;{{val.BVoltage}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">C相电压（V）:&emsp;&emsp;{{val.CVoltage}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">有功功率（kW）:&emsp;{{val.Effpower}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">无功功率（kvar）:&nbsp;&nbsp;{{val.Invpower}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">功率因数:&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;{{val.factor}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">机内温度（°C）:&emsp;&nbsp;{{val.Inttemperature}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">逆变器效率（%）:&nbsp;&nbsp;{{val.efficiency}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">日发电量（kWh）:&nbsp;{{val.daypowers}}</td>
				  </tr>
			  </table>  
		  </div>
		  <img src="../../assets/images-svg/tu6.png" class="img_6"/>
		  <img src="../../assets/images-svg/xian4.png" class="line_5"/>
		  <div  v-for="(val,key) in inverter2List">
			  <table border="1" bordercolor="#4169E1" cellspacing="0" cellpadding="0" width="200"  class="table_5">
				  <tr>
					<td height="30" bgcolor="#FFFFFF">A相电流（A）:&emsp;&emsp;{{val.Acurrent}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">B相电流（A）:&emsp;&emsp;{{val.Bcurrent}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">C相电流（A）:&emsp;&emsp;{{val.Ccurrent}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">A相电压（V）:&emsp;&emsp;{{val.AVoltage}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">B相电压（V）:&emsp;&emsp;{{val.BVoltage}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">C相电压（V）:&emsp;&emsp;{{val.CVoltage}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">有功功率（kW）:&emsp;{{val.Effpower}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">无功功率（kvar）:&nbsp;&nbsp;{{val.Invpower}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">功率因数:&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;{{val.factor}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">机内温度（°C）:&emsp;&nbsp;{{val.Inttemperature}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">逆变器效率（%）:&nbsp;&nbsp;{{val.efficiency}}</td>
				  </tr>
				  <tr>
					<td height="30" bgcolor="#FFFFFF">日发电量（kWh）:&nbsp;{{val.daypowers}}</td>
				  </tr>
			  </table>
		  </div>
	  </div>
	  <div class="page_lower">
		  <img src="../../assets/images-svg/tu7.png"  class="img_7"/>
		  <img src="../../assets/images-svg/tu7.png"  class="img_8"/>
		  <img src="../../assets/images-svg/tu7.png"  class="img_9"/>
		  <img src="../../assets/images-svg/tu7.png"  class="img_10"/>
		  <img src="../../assets/images-svg/tu7.png"  class="img_11"/>
		  <img src="../../assets/images-svg/tu7.png"  class="img_12"/>		  
		  <img src="../../assets/images-svg/tu7.png"  class="img_13"/>
		  <img src="../../assets/images-svg/tu7.png"  class="img_14"/>
		  <img src="../../assets/images-svg/tu7.png"  class="img_15"/>
		  <div v-for="(val,i) in seriesList">
			  <table border="1" bordercolor="#4169E1" cellspacing="0" cellpadding="0" width="650"  class="table_6">
						  <tr>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">组串编号 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV1 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV2 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV3 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV4 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV5 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV6 </th>
						  </tr>
						  <tr>
							<td height="30" bgcolor="#FFFFFF">电压（V）</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage1}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage2}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage3}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage4}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage5}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage6}}</td>
						  </tr>
						  <tr>
							<td height="30" bgcolor="#FFFFFF">电流（A）</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current1}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current2}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current3}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current4}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current5}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current6}}</td>
						  </tr> 
			  </table>
		  </div>
		  <div v-for="(val,i) in seriesList2">
			  <table  border="1" bordercolor="#4169E1" cellspacing="0" cellpadding="0" width="360" class="table_7">
						  <tr>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">组串编号 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV7 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV8 </th>
							<th height="30" bgcolor="#FFFFFF" style="color: #FF8800;">PV9 </th>
						  </tr>
						  <tr>
							<td height="30" bgcolor="#FFFFFF">电压（V）</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage1}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage2}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Voltage3}}</td>
						  </tr>
						  <tr>
							<td height="30" bgcolor="#FFFFFF">电流（A）</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current1}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current2}}</td>
							<td height="30" bgcolor="#FFFFFF">{{val.Current3}}</td>
						  </tr> 
			  </table>
		  </div>
	  </div>
  </div>	  		  
</template>

<script>
	/*import {
	  getstation,
	  getweathinfo,
	  getheader,
	  getpowinfo,
	  getinverter,
	  getinverter2,
	  getseries2
	} from "@/api/svgcontrol/svgcontrol";*/
	export default {
		data(){
			return{
				stationList:[{
					name:'电站名称',
					value:'商河郑路镇斜庙电站'
				}],
				weathList:[{
					temperature:'20°C',
					humidity:'96%',
					wind:'3级东北'
					}],
				headerList:[{
					Acurrent:'6.20',
					Bcurrent:'6.30',
					Ccurrent:'6.40',
					Effpower:'4.22',
					Invpower:'0.00'
				}],
				powinfoList:[{
					daypower:'4.86',
					monpower:'2931.17',
					totpower:'277459.35',
					update:'08/30 09:16:48'
				}],
				inverterList:[{
					Acurrent:'4.10',
					Bcurrent:'4.10',
					Ccurrent:'4.10',
					AVoltage:'224.50',
					BVoltage:'224.40',
					CVoltage:'222.90',	
					Effpower:'2.74',
					Invpower:'0.00',
					factor:'1.00',
					Inttemperature:'30.10',
					efficiency:'96.66',
					daypowers:'3.16'
					
				}],
				inverter2List:[{
					Acurrent:'4.10',
					Bcurrent:'4.10',
					Ccurrent:'4.10',
					AVoltage:'224.50',
					BVoltage:'224.40',
					CVoltage:'222.90',	
					Effpower:'2.74',
					Invpower:'0.00',
					factor:'1.00',
					Inttemperature:'30.10',
					efficiency:'96.66',
					daypowers:'3.16'
					
				}],
				seriesList:[{
					  Voltage1:'580.80',
					  Voltage2:'580.80',
					  Voltage3:'580.60',
					  Voltage4:'580.60',
					  Voltage5:'534.80',
					  Voltage6:'534.80',	
					  Current1:'0.80',
					  Current2:'0.70',
					  Current3:'0.80',
					  Current4:'0.80',
					  Current5:'0.90',
					  Current6:'0.80'
					}],
				seriesList2:[{
					  Voltage1:'580.80',
					  Voltage2:'580.80',
					  Voltage3:'580.60',	
					  Current1:'0.80',
					  Current2:'0.70',
					  Current3:'0.80'
					}]
			}	
		},
		methods:{
			/*
			getstationList() {
			  this.loading = true;
			  getstation(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.stationList = response.rows;
				this.total = response.total;
				this.loading = false;
			  });
			},
			getweathList() {
			  this.loading = true;
			  getweathinfo(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.weathList = response.rows;
				this.total = response.total;
				this.loading = false;
			  });
			},
			gettheaderList() {
			  this.loading = true;
			  getheader(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.headerList = response.rows;
			    this.total = response.total;
			    this.loading = false;
			  });
			},
			getpowinfoList() {
			  this.loading = true;
			  getpowinfo(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.powinfoList = response.rows;
			    this.total = response.total;
			    this.loading = false;
			  });
			},
			getinverterList() {
			  this.loading = true;
			  getinverter(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.inverterList = response.rows;
			    this.total = response.total;
			    this.loading = false;
			  });
			},
			getinverter2List() {
			  this.loading = true;
			  getinverter2(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.inverter2List = response.rows;
			    this.total = response.total;
			    this.loading = false;
			  });
			},
			getseriesList() {
			  this.loading = true;
			  getseries(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.seriesList = response.rows;
			    this.total = response.total;
			    this.loading = false;
			  });
			},
			getseries2List() {
			  this.loading = true;
			  getseries2(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
			    this.series2List = response.rows;
			    this.total = response.total;
			    this.loading = false;
			  });
			}*/
		}
	}
</script>

<style scoped>
	.pagecolor {
	position:fixed;
	height: 100%;
	width: 100%;;
	background-color: #E6E6FA !important;
	color: #009FCC;
	font-size:10px;
	text-align:left;
	}
	.table_1 {
	position:absolute;
	left:20px;
	top:40px
	}
	.img_1 {
	position:absolute;
	left:20px;
	top:100px;
	height:70px ;
	width:70px
	}
	.table_2 {
	position:absolute;
    left:120px;
    top:100px;
	}
	.img_2 {
	position:absolute;
	left:710px;
	top:40px;
	height:130px;
	width:130px;
	}
	.table_3 {
	position:absolute;
	left:850px;
	top:35px;
	}
	.line_1{
	position:absolute;
	left:1050px;
	top:85px;
    height:50px;
    width:50px;
	}
	.img_3 {
	position:absolute;
	left:1100px;
	top:10px;
	height:200px;
	width:130px;
	}
	.line_2{
	position:absolute;
	left:1230px;
	top:85px;
	height:50px;
	width:50px;
	}
	.img_4 {
	position:absolute;
	left:1300px;
	top:10px;
	height:200px;
	width:130px;
	}
	.line_3{
	position:absolute;
	left:550px;
	top:165px;
	height:90px;
	width:600px;
	}
	.page_middle {
	position:absolute;
	left:20px;
	top:230px
	}
	.img_5 {
	position:absolute;
	left:500px;
	top:30px;
	height:160px;
	width:130px; 
	}
	.line_4{
	position:absolute;
	left:40px;
	top:180px;
	height:70px;
	width:550px;
	}
	.table_4 {
	position:absolute;
	left:660px;
	top:62px
	}

	.img_6 {
	position:absolute;
	left:1030px;
	top:30px;
	height:160px;
	width:130px; 
	}
	.line_5{
	position:absolute;
	left:970px;
	top:190px;
	height:55px;
	width:250px;
	}
	.table_5 {
	position:absolute;
	left:1260px;
	top:62px
	}
	.page_lower {
	position:absolute;
	left:0px;
	top:280px
	}
	.img_7 {
	position:absolute;
	left:50px;
	top:200px;
	height:70px;
	width:70px;
	}
	.img_8 {
	position:absolute;
	left:150px;
	top:200px;
	height:70px;
	width:70px;
	}
	.img_9 {
	position:absolute;
	left:250px;
	top:200px;
	height:70px;
	width:70px;
	}
	.img_10 {
	position:absolute;
	left:350px;
	top:200px;
	height:70px;
	width:70px;
	}
	.img_11 {
	position:absolute;
	left:450px;
	top:200px;
	height:70px;
	width:70px;
	}
	.img_12 {
	position:absolute;
	left:550px;
	top:200px;	
	height:70px;
	width:70px;
	}
	.img_13 {
	position:absolute;
	left:1000px;
	top:200px;
	height:70px;
	width:70px;
	}
	.img_14 {
	position:absolute;
	left:1090px;
	top:200px;
	height:70px;
	width:70px;
	}
	.img_15 {
	position:absolute;
	left:1180px;
	top:200px;
	height:70px;
	width:70px;
	}
	.table_6 {
	position:absolute;
	left:2px;
	top:300px
	}
	.table_7 {
	position:absolute;
	left:900px;
	top:300px
	}
</style>
