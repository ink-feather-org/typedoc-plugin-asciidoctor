import { Application, Converter, Context } from 'typedoc'
// import { getFileExtension } from '@ink-feather-org/ts-utils'
import adoc from 'asciidoctor'

const doctor = adoc()

export function load(app: Application) {
  app.converter.on(Converter.EVENT_END, (event: Context) => {
    event.project.readme = doctor.convert(event.project.readme).toString()
  })
  // app.renderer.on(Renderer.EVENT_BEGIN_PAGE, (event: PageEvent) => {
  //   console.log(event.filename)
  //   if (getFileExtension(event.filename) === 'adoc') {
  //     console.log('trigger ' + event.filename)
  //     event.contents = doctor.convert(event.contents).toString()
  //   }
  // }, app, 1)
}