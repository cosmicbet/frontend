/* eslint-disable */
import _m0 from "protobufjs/minimal";
import Long from "long";

export const protobufPackage = "cosmicbet.wta.v1beta1";

/**
 * MsgBuyTickets represents the message to use to buy one or more lottery
 * tickets.
 */
export interface MsgBuyTickets {
  quantity: number;
  buyer: string;
}

/** MsgBuyTicketsResponse defines the Msg/BuyTickets response type. */
export interface MsgBuyTicketsResponse {}

const baseMsgBuyTickets: object = { quantity: 0, buyer: "" };

export const MsgBuyTickets = {
  encode(
    message: MsgBuyTickets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quantity !== 0) {
      writer.uint32(8).uint32(message.quantity);
    }
    if (message.buyer !== "") {
      writer.uint32(18).string(message.buyer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyTickets {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseMsgBuyTickets
    ) as MsgBuyTickets;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = reader.uint32();
          break;
        case 2:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyTickets {
    const message = globalThis.Object.create(
      baseMsgBuyTickets
    ) as MsgBuyTickets;
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<MsgBuyTickets>): MsgBuyTickets {
    const message = { ...baseMsgBuyTickets } as MsgBuyTickets;
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: MsgBuyTickets): unknown {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },
};

const baseMsgBuyTicketsResponse: object = {};

export const MsgBuyTicketsResponse = {
  encode(
    _: MsgBuyTicketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBuyTicketsResponse {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseMsgBuyTicketsResponse
    ) as MsgBuyTicketsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyTicketsResponse {
    const message = globalThis.Object.create(
      baseMsgBuyTicketsResponse
    ) as MsgBuyTicketsResponse;
    return message;
  },

  fromPartial(_: DeepPartial<MsgBuyTicketsResponse>): MsgBuyTicketsResponse {
    const message = { ...baseMsgBuyTicketsResponse } as MsgBuyTicketsResponse;
    return message;
  },

  toJSON(_: MsgBuyTicketsResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

/** Msg defines the wta message service. */
export interface Msg {
  /** BuyTickets defines the method to buy one or more lottery tickets */
  BuyTickets(request: MsgBuyTickets): Promise<MsgBuyTicketsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  BuyTickets(request: MsgBuyTickets): Promise<MsgBuyTicketsResponse> {
    const data = MsgBuyTickets.encode(request).finish();
    const promise = this.rpc.request(
      "cosmicbet.wta.v1beta1.Msg",
      "BuyTickets",
      data
    );
    return promise.then((data) =>
      MsgBuyTicketsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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
