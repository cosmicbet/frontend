/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Tickets,
  Draw,
  HistoricalDrawsData,
} from "../../../cosmicbet/wta/v1beta1/models";
import { Params } from "../../../cosmicbet/wta/v1beta1/params";
import _m0 from "protobufjs/minimal";
import Long from "long";

export const protobufPackage = "cosmicbet.wta.v1beta1";

/** QueryTicketsRequest is the request type for the Query/Tickets RPC method. */
export interface QueryTicketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryTicketsResponse is the response type for the Query/Tickets RPC method */
export interface QueryTicketsResponse {
  tickets?: Tickets;
  pagination?: PageResponse;
}

/** QueryDrawRequest is the request type for the Query/Draw RPC method. */
export interface QueryNextDrawRequest {}

/** QueryDrawResponse is the response type for the Query/Draw RPC method */
export interface QueryNextDrawResponse {
  draw?: Draw;
}

/** QueryPastDrawsRequest is the request type for the Query/PastDraws RPC method. */
export interface QueryPastDrawsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryPastDrawsResponse is the response type for the Query/PastDraws RPC
 * method
 */
export interface QueryPastDrawsResponse {
  draws?: HistoricalDrawsData;
  pagination?: PageResponse;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params?: Params;
}

const baseQueryTicketsRequest: object = {};

export const QueryTicketsRequest = {
  encode(
    message: QueryTicketsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTicketsRequest {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryTicketsRequest
    ) as QueryTicketsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTicketsRequest {
    const message = globalThis.Object.create(
      baseQueryTicketsRequest
    ) as QueryTicketsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<QueryTicketsRequest>): QueryTicketsRequest {
    const message = { ...baseQueryTicketsRequest } as QueryTicketsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTicketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
};

const baseQueryTicketsResponse: object = {};

export const QueryTicketsResponse = {
  encode(
    message: QueryTicketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tickets !== undefined) {
      Tickets.encode(message.tickets, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTicketsResponse {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryTicketsResponse
    ) as QueryTicketsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickets = Tickets.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTicketsResponse {
    const message = globalThis.Object.create(
      baseQueryTicketsResponse
    ) as QueryTicketsResponse;
    if (object.tickets !== undefined && object.tickets !== null) {
      message.tickets = Tickets.fromJSON(object.tickets);
    } else {
      message.tickets = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<QueryTicketsResponse>): QueryTicketsResponse {
    const message = { ...baseQueryTicketsResponse } as QueryTicketsResponse;
    if (object.tickets !== undefined && object.tickets !== null) {
      message.tickets = Tickets.fromPartial(object.tickets);
    } else {
      message.tickets = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTicketsResponse): unknown {
    const obj: any = {};
    message.tickets !== undefined &&
      (obj.tickets = message.tickets
        ? Tickets.toJSON(message.tickets)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
};

const baseQueryNextDrawRequest: object = {};

export const QueryNextDrawRequest = {
  encode(
    _: QueryNextDrawRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNextDrawRequest {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryNextDrawRequest
    ) as QueryNextDrawRequest;
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

  fromJSON(_: any): QueryNextDrawRequest {
    const message = globalThis.Object.create(
      baseQueryNextDrawRequest
    ) as QueryNextDrawRequest;
    return message;
  },

  fromPartial(_: DeepPartial<QueryNextDrawRequest>): QueryNextDrawRequest {
    const message = { ...baseQueryNextDrawRequest } as QueryNextDrawRequest;
    return message;
  },

  toJSON(_: QueryNextDrawRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

const baseQueryNextDrawResponse: object = {};

export const QueryNextDrawResponse = {
  encode(
    message: QueryNextDrawResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.draw !== undefined) {
      Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNextDrawResponse {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryNextDrawResponse
    ) as QueryNextDrawResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.draw = Draw.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNextDrawResponse {
    const message = globalThis.Object.create(
      baseQueryNextDrawResponse
    ) as QueryNextDrawResponse;
    if (object.draw !== undefined && object.draw !== null) {
      message.draw = Draw.fromJSON(object.draw);
    } else {
      message.draw = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<QueryNextDrawResponse>
  ): QueryNextDrawResponse {
    const message = { ...baseQueryNextDrawResponse } as QueryNextDrawResponse;
    if (object.draw !== undefined && object.draw !== null) {
      message.draw = Draw.fromPartial(object.draw);
    } else {
      message.draw = undefined;
    }
    return message;
  },

  toJSON(message: QueryNextDrawResponse): unknown {
    const obj: any = {};
    message.draw !== undefined &&
      (obj.draw = message.draw ? Draw.toJSON(message.draw) : undefined);
    return obj;
  },
};

const baseQueryPastDrawsRequest: object = {};

export const QueryPastDrawsRequest = {
  encode(
    message: QueryPastDrawsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPastDrawsRequest {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryPastDrawsRequest
    ) as QueryPastDrawsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPastDrawsRequest {
    const message = globalThis.Object.create(
      baseQueryPastDrawsRequest
    ) as QueryPastDrawsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<QueryPastDrawsRequest>
  ): QueryPastDrawsRequest {
    const message = { ...baseQueryPastDrawsRequest } as QueryPastDrawsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPastDrawsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
};

const baseQueryPastDrawsResponse: object = {};

export const QueryPastDrawsResponse = {
  encode(
    message: QueryPastDrawsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.draws !== undefined) {
      HistoricalDrawsData.encode(
        message.draws,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPastDrawsResponse {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryPastDrawsResponse
    ) as QueryPastDrawsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.draws = HistoricalDrawsData.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPastDrawsResponse {
    const message = globalThis.Object.create(
      baseQueryPastDrawsResponse
    ) as QueryPastDrawsResponse;
    if (object.draws !== undefined && object.draws !== null) {
      message.draws = HistoricalDrawsData.fromJSON(object.draws);
    } else {
      message.draws = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<QueryPastDrawsResponse>
  ): QueryPastDrawsResponse {
    const message = { ...baseQueryPastDrawsResponse } as QueryPastDrawsResponse;
    if (object.draws !== undefined && object.draws !== null) {
      message.draws = HistoricalDrawsData.fromPartial(object.draws);
    } else {
      message.draws = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPastDrawsResponse): unknown {
    const obj: any = {};
    message.draws !== undefined &&
      (obj.draws = message.draws
        ? HistoricalDrawsData.toJSON(message.draws)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryParamsRequest
    ) as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = globalThis.Object.create(
      baseQueryParamsRequest
    ) as QueryParamsRequest;
    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseQueryParamsResponse
    ) as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = globalThis.Object.create(
      baseQueryParamsResponse
    ) as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Tickets queries all the stored tickets for the next draw */
  Tickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse>;
  /** NextDraw queries the next planned drawn */
  NextDraw(request: QueryNextDrawRequest): Promise<QueryNextDrawResponse>;
  /** PastDraws queries the past draws that have already been drawn */
  PastDraws(request: QueryPastDrawsRequest): Promise<QueryPastDrawsResponse>;
  /** Params queries the wta parameters */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Tickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse> {
    const data = QueryTicketsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmicbet.wta.v1beta1.Query",
      "Tickets",
      data
    );
    return promise.then((data) =>
      QueryTicketsResponse.decode(new _m0.Reader(data))
    );
  }

  NextDraw(request: QueryNextDrawRequest): Promise<QueryNextDrawResponse> {
    const data = QueryNextDrawRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmicbet.wta.v1beta1.Query",
      "NextDraw",
      data
    );
    return promise.then((data) =>
      QueryNextDrawResponse.decode(new _m0.Reader(data))
    );
  }

  PastDraws(request: QueryPastDrawsRequest): Promise<QueryPastDrawsResponse> {
    const data = QueryPastDrawsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmicbet.wta.v1beta1.Query",
      "PastDraws",
      data
    );
    return promise.then((data) =>
      QueryPastDrawsResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmicbet.wta.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
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
