<template>
  <div class='infor-container'>
    <!--昵称-->
    <!--认证名称-->
    <!--称号后缀-->
    <!--运营者姓名-->

    <!--联系邮箱-->
    <!--事业单位证明:这个-->
    <!--认证统一信用代码-->
    <!--企业全称-->
    <!--企业分类-->
    <!--运营授权确认函-->
    <!--补充文件-->
    <a-form-model ref='inforForm' class='infor-form' :model='inforForm' :rule='rules'>
      <a-form-model-item
          has-feedback
          label='*昵称'
          prop='fakeName'
          :labelCol='{span: 5}'
          :wrapperCol='{span:3}'
          class='infor-form-item'
      >
        <a-input v-model='inforForm.fakeName' placeholder='请输入您的昵称'/>
      </a-form-model-item>
      <p>
        认证昵称使用规范见 帮助中心-
        <a>官方认证昵称使用规范</a> ，如遇企业昵称被占用，请先走 侵权申诉 取回昵称。如
        <br/>昵称与企业名称不一致（例如使用企业旗下产品或应用软件等），需补充提交证明材料
      </p>

      <a-form-model-item
          has-feedback
          label='*认证称号'
          prop='cerTitle'
          :labelCol='{span: 5}'
          :wrapperCol='{span:6}'
          class='infor-form-item'
      >
        <a-input v-model='inforForm.cerTitle' placeholder='请输入认证称号'/>
      </a-form-model-item>
      <p>
        认证称号官方格式：使用企业全称或简称
        <a>（例如：XX官方账号）</a>，如称号与企业名称不一致，（例如使用企业
        旗下产品或应用软件等）需补充上传关联证明材料。
      </p>

      <a-form-model-item
          has-feedback
          label='*称号后缀'
          prop='cerArea'
          :labelCol='{span: 5}'
          :wrapperCol='{span:6}'
          class='infor-form-item'
      >
        <a-input type='textarea' v-model='inforForm.cerArea' placeholder='建议说明企业特点'/>
      </a-form-model-item>

      <a-form-model-item
          has-feedback
          label='*运营者身份证号'
          prop='idNumber'
          :labelCol='{span: 5}'
          :wrapperCol='{span:8}'
          class='infor-form-item'
      >
        <a-input v-model='inforForm.idNumber' placeholder='请正确输入身份证号'/>
      </a-form-model-item>
      <p>身份证号应与实际运营者需和运营授权函上一致。</p>

      <a-form-model-item
          has-feedback
          label='*运营者手机号码'
          prop='phoneNumber'
          :labelCol='{span: 5}'
          :wrapperCol='{span:8}'
          class='infor-form-item'
      >
        <a-input v-model='inforForm.phoneNumber' placeholder='请输入手机号码'/>
      </a-form-model-item>
      <p>手机号用于接收验证码，建议使用有效手机号。</p>

      <!--验证码待实现-->
      <a-form-model-item
          has-feedback
          label='*联系邮箱'
          prop='inforEmail'
          :labelCol='{span: 5}'
          :wrapperCol='{span:6}'
          class='infor-form-item'
      >
        <a-input v-model='inforForm.inforEmail' placeholder='请输入联系邮箱'/>
      </a-form-model-item>

      <a-form-model-item
          has-feedback
          label='*事业单位证明/营业执照'
          prop='userLincense'
          :labelCol='{span: 5}'
          :wrapperCol='{span:3}'
          class='infor-form-item'
      >
        <a-upload name='file' :multiple='true' :headers='headers' @change='handleChange'>
          <a-button>
            <a-icon type='upload'/>
            点击上传
          </a-button>
        </a-upload>
      </a-form-model-item>
      <p>
        每张小于
        <a>2M</a>，支持
        <a>JPG/PNG</a>等格式，最多上传5张图片
        <br/>上传资料要求：请上传最新版三证合一高清彩色版企业营业执照，或加盖红色企业公章的复印件（非电子
        <br/>公章），请确保营业执照完整清晰，便于识别。
        <a>查看示例</a>
      </p>

      <a-form-model-item
          has-feedback
          label='*认证统一信用代码'
          prop='truthCode'
          :labelCol='{span: 5}'
          :wrapperCol='{span:4}'
          class='infor-form-item'
      >
        <a-input v-model='inforForm.truthCode' placeholder='请输入信用代码'/>
      </a-form-model-item>
      <p>非大陆地区企业替代材料</p>

      <a-form-model-item
          has-feedback
          label='*企业全称'
          prop='companyName'
          :labelCol='{span: 5}'
          :wrapperCol='{span:4}'
          class='infor-form-item'
      >
        <a-input v-model='inforForm.companyName' placeholder='请输入企业名称'/>
      </a-form-model-item>
      <p>企业名称需与营业执照上的一致</p>

      <a-form-model-item
          has-feedback
          label='企业分类'
          :labelCol='{span: 5}'
          :wrapperCol='{span:3}'
          class='infor-form-item'
      >
        <a-select placeholder='分类'>
          <a-select-option value='服装配饰'>服装配饰</a-select-option>
          <a-select-option value='美妆个户'>美妆个户</a-select-option>
          <a-select-option value='餐饮食品'>餐饮食品</a-select-option>
          <a-select-option value='生活服务'>生活服务</a-select-option>
          <a-select-option value='旅游住宿'>旅游住宿</a-select-option>
          <a-select-option value='家用电器'>家用电器</a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item
          has-feedback
          label='*运营授权确认函'
          prop='comfirmLincense'
          :labelCol='{span: 5}'
          :wrapperCol='{span:3}'
          class='infor-form-item'
      >
        <a-upload name='file' :multiple='true' :headers='headers' @change='handleChange'>
          <a-button>
            <a-icon type='upload'/>
            点击上传
          </a-button>
        </a-upload>
      </a-form-model-item>
      <p>
        每张小于
        <a>2M</a>，支持
        <a>JPG/PNG</a>等格式，最多上传5张图片
        <br/>请下载官方模板
        <a>《机构认证申请公函》</a>,并加盖企业公章（合同章，财务章无效）和运营人手写签名后扫描
        <a>查看示例</a>
      </p>

      <a-form-model-item
          has-feedback
          label='补充文件'
          prop='addFile'
          :labelCol='{span: 5}'
          :wrapperCol='{span:3}'
          class='infor-form-item'
      >
        <a-upload name='file' :multiple='true' :headers='headers' @change='handleChange'>
          <a-button>
            <a-icon type='upload'/>
            点击上传
          </a-button>
        </a-upload>
      </a-form-model-item>
      <p>
        每张小于
        <a>2M</a>，支持
        <a>JPG/PNG</a>等格式，提交彩色原版证明或加盖红色公章，最多上传5张图片
        <br/>注意事项：昵称、认证称号和机构名称需要保持一致（昵称为机构名全称或简称，十字以内），如需使用非全称或简称作为昵称，
        <br/>请在补充文件中提交昵称与机构的关联证明文件（补充材料需显示认证昵称）否则将会认证失败。
        <a>查看示例</a>
      </p>

      <a-form-model-item style='text-align: center; margin-top:40px;'>
        <a-button type='primary' @click='upSubmit'>申请提交</a-button>
      </a-form-model-item>

      <a-form-model-item style='text-align: center;'>
        <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
          我已同意
          <a href>《时间银行官方认证服务协议》</a>
        </a-checkbox>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'Authentication-information',
  data() {
    const validateFakeName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请完成您的输入！！'));
      } else {
        callback();
      }
    };
    return {
      headers: {
        authorization: 'authorization-text',
      },
      inforForm: {
        fakeName: '',
        cerTitle: '',
        cerArea: '',
        idNumber: '',
        phoneNumber: '',
        inforEmail: '',
        truthCode: '',
        companyCategory: '',
        comfirmLincense: '',
      },
      rules: {
        fakeName: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
          },
        ],
        cerTitle: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
          },
        ],
        cerArea: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'change',
            minRows: 2,
            maxRows: 6,
          },
        ],
        idNumber: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
            min: 18,
          },
        ],
        phoneNumber: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
            min: 11,
          },
        ],
        inforEmail: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
          },
        ],
        truthCode: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
          },
        ],
        companyCategory: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
          },
        ],
        comfirmLincense: [
          {
            required: true,
            validator: validateFakeName,
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    handleChange() {
    },
    upSubmit() {
      this.$refs.inforForm.validate((valid) => {
        const authorizationinfo = {
          ...this.inforForm,
        };
        // authorizationinfo.fakeName = +authorizationinfo.fakeName;
        // authorizationinfo.cerTitle = +authorizationinfo.cerTitle;
        // authorizationinfo.phoneNumber = +authorizationinfo.phoneNumber;
        // authorizationinfo.idNumber = +authorizationinfo.idNumber;
        if (valid) {
          this.$emit('next', authorizationinfo);
        } else { // 这里之后再改吧！
          this.$emit('next', authorizationinfo);
        }
      });
    },
  },
};
</script>

<style lang='less'>
.infor-form {
  > p {
    color: #bbbbbb;
    margin-left: 21%;
  }
}
</style>
