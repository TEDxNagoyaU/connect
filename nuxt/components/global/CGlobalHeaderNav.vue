<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">トップに戻る</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chooseLink: '/chooseSeat/',
      watchLink: '/watch/'
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  color: #fff;
  margin: 0 15px;
  ul {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    li {
      list-style-type: none;
      margin-left: 15px;
      a {
        color: $white;
        font-weight: bold;
      }
    }
  }
}
</style>
