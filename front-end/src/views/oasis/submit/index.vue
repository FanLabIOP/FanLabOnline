<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="uploadRules" label-width="165px" style="width:660px;">
      <el-form-item prop="mode">
        <el-switch
          v-model="form.mode"
          inactive-color="#409eff"
          active-text="PSE mode"
          inactive-text="SAD mode"
          :validate-event="false"
          @change="changeMode()"
        />
      </el-form-item>
      <el-form-item label="Title" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item v-if="!form.mode" label="X-ray wavelength" prop="NWAV">
        <el-input v-model="form.NWAV" />
      </el-form-item>
      <el-form-item v-if="!form.mode" label="Heavy atom type" prop="heavyAtom">
        <el-input v-model="form.heavyAtom" />
      </el-form-item>
      <el-form-item v-if="!form.mode" label="Heavy atom number" prop="heavyAtomNumber">
        <el-input v-model="form.heavyAtomNumber" />
      </el-form-item>
      <el-form-item label="NCS copy" prop="ncsCopy">
        <el-input v-model="form.ncsCopy" />
      </el-form-item>
      <el-form-item label="Solvent content" prop="solventContent">
        <el-input v-model="form.solventContent" />
      </el-form-item>
      <el-form-item label="Upload .pdb file" prop="pdb">
        <el-upload
          ref="pdb"
          action
          :http-request="uploadTheFile"
          accept=".pdb"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :on-change="changePdb"
          :on-remove="changePdb"
          :on-error="onError"
          :multiple="false"
          :limit="1"
          :on-exceed="handleExceed"
        >
          <el-button slot="trigger" size="small" type="primary">Select file</el-button>
          <div slot="tip" class="el-upload__tip">Only .pdb file can be upload，less than 2s0MB</div>
        </el-upload>
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
      <el-form-item label="Upload sequence file" prop="pir">
        <el-upload
          ref="pir"
          action
          :http-request="uploadTheFile"
          accept=".pir, .fasta"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :on-change="changePir"
          :on-remove="changePir"
          :on-error="onError"
          :multiple="false"
          :limit="1"
          :on-exceed="handleExceed"
        >
          <el-button slot="trigger" size="small" type="primary">Select file</el-button>
          <div slot="tip" class="el-upload__tip">Only .pir/.fasta file can be upload，less than 20MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="FP" prop="FP">
        <el-select v-model="form.FP" placeholder="Please select FP">
          <el-option v-for="item in Foptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="SIGFP" prop="SIGFP">
        <el-select v-model="form.SIGFP" placeholder="Please select SIGFP">
          <el-option v-for="item in SIGFoptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="!form.mode" label="FP1" prop="FP1">
        <el-select v-model="form.FP1" placeholder="Please select FP1">
          <el-option v-for="item in Fpmoptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="!form.mode" label="SIGFP1" prop="SIGFP1">
        <el-select v-model="form.SIGFP1" placeholder="Please select SIGFP1">
          <el-option v-for="item in SIGFpmoptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="!form.mode" label="FP2" prop="FP2">
        <el-select v-model="form.FP2" placeholder="Please select FP2">
          <el-option v-for="item in Fpmoptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="!form.mode" label="SIGFP2" prop="SIGFP2">
        <el-select v-model="form.SIGFP2" placeholder="Please select SIGFP2">
          <el-option v-for="item in SIGFpmoptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="Rfree" prop="FREE">
        <el-select v-model="form.FREE" placeholder="Please select Rfree">
          <el-option v-for="item in FREEoptions" :key="item" :label="item" :value="item" />
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
import { uploadForm, uploadFile } from '@/api/oasis'

export default {
  name: 'Submit',
  data() {
    const checkPdb = (_rule, _value, callback) => {
      if (this.$refs.pdb.uploadFiles.length === 0) {
        callback(new Error('Please select .pdb file'))
      } else {
        callback()
      }
    }
    const checkMtz = (_rule, _value, callback) => {
      if (this.$refs.mtz.uploadFiles.length === 0) {
        callback(new Error('Please select .mtz file'))
      } else {
        callback()
      }
    }
    const checkPir = (rule, value, callback) => {
      if (this.$refs.pir.uploadFiles.length === 0) {
        callback(new Error('Please select .pir/.fasta file'))
      } else {
        callback()
      }
    }
    return {
      form: {
        mode: false,
        title: '',
        NWAV: '',
        heavyAtom: '',
        heavyAtomNumber: '',
        ncsCopy: '',
        solventContent: '',
        FP: '',
        SIGFP: '',
        FP1: '',
        SIGFP1: '',
        FP2: '',
        SIGFP2: '',
        FREE: '',
        pdb: '',
        mtz: '',
        pir: ''
      },
      Foptions: [],
      SIGFoptions: [],
      Fpmoptions: [],
      SIGFpmoptions: [],
      FREEoptions: [],
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
        NWAV: [{
          required: true,
          message: 'Please enter the X-ray wavelength',
          trigger: 'blur'
        }, {
          pattern: /^\d{1,2}(\.\d+)?$/,
          message: 'Please enter a valid X-ray wavelength',
          trigger: 'blur'
        }],
        heavyAtom: [{
          required: true,
          message: 'Please enter the heavy atom type',
          trigger: 'change'
        }, {
          pattern: /^[A-Za-z]{1,2}$/,
          message: 'Please enter a valid heavy atom type',
          trigger: 'blur'
        }],
        heavyAtomNumber: [{
          required: true,
          message: 'Please enter the heavy atom number',
          trigger: 'change'
        }, {
          pattern: /^\d{1,2}$/,
          message: 'Please enter a valid heavy atom number',
          trigger: 'blur'
        }],
        ncsCopy: [{
          required: true,
          message: 'Please enter the NCS copy',
          trigger: 'change'
        }, {
          pattern: /^\d{1,2}$/,
          message: 'Please enter a valid NCS copy',
          trigger: 'blur'
        }],
        solventContent: [{
          required: true,
          message: 'Please enter the solvent content',
          trigger: 'blur'
        }, {
          pattern: /^0(\.\d+)?$/,
          message: 'Please enter a valid solvent content',
          trigger: 'blur'
        }],
        pdb: [{
          required: true,
          validator: checkPdb
        }],
        mtz: [{
          required: true,
          validator: checkMtz
        }],
        pir: [{
          required: true,
          validator: checkPir
        }],
        FP: [{
          required: true,
          message: 'Please select FP',
          trigger: 'change'
        }],
        SIGFP: [{
          required: true,
          message: 'Please select SIGFP',
          trigger: 'change'
        }],
        FREE: [{
          required: true,
          message: 'Please select Rfree',
          trigger: 'change'
        }],
        FP1: [{
          required: true,
          message: 'Please select FP1',
          trigger: 'change'
        }],
        SIGFP1: [{
          required: true,
          message: 'Please select SIGFP1',
          trigger: 'change'
        }],
        FP2: [{
          required: true,
          message: 'Please select FP2',
          trigger: 'change'
        }],
        SIGFP2: [{
          required: true,
          message: 'Please select SIGFP2',
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
          this.form.pdb = this.$refs.pdb.uploadFiles[0].name
          this.form.mtz = this.$refs.mtz.uploadFiles[0].name
          this.form.pir = this.$refs.pir.uploadFiles[0].name
          uploadForm(this.form).then(() => {
            Message({
              message: 'Submit success!',
              type: 'success',
              duration: 2 * 1000
            })
            this.loading = false
            setTimeout(() => {
              this.$router.push({ path: '/oasis/history' })
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
    changePdb() {
      this.$refs.form.validateField('pdb')
    },
    changeMtz() {
      this.$refs.form.validateField('mtz')
    },
    removeMtz() {
      this.$refs.form.validateField('mtz')
      this.Foptions = []
      this.SIGFoptions = []
    },
    changePir() {
      this.$refs.form.validateField('pir')
    },
    changeMode() {
      if (this.form.mode) {
        this.$refs.form.resetFields()
        this.form.mode = true
      } else {
        this.$refs.form.resetFields()
      }
    },
    mtzSuccess(res) {
      this.Foptions = res.data.Foptions
      this.SIGFoptions = res.data.SIGFoptions
      this.Fpmoptions = res.data.Fpmoptions
      this.SIGFpmoptions = res.data.SIGFpmoptions
      this.FREEoptions = res.data.FREEoptions
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
