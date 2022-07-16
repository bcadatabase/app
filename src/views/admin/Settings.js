import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings(props) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings page={props.page}/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile page={props.page}/>
        </div>
      </div>
    </>
  );
}
