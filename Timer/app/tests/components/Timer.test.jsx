const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', function() {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
    }, 1001);
    done();
  });

  it('should pause timer on paused status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer/>);
    
    timer.setState({ count: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
    }, 1100);
    done();
  });

  it('should clear timer on stopped status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer/>);
    
    timer.setState({ count: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
    }, 1100);
    done();
  });
});