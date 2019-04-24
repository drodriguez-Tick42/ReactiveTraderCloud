import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { styled, ThemeProvider } from 'rt-theme'

import FloatingTools from './components/FloatingsTools'
import { Block, SectionBlock } from './styled'
import Atoms from './sections/Atoms'
import ColorSpectrum from './sections/ColorSpectrum'
import CoreBranding from './sections/CoreBranding'
import FontFamilies from './sections/FontFamilies'
import Introduction from './sections/Introduction'

const sections: Array<{ path: string; Section: React.ComponentType }> = [
  { path: 'introduction', Section: Introduction },
  { path: 'color-spectrum', Section: ColorSpectrum },
  { path: 'core-branding', Section: CoreBranding },
  { path: 'font-families', Section: FontFamilies },
  { path: 'atoms', Section: Atoms },
  { path: 'ending', Section: () => <SectionBlock mh={5} colorScheme="inverted" /> },
]

const StyleguideRoute: React.FC = () => (
  <ThemeProvider>
    <Root>
      <FloatingTools />
      <Introduction />
    </Root>
  </ThemeProvider>
)

export const Root = styled(Block)`
  min-height: 100%;
  overflow: hidden;
`

export default StyleguideRoute
export { StyleguideRoute, sections }
