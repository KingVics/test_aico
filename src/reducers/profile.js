// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'LOADING':
            return {isLoading: true, isError: null, data: []};
        case 'REJECTED':
            return {isLoading: false, isError: action.payload, data: []};
        case "FETCH_PROFILE":
            return { isLoading: false, isError: null, data: action.payload};
        default:
            return state;
    }
}