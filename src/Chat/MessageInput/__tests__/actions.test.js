import { INPUT_UPDATED, USER_SENT_MESSAGE, INPUT_MODE_SWITCHED } from 'common/actionTypes';
import { updateInput, sendMessage, switchInputMode } from '../actions';

describe('#updateInput', () => {
  it('should create an action to update input', () => {
    const mockEvent = {
      target: {
        value: 'test',
      },
    };
    const expectedAction = {
      type: INPUT_UPDATED,
      payload: mockEvent.target.value,
    };
    expect(updateInput(mockEvent)).toEqual(expectedAction);
  });
});


describe('#sendMessage', () => {
  it('should create an action to send message/update messages', () => {
    const mockText = 'test';
    const expectedAction = {
      type: USER_SENT_MESSAGE,
      payload: {
        text: mockText,
        type: 'normal',
      },
      meta: {
        user: true,
        date: true,
        uuid: true,
        socket: true,
      },
    };
    expect(sendMessage(mockText)).toEqual(expectedAction);
  });
  it('should replace multiline texts', () => {
    const mockText = 'firstline \n secondline';
    const expectedAction = {
      type: USER_SENT_MESSAGE,
      payload: {
        text: 'firstline <br /> secondline',
        type: 'normal',
      },
      meta: {
        user: true,
        date: true,
        uuid: true,
        socket: true,
      },
    };
    expect(sendMessage(mockText)).toEqual(expectedAction);
  });
});


describe('#switchInputMode', () => {
  it('should create an action to update input mode', () => {
    const inputMode = 'command';
    const expectedAction = {
      type: INPUT_MODE_SWITCHED,
      payload: inputMode,
    };
    expect(switchInputMode(inputMode)).toEqual(expectedAction);
  });
});
