import React, {Component} from 'react';

//App globals
import logo from './img/name.jpg';
import './App.css';

//Bootstrap
import {Grid, Row, Col} from 'react-bootstrap'

//Components
import UserDiv from './components/UserDiv/UserDiv';
import MainNav from './components/MainNav/MainNav';

class App extends Component {

    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2 className="App-title">Welcome to my resume'</h2>
                        <Grid>
                            <Row>
                                <Col xs="12">
                                    <MainNav/>
                                </Col>
                            </Row>
                        </Grid>
                    </header>

                    <Grid className="show-grid">
                        <Row className="show-row">
                        </Row>
                        <Row>
                            <Col xs={11} className="mainContent">
                                lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem lorem ipsum flagram handemlorem ipsum flagram handemlorem ipsum flagram handem
                            </Col>
                        </Row>
                    </Grid>

                </div>

        );
    }
}

export default App;
