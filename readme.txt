command for running :
 babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
command for server  :
 live-server public 
 command for running specific files :
 babel src/playground/reactCounter.js --out-file=public/scripts/app.js --presets=env,react --watch

for building :
yarn run build (good for production and physical copy of bundle.js)

#update
for using webpack server: 
yarn run dev-server (it compiles and run the app and good for development, 
it also used snappy memory so dont need to rely on bundle.js) 



for installing sass:
yarn add sass-loader@6.0.6  node-sass@4.5.3




for error in 404 directed to index.html read this :https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback