import React, {useState} from 'react';

import {
    Group,
    Header,
    PanelHeader,
    ScreenSpinner,
    Snackbar,
    Div,
    Button,
    FormLayoutGroup,
    FormItem,
    Card, Placeholder,
    PullToRefresh,
    Alert,
} from '@vkontakte/vkui'
import {
    Icon24SadFaceOutline,
    Icon28CheckCircleOutline,
    Icon28CopyOutline,
    Icon28MailOutline,
    Icon56MailOutline
} from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

function HomePanelBase({router, readMail, mail, mails, disabled, getMails, getMailAdress}) {
    const [snackbar, setSnackbar] = useState(null)

    // eslint-disable-next-line
    async function openSpinner() {
        router.toPopout(<ScreenSpinner/>)
        await new Promise(resolve => setTimeout(resolve, 2000))
        router.toPopout()
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
                    action: () => {getMailAdress(); openSnackbar()}
                }]}
                onClose={() => router.toPopout()}
                header='Подтверждение'
                text='Вы уверены, что хотите обновить адрес почты? Все полученные письма будут удалены.'
            />
        )
    }

    // eslint-disable-next-line
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

    return (
        <>
            <PullToRefresh onRefresh={() => getMails()}>
                <PanelHeader left={<Icon28MailOutline className='icon'/>} separator>Секундная почта</PanelHeader>
                <Group header={<Header mode='secondary'>Ваша почта</Header> }>
                    <FormLayoutGroup
                        mode='horizontal'
                    >
                        <FormItem>
                            <Card mode='outline'>
                                <Placeholder
                                    icon={<Icon56MailOutline/>}
                                    action={
                                        <Button
                                            align='center'
                                            size='l'
                                            mode='secondary'
                                            onClick={() => bridge.send("VKWebAppCopyText", {text: mail})}
                                            before={<Icon28CopyOutline/>}
                                            stretched
                                            disabled={disabled}
                                        >
                                            Скопировать
                                        </Button>
                                    }
                                >
                                    {mail !== '' ? mail : 'Нажмите "Сгенерировать почту"'}
                                </Placeholder>
                                <Div>
                                    <Button
                                        size='l'
                                        stretched
                                        className='gen'
                                        onClick={() => openAlert()}
                                    >
                                        Сгенерировать почту
                                    </Button>
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
                                            <FormItem top={'От ' + el.from} bottom={'Дата ' + el.date} style={{whiteSpace: 'pre-line'}}>
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