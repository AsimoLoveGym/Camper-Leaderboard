"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ObjectRow(props) {
  var userURL = "https://www.freecodecamp.com/" + props.item.username;
  var ranking = null;
  switch (props.index + 1) {
    case 1:
      ranking = React.createElement(
        "span",
        { className: "badge badge-gold" },
        React.createElement("i", { className: "fa fa-trophy", "aria-hidden": "true" })
      );
      break;
    case 2:
      ranking = React.createElement(
        "span",
        { className: "badge badge-silver" },
        React.createElement("i", { className: "fa fa-trophy", "aria-hidden": "true" })
      );
      break;
    case 3:
      ranking = React.createElement(
        "span",
        { className: "badge badge-bronze" },
        React.createElement("i", { className: "fa fa-trophy", "aria-hidden": "true" })
      );
      break;
  }

  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.index + 1,
      " ",
      ranking
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

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      tableData: props.tableData,
      recentSorting: true
    };
    _this.recentSort = _this.recentSort.bind(_this);
    _this.totalSort = _this.totalSort.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "recentSort",
    value: function recentSort() {
      // if current sorting is already recentSort, not necessary for sorting
      if (this.state.recentSorting) {
        return;
      }
      var data = this.state.tableData.slice();
      data.sort(function (a, b) {
        return a.recent < b.recent ? 1 : -1;
      });
      this.setState({
        tableData: data,
        recentSorting: true
      });
    }
  }, {
    key: "totalSort",
    value: function totalSort() {
      // if current sorting is already totalSort, not necessary for sorting
      if (!this.state.recentSorting) {
        return;
      }
      var data = this.state.tableData.slice();
      data.sort(function (a, b) {
        return a.alltime < b.alltime ? 1 : -1;
      });
      this.setState({
        tableData: data,
        recentSorting: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isRecentSorting = this.state.recentSorting;
      var recentColWithBadge = null;
      var totalColWithBadge = null;
      if (isRecentSorting) {
        // badge will indicate current sorting based on Recent points
        recentColWithBadge = React.createElement(
          "th",
          { scope: "col", id: "recent-points", onClick: this.totalSort },
          "Recent   ",
          React.createElement(
            "span",
            { className: "badge badge-on" },
            React.createElement("i", { className: "fa fa-sort-desc", "aria-hidden": "true" })
          )
        );
        totalColWithBadge = React.createElement(
          "th",
          { scope: "col", id: "total-points", onClick: this.recentSort },
          "Total   ",
          React.createElement(
            "span",
            { className: "badge" },
            React.createElement("i", { className: "fa fa-sort", "aria-hidden": "true" })
          )
        );
      } else {
        // badge will indicate current sorting based on Total points
        recentColWithBadge = React.createElement(
          "th",
          { scope: "col", id: "recent-points", onClick: this.totalSort },
          "Recent   ",
          React.createElement(
            "span",
            { className: "badge" },
            React.createElement("i", { className: "fa fa-sort", "aria-hidden": "true" })
          )
        );
        totalColWithBadge = React.createElement(
          "th",
          { scope: "col", id: "total-points", onClick: this.recentSort },
          "Total   ",
          React.createElement(
            "span",
            { className: "badge badge-on" },
            React.createElement("i", { className: "fa fa-sort-desc", "aria-hidden": "true" })
          )
        );
      }

      return React.createElement(
        "table",
        { id: "dispay-table", className: "table table-striped table-bordered table-hover" },
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
            recentColWithBadge,
            totalColWithBadge
          )
        ),
        React.createElement(
          "tbody",
          null,
          [].concat(_toConsumableArray(this.state.tableData)).map(function (item, index, array) {
            return React.createElement(ObjectRow, { key: index + 1, index: index, item: item });
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);

// The App will initialized with recent points sorting


$(document).ready(function () {
  // For error handler test
  // const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recentFDFDS";
  var queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  $.get(queryString, successFunction).fail(function (jqXHR, textStatus) {
    alert("Status: " + jqXHR.status + "\n" + "Detail: " + jqXHR.statusText);
  });
});

function successFunction(data, status) {
  ReactDOM.render(React.createElement(App, { tableData: data }), document.getElementById('table-container'));
}