<template>
  <div class="shopCart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"></span>
          </div>
          <div class="price"></div>
          <div class="desc"></div>
        </div>
      </div>
      <div class="content-tight"></div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
  }
</script>
<style rel="stylesheet/less" lang="less">
  .shopCart{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 48px;
    background: #d9dde1;
    .content{

    }
  }
</style>
