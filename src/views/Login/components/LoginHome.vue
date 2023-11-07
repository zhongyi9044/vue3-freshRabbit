<script setup>
// import { getLoginAPI } from '@/apis/loginAPI/getLoginAPI';
import { ref } from 'vue'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '@/stores/loginUser'

//表单绑定的内容
const form = ref({
  name: '',
  password: '',
  agree: false,
})
//表单验证规则
const rules = ref({
  name: [
    { required: true, message: '用户名不能为空！', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空!', trigger: 'blur' },
    { min: 6, max: 14, message: '密码长度必须为6-14!', trigger: 'blur' }
  ],
  //自定义的表单验证规则
  agree: [
    {
      validator: (rules, value, callback) => {
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
})
const userInfoStore = useUserInfoStore()
const router = useRouter()
//获取form组件实例
const formRef = ref(null);
const onLogin = () => {
  //validate:表单统一校验
  //valid：表单统一校验结果，true或者false
  formRef.value.validate(async (valid) => {
    if (valid) {
      console.log(form.value)
      await userInfoStore.getUserInfo(form.value)
      ElMessage({ type: 'success', message: ('欢迎,用户' + userInfoStore.userInfo.account) })
      router.replace({ path: '/' })
    }

  })
}

</script>

<template>
  <div class="back">
    <div class="form">
      <div class="title">账户登录</div>
      <el-form ref="formRef" :model="form" :rules="rules" label-width="5rem">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item label="" prop="agree">
          <el-checkbox v-model="form.agree" label="我已同意隐私条款和服务条款" name="type" />
          <span class="read"><a href="/">阅读协议</a></span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.back {
  width: 100%;
  height: 31rem;
  background: url("@/assets/image/login-bg.png") no-repeat center / cover;
  position: relative;

  .form {
    background-color: #fff;
    height: 18.75rem;
    width: 30rem;
    position: absolute;
    padding-right: 3rem;
    top: 4rem;
    right: 15rem;

    .title {
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem 2rem;
      margin-left: 8rem;
    }

    .read {
      margin-left: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
      padding-bottom: 0.2rem;

      &::before {
        content: "•";
        color: $xtxColor;
        margin-right: 0.2rem;
      }

      a {
        color: #666;

        &:hover {
          color: $xtxColor;
        }
      }

    }
  }
}
</style>