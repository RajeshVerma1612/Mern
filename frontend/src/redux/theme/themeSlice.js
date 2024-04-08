import {createSlice} from '@reduxjs/toolkit';
const getInitialTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
};

const initialState={
    theme:getInitialTheme(),
    // theme:'light',
};

const themeSlice= createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme: (state)=>{
            state.theme=state.theme === 'light'? 'dark':'light';
        },
    }
});

export const {toggleTheme}=themeSlice.actions;
export default themeSlice.reducer;