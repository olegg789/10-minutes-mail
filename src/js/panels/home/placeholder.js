import React, {useEffect, useState} from 'react';

import {
    PanelHeader,
    PanelHeaderBack,
    Group, FormItem, Div, Button, FormLayout,
} from "@vkontakte/vkui";

function HomePanelPlaceholder({router, mailId, login, domain, isDesktop}) {

    const [from, setFrom] = useState(null)
    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)
    const [date, setDate] = useState(null)
    const [attachments, setAttachments] = useState([])

    async function readMail() {
        let response = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${mailId}`)
        let responseJSON = await response.json()
        console.log(responseJSON)
        setFrom(responseJSON.from)
        setTitle(responseJSON.subject)
        setText(responseJSON.textBody)
        setDate(responseJSON.date)
        setAttachments(responseJSON.attachments)
    }

    useEffect(
        () => {readMail()}, []
    )

    return(
        <>
            <PanelHeader 
                separator
                left={<PanelHeaderBack onClick={() => router.toBack()}/>}
            >
                Письмо
            </PanelHeader>

            <Group>
                <FormLayout>
                    <FormItem top={'От'}>
                        {from}
                    </FormItem>
                    <FormItem top={'Заголовок'} style={{whiteSpace: 'pre-line'}}>
                        {title}
                    </FormItem>
                    <FormItem top={'Текст письма'} style={{whiteSpace: 'pre-line'}}>
                        {text}
                    </FormItem>
                    <FormItem top={'Дата'}>
                        {date}
                    </FormItem>
                    {attachments.length !== 0 &&
                        attachments.map((el) => {
                                return(
                                    <FormItem top='Вложение' bottom='Показывается только первое вложение'>
                                        <Button
                                            size='l'
                                            stretched
                                            href={`https://www.1secmail.com/api/v1/?action=download&login=${login}&domain=${domain}&id=${mailId}&file=${el.filename}`}
                                        >
                                            Скачать
                                        </Button>
                                    </FormItem>
                                )
                            }
                        )}
                    <Div>
                        <Button
                            size='l'
                            stretched
                            onClick={() => router.toBack()}
                        >
                            Закрыть
                        </Button>
                    </Div>
                </FormLayout>
            </Group>
        </>
    )
}

export default HomePanelPlaceholder;