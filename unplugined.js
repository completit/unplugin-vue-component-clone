import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
/* unplugin-vue-components disabled */ import __unplugin_components_0 from "/src/components/HelloWorld.vue";
const _sfc_main = {};
import {
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "/node_modules/.vite/deps/vue.js?v=fa4cbeba";

const _hoisted_1 = /*#__PURE__*/ _createElementVNode(
  "div",
  null,
  " app ",
  -1 /* HOISTED */
);

function _sfc_render(_ctx, _cache) {
  const _component_HelloWorld = __unplugin_components_0;

  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [_hoisted_1, _createVNode(_component_HelloWorld, { msg: "Vite + Vue" })],
      64 /* STABLE_FRAGMENT */
    )
  );
}

_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" &&
  __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/@id/__x00__plugin-vue:export-helper";
export default /*#__PURE__*/ _export_sfc(_sfc_main, [
  ["render", _sfc_render],
  [
    "__file",
    "/Users/zego/source-code/unplugin-vue-components/playground/src/App.vue",
  ],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1FBSUUsWUFFTTtJQUNOIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXA+XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIGFwcFxuICA8L2Rpdj5cbiAgPEhlbGxvV29ybGQgbXNnPVwiVml0ZSArIFZ1ZVwiIC8+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cbiJdLCJmaWxlIjoiL1VzZXJzL3plZ28vc291cmNlLWNvZGUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcGxheWdyb3VuZC9zcmMvQXBwLnZ1ZSJ9
