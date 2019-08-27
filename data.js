//使用mock.sj模拟生成数据
let Mock = require('mockjs')

//随机方法导入
var Random = Mock.Random

//随机方法拓展 
Random.extend({   //自定义方法
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    },
    hobby:function(){
        var hobbys = ['英雄联盟','炉石传说','守望先锋','绝地求生','魔兽争霸2']
        return this.pick(hobbys)
    },
    companySelect:function(){
        let companySelects = ['九阳经销商平台','客服系统','SOA']
        return this.pick(companySelects)
    },
    appCode:function(){
        let appCodes = ['SCRM','ERP','SOA','MDM','SVC','PTS','XSGJ','BASELOCAL','JXC','SOA_DEALER']
        return this.pick(appCodes)
    }
})

module.exports = () => {
    //s使用mock
    let data = Mock.mock({
        'service|90':[
            {
                //属性id是一个自增数,起始值为1,每次增1
                'id':'@guid',  //id
                'serviceCode|+1': 1,  //服务编码
                serviceVersion:'1.0.0',   //服务版本
                serviceName: '@csentence(6)',   //服务名称
                serviceType: '@pick([0,1])',   //服务类型
                serviceProtocol: '@ctitle(5,10)',  //协议
                appCode: '@appCode',   //应用编码
                serviceSystem: '@companySelect',
                invokeMethodUrl: '@url',  //服务方法调用地址
                remark:'@cname',     //备注 
                paramStand: '@pick([0,1])' , //参数标准0标准参数/1非标准参数
                sessionkey: '@guid', //sessionkey网关和服务提供方凭证
                serviceDes: '@ctitle(15)',  //服务描述
                serviceUrl: '@url',  //服务地址
                registrationTime: '@datetime',  //注册时间
                modificationTime: '@datetime'  //修改时间
            }
        ],
        'course_category|6':[
            {
                'id|+1':1,
                'pid':-1,
                cName:'@ctitle(4)'
            }
        ]
    })

    //返回的data会作为json-server的数据
    return data
}