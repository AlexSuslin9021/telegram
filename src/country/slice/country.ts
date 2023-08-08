import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name:'country',
    initialState:'',
    reducers:{},
    extraReducers:(builder)=>{

    }
})
export const country =slice.reducer

type CountryType={
    "name": {
        "common": "string",
        "official": "string",
        "nativeName": {
            "ara": {
                "official": "string",
                "common": "string"
            }
        }
    },
    "capital": ["string"],
    "altSpellings": ["string"],
    "region": "string",
    "subregion": "string",
    "languages": {
        "ara": "string"
    },
    "timezones": ["string"],
    "continents": ["string"],
    "flags": {
        "svg": "string",
    },
    "coatOfArms": {
        "svg": "string"
    },
}
