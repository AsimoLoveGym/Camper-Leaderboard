"use strict";

$("#recent-points").click(function () {
  var queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  $.get(queryString, successFunction);
});

// https://fcctop100.herokuapp.com/api/fccusers/top/alltime

function successFunction(data, status) {
  console.log(data);
}

// class DisplayContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//
//   }
//
//   render() {
//     // const placeHolder = ''
//
//
//     return(
//     );
//   }
// }
//
// ReactDOM.render(
//   <DisplayContainer />,
//   document.getElementById('leaderboard-tbody')
// );
