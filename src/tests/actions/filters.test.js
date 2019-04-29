import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(1000));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1000)
    });
});

test('should generate set text filter for default value', () => {
    const action = setTextFilter({text: ''});
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set text filter for with text value', () => {
    const value = 'Some Value';
    const action = setTextFilter({text: value});
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: value
    });
});

test('should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});