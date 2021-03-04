/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmicbet.wta.v1beta1";

/** DistributionParams contains the parameters of the distribution of the prize */
export interface DistributionParams {
  /**
   * Percentage of the ticket cost that should be sent to the prize pool,
   * represented as a value between 0.00 and 1.00.
   */
  prizePercentage: string;
  /**
   * Percentage of the ticket cost that should be burnt,
   * represented as a value between 0.00 and 1.00.
   */
  burnPercentage: string;
  /**
   * Percentage of the ticket cost that should be considered as a fee,
   * represented as a value between 0.00 and 1.00.
   */
  feePercentage: string;
}

/** DrawParams contain the parameters for each draw */
export interface DrawParams {
  /**
   * Duration of each draw, after which the winner is picked and a new draw is
   * created
   */
  duration?: Duration;
}

/** TicketParams contain the parameters for each ticket */
export interface TicketParams {
  /** Cost of an individual ticket */
  price?: Coin;
}

const baseDistributionParams: object = {
  prizePercentage: "",
  burnPercentage: "",
  feePercentage: "",
};

export const DistributionParams = {
  encode(
    message: DistributionParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prizePercentage !== "") {
      writer.uint32(10).string(message.prizePercentage);
    }
    if (message.burnPercentage !== "") {
      writer.uint32(18).string(message.burnPercentage);
    }
    if (message.feePercentage !== "") {
      writer.uint32(26).string(message.feePercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionParams {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDistributionParams } as DistributionParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizePercentage = reader.string();
          break;
        case 2:
          message.burnPercentage = reader.string();
          break;
        case 3:
          message.feePercentage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DistributionParams {
    const message = { ...baseDistributionParams } as DistributionParams;
    if (
      object.prizePercentage !== undefined &&
      object.prizePercentage !== null
    ) {
      message.prizePercentage = String(object.prizePercentage);
    } else {
      message.prizePercentage = "";
    }
    if (object.burnPercentage !== undefined && object.burnPercentage !== null) {
      message.burnPercentage = String(object.burnPercentage);
    } else {
      message.burnPercentage = "";
    }
    if (object.feePercentage !== undefined && object.feePercentage !== null) {
      message.feePercentage = String(object.feePercentage);
    } else {
      message.feePercentage = "";
    }
    return message;
  },

  toJSON(message: DistributionParams): unknown {
    const obj: any = {};
    message.prizePercentage !== undefined &&
      (obj.prizePercentage = message.prizePercentage);
    message.burnPercentage !== undefined &&
      (obj.burnPercentage = message.burnPercentage);
    message.feePercentage !== undefined &&
      (obj.feePercentage = message.feePercentage);
    return obj;
  },

  fromPartial(object: DeepPartial<DistributionParams>): DistributionParams {
    const message = { ...baseDistributionParams } as DistributionParams;
    if (
      object.prizePercentage !== undefined &&
      object.prizePercentage !== null
    ) {
      message.prizePercentage = object.prizePercentage;
    } else {
      message.prizePercentage = "";
    }
    if (object.burnPercentage !== undefined && object.burnPercentage !== null) {
      message.burnPercentage = object.burnPercentage;
    } else {
      message.burnPercentage = "";
    }
    if (object.feePercentage !== undefined && object.feePercentage !== null) {
      message.feePercentage = object.feePercentage;
    } else {
      message.feePercentage = "";
    }
    return message;
  },
};

const baseDrawParams: object = {};

export const DrawParams = {
  encode(
    message: DrawParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DrawParams {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDrawParams } as DrawParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DrawParams {
    const message = { ...baseDrawParams } as DrawParams;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromJSON(object.duration);
    } else {
      message.duration = undefined;
    }
    return message;
  },

  toJSON(message: DrawParams): unknown {
    const obj: any = {};
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DrawParams>): DrawParams {
    const message = { ...baseDrawParams } as DrawParams;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    } else {
      message.duration = undefined;
    }
    return message;
  },
};

const baseTicketParams: object = {};

export const TicketParams = {
  encode(
    message: TicketParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TicketParams {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTicketParams } as TicketParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TicketParams {
    const message = { ...baseTicketParams } as TicketParams;
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },

  toJSON(message: TicketParams): unknown {
    const obj: any = {};
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TicketParams>): TicketParams {
    const message = { ...baseTicketParams } as TicketParams;
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
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
