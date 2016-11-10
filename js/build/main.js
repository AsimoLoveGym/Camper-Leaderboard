"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function ObjectRow(props) {
  // const tableContents = props.tableContents;
  var userURL = "https://www.freecodecamp.com/" + props.item.username;

  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.index + 1
    ),
    React.createElement(
      "td",
      null,
      " ",
      React.createElement(
        "a",
        { href: userURL, target: "_blank" },
        React.createElement("img", { src: props.item.img, className: "user-img" }),
        props.item.username
      )
    ),
    React.createElement(
      "td",
      null,
      props.item.recent
    ),
    React.createElement(
      "td",
      null,
      props.item.alltime
    )
  );
}

function App(props) {
  var tableData = props.tableData;
  // const tableItems = tableData.map((item,index,array)=> {
  //   // console.log(item);
  //   <tr key={index}>
  //     <td>{index}</td>
  //     <td>{item.username}<img src={item.img} /></td>
  //     <td>{item.recent}</td>
  //     <td>{item.alltime}</td>
  //   </tr>
  // })
  // console.log(tableItems);
  console.log(tableData);
  return React.createElement(
    "table",
    { className: "table table-striped table-bordered table-hover" },
    React.createElement(
      "caption",
      null,
      "Recent for points in past 30 days"
    ),
    React.createElement(
      "colgroup",
      null,
      React.createElement("col", { className: "#" }),
      React.createElement("col", { className: "camper" }),
      React.createElement("col", { className: "recent" }),
      React.createElement("col", { className: "total" })
    ),
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          { scope: "col" },
          "#"
        ),
        React.createElement(
          "th",
          { scope: "col" },
          "Camper"
        ),
        React.createElement(
          "th",
          { scope: "col", id: "recent-points" },
          "Recent   ",
          React.createElement(
            "span",
            { className: "badge badge-on" },
            React.createElement("i", { className: "fa fa-sort-desc", "aria-hidden": "true" })
          )
        ),
        React.createElement(
          "th",
          { scope: "col", id: "total-points" },
          "Total   ",
          React.createElement(
            "span",
            { className: "badge" },
            React.createElement("i", { className: "fa fa-sort", "aria-hidden": "true" })
          )
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      [].concat(_toConsumableArray(tableData)).map(function (item, index, array) {
        return React.createElement(ObjectRow, { key: index + 1, index: index, item: item });
      })
    )
  );
}

$(document).ready(function () {
  var queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  $.get(queryString, successFunction);
});

$("#recent-points").click(function () {
  var queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  $.get(queryString, successFunction);
});

$("#total-points").click(function () {
  var queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  $.get(queryString, successFunction);
});

function successFunction(data, status) {
  // console.log(data);
  ReactDOM.render(React.createElement(App, { tableData: data }), document.getElementById('table-container'));
}