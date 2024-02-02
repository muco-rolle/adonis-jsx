import vite from '@adonisjs/vite/services/main'
import { Html } from '@kitajs/html'

export function Image(props: { src: string; alt?: string; class?: string }) {
  const url = vite.assetPath(props.src)

  return Html.createElement('img', { src: url, alt: props.alt, class: props.class })
}

export function ViteReactRefresh() {
  return Html.createElement(
    'script',
    { type: 'module' },
    `
  import RefreshRuntime from 'http://localhost:5173/@react-refresh'
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true
  `
  )
}

export function ScriptAsset(props: { entrypoint: string }) {
  const assets = vite.generateEntryPointsTags(props.entrypoint)

  const elements = assets.map((asset) => {
    if (asset.tag === 'script') {
      return Html.createElement('script', {
        ...asset.attributes,
      })
    } else {
      return Html.createElement('link', {
        ...asset.attributes,
      })
    }
  })

  return Html.createElement(Html.Fragment, {}, elements)
}
