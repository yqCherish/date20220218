<template>


<!--  <div class="hello">-->
<!--    <div class="header">-->
<!--      <a href="http://linkaiblog.top:8080/jacklin/#/happybirthday">-->
<!--        {{ msg }}-->
<!--      </a>-->
<!--    </div>-->
<!--    <img class="messi" src="../assets/images/messi2.png" alt="">-->
<!--  </div>-->
<!--  -->

  <div class="content">
    <div >
      <a href="#" target="_blank">
        JackLin 作品
      </a>
<!--      <a href="http://linkaiblog.top:8080/jacklin/#/happybirthday" target="_blank">-->
<!--        JackLin 作品-->
<!--      </a>-->
    </div>
    <img class="messi" src="../assets/images/messi2.png" alt="">
  </div>


</template>

<script>
  export default {
    data () {
      return {
        msg: 'JackLin 作品',
        word: {
          w1: "666",
          w2: "777"
        },
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .content {
    height: 100%;
    width: 100%;
    background: #d6d7dc;
    text-align: center;
    padding-top: 30px;
    font-size: 32px;
    font-weight: 800;

  }

  a {
    text-decoration: none;
  }

  .content img {
    width: 100%;
    height: 100%;
  }


</style>
