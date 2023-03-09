import { React, Component } from "react";
import Helmet from "react-helmet";

export default class HomeFooterTags extends Component {
  render() {
    return (
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"
        ></script>
      </Helmet>
    );
  }
}
