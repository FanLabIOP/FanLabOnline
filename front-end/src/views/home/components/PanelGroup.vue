<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleClick('/ipcas')">
        <div class="card-panel-icon-wrapper icon-people">
          <div class="card-panel-icon">IPCAS</div>
          <div><b>I</b>terative <b>P</b>rotein <b>C</b>rystal-structure <b>A</b>utomatic <b>S</b>olution</div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Submit
          </div>
          <count-to :start-val="0" :end-val="ipcasCount" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleClick('/oasis')">
        <div class="card-panel-icon-wrapper icon-message">
          <div class="card-panel-icon">OASIS</div>
          <div><b>O</b>ne-wavelength <b>A</b>nomalous <b>S</b>cattering or <b>S</b>ingle <b>I</b>somorphous <b>S</b>ubstitution</div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Submit
          </div>
          <count-to :start-val="0" :end-val="oasisCount" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleClick('/vec')">
        <div class="card-panel-icon-wrapper icon-money">
          <div class="card-panel-icon">VEC</div>
          <div><b>V</b>isual computing in <b>E</b>lectron <b>C</b>rystallography</div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Download
          </div>
          <count-to :start-val="0" :end-val="vecCount" :duration="3200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleClick('/dims')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <div class="card-panel-icon">DIMS</div>
          <div><b>D</b>irect methods <b>I</b>n <b>M</b>ultidimensional <b>S</b>pace</div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Download
          </div>
          <count-to :start-val="0" :end-val="dimsCount" :duration="3600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleClick('/sapi')">
        <div class="card-panel-icon-wrapper icon-shop">
          <div class="card-panel-icon">SAPI</div>
          <div><b>S</b>tructure <b>A</b>nalysis <b>P</b>rograms with <b>I</b>ntelligent control</div>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Submit
          </div>
          <count-to :start-val="0" :end-val="sapiCount" :duration="3600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import { getCount } from '@/api/home'

export default {
  components: {
    CountTo
  },
  data() {
    return {
      ipcasCount: 0,
      oasisCount: 0,
      vecCount: 0,
      dimsCount: 0,
      sapiCount: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getCount().then(response => {
        this.ipcasCount = response.data.ipcasCount
        this.oasisCount = response.data.oasisCount
        this.vecCount = response.data.vecCount
        this.dimsCount = response.data.dimsCount
        this.sapiCount = response.data.sapiCount
      })
    },
    handleClick(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 30px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #6495ED;
      }

      .icon-message {
        background: #40E0D0;
      }

      .icon-money {
        background: #f1707d;
      }

      .icon-shopping {
        background: #C795FF
      }

      .icon-shop {
        background: #fd803a
      }
    }

    .icon-people {
      color: #6495ED;
    }

    .icon-message {
      color: #40E0D0;
    }

    .icon-money {
      color: #f1707d;
    }

    .icon-shopping {
      color: #C795FF
    }

    .icon-shop {
      color: #fd803a
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 8px;
      padding: 12px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      max-width: 70%;
      height: 92px;
      overflow: hidden;
    }

    .card-panel-icon {
      margin-bottom: 8px;
      font-size: 30px;
      font-weight: bold;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
  }
}
</style>
