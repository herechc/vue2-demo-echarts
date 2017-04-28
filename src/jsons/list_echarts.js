/**
 * Created by Administrator on 2017/4/26.
 */
export default
[
  [
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        splitLine: {show: true},
        axisLabel:{interval:0,rotate:30},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15', '2017-3-16', '2017-3-18']
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '总量(Kb)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}'
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:30
      },
      series: [
        {
          name: '流量',
          type: 'line',
          data: [0,10,20,30],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      legend: {
        left: 'left',
        data: ['速度', '数量'],
        top:"20",
        show:true

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        height:"70%",
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '速度',
          type: 'line',
          data: [0,0.4,0.5],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        },
        {
          name: '数量',
          type: 'line',
          data: [0,0.2,0.3],
          lineStyle:{normal:{color:"#33cc99"}},
          symbol:"circle",
          areaStyle: {normal: {
            color:"#dafcf2"
          }},
          itemStyle:{
            normal:{
              color:"#33cc99"
            }
          },
          symbolSize:12
        }
      ]},
    {
      animation:false,
      title: [{
        text: '(总流量：0.00kb;缓存流量：0.00kb；加速比例：0%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '流量加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 50, name: '流量加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },

        }
      ]
    },
    {
      animation:false,
      title: [{
        text: '(总请求数：0个；加速请求数：0个；加速比例：30%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '请求加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 50, name: '请求加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '新建连接数',
          type: 'line',
          data: [0,0.4,0.5],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]}
  ],
  [
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        splitLine: {show: true},
        axisLabel:{interval:0,rotate:30},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15', '2017-3-16', '2017-3-18']
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '总量(Kb)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}'
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:30
      },
      series: [
        {
          name: '流量',
          type: 'line',
          data: [0,5,2,30,10],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      legend: {
        left: 'left',
        data: ['速度', '数量'],
        top:"20",
        show:true

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        height:"70%",
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '速度',
          type: 'line',
          data: [0,0.4,0.5],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        },
        {
          name: '数量',
          type: 'line',
          data: [0,0.2,0.3],
          lineStyle:{normal:{color:"#33cc99"}},
          symbol:"circle",
          areaStyle: {normal: {
            color:"#dafcf2"
          }},
          itemStyle:{
            normal:{
              color:"#33cc99"
            }
          },
          symbolSize:12
        }
      ]},
    {
      animation:false,
      title: [{
        text: '(总流量：0.00kb;缓存流量：0.00kb；加速比例：0%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '流量加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 20, name: '流量加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },

        }
      ]
    },
    {
      animation:false,
      title: [{
        text: '(总请求数：0个；加速请求数：0个；加速比例：30%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '请求加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 30, name: '请求加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#000"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '新建连接数',
          type: 'line',
          data: [0,0.4,0.2,0.4],
          lineStyle:{normal:{color:"#000"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]}
  ],
  [
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#efefef"}},
        splitLine: {show: true},
        axisLabel:{interval:0,rotate:30},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15', '2017-3-16', '2017-3-18']
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '总量(Kb)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}'
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:30
      },
      series: [
        {
          name: '流量',
          type: 'line',
          data: [0,5,2,10,10],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      legend: {
        left: 'left',
        data: ['速度', '数量'],
        top:"20",
        show:true

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        height:"70%",
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '速度',
          type: 'line',
          data: [0,0.4,0.5],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        },
        {
          name: '数量',
          type: 'line',
          data: [0,0.2,0.3],
          lineStyle:{normal:{color:"#33cc99"}},
          symbol:"circle",
          areaStyle: {normal: {
            color:"#dafcf2"
          }},
          itemStyle:{
            normal:{
              color:"#33cc99"
            }
          },
          symbolSize:12
        }
      ]},
    {
      animation:false,
      title: [{
        text: '(总流量：0.00kb;缓存流量：0.00kb；加速比例：0%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#000",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '流量加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 80, name: '流量加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },

        }
      ]
    },
    {
      animation:false,
      title: [{
        text: '(总请求数：0个；加速请求数：0个；加速比例：30%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '请求加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 30, name: '请求加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#000"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '新建连接数',
          type: 'line',
          data: [0,0.4,0.2,0.4],
          lineStyle:{normal:{color:"#000"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]}
  ],
  [
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        splitLine: {show: true},
        axisLabel:{interval:0,rotate:30},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15', '2017-3-16', '2017-3-18']
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '总量(Kb)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}'
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:30
      },
      series: [
        {
          name: '流量',
          type: 'line',
          data: [0,5,2,30,10],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      legend: {
        left: 'left',
        data: ['速度', '数量'],
        top:"20",
        show:true

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        height:"70%",
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '速度',
          type: 'line',
          data: [0,0.4,0.5],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        },
        {
          name: '数量',
          type: 'line',
          data: [0,0.2,0.3],
          lineStyle:{normal:{color:"#33cc99"}},
          symbol:"circle",
          areaStyle: {normal: {
            color:"#dafcf2"
          }},
          itemStyle:{
            normal:{
              color:"#33cc99"
            }
          },
          symbolSize:12
        }
      ]},
    {
      animation:false,
      title: [{
        text: '(总流量：0.00kb;缓存流量：0.00kb；加速比例：0%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '流量加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 20, name: '流量加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },

        }
      ]
    },
    {
      animation:false,
      title: [{
        text: '(总请求数：0个；加速请求数：0个；加速比例：30%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '请求加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 30, name: '请求加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#000"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '新建连接数',
          type: 'line',
          data: [0,0.4,0.2,0.4],
          lineStyle:{normal:{color:"#000"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]}
  ],
  [
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        splitLine: {show: true},
        axisLabel:{interval:0,rotate:30},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15', '2017-3-16', '2017-3-18']
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '总量(Kb)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}'
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:30
      },
      series: [
        {
          name: '流量',
          type: 'line',
          data: [0,5,2,30,10],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      legend: {
        left: 'left',
        data: ['速度', '数量'],
        top:"20",
        show:true

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        height:"70%",
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#e5e5e5"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '速度',
          type: 'line',
          data: [0,0.4,0.5],
          lineStyle:{normal:{color:"#cc99cc"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        },
        {
          name: '数量',
          type: 'line',
          data: [0,0.2,0.3],
          lineStyle:{normal:{color:"#33cc99"}},
          symbol:"circle",
          areaStyle: {normal: {
            color:"#dafcf2"
          }},
          itemStyle:{
            normal:{
              color:"#33cc99"
            }
          },
          symbolSize:12
        }
      ]},
    {
      animation:false,
      title: [{
        text: '(总流量：0.00kb;缓存流量：0.00kb；加速比例：0%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '流量加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 90, name: '流量加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },

        }
      ]
    },
    {
      animation:false,
      title: [{
        text: '(总请求数：0个；加速请求数：0个；加速比例：30%)',
        x: 'center',
        y:"bottom",
        textStyle:{
          color:"#323232",
          fontWeight:"normal",
          fontSize:12
        }
      }],
      series: [
        {
          name: '请求加速比例',
          type: 'gauge',
          radius:"90%",
          center: ['50%', '50%'],
          detail: {formatter:'{value}%',textStyle:{
            fontSize:16
          }},
          data: [{value: 30, name: '请求加速比例'}],
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },
        }
      ]
    },
    {
      animation:false,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      textStyle:{color:"#000000"},
      xAxis: {
        type: 'category',
        name: '',
        axisLine:{lineStyle:{color:"#e3e3e3"}},
        axisLabel:{interval:0},
        splitLine: {show: true},
        data: ['2017-3-9', '2017-3-11', '2017-3-12', '2017-3-13', '2017-3-15']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true

      },
      yAxis: {
        name: '数量(个)',
        type: 'value',
        axisLine:{lineStyle:{color:"#000"}},
        axisLabel: {
          formatter: '{value}',
          textStyle:{fontSize:11}
        },
        splitLine:{lineStyle:{type:"dotted"}},
        max:1
      },
      series: [
        {
          name: '新建连接数',
          type: 'line',
          data: [0,0.1,0.2,0.1],
          lineStyle:{normal:{color:"#000"}},
          symbol:"circle",
          itemStyle:{
            normal:{
              color:"#cc99cc"
            }
          },
          symbolSize:12
        }
      ]}
  ]
]
