import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set up sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')        
    });
});

test('should set up sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    });
});

// Should set text filter

test('should set up text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'myfiltertext' });
    expect(state).toEqual({
        text: 'myfiltertext',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        sortBy: 'date'
    });
});

// Should set start date filter

test('should set start date filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment().startOf('month')});
    expect(state.startDate).toEqual(moment().startOf('month'));
});

// Should set end date filter

test('should set end date filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment().endOf('month')});
    expect(state.endDate).toEqual(moment().endOf('month'));
});

