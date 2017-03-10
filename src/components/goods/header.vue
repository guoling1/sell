<template>
  <div class="header" id="header">
    <div class="nav">
      <div class="nav_left">
        <a href="http://www.careerchina.com/index" target="_blank" class="nav_CC"></a><i class="vertical"></i><a
        href="http://www.100tal.com/" target="_blank" class="nav_TAL"></a>
      </div>
      <div class="nav_right">
        <ul class="navR_Font clear">
          <li><a href="#header">首页</a></li>
          <li><a href="#server">服务</a></li>
          <li><a href="#technology_Body">技术支持</a></li>
          <li><a href="#team">团队</a></li>
          <li><a href="#Myclient">客户</a></li>
          <li><a href="#about">关于我们</a></li>
        </ul>
      </div>
    </div>
    <div class="nav_Banner">
      <div class="nav_title">
        <p class="nav_title1">中国最好的外教服务</p>
        <p class="nav_title2">致力于打通机构与外教的沟通合作</p>
      </div>
      <div class="button" @click="showForm"><a class="play">客户申请</a></div>
    </div>
    <span class="Bg"></span>
    <div class="form_body" v-show="formShow">
      <div class="Form">
        <span class="close" @click="hideForm"></span>
        <h3 class="form_title">联系我们，即可拥有专业的外教人才服务</h3>
        <form class="From_Post">
          <div class="name">
            <input type="text" id="Name" class="Name" placeholder="您的姓名" v-model="query.Name">
          </div>
          <div class="photo">
            <input type="text" id="Photo" class="Photo" placeholder="联系电话" v-model="query.Phote">
          </div>
          <div class="school">
            <input type="text" id="School" class="School" placeholder="您的学校或企业名称" v-model="query.School">
          </div>
          <div class="server">
            <select class="Server" id="Server" v-model="query.Server">
              <option class="index" value="0">希望获取的服务</option>
              <option value="1">外事人才招聘服务</option>
              <option value="2">外事人才签证，保险，接机等服务</option>
              <option value="3">海外雇主品牌推广</option>
              <option value="4">外事人才专业人才管理</option>
            </select>
          </div>
          <p class="Required" id="Required" v-if="isShow">请完善所有必填信息</p>
          <div class="botton" @click="getForm">提交，获取专业的服务</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  import form from "../form/form.vue"

  export default {
    methods: {
      getForm() {
        if (query.Name !== '' && query.Photo !== '' && query.Server !== '0' && query.School !== '') {
          this.isShow = false
          console.log("成功");
          this.$http.post('/cc/receiveApplicant.action', this.query)
            .then((response) => {
              console.log(response)
            })
            .catch((err) => {

            })
        } else {
          console.log("失败")
          this.isShow = true
        }
      },
      showForm() {
        this.formShow = true
      },
      hideForm() {
        this.formShow = false
      }
    },
    data(){
      return {
        formShow: false,
        isShow: false,//Required显示隐藏
        //给后台的参数
        query: {
          Name: '',
          Phote: '',
          Server: '',
          School: ''
        }
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  .header
  position:relative
  width:

  100
  %
  height:

  560
  px
  background:#2773c1
  .Bg
  position: absolute
  bottom:

  0
  left:

  50
  %
  z-index:

  -
  1
  margin-left:

  -
  430
  px
  display: inline-block
  width:

  860
  px
  height:

  340
  px
  background:

  url
  (
  "../../ilb/image/yinying.png"
  )
  no-repeat
  .nav
  margin:

  0
  auto
  width:

  1200
  px
  height:

  60
  px
  .nav_left
  float:left
  width:

  352
  px
  height:

  60
  px
  .nav_CC
  display:inline-block
  margin-top:

  13
  px
  margin-left:

  40
  px
  width:

  160
  px
  height:

  30
  px
  background:

  url
  (
  "../../ilb/image/icon.png"
  )
  no-repeat
  background-position:

  -
  80
  px

  -
  160
  px
  .vertical
  display:inline-block
  margin-left:

  18
  px
  width:

  2
  px
  height:

  30
  px
  background:#fff
  .nav_TAL
  display:inline-block
  width:

  114
  px
  height:

  30
  px
  margin-left:

  18
  px
  background:

  url
  (
  "../../ilb/image/icon.png"
  )
  no-repeat
  background-position:

  -
  247
  px

  -
  156
  px
  .nav_right
  display:inline-block
  float:right
  height:

  60
  px
  line-height:

  60
  px
  .navR_Font li
  float:left
  margin-right:

  50
  px
  font-size:

  16
  px
  a
  color:#fff
  .nav_Banner
  margin:

  192
  px auto
  width:

  450
  px
  .nav_title
  .nav_title1
  text-align:center
  font-size:

  48
  px
  font-weight:

  600
  color:#fff
  .nav_title2
  margin-top:

  16
  px
  font-size:

  30
  px
  color:#dcdada
  .button
  margin:

  45
  px auto
  width:

  130
  px
  height:

  36
  px
  background:#fff
  border-radius:

  4
  px
  cursor: pointer
  box-shadow:

  0
  25
  px

  70
  px

  rgba
  (
  0
  ,
  0
  ,
  0
  ,
  0.3
  )
  .play
  display:inline-block
  color:#2ba0f0
  text-align:center
  width:

  100
  %
  height:

  36
  px
  line-height:

  36
  px
  .form_body
  position:fixed
  top:

  0
  left:

  0
  z-index:

  100
  width:

  100
  %
  height:

  100
  %
  background:rgba(000,000,000,.5)
  .Form
  position:fixed
  top:

  50
  %
  left:

  50
  %
  margin-left:

  -
  300
  px
  margin-top:

  -
  250
  px
  z-index:

  500
  width:

  600
  px
  height:

  500
  px
  background:#fff
  .close
  display:inline-block
  width:

  22
  px
  height:

  22
  px
  position: absolute
  right:

  20
  px
  top:

  19
  px
  background:

  url
  (
  "../../ilb/image/xx.png"
  )
  no-repeat
  .form_title
  color:#3183e7
  font-size:

  18
  px
  text-align:center
  margin:

  61
  px

  0
  31
  px

  0
  .From_Post
  width:

  281
  px
  height:

  334
  px
  margin:

  0
  auto
  .server
  width:

  283
  px
  height:

  41
  px
  .Server
  color:#b4b3b3
  width:

  283
  px
  option
  color:#000
  .Name, .Photo, .Server, .School, .botton
  width:

  263
  px
  padding-left:

  18
  px
  height:

  41
  px
  border:

  1
  px solid #e4e1e1
  margin-bottom:

  14
  px
  border-radius:

  5
  px
  .botton
  background:#3183e7
  font-size:

  16
  px
  cursor:pointer
  color:#fff
  text-align:center
  height:

  41
  px
  line-height:

  41
  px
  margin-top:

  36
  px
  .Required
  display:none
  font-size:

  14
  px
  color:red
  margin-top:

  10
  px
  text-align:center
</style>
