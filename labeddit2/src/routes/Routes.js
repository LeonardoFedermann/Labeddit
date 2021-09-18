import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import FeedPage from '../pages/FeedPage'
import PostPage from '../pages/PostPage'
import ErrorPage from '../pages/ErrorPage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LoginPage />
                </Route>
                <Route exact path='/register'>
                    <RegisterPage />
                </Route>
                <Route exact path='/feed'>
                    <FeedPage />
                </Route>
                <Route exact path='/feed/:postId'>
                    <PostPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}