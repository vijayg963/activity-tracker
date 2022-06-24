import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: [],
    };
  }
  handleActive = (day) => {
    this.setState((preState) => {
      if (preState.isActive.includes(day))
        return {
          ...preState,
          isActive: preState.isActive.filter((d) => d !== day),
        };
      else {
        return { ...preState, isActive: [...preState.isActive, day] };
      }
    });
  };
  render() {
    return (
      <div className='dashboard'>
        {this.props.monthData.map((I, i) => (
          <>
            <div key={i} className='flex'>
              <div className='info-box'>
                <h2>{I.title}</h2>
                <h2 className='month'>{I.getMonth}</h2>
              </div>
              <div className='calender'>
                {dateUI(I.monthLimit).map((day, i) => (
                  <span
                    key={i}
                    onClick={() => this.handleActive(day)}
                    className={
                      this.state.isActive.includes(day) ? 'day active' : 'day'
                    }
                  >
                    {day}
                  </span>
                ))}
              </div>
              <span className='delete' onClick={this.props.delete}>
                ❌
              </span>
            </div>
          </>
        ))}
      </div>
    );
  }
}

const dateUI = (limit) => {
  let month = [];
  for (let i = 1; i <= limit; i++) {
    month.push(i);
  }
  return month;
};

export default Dashboard;
