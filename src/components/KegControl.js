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

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleSellingPint = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    if(selectedKeg.volume >= .125) {
        const newVolume = selectedKeg.volume - .125;
        const newKeg = Object.assign({}, selectedKeg, {volume: newVolume});
        const newKegList = this.state.kegList.filter(keg => keg.id !== selectedKeg.id).concat(newKeg);
        this.setState({
            kegList: newKegList,
        });
    }
}

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
        kegList : newKegList,
        formVisibleOnPage: false
    });
  };

  handleDeletingKeg = (id) => {
    const newKegList = this.state.kegList.filter(keg => keg.id !== id);
    this.setState({
      KegList: newKegList,
      selectedKeg: null,
      editing: false
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing:true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedKegList = this.state.kegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      kegList: editedKegList,
      editing: false,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
      keg = {this.state.selectedKeg} 
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Back to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onAddingNewKeg={this.handleAddingNewKegToList} />;
      buttonText = "Back to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.kegList} 
      onKegSelection={this.handleChangingSelectedKeg} 
      onClickingSell = {this.handleSellingPint} />;
      buttonText = "Add Keg";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <div className="container">
        <button id="friendButton" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default KegControl;  