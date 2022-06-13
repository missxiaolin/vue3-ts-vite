<template>
  <div class="home">
    <div>这里是首页,点击下方选择框切换主题</div>
    <van-field
      readonly
      clickable
      name="picker"
      :value="currentTheme"
      label="主题"
      placeholder="点击选择主题"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :default-index="currentThemeIndex"
        :columns="themeValue"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
declare let THEMEARR: any

import { onMounted, getCurrentInstance, ref, Ref } from 'vue'
export default {

  setup() {
    let currentTheme: Ref<String> = ref('default')
    let currentThemeIndex: Ref<Number> = ref(0)
    let oldData = getCurrentInstance()
    let showPicker: Ref<Boolean> = ref(false)
    let themeValue: [] = []

    onMounted(() => {
      currentTheme.value = THEMEARR[0]
      currentThemeIndex.value = themeValue.findIndex((theme: string) => theme === 'default')
    })

    const onConfirm = () => {
        showPicker.value = false
    }
    return {
      currentTheme,
      currentThemeIndex,
      themeValue,
      onConfirm,
      showPicker
    }
  },
}
</script>

<style lang="scss">
.home {
  padding: 10px;

  .t-home-title,
  .t-home-sub-title,
  .t-home-info {
    @include themify() {
      color: themed('color');
      font-weight: themed('font-weight');
      font-size: themed('font-size');
    }
  }
}
</style>