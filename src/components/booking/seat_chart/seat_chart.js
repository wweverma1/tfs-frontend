import React from 'react'
import './seat_chart.css';

class seat_chart extends React.Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          ['1','2','3', '4', '5', '6', '7', '8', '9', '10'],
          ['11','12','13', '14', '15', '16', '17', '18', '19', '20'],
          ['21','22','23', '24', '25', '26', '27', '28', '29', '30'],
          ['31','32','33', '34', '35', '36', '37', '38', '39', '40'],
          ['41','42','43', '44', '45', '46', '47', '48', '49', '50']
        ],
        seatAvailable: [
          ['1','2','3', '4', '5', '6', '7', '8', '9', '10'],
          ['11','12','13', '14', '15', '16', '17', '18', '19', '20'],
          ['21','22','23', '24', '25', '26', '27', '28', '29', '30'],
          ['31','32','33', '34', '35', '36', '37', '38', '39', '40'],
          ['41','42','43', '44', '45', '46', '47', '48', '49', '50']
        ],
        seatReserved: [],
        seatUnavailable: ['12', '13', '14'],
      }
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res !== seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
        })
      }
    }
    
    render() {
      return (
        <div>
          <h4>PICK YOUR SEATS</h4>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            unavailable = {this.state.seatUnavailable}
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
  }

  export default seat_chart
  
  class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container">
          <table className="grid">
            <tbody>
              { this.props.seat.map((numList,i) => (
                <tr key={i}>
                { numList.map ( seat_no =>
                  <td 
                    className={this.props.unavailable.indexOf(seat_no) > -1? 'unavailable': this.props.reserved.indexOf(seat_no) > -1? 'reserved': 'available'}
                    key={seat_no} onClick = {e => this.onClickSeat(seat_no)}>{seat_no} 
                  </td>
                )}
                </tr>
              ))
              }
            </tbody>
          </table>
          
          {/* <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } /> */}
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
