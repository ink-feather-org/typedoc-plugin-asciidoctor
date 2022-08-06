# @ink-feather-org/typedoc-plugin-asciidoctor

This plugin adds `README.adoc` support to typedoc.
To use this plugin specify the `readme` option for typedoc.

# tsconfig.json

```json
{
  "typedocOptions": {
    "entryPoints": ["src/index.ts"],
    "out": "docs",
    "readme": "README.adoc",
    "excludePrivate": true,
    "plugin": [ "@ink-feather-org/typedoc-plugin-asciidoctor" ]
  }
}
```

npmjs.com does not support .adoc readme files.
For the full readme see [the git repository](https://github.com/ink-feather-org/typedoc-plugin-asciidoctor).
