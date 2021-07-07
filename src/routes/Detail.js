import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";


function Detail({ toDo , onBtnClick }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
	  <Link to={'/'}>
	  <button onClick={onBtnClick}>DEL</button>
	  </Link>
    </>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
	const id = parseInt(ownProps.match.params.id);
	return {
	  onBtnClick: () => dispatch(actionCreators.deleteToDo(id))
	};
}

function mapStateToProps(state, ownProps) {
	const {
		match: {
			params: { id }
		}
	} = ownProps;
	return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);