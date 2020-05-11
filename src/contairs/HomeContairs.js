import { connect } from "react-redux";

import Home from '../component/Home/Home.jsx';
import {
	homeArtActions
} from '../redux/modules/homeAction.js'

function mapStateToProps(state){
	return {
		// headerLists: state.header.headerLists,
		artLists: state.home.artLists,
	};
};

function mapDispatchToProps(dispatch){
	return {
		// headerActions: ( value ) => dispatch(headerActions( value )),
		homeArtActions: ( value ) => dispatch(homeArtActions( value )),
	}; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);