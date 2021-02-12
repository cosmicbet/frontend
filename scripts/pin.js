console.log("Pinning website...");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const recursive = require("recursive-fs");
const ENV = process.env;

const pinataApiKey = ENV.PINATA_API_KEY ? ENV.PINATA_API_KEY : "";
const pinataSecretApiKey = ENV.PINATA_SECRET_API_KEY
  ? PINATA_SECRET_API_KEY
  : "";

const folder = "public";
const name = "cosmic.bet";

const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

recursive.readdirr(folder, function (err, dirs, files) {
  let data = new FormData();
  files.forEach((file) => {
    data.append(`file`, fs.createReadStream(file), {
      filepath: file,
    });
  });

  const metadata = JSON.stringify({
    name,
  });
  data.append("pinataMetadata", metadata);

  return axios
    .post(url, data, {
      maxContentLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    })
    .then(function (response) {
      const pin = response.data.IpfsHash;
      console.log("Pinned Hash: ", pin);

      const gatewayUrl = "https://gateway.pinata.cloud/ipfs/" + pin;
      console.log("Demo URL: " + gatewayUrl);
    })
    .catch(function (error) {
      console.log("Error when pinning using Pinata", error);
    });
});
