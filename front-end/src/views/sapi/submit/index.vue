<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="uploadRules" label-width="165px" style="width:660px;">
      <el-form-item label="title" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="Upload .mtz file" prop="mtz">
        <el-upload
          ref="mtz"
          action
          :http-request="uploadTheFile"
          accept=".mtz"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :on-change="changeMtz"
          :on-remove="removeMtz"
          :on-error="onError"
          :multiple="false"
          :limit="1"
          :on-exceed="handleExceed"
          :on-success="mtzSuccess"
        >
          <el-button slot="trigger" size="small" type="primary">Select file</el-button>
          <div slot="tip" class="el-upload__tip">Only .mtz file can be upload，less than 20MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="DF" prop="DF">
        <el-select v-model="form.DF" placeholder="Please select DF">
          <el-option v-for="item in DFoptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="SIGDF" prop="SIGDF">
        <el-select v-model="form.SIGDF" placeholder="Please select SIGDF">
          <el-option v-for="item in SIGDFoptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { uploadForm, uploadFile } from '@/api/sapi'

export default {
  name: 'Submit',
  data() {
    const checkMtz = (rule, value, callback) => {
      if (this.$refs.mtz.uploadFiles.length === 0) {
        callback(new Error('Please select .mtz file'))
      } else {
        callback()
      }
    }
    return {
      form: {
        title: '',
        DF: '',
        SIGDF: '',
        mtz: ''
      },
      DFoptions: [],
      SIGDFoptions: [],
      uploadRules: {
        title: [{
          required: true,
          message: 'Please enter the title',
          trigger: 'blur'
        }, {
          min: 3,
          max: 12,
          message: 'The length is 3 to 12 characters',
          trigger: 'blur'
        }],
        mtz: [{
          required: true,
          validator: checkMtz
        }],
        DF: [{
          required: true,
          message: 'Please select DF',
          trigger: 'change'
        }],
        SIGDF: [{
          required: true,
          message: 'Please select SIGDF',
          trigger: 'change'
        }]
      },
      loading: false
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.form.mtz = this.$refs.mtz.uploadFiles[0].name
          uploadForm(this.form).then(() => {
            Message({
              message: 'Submit success!',
              type: 'success',
              duration: 2 * 1000
            })
            this.loading = false
            setTimeout(() => {
              this.$router.push({ path: '/sapi/history' })
            }, 2000)
          }).catch(() => {
            Message({
              message: 'Error submit!',
              type: 'error',
              duration: 2 * 1000
            })
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleExceed(files, fileList) {
      this.$message.warning(`Limit select 1 file，${files.length} files are selected this time，${files.length + fileList.length} files are selected in total`)
    },
    beforeRemove(file) {
      return this.$confirm(`Confirm remove ${file.name}？`)
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 20
      if (!isLt2M) {
        this.$message.error('The upload file must less than 20MB!')
      }
      return isLt2M
    },
    changeMtz() {
      this.$refs.form.validateField('mtz')
    },
    removeMtz() {
      this.$refs.form.validateField('mtz')
      this.Foptions = []
      this.SIGFoptions = []
    },
    mtzSuccess(res) {
      this.DFoptions = res.data.DFoptions
      this.SIGDFoptions = res.data.SIGDFoptions
    },
    uploadTheFile(param) {
      const file = param.file
      const formData = new FormData()
      formData.append('file', file)
      uploadFile(formData, param).then(res => {
        param.onSuccess(res)
      }).catch(err => {
        param.onError(err)
      })
    },
    onError() {
      this.$message.error('Error submit!')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
