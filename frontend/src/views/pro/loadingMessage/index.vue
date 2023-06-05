<template>
  <section>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="加载详细"
    />
    <div>
      <p
        v-for="(item, index) in loadingMessage"
        :key="index"
        class="loadingItem"
      >
        <span class="time">{{ item.time }}</span>
        <span class="content">{{ item.content }}</span>
      </p>
    </div>
  </section>
</template>
<script >
export default {
  data() {
    return {
      loadingMessage: [
        {
          time: "2023/6/2 20:43:37",
          content: "悬浮快捷助手组件已加载",
        },
        {
          time: "2023/6/2 20:43:37",
          content: "悬浮快捷助手组件已加载",
        },
        {
          time: "2023/6/2 20:43:37",
          content: "悬浮快捷助手组件已加载",
        },
        {
          time: "2023/6/2 20:43:37",
          content: "悬浮快捷助手组件已加载",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}
.loadingItem {
  width: 95%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 1% auto;
  .time {
    padding-left: 2%;
    color: #07c160;
  }
  .content {
    padding-left: 2%;
  }
}
</style>
    