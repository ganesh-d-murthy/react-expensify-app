export const setTextFilter = ({text = ''} = {}) => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    };
};

export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    };
};

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    };
};

export const setStartDate = (date = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate: date
    };
};

export const setEndDate = (date = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate: date
    };
};