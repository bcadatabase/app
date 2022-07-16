/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  function callMenu(db_index, table_index) {
    props.changeTable(data[db_index].name,data[db_index].tables[table_index].name);
  }
  let data = [
    {
      name: "Database 1", id: "xyz", tables: [
        { name: "Table 1", id: "xyz xyz", columns: "" },
        { name: "Table 2", id: "xyz xyz", columns: "" },
        { name: "Table 3", id: "xyz xyz", columns: "" },
      ]
    },
    {
      name: "Database 2", id: "xyz", tables: [
        { name: "Table 1", id: "xyz xyz", columns: "" },
        { name: "Table 2", id: "xyz xyz", columns: "" },
      ]
    },
    {
      name: "Database 3", id: "xyz", tables: [
        { name: "Table 1", id: "xyz xyz", columns: "" },
        { name: "Table 2", id: "xyz xyz", columns: "" },
        { name: "Table 3", id: "xyz xyz", columns: "" },
        { name: "Table 4", id: "xyz xyz", columns: "" },
      ]
    }
  ]
  let Menu_list = [];
  for (const [index, value] of data.entries()) {
    Menu_list.push(<>
      <hr className="my-4 md:min-w-full" />
      <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
        <b><i className="fas fa-database"></i> {value.name}</b>
      </h6>
    </>)
    for (const [i, v] of value.tables.entries()) {
      Menu_list.push(<>
        <li onClick={() => callMenu(index, i)} className="inline-flex cursor-pointer">
          <i className="fas fa-table mr-2 text-blueGray-300 text-base"></i>
          {v.name}

        </li>
      </>);
    }
  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link onClick={()=>props.changeTable("Settings","None")}
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            User Name
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link onClick={()=>props.changeTable("Settings","None")}
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    User Name
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {Menu_list}
          </div>
        </div>
      </nav>
      
    </>
  );
}
