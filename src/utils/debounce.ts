export function debounce(fn: Function, ms: number) {
  let timeout: number

  return function (this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), ms)
  }
}
