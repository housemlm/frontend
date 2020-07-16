<template>
  <div class="app-container">

    <h3>商品介绍</h3>
    <el-form ref="products" :model="products" :rules="rules" label-width="150px">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="products.name" />
      </el-form-item>
      <el-form-item label="商品品牌" prop="brand">
        <el-input v-model="products.brand" placeholder="0.00">
          <template slot="append">品牌</template>
        </el-input>
      </el-form-item>
      <el-upload
        :action="2"
        :limit="5"
        :on-exceed="uploadOverrun"
        :http-request="handleUpload"
        multiple
        with-credentials
        accept=".jpg,.jpeg,.png,.gif"
        list-type="picture-card"
      >
        <i class="el-icon-plus" />
      </el-upload>

    </el-form>
    <div class="op-container">

      <el-button type="primary" @click="handlePublish">上架</el-button>
    </div>
  </div>
</template>

<script>
import { postform, uploadUrl } from '@/api/product'
import { getToken } from '@/utils/auth'
import { Form } from 'element-ui'
import { MessageBox } from 'element-ui'

export default {

  data() {
    return {
      formData: '',
      products: { name: '', brand: '' },
      rules: {
        name: [{ required: true, message: '名称不能为空', trigger: 'blur' }]
      }

    }
  },
  computed: {

  },
  created() {
    this.formData = new FormData()
  },
  methods: {
    handleUpload: function(param) {
      this.formData.append('image', param.file)
      console.log(this.formData.getAll('image'))
    },
    uploadOverrun: function() {
      this.$message({
        type: 'error',
        message: '上传文件个数超出限制!最多上传5张图片!'
      })
    },
    handlePublish: function() {
      this.formData.append('name', this.products.name)
      this.formData.append('brand', this.products.brand)
      const finalgoods = this.formData
      postform(finalgoods).then(response => {
        this.$notify.success({
          title: '成功',
          message: '创建成功'
        })
        this.$router.push({ path: '/goods/list' })
      }).catch(response => {
        MessageBox.alert('业务错误：' + response.data.errmsg, '警告', {
          confirmButtonText: '确定',
          type: 'error'
        })
      })
    }

  }
}

</script>
