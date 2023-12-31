import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../api/api";
import {toggleLoader} from "../../app/slice";

export const getCountry = createAsyncThunk<CountryType[], void>('country/getCountry', async () => {
    const res = await api.getCountry()
    return res.data
})
export const getSearch = createAsyncThunk<CountryType[], string>('country/getSearch', async (arg:string) => {
    const res = await api.searchCountry(arg)
    return res.data
})
export const filterCountry = createAsyncThunk<CountryType[], string>('country/filterCountry', async (arg:string, thunkAPI) => {
  const {dispatch}= thunkAPI
        try {
            dispatch(toggleLoader(true));
            const res = await api.filterCountry(arg);
            return res.data;
        } catch (error) {
            // Обработка ошибки (может быть, бросить её снова для обработки на уровне компонента)
            throw error;
        } finally {
            dispatch(toggleLoader(false));
        }
    }
);

const slice = createSlice({
    name: 'country',
    initialState: [] as CountryType[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCountry.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(getSearch.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(filterCountry.fulfilled, (state, action) => {
            return action.payload
        })
    },


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
