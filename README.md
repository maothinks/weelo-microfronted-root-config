# Weelo Microfrontend Root-Config (App Container)

This is the main microfrontend app, it will contain the other microfrontends: (Navbar, Auth, Properties and users)

- Microfrontend NavBar
- Microfrontend Auth
- Microfrontend Properties
- Microfrontend Users

## Installation

In the index.ejs you can edit the applications loaded to this container.

> Note: For tests, each application uses an specific port, see below config

#### index.ejs　

```javascript

<script type="systemjs-importmap">
    {
      "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
        "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",

        "@maothinks/microfrontend-auth": "http://localhost:8500/maothinks-microfrontend-auth.js",
        "@maothinks/microfrontend-navbar": "http://localhost:8501/maothinks-microfrontend-navbar.js",
        "@maothinks/microfrontend-properties": "http://localhost:8502/maothinks-microfrontend-properties.js",
        "@maothinks/microfrontend-users": "http://localhost:8503/maothinks-microfrontend-users.js",
        "@maothinks/root-config": "//localhost:9000/maothinks-root-config.js"
      }
    }
  </script>
```

Install the dependencies and start the server (use port 9000 for tests).

```sh
cd weelo-microfronted-root-config
npm i
npm start
```


## System Diagram

Weelo Properties System:

![](https://firebasestorage.googleapis.com/v0/b/weeloproject.appspot.com/o/WeeloPropertiesDiagram.png?alt=media&token=2ab10264-64c4-4cf1-9763-e93b82729069)

## Frontend Video Demos

Here you can watch some videos with the app functionality

| Use Case | Video Demo |
| ------ | ------ |
| Login and Sign-up |  <https://screencast-o-matic.com/watch/c3VF2xVoK4a> |
| Create New Property | <https://screencast-o-matic.com/watch/c3VF2gVoKaM> |
| Upload Images  | <https://screencast-o-matic.com/watch/c3VF2KVoKBq> |
| Update Property (Included update price) | <https://screencast-o-matic.com/watch/c3VF2MVoKBN> |
| Search Properties Using Filters | <https://screencast-o-matic.com/watch/c3VFouVoKG9> |
| Update Views and SignalR | <https://screencast-o-matic.com/watch/c3VFoAVoKHL> |
| Navigate to user Profile | <https://screencast-o-matic.com/watch/c3VFoUVoKm3> |
| App Logout | <https://screencast-o-matic.com/watch/c3VFowVoKmB> |

## Technical Video Demos

| Process | Video Demo |
| ------ | ------ |
| Runing Unit Tests | <https://screencast-o-matic.com/watch/c3VFD2VoK8k> |
| Start Microservices | <https://screencast-o-matic.com/watch/c3VFDYVoKPR> |
| Start Microfrontends | <https://screencast-o-matic.com/watch/c3VFDvVoKSD> |
| RabBit MQ Monitor Queues | <https://screencast-o-matic.com/watch/c3VFDmVo7VR> |



**Weelo Technical Test, Mauricio Zapata**

**Cheers!!!**
