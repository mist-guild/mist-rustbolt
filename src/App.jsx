import React, { useEffect, Fragment } from "react";
import { Switch, Route, Redirect} from "react-router-dom";

import {
  Home,
  Teams1,
  Teams2,
  Apply
} from "./components/pages";
import { Header, Sidebar, Footer } from "./components/layouts";
import { ModalForm } from "./components/ui";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
        <Fragment>
          <Sidebar data={state.data.menu} />
          <ModalForm />
          <Header data={state.data.menu} />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/apply" exact component={Apply} />
            <Route path="/teams/twb" exact component={Teams1} />
            <Route path="/teams/tcc" exact component={Teams2} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
