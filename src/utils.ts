export const DISABLE_COMMENT = "/* unplugin-vue-components disabled */";

export function shouldTransform(code: string) {
  if (code.includes(DISABLE_COMMENT)) return false;
  return true;
}
