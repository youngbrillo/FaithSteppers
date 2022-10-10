import React, { Children } from 'react';
import {
    createBrowserRouter,
    Route,
    useRouteError,

  } from "react-router-dom";

import ErrorPage from './error-page';
import App from '../App';

import 
    Contact, 
    {
        loader as contactLoader,
        action as contactAction
    }
from './contact'

import {
    loader as rootLoader,
    action as rootAction,
} from './root';

import EditContact, {action as EditAction} from './edit'

import {action as destroyAction} from './destroy'
import Index from './Index';

const router = createBrowserRouter([
{
    path: "/", 
    element: <App/>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [{
        errorElement: <ErrorPage />, //lock children in a pathless route to use this error page on each child
        children: [
            {
                index: true, element: <Index />
            },
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
                errorElement: <ErrorPage />,
                action: contactAction,

            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: EditAction,
            },
            {
                path: "contacts/:contactId/destroy",
                action: destroyAction,
                //errorElement: <div> Ooops! There was an error.</div>
            },
        ],
            
    }],
},
])

  export default router;



//   export async loader = () => {
//     const contacts = await getContacts();
//     return {contacts};
//   }