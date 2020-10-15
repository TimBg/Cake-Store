import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchCakes = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios
        .get(
            `/cakes?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order
            }`,
        )
        .then(({ data }) => {
            dispatch(setCakes(data));
        });
};

export const setCakes = (items) => ({
    type: 'SET_CAKES',
    payload: items,
});
