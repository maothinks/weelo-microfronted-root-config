import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine,} from "single-spa-layout";

import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });


//Register Applications
registerApplication('@maothinks/microfrontend-auth', () => System.import('@maothinks/microfrontend-auth'),
  () => window.location.pathname.indexOf('/login') === 0);

registerApplication('@maothinks/microfrontend-navbar', () => System.import('@maothinks/microfrontend-navbar'), 
  () => (window.location.pathname.indexOf('/properties') === 0 || window.location.pathname.indexOf('/users') === 0));

registerApplication('@maothinks/microfrontend-properties', () => System.import('@maothinks/microfrontend-properties'), 
  () => window.location.pathname.startsWith('/properties') === true);

registerApplication('@maothinks/microfrontend-users', () => System.import('@maothinks/microfrontend-users'), 
  () => window.location.pathname.startsWith('/users') === true);

layoutEngine.activate();

start();
