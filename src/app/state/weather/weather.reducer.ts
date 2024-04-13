import { createReducer } from "@ngrx/store";
import { WeatherState } from "../../core/interfaces/interfaces";

const initialState: WeatherState = {
    ids: [0],
    entities: {'0': 0},
    currentCount: 1
}

export const weatherReducer = createReducer(
    initialState
)