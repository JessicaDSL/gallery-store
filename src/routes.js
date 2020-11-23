import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
// import { Container } from './styles';

import GalleryStore from "./pages/index"


export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/gallerystore" component={GalleryStore} />
      </Switch>
    </BrowserRouter>
  );
}