import type { PluginOption } from "vite";

export default function myPlugin(): PluginOption {
  const ctx: Context = new Context();

  return {
    name: "transform-file",

    configResolved(config) {
      console.log("configResolved..", config);
    },

    transform(code, id) {
      console.log("transform..", id);
      // if (!id.endsWith("vue")) {
      //   return null;
      // }

      // console.log({ id });
    },
  };
}

class Context {
  componentsMap = new Map();

  generateDeclaration() {}
}
