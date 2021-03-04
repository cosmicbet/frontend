/* eslint-disable */
import {
  DistributionParams,
  DrawParams,
  TicketParams,
} from "../../../cosmicbet/wta/v1beta1/params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import Long from "long";
import {
  Ticket,
  HistoricalDrawData,
} from "../../../cosmicbet/wta/v1beta1/models";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmicbet.wta.v1beta1";

/** GenesisState contains the data of the genesis state for the wda module */
export interface GenesisState {
  /** Defines the end time of the next draw */
  drawEndTime?: Date;
  /** Defines all the tickets present at genesis time */
  tickets: Ticket[];
  /** Defines the past draws present at genesis time */
  pastDraws: HistoricalDrawData[];
  /** Represents the parameters related to the prize distribution */
  distributionParams?: DistributionParams;
  /** Represents the parameters related to each draw */
  drawParams?: DrawParams;
  /** Represents the parameters related to each ticket */
  ticketParams?: TicketParams;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.drawEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.drawEndTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.tickets) {
      Ticket.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pastDraws) {
      HistoricalDrawData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.distributionParams !== undefined) {
      DistributionParams.encode(
        message.distributionParams,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.drawParams !== undefined) {
      DrawParams.encode(message.drawParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.ticketParams !== undefined) {
      TicketParams.encode(
        message.ticketParams,
        writer.uint32(50).fork()
      ).ldelim();
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
          message.drawEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
          message.distributionParams = DistributionParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.drawParams = DrawParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.ticketParams = TicketParams.decode(reader, reader.uint32());
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
    if (object.drawEndTime !== undefined && object.drawEndTime !== null) {
      message.drawEndTime = fromJsonTimestamp(object.drawEndTime);
    } else {
      message.drawEndTime = undefined;
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
    if (
      object.distributionParams !== undefined &&
      object.distributionParams !== null
    ) {
      message.distributionParams = DistributionParams.fromJSON(
        object.distributionParams
      );
    } else {
      message.distributionParams = undefined;
    }
    if (object.drawParams !== undefined && object.drawParams !== null) {
      message.drawParams = DrawParams.fromJSON(object.drawParams);
    } else {
      message.drawParams = undefined;
    }
    if (object.ticketParams !== undefined && object.ticketParams !== null) {
      message.ticketParams = TicketParams.fromJSON(object.ticketParams);
    } else {
      message.ticketParams = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.drawEndTime !== undefined &&
      (obj.drawEndTime =
        message.drawEndTime !== undefined
          ? message.drawEndTime.toISOString()
          : null);
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
    message.distributionParams !== undefined &&
      (obj.distributionParams = message.distributionParams
        ? DistributionParams.toJSON(message.distributionParams)
        : undefined);
    message.drawParams !== undefined &&
      (obj.drawParams = message.drawParams
        ? DrawParams.toJSON(message.drawParams)
        : undefined);
    message.ticketParams !== undefined &&
      (obj.ticketParams = message.ticketParams
        ? TicketParams.toJSON(message.ticketParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tickets = [];
    message.pastDraws = [];
    if (object.drawEndTime !== undefined && object.drawEndTime !== null) {
      message.drawEndTime = object.drawEndTime;
    } else {
      message.drawEndTime = undefined;
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
    if (
      object.distributionParams !== undefined &&
      object.distributionParams !== null
    ) {
      message.distributionParams = DistributionParams.fromPartial(
        object.distributionParams
      );
    } else {
      message.distributionParams = undefined;
    }
    if (object.drawParams !== undefined && object.drawParams !== null) {
      message.drawParams = DrawParams.fromPartial(object.drawParams);
    } else {
      message.drawParams = undefined;
    }
    if (object.ticketParams !== undefined && object.ticketParams !== null) {
      message.ticketParams = TicketParams.fromPartial(object.ticketParams);
    } else {
      message.ticketParams = undefined;
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
