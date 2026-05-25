declare module 'vue-spinner' {
  import type { DefineComponent } from 'vue'

  export const PulseLoader: DefineComponent<{
    loading?: boolean
    color?: string
    size?: string
    margin?: string
  }>
}
