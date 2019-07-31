import React from 'react';
import { mount } from 'enzyme';
import UserContainer from './UserContainer';
import configureStore from 'redux-mock-store'
import { users, curUser } from '../mock';

const initialState = {
  User: {
    users,
    curUser
  }
};
const mockStore = configureStore();
let store;
store = mockStore(initialState);

describe('components', () => {
  it('should render users, new user', () => {
    const enzymeWrapper = mount(<UserContainer store={store} />);

    // render 3 users
    expect(enzymeWrapper.find('.user-item-container').find('.user-item').length).toBe(3);
  
    // output new user's name
    enzymeWrapper.find('input').simulate('change', {target:{value:'new user'}});

    expect(enzymeWrapper).toMatchSnapshot();

    enzymeWrapper.unmount();
  });
});
