import { React, Component } from "react";
import Helmet from "react-helmet";

export default class UserDashboardHeaderTags extends Component {
  render() {
    return (
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
        <link href="css/material-dashboard.css?v=2.1.0" rel="stylesheet" />
        <link href="demo/demo.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <body className="light-edition" />
      </Helmet>
    );
  }
}
