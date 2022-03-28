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
  withAdaptivity, Snackbar,
} from "@vkontakte/vkui";

import bridge from "@vkontakte/vk-bridge";

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';
import {Icon28CheckCircleOutline} from "@vkontakte/icons";

const HomePanelBase = lazy(() => import('./js/panels/home/base'));
const HomePanelPlaceholder = lazy(() => import('./js/panels/home/placeholder'));

const App = withAdaptivity(({ viewWidth, router }) => {
  // eslint-disable-next-line
  const setActiveView = (e) => router.toView(e.currentTarget.dataset.id)

  const [scheme, setScheme] = useState('light')
  const [mailId, setMailId] = useState(null)
  const [login, setLogin] = useState(null)
  const [domain, setDomain] = useState(null)
  const [mail, setMail] = useState('Загрузка...')
  const [mails, setMails] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [snackbar, setSnackbar] = useState(null)

  const isDesktop = viewWidth >= 3
  const platform = isDesktop ? VKCOM : usePlatform()
  const hasHeader = isDesktop !== true

  async function getLastMail() {
    try {
      let lastMail = await bridge.send("VKWebAppStorageGet", {keys: ['lastMail']})
      setMail(lastMail.keys[0].value)
      if (lastMail.keys[0].value !== '') {
        setDisabled(false)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  function openSnackbar() {
    setSnackbar(
        <Snackbar
            style={{marginBottom: -50}}
            layout='vertical'
            onClose={() => setSnackbar(null)}
            before={<Icon28CheckCircleOutline/>}
        >
          Почта обновлена!
        </Snackbar>
    )
  }

  async function getMailAdress() {
    try {
      let response = await fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
      let responseJSON = await response.json()
      await bridge.send("VKWebAppStorageSet", {key: 'lastMail', value: responseJSON[0]})
      setMail(responseJSON[0])
      setMails([])
      setDisabled(false)
      openSnackbar()
    }
    catch (err) {
      console.log(err)
    }
  }

  async function openSpinner() {
    router.toPopout(<ScreenSpinner/>)
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.toPopout()
  }

  async function getMailsAuto() {
    while(true) {
      let lastMail = await bridge.send("VKWebAppStorageGet", {keys: ['lastMail']})
      let login = lastMail.keys[0].value.split('@')[0]
      let domain = lastMail.keys[0].value.split('@')[1]
      let response = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`)
      let responseJSON = await response.json()
      setMails(responseJSON)
      await new Promise(resolve => setTimeout(resolve, 5000))
    }
  }

  async function getMails() {
    try {
      openSpinner()
      let lastMail = await bridge.send("VKWebAppStorageGet", {keys: ['lastMail']})
      let login = lastMail.keys[0].value.split('@')[0]
      let domain = lastMail.keys[0].value.split('@')[1]
      let response = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`)
      let responseJSON = await response.json()
      setMails(responseJSON)
    }
    catch (err) {
      console.log(err)
    }

  }

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

  async function readMail(id, login, domain) {
    try {
      setMailId(id)
      setLogin(login)
      setDomain(domain)
      router.toPanel('readMail')
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {getAppScheme(); getLastMail(); getMailsAuto()}, [])

  const modals = (
    <ModalRoot activeModal={router.modal}>
      <HomeBotsListModal
        id="readMail"
        mailId={mailId}
        login={login}
        domain={domain}
        platform={platform}
        router={router}
        isDesktop={isDesktop}
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
            width={isDesktop ? '700px' : '100%'}
            maxWidth={isDesktop ? '700px' : '100%'}
          >   
            <Epic 
              activeStory={router.activeView}
            >
              <View 
                id='home'
                activePanel={router.activePanel === 'route_modal' ? 'base' : router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <HomePanelBase
                        router={router}
                        readMail={(id, login, domain) => readMail(id, login, domain)}
                        mail={mail}
                        mails={mails}
                        disabled={disabled}
                        getMails={() => getMails()}
                        getMailAdress={() => getMailAdress()}
                        snackbar={snackbar}
                        setSnackbar={(value) => setSnackbar(value)}
                    />
                  </Suspense>
                </Panel>

                <Panel id='readMail'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <HomePanelPlaceholder router={router} mailId={mailId} login={login} domain={domain}/>
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