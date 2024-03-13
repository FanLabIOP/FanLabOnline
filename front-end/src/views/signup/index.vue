<template>
  <div class="signup-container">
    <el-form ref="signupForm" :model="signupForm" :rules="signupRules" class="signup-form" label-position="left">

      <div class="title-container">
        <h3 class="title">Signup</h3>
      </div>

      <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
        <el-input
          ref="email"
          v-model="signupForm.email"
          placeholder="edu/ac E-mail"
          type="email"
          tabindex="1"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          ref="password"
          v-model="signupForm.password"
          type="password"
          placeholder="password"
          tabindex="2"
        />
      </el-form-item>

      <el-form-item prop="checkPassword">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          ref="checkPassword"
          v-model="signupForm.checkPassword"
          type="password"
          placeholder="repeat password"
          tabindex="3"
        />
      </el-form-item>

      <el-form-item prop="code">
        <span class="svg-container">
          <svg-icon icon-class="code" />
        </span>
        <el-input
          ref="code"
          v-model="signupForm.code"
          placeholder="code"
          type="text"
          tabindex="4"
          style="width:50%"
        />
        <el-button :loading="codeLoading" type="primary" style="float:right;margin-right:6px;margin-top:6px;width:30%;display:flex; justify-content:center;align-items:center" :disabled="isDisabled" @click.native.prevent="handleCode">{{ codeText }}</el-button>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleSignup">Signup</el-button>

      <div class="tips">
        <router-link to="/login">Already have an account? Click here to Login!</router-link>
      </div>

    </el-form>
  </div>
</template>

<script>
import { sendCode, signup } from '@/api/user'
import { Message } from 'element-ui'

export default {
  name: 'Signup',
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value !== this.signupForm.password) {
        callback(new Error('passwords are inconsistent'))
      } else {
        callback()
      }
    }
    const checkPass = (rule, value, callback) => {
      if (/^([A-Za-z]+|[0-9]+)$/.test(value) || !/^[A-Za-z0-9]{8,20}$/.test(value)) {
        callback(new Error('The password must contain both letters and numbers, and be 8-20 characters'))
      } else {
        callback()
      }
    }
    return {
      signupForm: {
        email: '',
        password: '',
        checkPassword: '',
        code: ''
      },
      signupRules: {
        email: [{
          required: true,
          type: 'email',
          message: 'Please enter the edu/ac E-mail',
          trigger: 'blur'
        }, {
          pattern: /^[\w-]{3,15}@([a-z0-9]+\.)+(edu|ac)\.[a-z]+$/,
          message: 'Please enter the edu/ac E-mail',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: 'Please enter the password',
          trigger: 'blur'
        }, {
          validator: checkPass,
          trigger: 'blur'
        }],
        checkPassword: [{
          required: true,
          message: 'Please repeat the password',
          trigger: 'blur'
        }, {
          validator: checkPassword,
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: 'Please enter the code',
          trigger: 'blur'
        }, {
          pattern: /^\d{6}$/,
          message: 'The code is 6 digits',
          trigger: 'blur'
        }]
      },
      loading: false,
      codeLoading: false,
      isDisabled: false,
      codeText: 'Send code'
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleSignup() {
      this.$refs.signupForm.validate(valid => {
        if (valid) {
          this.loading = true
          signup(this.signupForm).then(() => {
            Message({
              message: 'Success! going to Login',
              type: 'success',
              duration: 2 * 1000
            })
            this.loading = false
            setTimeout(() => {
              this.$router.push({ path: '/login' })
            }, 2000)
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleCode() {
      this.$refs.signupForm.validateField('email', errorMsg => {
        if (!errorMsg) {
          this.codeLoading = true
          sendCode({ email: this.signupForm.email }).then(() => {
            let count = 60
            this.signupForm.code = ''
            this.codeLoading = false
            this.isDisabled = true
            Message({
              message: 'Send code success',
              type: 'success',
              duration: 2 * 1000
            })
            const timerid = setInterval(() => {
              this.codeText = `Resend in ${count--}s`
              if (count <= 0) {
                clearInterval(timerid)
                this.isDisabled = false
                this.codeText = 'Resend code'
              }
            }, 1000)
          }).catch(() => {
            this.codeLoading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .signup-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.signup-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.signup-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .signup-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #79bbff;
    margin-bottom: 10px;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
