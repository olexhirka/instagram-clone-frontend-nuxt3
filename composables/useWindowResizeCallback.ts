export function useWindowResizeCallback(callback: Function) {
  const resize = (_e: Event) => {
    callback()
  }

  onMounted(() => {
    callback()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', resize)
  })
}
