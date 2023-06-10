<template>
  <section class="setting-containner">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="设置详细"
    />
    <section>
      <a-form-model
        ref="ruleForm"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :model="form"
        :rules="rules"
      >
        <a-form-model-item label="开机自启">
          <a-radio-group v-model="form.autoStart">
            <a-radio value="1"> 是 </a-radio>
            <a-radio value="2"> 否 </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <section class="portStyle">
          <a-form-model-item label="启动端口" prop="startPort">
            <!-- <a-input :value="form.startPort" @input="startPortChange" /> -->
            <a-input v-model="form.startPort" allowClear="true" />
          </a-form-model-item>
        </section>

        <a-form-model-item label="工牌页面地址">
          <a-input v-model="form.badge" />
        </a-form-model-item>
        <a-form-model-item label="暂停页面地址">
          <a-input v-model="form.pause" />
        </a-form-model-item>
        <a-form-model-item label="排队页面地址">
          <a-input v-model="form.queue" />
        </a-form-model-item>
        <a-form-model-item label="工牌APP名">
          <a-input v-model="form.badgeApp" />
        </a-form-model-item>
        <a-form-model-item label="暂停APP名">
          <a-input v-model="form.pauseApp" />
        </a-form-model-item>
        <a-form-model-item label="排队APP名">
          <a-input v-model="form.queueApp" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit"> 保存 </a-button>
          <a-button style="margin-left: 10px" @click="oncancel">
            取消
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    // 自定义校验函数
    let validatePort = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入端口号！"));
      }
      if (isNaN(new Number(value))) {
        callback(new Error("端口号必须为数字！"));
      } else {
        callback();
      }
    };

    // 返回值
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        autoStart: "1",
        startPort: 80,
        defaultStart: true,
        badge: undefined,
        pause: undefined,
        queue: undefined,
        badgeApp: undefined,
        pauseApp: undefined,
        queueApp: undefined,
      },

      // 表单校验规则
      rules: {
        startPort: [
          {
            validator: validatePort,
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    //保存
    onSubmit() {
      //校验
      this.$refs.ruleForm.validate((valid) => {
        console.log(this.form);
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
        }
      });
    },
    // 取消
    oncancel() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.setting-containner {
  background: white;
}
</style>
