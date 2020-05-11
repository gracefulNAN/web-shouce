import { connect } from "react-redux";

import Bank from '../component/Bank/Bank.jsx'

function mapStateToProps(state){
	return {
		// headerLists: state.header.headerLists,
		// artLists: state.home.artLists,
	};
};

function mapDispatchToProps(dispatch){
	return {
		// headerActions: ( value ) => dispatch(headerActions( value )),
		// homeArtActions: ( value ) => dispatch(homeArtActions( value )),
	}; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Bank);