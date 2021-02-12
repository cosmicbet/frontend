console.log("Pinning website...");

const ENV = process.env;

console.log("ENV");
if (ENV.npm_config_github_action) {
  console.log(
    "secret ",
    ENV.npm_config_pinata_api_key,
    ENV.npm_config_pinata_secret_key
  );
} else {
  console.log("env ", ENV.PINATA_API_KEY, ENV.PINATA_SECRET_API_KEY);
}
