<template>
  <div class="home-container">

    <el-row :gutter="20" class="row">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" class="col">
        <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
          <div class="picture">
            <el-image style="height: 100%; width: 107.5px;" :src="fan" :fit="none" />
          </div>
          <div class="description">
            <div class="name">范海福(Fan HaiFu)</div>
            <div class="text" style="width: 200px; margin: 26px 0">Academician of Chinese Academy of Sciences</div>
            <div class="text" style="margin: 26px 0"><a href="http://cryst.iphy.ac.cn" target="_blank">Homepage</a></div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" class="col">
        <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
          <div class="picture">
            <el-image style="height: 100%; width: 123.8px;" :src="dingwei" />
          </div>
          <div class="description">
            <p class="name">丁玮(Ding Wei)</p>
            <p class="text">Senior Engineer</p>
            <div class="text">E-mail: dingwei@iphy.ac.cn</div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" class="col">
        <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
          <div class="picture">
            <el-image style="height: 100%; width: 256.2px;" :src="heying" />
          </div>
          <div class="description">
            <p class="name">Members</p>
            <p class="text">Photo</p>
            <div class="text">2022-03-29</div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" class="col">
        <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
          <div class="picture">
            <el-image style="height: 100%; width: 260px;" :src="map" />
          </div>
          <div class="description">
            <p class="name">Access Statistics</p>
            <div class="text">by RevolverMaps</div>
            <el-link style="font-size: small;" href="https://www.revolvermaps.com/livestats/5mq6pok1rj5/" target="_blank">Details</el-link>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <panel-group />

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'

export default {
  name: 'Home',
  components: {
    PanelGroup
  },
  data() {
    return {
      map: '//rf.revolvermaps.com/h/m/a/1/ff0000/256/0/5mq6pok1rj5.png',
      fan: 'fan.jpg',
      dingwei: 'dingwei.jpeg',
      heying: 'heying.jpg'
    }
  },
  methods: {
    handleClick(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style scoped>
.home-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.col {
  margin-bottom: 32px;
}
.box-card {
  position: relative;
  overflow: hidden;
  height: 146px;
  border-radius: 3px;
}
.picture {
  float: left;
  height: 130px;
  margin: 8px;
  border-radius: 3px;
  overflow: hidden;
}
.description {
  float: left;
  margin: 15px 8px;
}
.name {
  font-size: medium;
  font-weight: bold;
  margin: 0px 0px;
}
.text {
  font-size: small;
  font-weight: normal;
  margin: 33px 0px;
}
a {
    color: #337ab7;
    cursor: pointer;
}
a:hover {
  color: rgb(32, 160, 255);
}

</style>
