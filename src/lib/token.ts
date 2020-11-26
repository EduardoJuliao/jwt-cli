const jwt = require("jsonwebtoken");
const fs = require("fs");

function validateFile(pathToFile: string): void {
  if (!pathToFile) {
    console.log("json config must be informed.");
    process.exit();
  }

  if (!fs.existsSync(pathToFile)) {
    console.log("can't find a file in the informed path.");
    process.exit();
  }
}

export function createToken(pathToFile: string): string {
    validateFile(pathToFile);

  let appsettings = fs.readFileSync(pathToFile);
  let securitySettings = JSON.parse(appsettings)["SecuritySettings"];

  const signInOptions = {
    algorithm: "HS256",
    issuer: securitySettings.Issuer,
    audience: securitySettings.Audiences ? securitySettings.Audiences : [],
    expiresIn: 0,
  };

  return jwt.sign({}, securitySettings.Secret, signInOptions);
}
