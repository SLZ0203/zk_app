<!--合作公司表单页面-->
<template>
  <div class="form_wrap">
    <div class="title">
      ——
      <span>合作单位</span>
      ——
    </div>
    <div class="scroll_wrap">
      <ul class="inner">
        <li class="from_item">
          <span>公司名称：</span>
          <input type="text" placeholder="请输入公司名称（必填）" v-model="name">
        </li>
        <li class="from_item right" @click="$router.push('/region')">
          <span>省份/地区：</span>
          <input type="text" placeholder="请选择（必选）" v-model="companyRegion.name" readonly="readonly">
        </li>
        <li class="from_item">
          <span>职位：</span>
          <input type="text" placeholder="请输入您的职位（必填）" v-model="position">
        </li>
        <li class="from_item">
          <span>联系人：</span>
          <input type="text" placeholder="请输入您的姓名（必填）" v-model="linkman">
        </li>
        <li class="from_item">
          <span>手机号：</span>
          <input type="tel" placeholder="请输入您的手机号（必填）" v-model="telphone" maxlength="11"
                 oninput="value=value.replace(/[^\d]/g,'')">
        </li>
        <li class="from_item right" @click="$router.push('/servertype')">
          <span>服务类别：</span>
          <input type="text" placeholder="请选择（必选）" v-model="companyServerType.title" readonly="readonly">
        </li>
        <li class="text_wrap">
          <div class="name">备注信息：</div>
          <textarea cols="30" rows="10" maxlength="120" v-model="note"></textarea>
        </li>
        <li class="btn" :class="{submit: sub()}" @click="submit">提交
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {Toast} from 'mint-ui';
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        name: '', //公司名称
        position: '', //职位
        linkman: '', //联系人
        telphone: '', //手机号
        note: ''//备注信息
      }
    },
    mounted() {
      if (!this.scroll) {
        this.scroll = new BScroll('.scroll_wrap', {
          scrollY: true,
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    },
    methods: {
      sub() {
        if (this.name && this.companyRegion.name && this.position && this.linkman
          && this.isRightPhone && this.companyServerType.title) {
          return true
        } else {
          return false
        }
      },
      submit() {
        if (!this.name) {
          return Toast('请输入公司名称')
        } else if (!this.companyRegion.name) {
          return Toast('请选择您的省市')
        } else if (!this.position) {
          return Toast('请输入您的职位')
        } else if (!this.linkman) {
          return Toast('请输入您的姓名')
        } else if (!this.telphone) {
          return Toast('请输入您的手机号')
        } else if (!this.isRightPhone) {
          return Toast('请输入正确的手机号')
        } else if (!this.companyServerType.title) {
          return Toast('请选择服务类别')
        } else {
          this.$axios.post('http://www.sinomis.com/api/cooperation_unit', {
            corporate_name: this.name,
            province_id: this.companyRegion.proId,
            city: this.companyRegion.city,
            servicetype_id: this.companyServerType.id,
            position: this.position,
            contacts: this.linkman,
            phone: this.telphone,
            remarks: this.note
          }).then(res => {
            const result = res.data;
            console.log(result);
            Toast(result.msg);
            setTimeout(() => {
              this.$router.go(0)
            }, 3000);
          })
        }
      }
    },
    computed: {
      ...mapState(['companyRegion', 'companyServerType']),
      isRightPhone() {
        return /^1\d{10}$/.test(this.telphone)
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .form_wrap
    width: 100%;
    height: 100%;
    background: url("../../../static/images/bg.png") no-repeat;
    background-size: 100% 100%;
    padding: 0 0.32rem 0.42rem;
    box-sizing: border-box;
    .title
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      font-family: PingFangSC-Regular;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      span
        margin: 0 0.3rem;

    .scroll_wrap
      width 100%
      height 11rem
      overflow hidden
      .inner
        width: 100%;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.16rem;
        padding: 0.4rem;
        padding-bottom 2rem
        box-sizing: border-box;
        .from_item
          width: 100%;
          height: 1rem;
          border-bottom: 0.01rem solid #e5e5e5;
          display flex
          align-items center
          span
            display block
            width 30%
            font-size: 0.32rem;
            font-family: PingFangSC-Regular;
            color: rgba(53, 53, 53, 1);
          input
            height 90%
            outline: none;
            font-size: 0.32rem;
            font-family: PingFangSC-Regular;
            color: rgba(53, 53, 53, 1);
            &::-webkit-input-placeholder
              font-size: 0.28rem;
              font-family: PingFangSC-Light;
              font-weight: 300;
              color: rgba(178, 178, 178, 1);
        .right
          background-image: url("../../../static/images/ic-right.png");
          background-repeat: no-repeat;
          background-size: 0.14rem 0.24rem;
          background-position: 100%;
        .text_wrap
          width: 100%;
          font-size: 0.32rem;
          .name
            width: 100%;
            height: 0.99rem;
            line-height: 0.99rem;
            font-size: 0.32rem;
            font-family: PingFangSC-Regular;
            color: rgba(53, 53, 53, 1);
          textarea
            width: 100%;
            height: 1.96rem;
            background: rgba(246, 246, 246, 1);
            border: none;
            outline: none;
            padding: 0.2rem;
            box-sizing: border-box;
            font-family: PingFangSC-Light;
            font-size: 0.28rem;
        .btn
          width: 6.01rem;
          height: 0.88rem;
          background: rgba(75, 100, 214, 1);
          opacity: 0.34;
          border-radius: 0.1rem;
          text-align: center;
          line-height: 0.88rem;
          font-size: 0.36rem;
          font-family: PingFangSC-Regular;
          color: rgba(255, 255, 255, 1);
          margin-top: 0.34rem;
          &.submit
            opacity: 1;
</style>
