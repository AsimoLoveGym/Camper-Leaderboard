"use strict";

function ObjectRow(props) {
  // const tableContents = props.tableContents;
  const userURL = "https://www.freecodecamp.com/"+props.item.username;
  let ranking = null;
  switch (props.index + 1) {
    case 1:
      ranking = <span className="badge badge-gold"><i className="fa fa-trophy" aria-hidden="true"></i></span>;
      break;
    case 2:
      ranking = <span className="badge badge-silver"><i className="fa fa-trophy" aria-hidden="true"></i></span>;
      break;
    case 3:
      ranking = <span className="badge badge-bronze"><i className="fa fa-trophy" aria-hidden="true"></i></span>;
      break;
  }

  return(
    <tr>
      <td>{props.index + 1} {ranking}</td>
      <td> <a href={userURL} target="_blank"><img src={props.item.img} className="user-img" />{props.item.username}</a></td>
      <td>{props.item.recent}</td>
      <td>{props.item.alltime}</td>
    </tr>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData: props.tableData,
      recentSorting: true,
    };
    this.recentSort = this.recentSort.bind(this);
    this.totalSort = this.totalSort.bind(this);
  }

  recentSort() {
    if (this.state.recentSorting) {
      return
    }

    let data = this.state.tableData.slice();
    console.log(data);
    data.sort(function(a,b){
      return a.recent < b.recent ? 1 : -1;
    })
    this.setState({
      tableData: data,
      recentSorting: true
    });
  }

  totalSort() {
    if (!this.state.recentSorting) {
      return
    }

    let data = this.state.tableData.slice();
    console.log(data);
    data.sort(function(a,b){
      return a.alltime < b.alltime ? 1 : -1;
    })
    this.setState({
      tableData: data,
      recentSorting: false
    });
  }

// function App(props) {
  render() {

    // const tableData = props.tableData;

    // function handleClick() {
    //   console.log("success 1");
    // }
    const isRecentSorting = this.state.recentSorting;
    let recentColWithBadge = null;
    let totalColWithBadge = null;

    if (isRecentSorting) {
      recentColWithBadge = <th scope="col" id="recent-points" onClick={this.totalSort}>Recent   <span className="badge badge-on"><i className="fa fa-sort-desc" aria-hidden="true"></i></span></th>
      totalColWithBadge = <th scope="col" id="total-points" onClick={this.recentSort}>Total   <span className="badge"><i className="fa fa-sort" aria-hidden="true"></i></span></th>
    } else {
      recentColWithBadge = <th scope="col" id="recent-points" onClick={this.totalSort}>Recent   <span className="badge"><i className="fa fa-sort" aria-hidden="true"></i></span></th>
      totalColWithBadge = <th scope="col" id="total-points" onClick={this.recentSort}>Total   <span className="badge badge-on"><i className="fa fa-sort-desc" aria-hidden="true"></i></span></th>
    }


    return(
      <table id="dispay-table" className="table table-striped table-bordered table-hover">
        <caption>
          Recent for points in past 30 days
        </caption>
        <colgroup>
          <col className="#" />
          <col className="camper" />
          <col className="recent" />
          <col className="total" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Camper</th>
            {recentColWithBadge}
            {totalColWithBadge}
          </tr>
        </thead>
        <tbody>
          {[...this.state.tableData].map((item,index,array)=>
            <ObjectRow key={index+1} index={index} item={item} />
          )}
        </tbody>
       </table>
    );
  }
}



$(document).ready(function() {
  const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  $.get(queryString, successFunction);

  // $("#recent-points").click(function () {
  //   // const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  //   // $.get(queryString, successFunction);
  //   console.log("recent click works");
  //
  // });
  //
  // $("#total-points").click(function () {
  //   // const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  //   // $.get(queryString, successFunction);
  //
  //   console.log("total click works");
  // });
  //
  // $("#app-title").click(function () {
  //   // const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  //   // $.get(queryString, successFunction);
  //
  //   console.log("For try");
  // });

});




function successFunction(data, status) {
  // console.log(data);
  ReactDOM.render(
    <App tableData={data}/>,
    document.getElementById('table-container')
  );
}
