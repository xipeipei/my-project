<template>
  <div class='vWrap'>
    <!-- <h3 class='tit'>{{vData.tit}}</h3>
    <p class='slogan'>{{vData.slogan}}</p>
    <p class='line'></p>
    <ul class='list'>
      <li v-for='i in vData.list' :key='i' v-html='i'></li>
    </ul>
    <p class='line'></p>
    <p class='introTxt'>{{vData.intro}}</p>
    <p class='knowMore'>了解更多</p>
    <p class='openingBTn'>立即开通</p> -->
    <ul class='versionSelection clearfix'>
      <li v-for='i in versionData' :key='i'>
        <p>{{i.cMc}}</p>
        <p>{{i.cDesp}}</p>
      </li>
    </ul>
    <p class='vLabel'>开通时长</p>
    <div class='versionDate'>
      <p>1年</p>
      <p>2019年7月24日到期</p>
    </div>
    <p class='vLabel'>支付方式</p>
    <div class='payment'>
      <p>微信付款</p>
      <p>支付宝付款</p>
    </div> 
    <div class='vBottom'>
      <p class='bLeft'><span>应付金额</span><span>¥599</span></p>
      <p class='bRight'>去支付</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      from: 'crm',
      vData: {},
      versionData: [
        {
          'cId': '02180702',
          'cProductId': 'hyyd.lawyer',
          'cMc': '个人高级版',
          'cDesp': '感受高效的力量，解放律师生产力',
          'cUrl': null,
          'nType': 1,
          'nState': 1,
          'product': {
            'cId': 'hyyd.lawyer',
            'cName': '律师平台',
            'cDescript': '律师平台',
            'nType': 1,
            'cUrl': 'http://172.16.124.110:7089/lawyer/normal/passport'
          },
          'cPath': null,
          'specList': [
            {
              'cId': '0218070201',
              'cFeatureId': '02180702',
              'cMc': '599/人/年',
              'nUnit': 1,
              'nSpec': 365,
              'nPrice': 0,
              'sPrice': '599.00',
              'nDefault': 0
            }
          ]
        },
        {
          'cId': '02180703',
          'cProductId': 'hyyd.lawyer',
          'cMc': '团队版',
          'cDesp': '专为团队打造，超越高级版的存在',
          'cUrl': null,
          'nType': 1,
          'nState': 1,
          'product': {
            'cId': 'hyyd.lawyer',
            'cName': '律师平台',
            'cDescript': '律师平台',
            'nType': 1,
            'cUrl': 'http://172.16.124.110:7089/lawyer/normal/passport'
          },
          'cPath': null,
          'specList': []
        }
      ],
      team: {
        tit: '高级功能-团队版',
        slogan: '专为小规模律所和团队定制，打造高效律师工作协同',
        list: [
          '<span>团队成员管理：</span>团队内成员权限支持自定义配置管理',
          '<span>团队空间：</span>团队内共享团队空间，案件／项目统一存放管理',
          '<span>组员进度管理：</span>团队成员分组管理，组员工作进度一目了然',
          '<span>元典+坚果云：</span>打通案件管理和文档管理，开启文件高效协作',
          '<span>MORE：</span>更多团队管理功能，敬请期待'
        ],
        intro: '开通律师平台团队版，请点击下方按钮联系您的专属客服，可免费试用。律师平台团队版包含高级版所有功能，更集成文档协作，团队空间，团队管理等高级功能。'
      },
      crm: {
        tit: '高级功能-客户管理',
        slogan: '专为律师打造的客户管理工具，帮助你系统搭建客户管理体系',
        list: [
          '<span>信息记录：：</span>统一管理客户信息，随时可查不怕忘',
          '<span>机会跟进：</span>客户机会的跟进过程清晰记录，一目了然',
          '<span>关联案件：</span>以客户维度归类案件项目，便于统一管理、查看',
          '<span>统计分析：</span>打通案件管理和文档管理，开启文件高效协作'
        ],
        intro: '开通律师平台高级版或团队版，即可畅享客户管理，案情可视化，文书助手等15种高级功能'
      },
      ksh: {
        tit: '高级功能-案情可视化',
        slogan: '专为律师打造的案件分析一体化解决方案',
        list: [
          '层次化梳理案件分析思路',
          '形成案件分析与法律法规，案例，证据的双向关联',
          '一键生成案情时间线，证据清单，案件分析报告'
        ],
        intro: '开通律师平台高级版或团队版，即可畅享客户管理，案情可视化，文书助手等15种高级功能'
      }
    }
  },
  mounted: function() {
    var that = this
    if (that.from === 'team') {
      that.vData = that.team
    } else if (that.from === 'crm') {
      that.vData = that.crm
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.vWrap{
  width:640px;
  height:536px;
  background:rgba(255,255,255,1);
  box-shadow:0px 6px 12px 0px rgba(9,81,140,0.5);
  border-radius:8px;
  position: relative;
}
.vWrap .tit{
  width: 573px;
  height: 90px;
  margin:0 auto;
  background:rosybrown;
  font-size: 24px;
  color: #444A55;
  text-align: center;
  line-height: 90px;
}
.vWrap .slogan{
  color: #444A55;
  font-size: 18px;
  text-align: center;
  margin-bottom:23px;
}
.vWrap .line{
  width:561px;
  height:1px;
  background:rgba(220,223,234,1);
  margin: 0 auto;
}
.vWrap .list{
  width: 561px;
  height: auto;
  margin:0 auto;
  padding:32px 0 12px 0;
}
.vWrap .list li{
  list-style: none;
  margin-bottom:20px;
  position: relative;
  padding-left:20px;
}
.vWrap .list li::before{
  content:'';
  position: absolute;
  left: 0;
  top: 4px;
  width:8px;
  height:8px;
  background:rgba(56,140,229,1);
  border-radius: 100%;
}
.vWrap .introTxt{
  width: 561px;
  height: auto;
  margin:0 auto;
  color: #444A55;
  padding-top: 12px;
}
.vWrap .knowMore{
  color: #388CE5;
  padding-left: 40px;
}
.versionSelection{
  margin-bottom:20px;
}
.versionSelection li{
  width:260px;
  height:90px;
  background:rgba(240,248,255,1);
  border-radius:4px;
  border:1px solid rgba(56,140,229,1);
  padding: 20px 0 18px 0;
  float: left;
  list-style: none;
  margin-right: 32px;
}
.versionSelection li:nth-child(2n){
  margin-right: 0;
}
.versionSelection li p:first-child{
  text-align: center;
  color: #388CE5;
}
.versionSelection li p:nth-child(2){
  color: #8290A8;
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
}
.vLabel{
  color: #5E697C;
  margin-bottom: 5px;
}
.versionDate{
  width:260px;
  height:90px;
  background:rgba(240,248,255,1);
  border-radius:4px;
  border:1px solid rgba(56,140,229,1);
  padding: 20px 0 18px 0;
  margin-bottom: 15px;
}
.versionDate p:first-child{
  text-align: center;
  color: #388CE5;
}
.versionDate p:nth-child(2){
  color: #8290A8;
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
}
.payment p{
  width: 260px;
  height: 45px;
  background: white;
  border-radius: 4px;
  border: 1px solid #b6becf;
  color: #8290A8;
  line-height: 45px;
  text-align: center;
  float: left;
  margin-right: 35px;
  cursor: pointer;
}
.vBottom{
     width: 100%;
    height: 74px;
    position: absolute;
    bottom: 0;
    padding: 20px 20px 0 20px;
    border-top: 1px solid #DCDFEA;
}
.vBottom .bLeft{
  float: left;
}
.vBottom .bLeft span:nth-child(1){
  color: #5E697C;
  padding-right: 10px;
  vertical-align: 6px;
}
.vBottom .bLeft span:nth-child(2){
  color: #F04134;
  font-size: 32px;
}
.vBottom .bRight{
  float: right;
    width: 120px;
    height: 34px;
    background: rgba(56,140,229,1);
    border-radius: 3px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    cursor: pointer;
}
</style>