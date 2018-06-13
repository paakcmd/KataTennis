import React from 'react';
import { shallow, mount } from 'enzyme';
import { Tennis } from './Tennis.js';

import '../setupTests.js';
import '../tempPolyfills.js';

describe('Tennis', () => {
  let tennis = shallow(<Tennis />);
  let props = { player1:{ score:0 }, player2:{ score :0 } };

  it('renders properly', () => {
    expect(tennis).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockCreatePlayers = jest.fn();
    beforeEach(() => {
        props.createPlayers = mockCreatePlayers;
        tennis = mount(<Tennis { ...props } />)
    });
    it('calls `createPlayers() to initialize the game`', () => {
      expect(mockCreatePlayers).toHaveBeenCalled();
    });
    
  });

});
