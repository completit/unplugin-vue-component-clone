import { describe, it, expect } from "vitest";
import { transformCode } from "./transform";

describe("transformCode", () => {
  it("should transform code", () => {
    const code = `
    const render = (_ctx, _cache) => {
      const _component_el_infinite_scroll = _resolveComponent("el-infinite-scroll")
      const _directive_el_infinite_scroll = _resolveDirective("el-infinite-scroll")

      return _withDirectives(
        (_openBlock(),
        _createBlock(_component_test_comp, null, null, 512 /* NEED_PATCH */)),
        [[_directive_loading, 123]]
      )
    }`;
    const result = transformCode(code);
    expect(result).toMatchSnapshot();
  });
});
