import React, {useEffect, useState} from 'react';

import {
    PanelHeader,
    PanelHeaderBack,
    Group, FormItem,
    Div,
    Button,
    FormLayout,
} from "@vkontakte/vkui";

function HomePanelPlaceholder({router, mailId, login, domain, isDesktop}) {

    const [from, setFrom] = useState(null)
    const [title, setTitle] = useState(null)
    const [date, setDate] = useState(null)
    const [body, setBody] = useState(null)
    const [attachments, setAttachments] = useState([])

    async function readMail() {
        try {
            let response = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${mailId}`)
            let responseJSON = await response.json()
            console.log(responseJSON)
            setFrom(responseJSON.from)
            setTitle(responseJSON.subject)
            setDate(normalTime(responseJSON.date))
            setAttachments(responseJSON.attachments)
            setBody(replace(responseJSON.htmlBody))
        }
        catch (err) {
            console.log(err)
            router.toBack()
        }
    }

    useEffect(
        () => {readMail()}, []
    )

    function replace(text) {
        let html = text.replace(/<a/gi, `<a target='_blank'`)
        return html
    }

    function normalTime(time) {
        const date = time.split(' ')[0].replace(/-/gi, ' ')
        const t = time.split(' ')[1]
        const hour = Number(t.split(':')[0]) + 1
        const minute = t.split(':')[1]
        const sec = t.split(':')[2]
        return `Дата ${date}, время ${hour}:${minute}:${sec}`
    }

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
                    <FormItem top='От' className='copy'>
                        {from}
                    </FormItem>
                    <FormItem top={'Заголовок'} style={{whiteSpace: 'pre-line'}}>
                        {title !== '' ? title : 'Без темы'}
                    </FormItem>
                    <FormItem top={'Текст письма'} style={{whiteSpace: 'pre-line'}}>
                        <div id='html' className='scroll' dangerouslySetInnerHTML={{__html: body }}/>
                    </FormItem>
                    <FormItem top={'Дата'}>
                        {date}
                    </FormItem>
                    {attachments.length !== 0 &&
                        <>
                            <FormLayout>
                                {attachments.map((el, index) => {
                                    return(
                                        <FormItem top={el.filename}>
                                            <Button
                                                size='l'
                                                stretched
                                                mode='secondary'
                                                href={`https://www.1secmail.com/api/v1/?action=download&login=${login}&domain=${domain}&id=${mailId}&file=${el.filename}`}
                                            >
                                                Скачать
                                            </Button>
                                        </FormItem>
                                    )
                                })}
                            </FormLayout>
                        </>
                    }
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