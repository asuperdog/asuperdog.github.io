// 初始化echarts示例mapChart
var mapChart = echarts.init(document.getElementById('map-wrap'));

function switchMap(num) {
    $.get('https://geo.datav.aliyun.com/areas_v2/bound/440000_full.json', function (mapJson) {
        echarts.registerMap('440000', mapJson);

        $('.btn').click(function () {
            $(this).addClass('btn-active').siblings().removeClass('btn-active');
        });
        
        mapChart.clear();
        var option;
        
        switch (num) {
            case 0: {
                // mapChart的配置
                option = {
                    title: {
                        text: '广东省疫情地图 - 新增确诊',
                        subtext: [],
                        sublink: 'http://wsjkw.gd.gov.cn',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [{
                        name: '新增确诊', // series名称
                        type: 'map', // series图表类型
                        map: '440000', // 地图名称
                        roam: true,
                        scaleLimit: { //滚轮缩放的极限控制
                            min: 1,
                            max: 1.5
                        },
                        coordinateSystem: 'geo', // series坐标系类型
                        data: [] // series数据内容
                    }],
                    visualMap: {
                        min: 0,
                        max: 10,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],           // 文本，默认为数值文本 
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue', 'yellow', 'orangered']
                        }
                    }
                };
                mapChart.showLoading();

                $.ajax({
                    url: '/res/covidDB',
                    dataType: 'json',
                    success: function (data) {
                        let CovidMap = [];
                        mapChart.hideLoading();

                        //获取到各个城市的数据
                        for (let i = 0; i < data.datas.length; i++) {
                            let newMap = {
                                name: data.datas[i].city_name,
                                value: data.datas[i].value_xz
                            }
                            CovidMap.push(newMap);
                        }

                        mapChart.setOption({
                            title: {
                                subtext: '更新时间 : ' + data.update
                            },
                            series: {
                                data: CovidMap
                            }
                        });
                    },
                    error: function () {
                        console.log("JSON 数据请求失败！");
                    }
                });
            }
            break;

            case 1: {
                // mapChart的配置
                option = {
                    title: {
                        text: '广东省疫情地图 - 现存确诊',
                        subtext: [],
                        sublink: 'http://wsjkw.gd.gov.cn',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [{
                        name: '现存确诊', // series名称
                        type: 'map', // series图表类型
                        map: '440000', // 地图名称
                        roam: true,
                        scaleLimit: { //滚轮缩放的极限控制
                            min: 1,
                            max: 1.5
                        },
                        coordinateSystem: 'geo', // series坐标系类型
                        data: [] // series数据内容
                    }],
                    visualMap: {
                        min: 0,
                        max: 20,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],           // 文本，默认为数值文本 
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue', 'yellow', 'orangered']
                        }
                    }
                };
                mapChart.showLoading();

                $.ajax({
                    url: '/res/covidDB',
                    dataType: 'json',
                    success: function (data) {
                        let CovidMap = [];
                        mapChart.hideLoading();

                        //获取到各个城市的数据
                        for (let i = 0; i < data.datas.length; i++) {
                            let newMap = {
                                name: data.datas[i].city_name,
                                value: data.datas[i].value_xz
                            }
                            CovidMap.push(newMap);
                        }

                        mapChart.setOption({
                            title: {
                                subtext: '更新时间 : ' + data.update
                            },
                            series: {
                                data: CovidMap
                            }
                        });
                    },
                    error: function () {
                        alert("JSON 数据请求失败！");
                    }
                });
            }
            break;

            case 2: {
                // mapChart的配置
                option = {
                    title: {
                        text: '广东省疫情地图 - 累计确诊',
                        subtext: [],
                        sublink: 'http://wsjkw.gd.gov.cn',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [{
                        name: '累计确诊', // series名称
                        type: 'map', // series图表类型
                        map: '440000', // 地图名称
                        roam: true,
                        scaleLimit: { //滚轮缩放的极限控制
                            min: 1,
                            max: 1.5
                        },
                        coordinateSystem: 'geo', // series坐标系类型
                        data: [] // series数据内容
                    }],
                    visualMap: {
                        min: 0,
                        max: 150,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],           // 文本，默认为数值文本 
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue', 'yellow', 'orangered']
                        }
                    }
                };
                mapChart.showLoading();

                $.ajax({
                    url: '/res/covidDB',
                    dataType: 'json',
                    success: function (data) {
                        let CovidMap = [];
                        mapChart.hideLoading();

                        //获取到各个城市的数据
                        for (let i = 0; i < data.datas.length; i++) {
                            let newMap = {
                                name: data.datas[i].city_name,
                                value: data.datas[i].value_lj
                            }
                            CovidMap.push(newMap);
                        }

                        mapChart.setOption({
                            title: {
                                subtext: '更新时间 : ' + data.update
                            },
                            series: {
                                data: CovidMap
                            }
                        });
                    },
                    error: function () {
                        alert("JSON 数据请求失败！");
                    }
                });
            }
            break;
        }
        mapChart.setOption(option);
    });
}
switchMap(0);

// 载入疫情总数据
var vue = new Vue({
    el: '#yq-data',
    data: {
        city_data:[],
        total_data: []
    },
    methods: {
    },
    created: function () {
        axios.get('/res/covidDB').then(res => {
            this.city_data = res.data.datas;
        });
        axios.get('/res/covidDB').then(res => {
            this.total_data = res.data.datas[0];
        });
    }
});
