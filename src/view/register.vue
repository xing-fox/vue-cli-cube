<style lang="less" scoped>
  #app {
    font-size: 0;
    width: 100%;
    background: #e65138;
    .content {
      width: 100%;
      min-height: 100vh;
      padding: 0 0 .8rem 0;
      background-image: url('../assets/bg.jpg');
      background-size: 100% 100%;
      input {
        -webkit-appearance: none;
        color: #666;
        font-size: .26rem;
        width: 100%;
        height: .96rem;
        padding: 0 0 0 1.45rem;
        background: #fff !important;
        box-sizing: border-box;
        border-radius: .48rem;
        border: none;
      }
      .telephone {
        padding:38vh .32rem 0;
        position: relative;
        &:before {
          content: '';
          width: .96rem;
          height: .96rem;
          position: absolute;
          left: .52rem;
          bottom: 0;
          background-image: url('../assets/icon_phone.png');
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        &:after {
          content: '';
          width: 1px;
          height: .3rem;
          background: #938889;
          position: absolute;
          left: 1.52rem;
          bottom: .33rem;
        }
      }
      .secret {
        padding: 0 .32rem;
        margin: .3rem 0 0 0;
        position: relative;
        &:before {
          content: '';
          width: .96rem;
          height: .96rem;
          position: absolute;
          left: .52rem;
          bottom: 0;
          background-image: url('../assets/icon_secret.png');
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        &:after {
          content: '';
          width: 1px;
          height: .3rem;
          background: #938889;
          position: absolute;
          left: 1.52rem;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
      }
      .imgValidate {
        padding: 0 .32rem;
        margin: .3rem 0 0 0;
        position: relative;
        display: flex;
        input {
          width: 4rem;
          vertical-align: top;
        }
        &:before {
          content: '';
          width: .96rem;
          height: .96rem;
          position: absolute;
          left: .52rem;
          bottom: 0;
          background-image: url('../assets/icon_code.png');
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        &:after {
          content: '';
          width: 1px;
          height: .3rem;
          background: #938889;
          position: absolute;
          left: 1.52rem;
          bottom: .33rem;
        }
        .image {
          flex: 1;
          margin: 0 0 0 .32rem;
          vertical-align: top;
          img {
            width: 100%;
            height: .96rem;
          }
        }
      }
      .codeValidate {
        padding: 0 .32rem;
        margin: .3rem 0 0 0;
        display: flex;
        position: relative;
        &:before {
          content: '';
          width: .96rem;
          height: .96rem;
          position: absolute;
          left: .52rem;
          bottom: 0;
          background-image: url('../assets/icon_email.png');
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        &:after {
          content: '';
          width: 1px;
          height: .3rem;
          background: #938889;
          position: absolute;
          left: 1.52rem;
          bottom: .33rem;
        }
        input {
          width: 4rem;
          vertical-align: top;
        }
        .button {
          flex: 1;
          margin: 0 0 0 .32rem;
          vertical-align: top;
          img {
            width: 100%;
            height: .96rem;
          }
        }
      }
      .tips {
        color: #fff;
        font-size: .22rem;
        margin: .34rem 0;
        padding: 0 .32rem;
        .select {
          display: inline-block;
          vertical-align: middle;
          width: .28rem;
          height: .28rem;
          margin: 0 .1rem 0 0;
          background-image: url('../assets/icon_select.png');
          background-size: 100% 100%;
        }
        span {
          vertical-align: middle;
        }
      }
      .submit {
        margin: 0 .32rem;
        height: .96rem;
        background-image: url('../assets/button_register.png');
        background-size: 100% 100%;
      }
    }
    .layer {
      color: #fff;
      font-size: .22rem;
      width: 100%;
      height: .6rem;
      line-height: .62rem;
      text-align: center;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, .6);
    }
  }
</style>

<template>
  <div id="app">
    <div class="content">
      <div class="telephone">
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="secret">
        <input type="password" placeholder="设置8-20位密码">
      </div>
      <div class="imgValidate">
        <input type="text" placeholder="请输入验证码">
        <div class="image">
          <img src="../assets/img.jpg" >
        </div>
      </div>
      <div class="codeValidate">
        <input type="text" placeholder="请输入短信验证码">
        <div class="button">
          <img src="../assets/get_code.png" >
        </div>
      </div>
      <div class="tips">
        <i class="select"></i><span>阅读并同意《凹凸凹金服平台注册协议》</span>
      </div>
      <div class="submit" />
    </div>
    <div class="layer">
      <span>温女士 138****9999 邀请你成为合伙人</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>
