import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
import HelloWorld from "/src/components/HelloWorld.vue";

const _sfc_main = {
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();

    const __returned__ = { HelloWorld };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true,
    });
    return __returned__;
  },
};
import {
  createElementVNode as _createElementVNode,
  createVNode as _createVNode,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "/node_modules/.vite/deps/vue.js?v=e1bbb336";

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
        _createVNode($setup["HelloWorld"], { msg: "Vite + Vue" }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwPlxuaW1wb3J0IEhlbGxvV29ybGQgZnJvbSBcIi4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZVwiO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5hcHA8L2Rpdj5cbiAgPEhlbGxvV29ybGQgbXNnPVwiVml0ZSArIFZ1ZVwiIC8+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiJBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQURwRDs4QkFLRSxvQkFBYyxhQUFULEtBQUc7SUFDUixhQUErQix3QkFBbkIsR0FBRyxFQUFDLFlBQVkiLCJpZ25vcmVMaXN0IjpbXX0=
