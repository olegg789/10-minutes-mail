import React from 'react';

import {
    Group,
    Header,
    PanelHeader,
    ScreenSpinner,
    Div,
    Button,
    FormLayoutGroup,
    FormItem,
    Card,
    Placeholder,
    Alert,
    PullToRefresh, Snackbar
} from '@vkontakte/vkui'
import {
    Icon24SadFaceOutline, Icon28CheckCircleOutline,
    Icon28CopyOutline,
    Icon28MailOutline,
    Icon56MailOutline
} from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

function HomePanelBase({router, readMail, mail, mails, disabled, getMails, getMailAdress, snackbar, setSnackbar}) {

    // eslint-disable-next-line
    async function openSpinner() {
        router.toPopout(<ScreenSpinner/>)
        await new Promise(resolve => setTimeout(resolve, 2000))
        router.toPopout()
    }

    function normalTime(time) {
        const date = time.split(' ')[0].replace(/-/gi, ' ')
        const t = time.split(' ')[1]
        const hour = Number(t.split(':')[0]) + 1
        const minute = t.split(':')[1]
        const sec = t.split(':')[2]
        return `Дата ${date}, время ${hour}:${minute}:${sec}`
    }

    function openAlert() {
        router.toPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    mode: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    mode: 'destructive',
                    action: () => {getMailAdress()}
                }]}
                onClose={() => router.toPopout()}
                header='Подтверждение'
                text='Вы уверены, что хотите обновить адрес почты? Все полученные письма будут удалены.'
            />
        )
    }

    function openSnackBarCopy() {
        setSnackbar(
            <Snackbar
                style={{marginBottom: -50}}
                layout='vertical'
                onClose={() => setSnackbar(null)}
                before={<Icon28CheckCircleOutline/>}
            >
                Адрес скопирован!
            </Snackbar>
        )
    }

    return (
        <>
            <PanelHeader left={<Icon28MailOutline className='icon'/>} separator>Секундная почта</PanelHeader>
            <PullToRefresh onRefresh={() => getMails()}>
                <Group header={<Header mode='secondary'>Ваша почта</Header> }>
                    <FormLayoutGroup
                        mode='horizontal'
                    >
                        <FormItem>
                            <Card mode='outline'>
                                <Placeholder
                                    icon={<Icon56MailOutline/>}
                                    style={{marginBottom: -40}}
                                >
                                    <big>
                                        {mail !== '' ? mail : 'Нажмите "Сгенерировать почту"'}
                                    </big>
                                </Placeholder>
                                <Div>
                                    <FormLayoutGroup mode='horizontal'>
                                        <Button
                                            size='l'
                                            stretched
                                            style={{marginLeft: -7}}
                                            className='gen'
                                            onClick={() => {mail !== '' ? openAlert() : getMailAdress()}}
                                        >
                                            Сгенерировать почту
                                        </Button>

                                        <Button
                                            align='center'
                                            style={{ marginLeft: 10}}
                                            size='l'
                                            mode='secondary'
                                            onClick={() => {bridge.send("VKWebAppCopyText", {text: mail}); openSnackBarCopy()}}
                                            before={<Icon28CopyOutline/>}
                                            disabled={disabled}
                                        >
                                        </Button>
                                    </FormLayoutGroup>

                                </Div>
                            </Card>
                        </FormItem>
                    </FormLayoutGroup>
                </Group>
                <Group header={
                    <Header
                        mode='secondary'
                    >
                        Сообщения
                    </Header>
                }
                >
                    {mails.length !== 0 ?
                        <>
                            {mails.map((el) => {
                                return(
                                    <Div>
                                        <Card mode='outline' onClick={() => readMail(el.id, mail.split('@')[0], mail.split('@')[1])}>
                                            <FormItem top={'От ' + el.from} bottom={normalTime(el.date)} style={{whiteSpace: 'pre-line'}}>
                                                {el.subject !== '' ? el.subject : 'Без темы'}
                                            </FormItem>
                                        </Card>
                                    </Div>
                                )
                            })
                            }
                        </>
                        :
                        <>
                            <Placeholder
                                icon={<Icon24SadFaceOutline width={56} height={56}/>}
                            >
                                Тут пока что пусто :(
                            </Placeholder>
                        </>
                    }
                </Group>
                {snackbar}
            </PullToRefresh>
        </>
    );
}

export default HomePanelBase;