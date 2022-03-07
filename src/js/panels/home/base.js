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
} from '@vkontakte/vkui'
import {
    Icon24SadFaceOutline,
    Icon28CopyOutline,
    Icon28MailOutline,
    Icon28RefreshOutline,
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

    // eslint-disable-next-line
    function openSnackbar() {
        setSnackbar(
            <Snackbar
                layout='vertical'
                onClose={() => setSnackbar(null)}
                action='Например кнопка'
            >
                Какой-то текст
            </Snackbar>
        )
    }

    return (
        <>
            <PullToRefresh onRefresh={() => getMails()}>
                <PanelHeader left={<Icon28MailOutline className='icon'/>} separator={false}>Секундная почта</PanelHeader>
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
                                    {mail}
                                </Placeholder>
                                <Div>
                                    <Button
                                        size='l'
                                        stretched
                                        className='gen'
                                        onClick={() => getMailAdress()}
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
                        aside={mails.length !== 0 &&
                            <Button
                                onClick={() => getMails()}
                                mode='outline'
                            >
                                Обновить
                            </Button>
                        }
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
                                                {el.subject}
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
                                action={
                                    <Button
                                        before={<Icon28RefreshOutline/>}
                                        size='l'
                                        onClick={() => getMails()}
                                        mode='secondary'
                                    >
                                        Обновить
                                    </Button>
                                }
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