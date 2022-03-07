import React, {useEffect, useState} from 'react';

import {
    withPlatform,
    FormLayout,
    FormItem,
    ModalCard,
    Button,
    Div,
} from "@vkontakte/vkui";

function BotsListModal({id, platform, router, mailId, login, domain, isDesktop}) {

    const [from, setFrom] = useState(null)
    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)
    const [date, setDate] = useState(null)

    async function readMail() {
        let response = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${mailId}`)
        let responseJSON = await response.json()
        console.log(responseJSON)
        setFrom(responseJSON.from)
        setTitle(responseJSON.subject)
        setText(responseJSON.textBody)
        setDate(responseJSON.date)
    }

    useEffect(
        () => {readMail()}, []
    )

    return (
        <ModalCard
            id={id}
            header={
                'Письмо'
            }
            onClose={() => router.toBack()}
            settlingHeight={100}
        >
            <FormLayout>
                <FormItem top={'От'}>
                    {from}
                </FormItem>
                <FormItem top={'Заголовок'}>
                    {title}
                </FormItem>
                <FormItem top={'Текст письма'}>
                    {text}
                </FormItem>
                <FormItem top={'Дата'}>
                    {date}
                </FormItem>
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
        </ModalCard>
    );
}

export default withPlatform(BotsListModal);