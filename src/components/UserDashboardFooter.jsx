import { React, Component } from "react";
import Helmet from "react-helmet";

export default class UserDashboardFooterTags extends Component {
  render() {
    return (
      <Helmet>
        <script src="js/core/jquery.min.js"></script>
        <script src="js/core/popper.min.js"></script>
        <script src="js/core/bootstrap-material-design.min.js"></script>
        <script src="../js/plugins/perfect-scrollbar.jquery.min.js"></script>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="js/plugins/chartist.min.js"></script>
        <script src="js/plugins/bootstrap-notify.js"></script>
        <script src="js/material-dashboard.js?v=2.1.0"></script>
        <script src="../demo/demo.js"></script>
      </Helmet>
    );
  }
}
