import { useEffect, useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'LOADING':
            return {
                loading: true,
                status: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                status: action.status,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                status: null,
                error: action.error
            };
        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}

function UseAsync(callback, deps= []) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    })

    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try {
            const response = await callback();
            console.log(response.status);
            dispatch({type: 'SUCCESS', status: response.status});
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    }

    useEffect(() => {
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default UseAsync;