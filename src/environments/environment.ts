// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB92XypwT-OG92n4IN2pmo4FMbYYbVQE_w",
    authDomain: "bitshifted-spark.firebaseapp.com",
    databaseURL: "https://bitshifted-spark.firebaseio.com",
    projectId: "bitshifted-spark",
    storageBucket: "bitshifted-spark.appspot.com",
    messagingSenderId: "50041902546"
  }
};
