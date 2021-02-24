/* eslint-disable */
import {
  Draw,
  Ticket,
  HistoricalDrawData,
} from "../../../cosmicbet/wta/v1beta1/models";
import { Params } from "../../../cosmicbet/wta/v1beta1/params";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmicbet.wta.v1beta1";

/** GenesisState contains the data of the genesis state for the wda module */
export interface GenesisState {
  draw?: Draw;
  tickets: Ticket[];
  pastDraws: HistoricalDrawData[];
  params?: Params;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.draw !== undefined) {
      Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tickets) {
      Ticket.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pastDraws) {
      HistoricalDrawData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tickets = [];
    message.pastDraws = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.draw = Draw.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickets.push(Ticket.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pastDraws.push(
            HistoricalDrawData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tickets = [];
    message.pastDraws = [];
    if (object.draw !== undefined && object.draw !== null) {
      message.draw = Draw.fromJSON(object.draw);
    } else {
      message.draw = undefined;
    }
    if (object.tickets !== undefined && object.tickets !== null) {
      for (const e of object.tickets) {
        message.tickets.push(Ticket.fromJSON(e));
      }
    }
    if (object.pastDraws !== undefined && object.pastDraws !== null) {
      for (const e of object.pastDraws) {
        message.pastDraws.push(HistoricalDrawData.fromJSON(e));
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.draw !== undefined &&
      (obj.draw = message.draw ? Draw.toJSON(message.draw) : undefined);
    if (message.tickets) {
      obj.tickets = message.tickets.map((e) =>
        e ? Ticket.toJSON(e) : undefined
      );
    } else {
      obj.tickets = [];
    }
    if (message.pastDraws) {
      obj.pastDraws = message.pastDraws.map((e) =>
        e ? HistoricalDrawData.toJSON(e) : undefined
      );
    } else {
      obj.pastDraws = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tickets = [];
    message.pastDraws = [];
    if (object.draw !== undefined && object.draw !== null) {
      message.draw = Draw.fromPartial(object.draw);
    } else {
      message.draw = undefined;
    }
    if (object.tickets !== undefined && object.tickets !== null) {
      for (const e of object.tickets) {
        message.tickets.push(Ticket.fromPartial(e));
      }
    }
    if (object.pastDraws !== undefined && object.pastDraws !== null) {
      for (const e of object.pastDraws) {
        message.pastDraws.push(HistoricalDrawData.fromPartial(e));
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
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
