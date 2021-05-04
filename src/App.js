import {HashRouter, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from "./components/NavigationBar";
import Quiz from './components/Quiz';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [quizNum, setQuizNum] = useState(localStorage.getItem('qid') || 0);

    let onLoggedIn = (email) => {
        localStorage.setItem('username', email);
        setUsername(email);
    }

    let clickedQuiz = (qid) => {
        localStorage.setItem('qid', qid);
        setQuizNum(qid);
    }
    return (
        <HashRouter>
        <Container fluid>
        <NavigationBar username={username} />
        <Switch>
            <Route exact path="/">
                <Home clickedQuiz={clickedQuiz}/>
            </Route>
            <Route path="/login" >
                <Login onLoggedIn={onLoggedIn} />
            </Route>
            <Route path="/quiz" >
                <Quiz quizNum={quizNum}/>
            </Route>
        </Switch>
        </Container>
        </HashRouter>
    );
}

export default App;
