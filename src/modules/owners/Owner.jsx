import { Component } from "react";
import { connect } from "react-redux";
import { fetchOwners, deleteOwner, openOrCloseAddOwnerModal } from "./action";
import AddOwner from "./AddOwner";

class Owner extends Component {

  componentDidMount() {
    this.props.fetchOwners();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="my-3 table-responsive">
          <div className="d-flex justify-content-end">
            <i className="fa fa-plus text-success cursor-pointer fa-2x" onClick={() => this.props.openOrCloseAddOwnerModal(true)}></i>
          </div>
          <table className="my-3 table table-hover table-bordered">
            <thead className="table-head">
              <tr className="table-primary">
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props?.owners.map((owner, index) => {
                return (
                  <tr key={index}>
                    <td className="text-primary">{owner.name}</td>
                    <td>{owner.contact}</td>
                    <td>{owner.email}</td>
                    <td className="d-flex justify-content-between">
                      <i className="fa fa-edit fa-2x cursor-pointer text-info" onClick={() => this.props.deleteOwner(owner.id)}></i>
                      <i className="fa fa-trash fa-2x text-danger" onClick={() => this.props.deleteOwner(owner.id)}></i>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          { this.props.showModal ? <AddOwner /> : null }
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    owners: state.ownersReducer.owners,
    isLoading: state.ownersReducer.isLoading,
    showModal: state.ownersReducer.showModal
  };
};

export default connect(mapStateToProps, { fetchOwners, deleteOwner, openOrCloseAddOwnerModal })(Owner);