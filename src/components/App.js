import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, replace } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} count2={this.props.count2} count3={this.props.count3} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onCounter={this.props.onCounter}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onCounter: () => dispatch(replace())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      count2: state.count2,
      count3: state.count3
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);