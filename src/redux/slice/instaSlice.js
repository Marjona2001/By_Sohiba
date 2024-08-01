import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url, weddings_id, weddings_access_token } from '../../assets/utils/environments';

// Async thunk for fetching Instagram media
export const instaMedia = createAsyncThunk(
    'insta/media', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}${weddings_id}/media`, {
                params: {
                    fields: 'media_type,media_url,children{media_type,media_url}',
                    access_token: weddings_access_token
                }
            });
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const instaSlice = createSlice({
    name: 'insta',
    initialState: {
        instaMedias: [],
        loading: false,
        appErr: undefined,
        serverErr: undefined,
    },
    extraReducers: (builder) => {
        builder
            .addCase(instaMedia.pending, (state) => {
                state.loading = true;
                state.appErr = undefined;
                state.serverErr = undefined;
            })
            .addCase(instaMedia.fulfilled, (state, action) => {
                state.loading = false;
                const media = action.payload;
                state.instaMedias = {
                    images: media.filter(post => post.media_type === 'IMAGE'),
                    videos: media.filter(post => post.media_type === 'VIDEO'),
                    // Uncomment if needed
                    // carousels: media.filter(post => post.media_type === 'CAROUSEL_ALBUM')
                };
            })
            .addCase(instaMedia.rejected, (state, action) => {
                state.loading = false;
                state.appErr = action.payload;
                state.serverErr = action.error.message;
            });
    }
});

export default instaSlice.reducer;
