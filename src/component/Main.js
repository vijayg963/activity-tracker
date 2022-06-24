import React from 'react';
import Dashboard from './Dashboard';

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getLimit = (month) => {
  switch (month) {
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return 30;
    case 'February':
      return 28;
    default:
      return 31;
  }
};

let getMonth = months[new Date().getMonth()];

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false,
      title: '',
      monthData: [],
    };
  }
  addItem(e) {
    e.preventDefault();

    const title = this.state.title;
    const monthLimit = getLimit(getMonth);
    const obj = { title: title, monthLimit: monthLimit, getMonth: getMonth };
    this.state.monthData.push(obj);
    console.log(obj);
  }
  handleDashboard = () => {
    this.setState({
      display: true,
    });
  };
  handleInput = (event) => {
    let getValue = event.target.value;
    this.setState({
      title: getValue,
    });
  };
  handleDelete = () => {
    this.setState({
      display: false,
    });
  };
  render() {
    const { monthData } = this.state;
    console.log(monthData);
    return (
      <>
        <form
          onSubmit={(e) => {
            this.addItem(e);
          }}
        >
          <input
            onChange={this.handleInput}
            type='text'
            placeholder='e.g. coding'
          />
          <button onClick={this.handleDashboard}>Add Activity</button>
        </form>
        <div className={this.state.display ? 'active-box' : 'hidden'}>
          <Dashboard monthData={monthData} delete={this.handleDelete} />
        </div>
      </>
    );
  }
}

export default Main;
