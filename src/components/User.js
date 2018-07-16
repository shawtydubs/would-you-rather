import React, {Component} from 'react';
import {connect} from 'react-redux';

class User extends Component {
    render() {
        const {authedUser} = this.props;

        return (
            <div className="user">
                {authedUser}
            </div>
        );
    };
};

const mapStateToProps = ({authedUser}) => {
    return {
        authedUser
    }
};

export default connect(mapStateToProps)(User);
