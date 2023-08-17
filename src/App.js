import React, { memo, Suspense } from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import { FloatButton } from 'antd'

import routes from './router'
import store from './store'

import WYAppHeader from 'components/app-header'
import WYAppFooter from 'components/app-footer'
import WYAppPlayerBar from '@/pages/player/app-player-bar'
import ErrorCover from './pages/error-cover'
import AppYidSearch from './components/app-yid-search'

// import newstore from './newstore'
export default memo(function App() {
  return (
    // <Provider store={newstore}>
    <Provider store={store}>
      <HashRouter>
        <WYAppHeader />
        {/* 手机端 */}
        <AppYidSearch />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>

        {/* <ErrorCover /> */}
        <WYAppFooter />
        <FloatButton.BackTop />
        {/* 手机端 */}
        <WYAppPlayerBar />
      </HashRouter>
    </Provider>
    // </Provider>
  )
})
