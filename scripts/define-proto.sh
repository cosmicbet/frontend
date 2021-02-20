#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./proto"
COSMIC_CASINO_PROTO_DIR="$ROOT_PROTO_DIR/cosmicbet"
COSMOS_PROTO_DIR="$ROOT_PROTO_DIR/third_party"

OUT_DIR="./src/codec/"

mkdir -p "$OUT_DIR"

protoc \
  --plugin="$(yarn bin protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$ROOT_PROTO_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$COSMIC_CASINO_PROTO_DIR/wta/v1beta1/genesis.proto" \
  "$COSMIC_CASINO_PROTO_DIR/wta/v1beta1/models.proto" \
  "$COSMIC_CASINO_PROTO_DIR/wta/v1beta1/msgs.proto" \
  "$COSMIC_CASINO_PROTO_DIR/wta/v1beta1/params.proto" \
  "$COSMIC_CASINO_PROTO_DIR/wta/v1beta1/query.proto" 

# Remove unnecessary codec files
rm -rf \
  src/codec/cosmos_proto/ \
  src/codec/gogoproto/ \
  src/codec/google/api/ \
  src/codec/google/protobuf/descriptor.ts