/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmicbet.wta.v1beta1";

/** Params contains the module parameters */
export interface Params {
  /**
   * Percentage of the ticket cost that should be sent to the prize pool (out of
   * 100)
   */
  prizePercentage: string;
  /**
   * Percentage of the ticket cost that should be sent to the community pool
   * (out of 100)
   */
  communityPoolPercentage: string;
  /** Percentage of the ticket cost that should be burnt (out of 100) */
  burnPercentage: string;
  /**
   * Duration of each draw, after which the winner is picked and a new draw is
   * created
   */
  drawDuration?: Duration;
  /** Cost of an individual ticket */
  ticketPrice?: Coin;
}

const baseParams: object = {
  prizePercentage: "",
  communityPoolPercentage: "",
  burnPercentage: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prizePercentage !== "") {
      writer.uint32(10).string(message.prizePercentage);
    }
    if (message.communityPoolPercentage !== "") {
      writer.uint32(18).string(message.communityPoolPercentage);
    }
    if (message.burnPercentage !== "") {
      writer.uint32(26).string(message.burnPercentage);
    }
    if (message.drawDuration !== undefined) {
      Duration.encode(message.drawDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.ticketPrice !== undefined) {
      Coin.encode(message.ticketPrice, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizePercentage = reader.string();
          break;
        case 2:
          message.communityPoolPercentage = reader.string();
          break;
        case 3:
          message.burnPercentage = reader.string();
          break;
        case 4:
          message.drawDuration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.ticketPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.prizePercentage !== undefined &&
      object.prizePercentage !== null
    ) {
      message.prizePercentage = String(object.prizePercentage);
    } else {
      message.prizePercentage = "";
    }
    if (
      object.communityPoolPercentage !== undefined &&
      object.communityPoolPercentage !== null
    ) {
      message.communityPoolPercentage = String(object.communityPoolPercentage);
    } else {
      message.communityPoolPercentage = "";
    }
    if (object.burnPercentage !== undefined && object.burnPercentage !== null) {
      message.burnPercentage = String(object.burnPercentage);
    } else {
      message.burnPercentage = "";
    }
    if (object.drawDuration !== undefined && object.drawDuration !== null) {
      message.drawDuration = Duration.fromJSON(object.drawDuration);
    } else {
      message.drawDuration = undefined;
    }
    if (object.ticketPrice !== undefined && object.ticketPrice !== null) {
      message.ticketPrice = Coin.fromJSON(object.ticketPrice);
    } else {
      message.ticketPrice = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.prizePercentage !== undefined &&
      (obj.prizePercentage = message.prizePercentage);
    message.communityPoolPercentage !== undefined &&
      (obj.communityPoolPercentage = message.communityPoolPercentage);
    message.burnPercentage !== undefined &&
      (obj.burnPercentage = message.burnPercentage);
    message.drawDuration !== undefined &&
      (obj.drawDuration = message.drawDuration
        ? Duration.toJSON(message.drawDuration)
        : undefined);
    message.ticketPrice !== undefined &&
      (obj.ticketPrice = message.ticketPrice
        ? Coin.toJSON(message.ticketPrice)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.prizePercentage !== undefined &&
      object.prizePercentage !== null
    ) {
      message.prizePercentage = object.prizePercentage;
    } else {
      message.prizePercentage = "";
    }
    if (
      object.communityPoolPercentage !== undefined &&
      object.communityPoolPercentage !== null
    ) {
      message.communityPoolPercentage = object.communityPoolPercentage;
    } else {
      message.communityPoolPercentage = "";
    }
    if (object.burnPercentage !== undefined && object.burnPercentage !== null) {
      message.burnPercentage = object.burnPercentage;
    } else {
      message.burnPercentage = "";
    }
    if (object.drawDuration !== undefined && object.drawDuration !== null) {
      message.drawDuration = Duration.fromPartial(object.drawDuration);
    } else {
      message.drawDuration = undefined;
    }
    if (object.ticketPrice !== undefined && object.ticketPrice !== null) {
      message.ticketPrice = Coin.fromPartial(object.ticketPrice);
    } else {
      message.ticketPrice = undefined;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
