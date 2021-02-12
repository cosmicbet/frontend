console.log("Pinning website...");

const ENV = process.env;
if (ENV.npm_config_github_action) {
  console.log(
    "secret ",
    ENV.npm_config_pinata_api_key,
    ENV.npm_config_pinata_secret_key
  );
}
