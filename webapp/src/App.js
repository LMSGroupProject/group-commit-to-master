import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import LandingPage from './LandingPage';
import './App.css';
import Header from "./main/Header";
import Footer from "./main/Footers";
import Home from "./main/Home";
import Login from "./login/login";
import Registration from "./registration/Registration";
import Courses from "./LearnerDisplay/Courses";
import {TrainerUserPage} from "./Trainer/TrainerUserPage";
import AddCourse from "./Course/AddCourse";
import ShowCourseDetails from "./LearnerDisplay/ShowCourseDetails";
import TrainerCourse from "./Trainer/TrainerCourse";
import AddModule from "./Course/AddModule";
import TrainerModule from "./Trainer/TrainerModule";
import AddSection from "./Course/AddSection";
import Form from "./Exam/Form";
import LearnerDisplayHomepage from "./LearnerDisplay/LearnerDisplayHomepage";
import uploadVideoForm from "./yt-courseCreation/uploadVideoForm";
import ViewSection from "./Trainer/ViewSection";
import AddYoutube from "./Course/AddYoutube";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
                    <main className="w3-content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Registration}/>
                        <Route path="/courses" component={Courses}/>
                        <Route path="/trainerPage" component={TrainerUserPage}/>
                        <Route path="/addExam/:moduleId" component={Form}/>
                        <Route path="/addCourse/:trainerId" component={AddCourse}/>
                        <Route path="/trainerCourse/:courseId" component={TrainerCourse}/>
                        <Route path="/addModule/:courseId" component={AddModule}/>
                        <Route path="/trainerModule/:moduleId" component={TrainerModule}/>
                        <Route path="/addSection/:moduleId" component={AddSection}/>
                        <Route path="/showcourse/:courseId" component={ShowCourseDetails}/>
                        <Route path="/learner" component={LearnerDisplayHomepage}/>
                        <Route path="/uploadVideo/:sectionId" component={uploadVideoForm}/>
                        <Route path="/viewSection/:sectionId" component={ViewSection}/>
                        <Route path="/addYoutube/:sectionId" component={AddYoutube}/>
                    </main>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;