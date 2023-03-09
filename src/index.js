import H5P from "./H5P";
import { createRoot } from "react-dom/client";

import App from "./components/App.jsx";

class HelloReact {

  constructor(options, id) {
    this.options = options;
    this.id = id;
  }

  attach($container) {
    const container = $container.get(0);
    const root = createRoot(container);
    root.render(<App title={this.options.title} />);
  }
}

H5P.HelloReact = HelloReact;
