import {instance} from './base'

export const api={
    getCountry(){
return instance.get('all')
    },
    searchCountry(name:string){
        return instance.get(`name/${name}`)
    },

}

