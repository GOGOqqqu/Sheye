import type { Component } from 'vue'
import playControl from './playControl/index.vue'
import Repetitive from './playControl/Repetitive.vue'

// ✨如果使用的是 JS 可以删除类型校验
const components: {
  [propName: string]: Component
} = {
  playControl,Repetitive
}
export default components