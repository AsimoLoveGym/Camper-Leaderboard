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

function App(props) {
  const tableData = props.tableData;
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
          <th scope="col" id="recent-points">Recent   <span className="badge badge-on"><i className="fa fa-sort-desc" aria-hidden="true"></i></span></th>
          <th scope="col" id="total-points">Total   <span className="badge"><i className="fa fa-sort" aria-hidden="true"></i></span></th>
        </tr>
      </thead>
      <tbody>
        {[...tableData].map((item,index,array)=>
          <ObjectRow key={index+1} index={index} item={item} />
        )}
      </tbody>
     </table>
  );
}



$(document).ready(function() {
  const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  $.get(queryString, successFunction);
});

$("#recent-points").click(function () {
  const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  $.get(queryString, successFunction);
});

$("#total-points").click(function () {
  const queryString = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  $.get(queryString, successFunction);
});


function successFunction(data, status) {
  // console.log(data);
  ReactDOM.render(
    <App tableData={data}/>,
    document.getElementById('table-container')
  );
}
