import MagicString from "magic-string";
import { DISABLE_COMMENT, shouldTransform } from "./utils";

export function transformCode(code: string) {
  if (!shouldTransform) return null;

  const s = new MagicString(code);

  s.prepend(DISABLE_COMMENT + "import __unplugin_directives_0 from 'test/directive/Loading';");

  return s.toString();
}
