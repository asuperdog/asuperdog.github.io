// 初始化echarts示例mapChart
var mapChart = echarts.init(document.getElementById('map-wrap'));

$(document).ready(function () {
    $('.btn:eq(0)').addClass('btn-active');
})

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
                    url: 'http://localhost/apidemo.php',
                    dataType: 'json',
                    success: function (data) {
                        var mapData = [];
                        mapChart.hideLoading();

                        //获取到各个城市的数据
                        for (var i = 0; i < data.data.length; i++) {
                            var newJson = {
                                name: data.data[i].division_name,
                                value: data.data[i].qzbl_xz
                            }
                            mapData.push(newJson);
                        }

                        mapChart.setOption({
                            title: {
                                subtext: '更新时间 : ' + data.data[0].data_date
                            },
                            series: {
                                data: mapData
                            }
                        });
                    },
                    error: function () {
                        alert("JSON 数据请求失败！");
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
                    url: 'http://localhost/apidemo.php',
                    dataType: 'json',
                    success: function (data) {
                        var mapData = [];
                        mapChart.hideLoading();

                        //获取到各个城市的数据
                        for (var i = 0; i < data.data.length; i++) {
                            var newJson = {
                                name: data.data[i].division_name,
                                value: data.data[i].qzbl_xy
                            }
                            mapData.push(newJson);
                        }

                        mapChart.setOption({
                            title: {
                                subtext: '更新时间 : ' + data.data[0].data_date
                            },
                            series: {
                                data: mapData
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
                    url: 'http://localhost/apidemo.php',
                    dataType: 'json',
                    success: function (data) {
                        var mapData = [];
                        mapChart.hideLoading();

                        //获取到各个城市的数据
                        for (var i = 0; i < data.data.length; i++) {
                            var newJson = {
                                name: data.data[i].division_name,
                                value: data.data[i].qzbl_lj
                            }
                            mapData.push(newJson);
                        }

                        mapChart.setOption({
                            title: {
                                subtext: '更新时间 : ' + data.data[0].data_date
                            },
                            series: {
                                data: mapData
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
        cityData:[],
        totalData: []
    },
    methods: {
    },
    created: function () {
        axios.get('http://localhost/apidemo.php').then(response => {
            this.cityData = response.data.data;
        });
        axios.get('http://localhost/apidemo1.php').then(response => {
            this.totalData = response.data.data[0];
        });
    }
});
