import React, {lazy, Suspense, useEffect, useState} from 'react';
import { withRouter } from 'react-router-vkminiapps';

import {
  ConfigProvider,
  AppRoot,
  SplitLayout,
  PanelHeader,
  SplitCol,
  Epic,
  View,
  Panel,
  ModalRoot,
  ScreenSpinner,
  usePlatform,
  VKCOM,
  withAdaptivity,
} from "@vkontakte/vkui";

import bridge from "@vkontakte/vk-bridge";

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

const HomePanelBase = lazy(() => import('./js/panels/home/base'));
const HomePanelPlaceholder = lazy(() => import('./js/panels/home/placeholder'));

const App = withAdaptivity(({ viewWidth, router }) => {
  // eslint-disable-next-line
  const setActiveView = (e) => router.toView(e.currentTarget.dataset.id)

  const [scheme, setScheme] = useState('light')

  const isDesktop = viewWidth >= 3
  const platform = isDesktop ? VKCOM : usePlatform()
  const hasHeader = isDesktop !== true

  async function getAppScheme(platform) {
    if (platform === 'vkcom') {
      setScheme('vkcom_light')
    } else {
      bridge.subscribe((e) => {
        if (e.detail.type === 'VKWebAppUpdateConfig') {
          let data = e.detail.data.scheme
          setScheme(data)
        }
      })
      let appScheme = await bridge.send("VKWebAppGetConfig")
      setScheme(appScheme.scheme)
    }
  }

  useEffect(() => {getAppScheme()}, [])

  const modals = (
    <ModalRoot>
      <HomeBotsListModal
        id="botsList"
        platform={platform}
        router={router}
      />

      <HomeBotInfoModal
        id="botInfo"
        platform={platform}
        router={router}
      />
    </ModalRoot>
  );

  return(
    <ConfigProvider platform={platform} isWebView scheme={scheme}>
      <AppRoot>
        <SplitLayout
          header={hasHeader && <PanelHeader separator={false} />}
          style={{ justifyContent: "center" }}
        >
          <SplitCol
            animate={!isDesktop}
            spaced={isDesktop}
            width={isDesktop ? '560px' : '100%'}
            maxWidth={isDesktop ? '560px' : '100%'}
          >   
            <Epic 
              activeStory={router.activeView}
            >
              <View 
                id='home'
                activePanel={router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <HomePanelBase router={router}/>
                  </Suspense>
                </Panel>

                <Panel id='placeholder'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <HomePanelPlaceholder router={router}/>
                  </Suspense>
                </Panel>
              </View>
            </Epic>
          </SplitCol>
            
        </SplitLayout>
      </AppRoot>
    </ConfigProvider>
  )
}, { viewWidth: true })

export default withRouter(App);