import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
const _sfc_main = {};
import {
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "/node_modules/.vite/deps/vue.js?v=9539035e";

function _sfc_render(_ctx, _cache) {
  const _component_HelloWorld = _resolveComponent("HelloWorld");

  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _cache[0] ||
          (_cache[0] = _createElementVNode(
            "div",
            null,
            "app",
            -1 /* HOISTED */
          )),
        _createVNode(_component_HelloWorld, { msg: "Vite + Vue" }),
      ],
      64 /* STABLE_FRAGMENT */
    )
  );
}

_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" &&
  __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.on("file-changed", ({ file }) => {
  __VUE_HMR_RUNTIME__.CHANGED_FILE = file;
});
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
    "/Users/zego/completit/unplugin-vue-component-clone/playground/src/App.vue",
  ],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7d0JBQUE7OEJBR0Usb0JBQWMsYUFBVCxLQUFHO0lBQ1IsYUFBK0IseUJBQW5CLEdBQUcsRUFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cD48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2PmFwcDwvZGl2PlxuICA8SGVsbG9Xb3JsZCBtc2c9XCJWaXRlICsgVnVlXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiJdfQ==
