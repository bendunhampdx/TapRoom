import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        kegList: [],
        selectedKeg: null,
        editing: false
    };
  }










}

export default KegControl;  