import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {

    handleAdd = (event) => {
        event.preventDefault();
        this.props.handleShowAdd();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'black' }}>
                <a className="navbar-brand" href="#a">Todo</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#a">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a" onClick={(event) => this.handleAdd(event)}>Thêm Mới</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleShowAdd: () => {
            dispatch({type: 'EDIT_NOTE'})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);