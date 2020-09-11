import { Grid } from "@material-ui/core";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorDialog from "../components/common/ErrorDialog";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import "./PublicLayout.scss";

const PublicLayout: React.FC = (props) => {
  return (
    <>
      <Grid className="App-wrapper">
        <Grid>
          <Header />
        </Grid>
        <Grid className="App-content">
          <ErrorBoundary FallbackComponent={ErrorDialog}>
            {props.children}
          </ErrorBoundary>
        </Grid>
        <Grid>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default PublicLayout;
