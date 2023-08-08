import {instance} from "./base";

export const api={
    getChat(){
return instance.get('chat.get')
    },
    getMessage(id:string){
        return instance.get(`message.get${id}`)
    },
}

export type ChatType= {
    "response": [
    {
        "id": string,
        "created_at": number,
        "title": string,
        "avatar": string,
        "private": boolean,
        "last_message": {
            "created_at": number,
            "user_id": string,
            "user_name": string,
            "user_surname": string,
            "you": boolean,
            "message": string
        },
        "users": UsersType[],
        "count_unread": number
    }
]
}

type UsersType={

    "id": string,
    "name": string,
    "surname": string,
    "avatar": string


}

export type  MessagesType=  {
    "id": string,
    "created_at": number,
    "user": {
        "id": string,
        "name": string,
        "surname": string,
        "avatar": string,
        "you": boolean
    },
    "message": string,
    "is_new": boolean
}