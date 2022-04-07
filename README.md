# @ink-feather-org/ts-utils

This repository contains a plugin for typedoc to support ascii doc readme files.
This plugin does not check if the readme is actually an .adoc file!

To use this plugin specify the `readme` option for typedoc.

# tsconfig.json

```json
{
  "typedocOptions": {
    "entryPoints": ["src/index.ts"],
    "out": "docs",
    "readme": "README.adoc",
    "excludePrivate": true
  }
}
```

npmjs.com does not support .adoc readme files.
For the full readme see [the git repository](https://github.com/ink-feather-org/ts-utils).
