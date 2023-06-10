export const name_validation = {
    name: 'Nom',
    label: 'Nom',
    type: 'text',
    id: 'name',
    placeholder: 'Entrez votre nom',
    validation: {
        required: {
            value: true,
            message: 'champ requis',
        },
        maxLength: {
            value: 30,
            message: '30 caractères max',
        },
    },
}

export const message_validation = {
    name: 'Message',
    label: 'Message',
    multiline: true,
    id: 'message',
    placeholder: 'Saisissez votre message...',
    validation: {
        required: {
            value: true,
            message: 'champ requis',
        },
        maxLength: {
            value: 250,
            message: '250 caractères max',
        },
    },
}

export const subject_validation = {
    name: 'Sujet',
    label: 'Sujet',
    id: 'subject',
    placeholder: 'Entrez un sujet pour votre message...',
    validation: {
        required: {
            value: true,
            message: 'champ requis',
        },
        maxLength: {
            value: 50,
            message: '50 caractères max',
        },
    },
}

export const email_validation = {
    name: 'Email',
    label: 'Adresse email',
    type: 'email',
    id: 'email',
    placeholder: 'Entrez votre adresse email',
    validation: {
        required: {
            value: true,
            message: 'champ requis',
        },
        pattern: {
            value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'adresse email non valide',
        },
    },
}