<template>
  <div id="chart-wrapper">
    <v-charts :options="barGraph" ></v-charts>
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import PlacementRecordStore from '../Store/PlacementRecordStore';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';

export default {
  name:'BarGraph',
  components:{
    'v-charts':ECharts,
  },
  data:function(){
    return {
      barGraph:{},
      xAxisData:['2011','2012','2013','2014'],
      yAxisData:[1,3,2,3],
      option : {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
}

    }
  },
  props:{
    companyId:Number
  },
  created:function(){
    //console.log('Bar Graph: '+this.companyId);
    this.xAxisData = PlacementRecordStore.methods.getYearsVisited(this.companyId);
    this.yAxisData = PlacementRecordStore.methods.getStudentsPlaced(this.companyId);
    this.barGraph=
    {
      tooltip:{
        show:true,
        trigger:'axis',
        axisPointer:{
          type:'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
      xAxis:{
        data:this.xAxisData,
        axisTick:{
          alignWithLabel:true
        }
      },
      yAxis:{
        type:'value',
        
      },
      series:[
          {
            name:'studentsPlaced',
            type:'bar',
            data:this.yAxisData,
            barWidth:'60%'
          }
      ],
      title:{
        text:"Placement Trend"
      },
      color:['#3398DB']
    };
  }
}
</script>

<style scoped>
#chart-wrapper{
  width:100%;
  padding:5px;
  background-color:'yellow';
}
.echarts{
  width:100%;
  height:300px;
}
</style>