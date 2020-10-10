import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";


class NotiAlert extends Component {
    render() {
        return (
            <AlertContainer>
                <Alert type="info">Hello, world</Alert>
                <Alert type="success">Oh, hai</Alert>
            </AlertContainer>
        );
    }
}

export default NotiAlert;