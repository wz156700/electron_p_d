<template>
  <section>
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
          <a-form-model-item
            label="启动端口"
            :wrapper-col="{ span: 14, offset: 0 }"
            prop="startPort"
          >
            <a-input
              :value="form.startPort"
              :allowClear="true"
              @change="startPortChange"
            />
            <a-checkbox v-model="form.defaultStart"> 默认启动 </a-checkbox>
          </a-form-model-item>
        </section>

        <a-form-model-item label="工牌页面地">
          <a-input v-model="form.badge" />
        </a-form-model-item>
        <a-form-model-item label="暂停页面地">
          <a-input v-model="form.pause" />
        </a-form-model-item>
        <a-form-model-item label="排队页面地">
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
      rules: {
        startPort: [
          {
            type: "number",
            required: true,
            message: "输入内容必须是数字",
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
          return false;
        }
      });
    },
    // 取消
    oncancel() {
      this.$refs.ruleForm.resetFields();
      for (let key in this.form) {
        if (Object.hasOwnProperty.call(this.form, key)) {
          if (key == "autoStart") {
            this.form[key] = "1";
          } else if (key === "startPort") {
            this.form[key] = "80";
          } else {
            this.form[key] = undefined;
          }
        }
      }
    },

    startPortChange(e) {
      let value = e.target.value;
      if (!isNaN(new Number(value))) {
        this.form.startPort = parseInt(80);
      } else {
        this.form.startPort = value;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.portStyle {
  .ant-input-affix-wrapper {
    width: 78%;
  }

  .ant-checkbox-wrapper {
    margin-left: 2% !important;
  }
}
</style>
