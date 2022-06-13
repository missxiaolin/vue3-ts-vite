<template>
  <div class="home">
    <div>这里是首页,点击下方选择框切换主题</div>
    <van-field
      v-model="currentTheme"
      readonly
      clickable
      name="picker"
      label="主题"
      placeholder="点击选择主题"
      @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :default-index="currentThemeIndex"
        :columns="themeValue"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <van-grid :column-num="columnNum[currentThemeIndex]">
      <van-grid-item
        v-for="value in gridNum[currentThemeIndex]"
        :key="value"
        :icon="gridIcon[currentThemeIndex]"
        text="文字"
      />
    </van-grid>

    <div v-for="(item, index) in 3" :key="index" class="container">
      <div class="t-home-title">标题</div>
      <div class="t-home-sub-title">副标题</div>
      <div class="t-home-info">
        这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息
      </div>
    </div>
  </div>
</template>

<script lang="ts">
declare let THEMEARR: any

import { onMounted, getCurrentInstance, ref, Ref } from 'vue'
export default {
  setup() {
    let currentTheme: Ref<String> = ref('default')
    let currentThemeIndex: Ref<Number> = ref(0)
    // 获取data 的值
    let oldData = getCurrentInstance()
    let showPicker: Ref<Boolean> = ref(false)
    let themeValue: any = ref([])
    let columnNum: any = ref([4, 2])
    let gridNum: any = ref([8, 4])
    let gridIcon: any = ref(['location-o', 'like-o'])

    onMounted(() => {
      themeValue.value = THEMEARR
      currentThemeIndex.value = themeValue.value.findIndex((theme: string) => theme === 'default')
      let index: any = currentThemeIndex.value
      currentTheme.value = themeValue.value[index]
    })

    const onConfirm = (theme: string) => {
      showPicker.value = false
      currentTheme.value = theme
      currentThemeIndex.value = themeValue.value.findIndex(
        (theme: string) => theme === currentTheme.value
      )
      let index: any = currentThemeIndex.value
      document.getElementsByTagName('body')[0].setAttribute('data-theme', THEMEARR[index])
    }
    return {
      currentTheme,
      currentThemeIndex,
      themeValue,
      onConfirm,
      showPicker,
      columnNum,
      gridNum,
      gridIcon,
    }
  },
}
</script>

<style lang="scss">
.home {
  padding: 10px;
  padding-bottom: 70px;

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