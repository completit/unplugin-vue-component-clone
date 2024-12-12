import MagicString from "magic-string";
import { DISABLE_COMMENT, shouldTransform } from "./utils";

export function transformCode(code: string) {
  if (!shouldTransform) return null;

  const s = new MagicString(code);

  const results: { rawName: string; replace: (resolved: string) => void }[] =
    [];

  /**
   * when using some plugin like plugin-vue-jsx, resolveComponent will be imported as resolveComponent1 to avoid duplicate import
   */
  for (const match of code.matchAll(/_resolveComponent\d*\("(.+?)"\)/g)) {
    const matchedName = match[1];
    if (match.index != null && matchedName && !matchedName.startsWith("_")) {
      const start = match.index;
      const end = start + match[0].length;
      results.push({
        rawName: matchedName,
        replace: (resolved) => s.overwrite(start, end, resolved),
      });
    }
  }

  console.log({ results });
  let no = 0;
  for (const result of results) {
    const varName = `__unplugin_components_${no}`;
    // const ppStr = stringifyComponentImport({ ...component, as: varName }, ctx);
    const ppStr = "";
    s.prepend(`${ppStr};\n`);
    no += 1;
    result.replace(varName);
  }

  // s.prepend(DISABLE_COMMENT);

  return s.toString();
}
