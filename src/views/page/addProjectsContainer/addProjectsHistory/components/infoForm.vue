<template>
  <div class="fill-information-container">
    <!--    填写信息-->
    <!--  项目名称、描述、需要人数、支付的时间币、需要服务的时间  -->
    <!--  项目有效期  什么时候开始  什么时候结束  -->
    <!--  项目的分类    -->
    <a-form-model ref="infoForm" class="info-form"
                  @validate="validate"
                  :model="infoForm" :rules="rules" v-bind="layout">
      <a-form-model-item has-feedback label="项目名称" prop="pname">
        <a-input v-model="infoForm.pname"/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="描述" prop="description">
        <a-input v-model="infoForm.description" type="textarea"
                 style="resize: none; height: 80px "/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="需要人数" prop="needPeople">
        <a-input v-model="infoForm.needPeople"/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="项目分类" prop="category">
        <a-select v-model="infoForm.category" placeholder="please select your zone">
          <a-select-option value="照顾老人">照顾老人</a-select-option>
          <a-select-option value="照顾小孩">照顾老人</a-select-option>
          <a-select-option value="帮忙做事">帮忙做事</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item has-feedback label="每人需要支付的时间币" prop="currency">
        <a-input v-model="infoForm.currency"/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="每人进行服务的时间" prop="time">
        <a-input v-model="infoForm.time"/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="服务地点" prop="address">
        <a-input v-model="infoForm.address"/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="项目联系人姓名" prop="contactPersonName">
        <a-input v-model="infoForm.contactPersonName"/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="项目联系人性别" prop="contactPersonSex">
        <a-radio-group v-model="infoForm.contactPersonSex" default="male">
          <a-radio value='male'>
            男
          </a-radio>
          <a-radio value="female">
            女
          </a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item has-feedback label="项目联系人电话" prop="contactPersonPhone">
        <a-input v-model="infoForm.contactPersonPhone"/>
      </a-form-model-item>
      <a-form-model-item label="项目有效期">
        <a-form-model-item style="display: inline-block; margin-left: 0"
                           has-feedback prop="startTime">
          <a-date-picker
              v-model="infoForm.startTime"
              type="date"
              placeholder="选择开始日期"
              style="width: 100%;"
              show-time
          />
        </a-form-model-item>
        <span style="display: inline-block; width: 24px; text-align: center">
          —
        </span>
        <a-form-model-item style="display: inline-block"
                           has-feedback prop="endTime">
          <a-date-picker
              v-model="infoForm.endTime"
              type="date"
              placeholder="选择结束日期"
              style="width: 100%;"
              show-time
          />
        </a-form-model-item>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 8 , offset: 11}">
        <a-button type="primary" @click="onSubmit">
          修改完成
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import moment from 'moment';
import deepCopy from '../../../../../utils/deepCopy';

export default {
  name: 'fillInformation',
  props: {
    projectInfo: {
      type: Object,
    },
  },
  created() {
    this.infoForm = deepCopy(this.projectInfo);
    this.infoForm.startTime = moment(this.infoForm.startTime);
    this.infoForm.endTime = moment(this.infoForm.endTime);
  },
  data() {
    const validateProjectName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入项目名称'));
      } else {
        callback();
      }
    };
    const validateDescription = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入项目描述'));
      } else if (value.length < 10) {
        callback(new Error('项目描述必须大于10字'));
      } else {
        callback();
      }
    };
    const validateNeedPeople = (rule, value, callback) => {
      const regExp = /^\+?[1-9][0-9]*$/; // 正整数
      if (!regExp.test(value)) {
        callback(new Error('请输入正确的人数'));
      } else {
        callback();
      }
    };
    const validateCategory = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择公益项目的类别'));
      } else {
        callback();
      }
    };
    const validateValue = (rule, value, callback) => {
      const regExp = /^\d+(\.\d+)?$/; // 非负浮点数
      if (!regExp.test(value)) {
        callback(new Error('请输入正确的数字'));
      } else {
        callback();
      }
    };
    const validateWorkTime = (rule, value, callback) => {
      const regExp = /^\d+(\.\d+)?$/; // 非负浮点数
      if (!regExp.test(value)) {
        callback(new Error('请输入正确的数字'));
      } else {
        callback();
      }
    };
    const validateAddress = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写地址'));
      } else {
        callback();
      }
    };
    const validateContactPersonName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写联系人姓名'));
      } else {
        callback();
      }
    };
    const validateContactPersonPhone = (rule, value, callback) => {
      const phoneReg = /^1[3456789]{1}\d{9}$/;
      if (value === '') {
        callback(new Error('请填写联系人电话'));
      } else if (!phoneReg.test(value)) {
        callback(new Error('请填写正确的电话号码'));
      } else {
        callback();
      }
    };
    const validateTime = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请填写日期'));
      } else {
        callback();
      }
    };
    return {
      infoForm: {
        pname: '',
        description: '',
        needPeople: '',
        category: '',
        currency: '',
        time: '',
        address: '',
        contactPersonName: '',
        contactPersonSex: 'male',
        contactPersonPhone: '',
        startTime: '',
        endTime: '',
        city: '杭州',
        province: '浙江',
      },
      rules: {
        pname: [{
          validator: validateProjectName,
          trigger: 'change',
        }],
        description: [{
          validator: validateDescription,
          trigger: 'blur',
        }],
        needPeople: [{
          validator: validateNeedPeople,
          trigger: 'change',
        }],
        category: [{
          validator: validateCategory,
          trigger: 'blur',
        }],
        currency: [{
          validator: validateValue,
          trigger: 'change',
        }],
        time: [{
          validator: validateWorkTime,
          trigger: 'change',
        }],
        contactPersonName: [{
          validator: validateContactPersonName,
          trigger: 'change',
        }],
        contactPersonPhone: [{
          validator: validateContactPersonPhone,
          trigger: 'change',
        }],
        address: [{
          validator: validateAddress,
          trigger: 'change',
        }],
        startTime: [{
          validator: validateTime,
          trigger: 'change',
        }],
        endTime: [{
          validator: validateTime,
          trigger: 'change',
        }],
      },
      layout: {
        labelCol: { span: 7 },
        wrapperCol: { span: 11 },
      },
    };
  },
  methods: {
    validate() {
      this.$emit('formChange');
    },
    onSubmit() {
      this.$refs.infoForm.validate((valid) => {
        const projectInfo = {
          ...this.infoForm,
        };
        projectInfo.needPeople = +projectInfo.needPeople;
        projectInfo.value = +projectInfo.value;
        projectInfo.time = +projectInfo.time;
        projectInfo.startTime = projectInfo.startTime.format('YYYY-MM-DD HH:MM');
        projectInfo.endTime = projectInfo.endTime.format('YYYY-MM-DD HH:MM');
        if (valid) {
          this.$emit('submit', deepCopy(projectInfo));
        } else {
          this.$message.error('请正确填写信息');
        }
        return false;
      });
    },
    resetForm() {
      this.infoForm = {
        projectName: '',
        description: '',
        needPeople: '',
        category: '',
        value: '',
        time: '',
        address: '',
        contactPersonName: '',
        contactPersonSex: 'male',
        contactPersonPhone: '',
        startTime: '',
        endTime: '',
      };
      this.$refs.infoForm.resetFields();
    },
  },
};
</script>

<style scoped>

</style>
