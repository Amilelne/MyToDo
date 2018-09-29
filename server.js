const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));

// using cors package allow easier to control
// cross origin resource sharing
app.use(cors());

// setting header is the right option. But will make confused when the app scale
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin,X-REquested-with,Content-Type,Accept,Authorization');
//     if(req.method === 'OPTIONS'){
//       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//       return res.status(200).json({});
//     }
//     next();
// })

// define SPA directory before serve
// use path.join() or path.resolve() for better controllable and cross platform affect
const appDir = path.join(__dirname, 'pages');

// serve static path. this is serve SPA requirements (resource path in this case)
app.use(express.static(appDir));
// serve static SPA index.html if request files not exists in static directory,
// and request path is not /api
// this behaviour call HistoryAPIFallback
app.use(/^((?!(api)).)*/, function(req, res) {
  res.sendFile(path.join(appDir, 'index.html'));
  //   This also work, but for routing SPA like Reactjs or Angular, use option below
  //   res.redirect('/');
});

// api serve
app.get('/api/todos', (req, res, next) => {
  const page = 'Hello';
  res.end(page);
  return res.status(200);
});

app.listen(3000, () => console.log('Listening on 3000!'));
