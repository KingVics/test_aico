// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {loading: true, error: null, data: []};
        case 'ERROR':
            return {loading: false, error: action.payload, data: []};
        case "FETCH_COUNSEL":
            return { loading: false, error: null, data: action.payload};
        case 'SUBMIT_FORM':
            return { loading: false, error: null, data: action.payload};
        default:
            return state;
    }
}