<template>
  <section class="btn-containner">
    <div class="btns">
      <button class="btn">工牌</button>
      <button class="btn">投屏</button>
      <button class="btn">暂停</button>
      <button class="btn">叫号</button>
    </div>
  </section>
</template>
<script>
import { ipcApiRoute, specialIpcRoute } from "@/api/main";
export default {
  data() {
    return {
      size: {},
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.btn-containner {
  width: 400px;
  margin: 0 auto;
  overflow: hidden;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
}
.btn {
  width: 150px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 30px 15px 0 15px;
  cursor: pointer;
  background: #40a9ff;
  color: white;
}

.btn:hover {
  background: white;
  color: #40a9ff;
  border: 1px solid #40a9ff;
}
</style>
    