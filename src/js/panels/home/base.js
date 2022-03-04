import React, { useState } from 'react';

import {
    Group,
    Header,
    PanelHeader,
    ScreenSpinner,
    Snackbar,
    Input,
    Div,
    Button,
    FormLayoutGroup,
    FormItem,
    IconButton,
} from '@vkontakte/vkui'
import {Icon28CopyOutline, Icon28MailOutline} from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

function HomePanelBase({router}) {
    const [snackbar, setSnackbar] = useState(null)
    const [mail, setMail] = useState('jopa@gmail.com')

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
            <PanelHeader left={<Icon28MailOutline className='icon'/>} separator={false}>Секундная почта</PanelHeader>
            <Group header={<Header mode='secondary'>Создать почту</Header> }>
                <FormLayoutGroup
                    mode='horizontal'
                >
                    <FormItem top='Ваша почта'>
                        <Input
                            value={mail}
                            readOnly
                            after={
                                <IconButton
                                    onClick={() => bridge.send("VKWebAppCopyText", {text: mail})}
                                >
                                    <Icon28CopyOutline/>
                                </IconButton>
                            }
                        />
                    </FormItem>
                </FormLayoutGroup>
                <FormLayoutGroup mode='horizontal'>
                    <FormItem>
                        <Button
                            size='l'
                            stretched
                            className='gen'
                        >
                            Сгенерировать почту
                        </Button>
                    </FormItem>
                </FormLayoutGroup>
            </Group>
            <Group header={<Header mode='secondary'>Сообщения</Header>}>
                жопа
            </Group>
            {snackbar}
        </>
    );
}

export default HomePanelBase;