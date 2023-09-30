const generator = require("openapi-ts-generator");

generator.generateTsModels({
  openApiJsonUrl: "http://localhost:7226/swagger/v1/swagger.json",
  outputPath: "./src/models/",
  genAngularFormGroups: true /* Set this to true if only if you're in an Angular project*/,
});