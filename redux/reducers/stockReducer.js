import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        addStock: {
            reducer(state, action) {
                const listItem = action.payload;
                let index = 0;
                /* tslint:disable-next-line */ // @ts-ignore
                if (state.length < 1) {
                    state.push(listItem)
                } else {
                    /* tslint:disable-next-line */ // @ts-ignore
                    for (let i = 0; i < state.length; i++) {
                        if (state[i].symbol === listItem.symbol) {
                            index++;
                        }
                    }
                    if (index === 0) {
                        state.push(listItem)
                    }
                }
            },
            prepare(payload) {
                return {
                    payload
                }
            }
        },
        /* tslint:disable-next-line */ // @ts-ignore
        del: {
            reducer(state, action) {
                const itemToDel = action.payload;
                for (let i = 0; i < state.length; i++) {
                    if (state[i].symbol === itemToDel) {
                        state.splice(i, 1);
                    }
                }
            }
        }
    }
})

const { actions, reducer } = listSlice;

export const { addStock, del } = actions;

export default reducer;