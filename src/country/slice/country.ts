import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../api/api";

export const getCountry = createAsyncThunk<CountryType[], void>('country/getCountry', async () => {
    const res = await api.getCountry()
    return res.data
})

const slice = createSlice({
    name: 'country',
    initialState: [] as CountryType[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCountry.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export const country = slice.reducer

type CountryType = {
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
