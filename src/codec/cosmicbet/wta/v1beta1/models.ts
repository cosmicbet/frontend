/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmicbet.wta.v1beta1";

/** Ticket represents a single entry for the next drawn */
export interface Ticket {
  id: string;
  owner: string;
  timestamp?: Date;
}

/** Draw contains the data of the next planned draw */
export interface Draw {
  participants: number;
  ticketsSold: number;
  prize: Coin[];
  endTime?: Date;
}

/** HistoricalDrawData contains the data of a past draw and its winner */
export interface HistoricalDrawData {
  draw?: Draw;
  winningTicket?: Ticket;
}

const baseTicket: object = { id: "", owner: "" };

export const Ticket = {
  encode(
    message: Ticket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ticket {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTicket } as Ticket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ticket {
    const message = { ...baseTicket } as Ticket;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    return message;
  },

  toJSON(message: Ticket): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined &&
      (obj.timestamp =
        message.timestamp !== undefined
          ? message.timestamp.toISOString()
          : null);
    return obj;
  },

  fromPartial(object: DeepPartial<Ticket>): Ticket {
    const message = { ...baseTicket } as Ticket;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    return message;
  },
};

const baseDraw: object = { participants: 0, ticketsSold: 0 };

export const Draw = {
  encode(message: Draw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participants !== 0) {
      writer.uint32(8).uint32(message.participants);
    }
    if (message.ticketsSold !== 0) {
      writer.uint32(16).uint32(message.ticketsSold);
    }
    for (const v of message.prize) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Draw {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDraw } as Draw;
    message.prize = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participants = reader.uint32();
          break;
        case 2:
          message.ticketsSold = reader.uint32();
          break;
        case 3:
          message.prize.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Draw {
    const message = { ...baseDraw } as Draw;
    message.prize = [];
    if (object.participants !== undefined && object.participants !== null) {
      message.participants = Number(object.participants);
    } else {
      message.participants = 0;
    }
    if (object.ticketsSold !== undefined && object.ticketsSold !== null) {
      message.ticketsSold = Number(object.ticketsSold);
    } else {
      message.ticketsSold = 0;
    }
    if (object.prize !== undefined && object.prize !== null) {
      for (const e of object.prize) {
        message.prize.push(Coin.fromJSON(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = fromJsonTimestamp(object.endTime);
    } else {
      message.endTime = undefined;
    }
    return message;
  },

  toJSON(message: Draw): unknown {
    const obj: any = {};
    message.participants !== undefined &&
      (obj.participants = message.participants);
    message.ticketsSold !== undefined &&
      (obj.ticketsSold = message.ticketsSold);
    if (message.prize) {
      obj.prize = message.prize.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.prize = [];
    }
    message.endTime !== undefined &&
      (obj.endTime =
        message.endTime !== undefined ? message.endTime.toISOString() : null);
    return obj;
  },

  fromPartial(object: DeepPartial<Draw>): Draw {
    const message = { ...baseDraw } as Draw;
    message.prize = [];
    if (object.participants !== undefined && object.participants !== null) {
      message.participants = object.participants;
    } else {
      message.participants = 0;
    }
    if (object.ticketsSold !== undefined && object.ticketsSold !== null) {
      message.ticketsSold = object.ticketsSold;
    } else {
      message.ticketsSold = 0;
    }
    if (object.prize !== undefined && object.prize !== null) {
      for (const e of object.prize) {
        message.prize.push(Coin.fromPartial(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime;
    } else {
      message.endTime = undefined;
    }
    return message;
  },
};

const baseHistoricalDrawData: object = {};

export const HistoricalDrawData = {
  encode(
    message: HistoricalDrawData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.draw !== undefined) {
      Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
    }
    if (message.winningTicket !== undefined) {
      Ticket.encode(message.winningTicket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalDrawData {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHistoricalDrawData } as HistoricalDrawData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.draw = Draw.decode(reader, reader.uint32());
          break;
        case 2:
          message.winningTicket = Ticket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalDrawData {
    const message = { ...baseHistoricalDrawData } as HistoricalDrawData;
    if (object.draw !== undefined && object.draw !== null) {
      message.draw = Draw.fromJSON(object.draw);
    } else {
      message.draw = undefined;
    }
    if (object.winningTicket !== undefined && object.winningTicket !== null) {
      message.winningTicket = Ticket.fromJSON(object.winningTicket);
    } else {
      message.winningTicket = undefined;
    }
    return message;
  },

  toJSON(message: HistoricalDrawData): unknown {
    const obj: any = {};
    message.draw !== undefined &&
      (obj.draw = message.draw ? Draw.toJSON(message.draw) : undefined);
    message.winningTicket !== undefined &&
      (obj.winningTicket = message.winningTicket
        ? Ticket.toJSON(message.winningTicket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<HistoricalDrawData>): HistoricalDrawData {
    const message = { ...baseHistoricalDrawData } as HistoricalDrawData;
    if (object.draw !== undefined && object.draw !== null) {
      message.draw = Draw.fromPartial(object.draw);
    } else {
      message.draw = undefined;
    }
    if (object.winningTicket !== undefined && object.winningTicket !== null) {
      message.winningTicket = Ticket.fromPartial(object.winningTicket);
    } else {
      message.winningTicket = undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
