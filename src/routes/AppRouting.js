import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';

const Route = createStackNavigator(
    {
        LoginPage:LoginPage,
        SignupPage:SignupPage,
        ProfilePage:ProfilePage
        
    },
    {
        initialRouteName:"LoginPage"
    }
);


const RouteConfig=createAppContainer(Route);

export default RouteConfig;