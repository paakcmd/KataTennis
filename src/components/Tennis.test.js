import React from 'react';
import { shallow, mount } from 'enzyme';
import { Tennis } from './Tennis';
import '../setupTests.js';
import '../tempPolyfills.js';

describe('Tennis', () => {
  const mockScoreUpdater = jest.fn()
  const props = { tennis: { p1: 0, p2: 0 }, scoreUpdater: mockScoreUpdater };
  const tennis = shallow(<Tennis {...props} />);

  it('renders properly', () => {
    expect(tennis).toMatchSnapshot();
  });

  it('displays name from props', () => {
    expect(tennis.find('.name-box').text()).toEqual('Love-ALL');
  });

  it('displays scores from props', () => {
    expect(tennis.find('#score-box1').text()).toEqual('0');
    expect(tennis.find('#score-box2').text()).toEqual('0');

  });

  describe('when user click on the buttons', () => {
    beforeEach(() => {
      tennis.find('#p1-scoreInc-button').simulate('click');
      tennis.find('#p2-scoreInc-button').simulate('click');
    });

    it('updates score on each of score boxes', () => {
      expect(mockScoreUpdater).toHaveBeenCalledWith('p1');
      expect(mockScoreUpdater).toHaveBeenCalledWith('p2');
    });
  });
});
