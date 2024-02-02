import { PropsWithChildren } from '@kitajs/html'
import { ScriptAsset, ViteReactRefresh } from '../utils/vite.jsx'

type AppLayoutProps = PropsWithChildren
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <ViteReactRefresh />
        <ScriptAsset entrypoint="resources/js/app.ts" />
      </head>
      <body>{children}</body>
    </html>
  )
}
