// 电影数据生成模板
covid = Mock.mock({
    update: '@now',
    "array": [{
        city_name: '广东省',
        value_xc: '@integer(0, 10)',    // 现存
        last_xc: '@integer(0, 3)',      // 较昨日-现存
        value_ys: '@integer(0, 20)',    // 疑似
        last_ys: '@integer(0, 3)',      // 较昨日-疑似
        value_jw: '@integer(0, 30)',    // 境外
        last_jw: '@integer(0, 3)',      // 较昨日-境外
        value_qz: '@integer(0, 60)',    // 确诊
        last_qz: '@integer(0, 3)',      // 较昨日-确诊
        value_zy: '@integer(0, 20)',    // 治愈
        last_zy: '@integer(0, 3)',      // 较昨日-治愈
        value_sw: '@integer(0, 5)',     // 死亡
        last_sw: '@integer(0, 3)',      // 较昨日-死亡
    },{
        city_name: '广州市',
        value_xz: '@integer(0, 10)',
        value_xc: '@integer(0, 20)',
        value_lj: '@integer(0, 150)'
    },{
        city_name: '佛山市',
        value_xz: '@integer(0, 10)',
        value_xc: '@integer(0, 20)',
        value_lj: '@integer(0, 150)'
    },{
        city_name: '肇庆市',
        value_xz: '@integer(0, 10)',
        value_xc: '@integer(0, 20)',
        value_lj: '@integer(0, 150)'
    }
    ],
});

// 设置ajax响应延迟
Mock.setup({
    timeout: '500-1000'
});

// 电影信息"路由"配置
Mock.mock('/res/covidDB', 'get', getMock);
// Mock.mock('/resources/update', 'get', updateMovies);

function getMock() {
    let res = {}
    res.datas = covid.array
    res.update = covid.update
    res.code = 200
    return res;
}
