import { Application, Converter, Context } from 'typedoc'
import { getFileExtension } from '@ink-feather-org/ts-utils'
import adoc from '@asciidoctor/core'
import { AsciidoctorShiki } from '@ink-feather-org/asciidoctor-shiki'

const doctor = adoc()
doctor.SyntaxHighlighter.register('shiki', AsciidoctorShiki)
const options = {
  attributes: {
    'source-highlighter': 'shiki',
  },
}

export function load(app: Application) {
  // using the readme option is not ideal
  // in a perfect world i could tell typedoc to 'treat' .adoc files as readmes.
  const readmeOption = app.options.getValue('readme')
  if (getFileExtension(readmeOption) === 'adoc') {
    app.converter.on(Converter.EVENT_END, (event: Context) => {
      if (event.project.readme)
        event.project.readme = doctor.convert(event.project.readme, options).toString()
    })
    /*app.renderer.on(Renderer.EVENT_END_PAGE, (event: PageEvent) => {
      if (Path.basename(event.filename, Path.extname(event.filename)) === 'index') {
        let html = event.contents
        if (!html || !html.includes('highlight'))
          return

        // https://github.com/kamiazya/typedoc-plugin-mermaid/blob/fbb3763e51c2ba7f1ab4ef4bacbace05d352ff81/src/plugin.ts#L177
        // https://highlightjs.org/usage/
        console.log('index found')
        // find the closing </body> tag and insert our style
        const headEndIndex = html.indexOf('</head>')
        html = html.slice(0, headEndIndex) + '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/a11y-dark.min.css">' + html.slice(headEndIndex)

        // find the closing </body> tag and insert our scripts
        // const bodyEndIndex = html.lastIndexOf('</body>')
        // html =
        //   html.slice(0, bodyEndIndex) +
        //   '<script src="/path/to/highlight.min.js"></script><script>hljs.highlightAll();</script>' +
        //   html.slice(bodyEndIndex)

        event.contents = html
      }
    }) */
  }
}