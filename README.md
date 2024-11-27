现在有如下 vue 组件

```vue
<script setup></script>

<template>
  <div>app</div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
```

会被编译成

```js
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
```

其中 `_resolveComponent` 是找不到组件的， 我们需要实现的主要就是这部分
