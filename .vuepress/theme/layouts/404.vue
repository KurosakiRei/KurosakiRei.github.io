<template>
  <section class="theme-container" v-if="!noFoundPageByTencent">
    <article class="content">
      <h1>404: Page Not Found</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">回到首页</router-link>
    </article>
  </section>
</template>

<script>
const msgs = [
  `当前为β世界线收束范围（约1%～约2%）：未来爆发第三次世界大战、死亡57亿人的世界。`,
  `当前为α世界线收束范围（约0%～约1%）：未来成为由300人委员会支配的反乌托邦（绝望乡）的世界。`,
  `当前为X世界线“收束”范围（约1%～约1.1%）：不完整的“收束”范围，有许多离散的世界线，称不上收束。`,
]

export default {
  computed: {
    noFoundPageByTencent () {
      return this.$themeConfig.noFoundPageByTencent !== false
    }
  },
  mounted () {
    if (this.noFoundPageByTencent) {
      const dom = document.createElement('script')
      dom.setAttribute('homePageName', '回到首页')
      dom.setAttribute('homePageUrl', '/')
      dom.setAttribute('src', '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js')

      document.body.append(dom)
    }
  },
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus">
.content
  margin 4rem auto 0
  max-width 800px
  padding 0 2rem
.mod_404
  .desc
    .desc_link
      display: inline-block
      // margin: 20px 0
      background: #424242!important
      color: #ffffff
      padding: 6px 20px!important
      text-decoration: none!important
      border-radius: 4px

@media screen and (max-width: 720px)
  .mod_404
    .desc
      margin: 50px 0
    .wrapper
      margin 0!important
      padding-top 20px
</style>

