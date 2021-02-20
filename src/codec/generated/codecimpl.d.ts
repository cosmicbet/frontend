import * as $protobuf from "protobufjs";
/** Namespace cosmicbet. */
export namespace cosmicbet {

    /** Namespace wta. */
    namespace wta {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Msg service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Msg;

                /**
                 * Calls BuyTickets.
                 * @param request MsgBuyTickets message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgBuyTicketsResponse
                 */
                public buyTickets(request: cosmicbet.wta.v1beta1.IMsgBuyTickets, callback: cosmicbet.wta.v1beta1.Msg.BuyTicketsCallback): void;

                /**
                 * Calls BuyTickets.
                 * @param request MsgBuyTickets message or plain object
                 * @returns Promise
                 */
                public buyTickets(request: cosmicbet.wta.v1beta1.IMsgBuyTickets): Promise<cosmicbet.wta.v1beta1.MsgBuyTicketsResponse>;
            }

            namespace Msg {

                /**
                 * Callback as used by {@link cosmicbet.wta.v1beta1.Msg#buyTickets}.
                 * @param error Error, if any
                 * @param [response] MsgBuyTicketsResponse
                 */
                type BuyTicketsCallback = (error: (Error|null), response?: cosmicbet.wta.v1beta1.MsgBuyTicketsResponse) => void;
            }

            /** Properties of a MsgBuyTickets. */
            interface IMsgBuyTickets {

                /** MsgBuyTickets quantity */
                quantity?: (number|null);

                /** MsgBuyTickets buyer */
                buyer?: (string|null);
            }

            /** Represents a MsgBuyTickets. */
            class MsgBuyTickets implements IMsgBuyTickets {

                /**
                 * Constructs a new MsgBuyTickets.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmicbet.wta.v1beta1.IMsgBuyTickets);

                /** MsgBuyTickets quantity. */
                public quantity: number;

                /** MsgBuyTickets buyer. */
                public buyer: string;

                /**
                 * Creates a new MsgBuyTickets instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBuyTickets instance
                 */
                public static create(properties?: cosmicbet.wta.v1beta1.IMsgBuyTickets): cosmicbet.wta.v1beta1.MsgBuyTickets;

                /**
                 * Encodes the specified MsgBuyTickets message. Does not implicitly {@link cosmicbet.wta.v1beta1.MsgBuyTickets.verify|verify} messages.
                 * @param m MsgBuyTickets message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmicbet.wta.v1beta1.IMsgBuyTickets, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgBuyTickets message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgBuyTickets
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): cosmicbet.wta.v1beta1.MsgBuyTickets;
            }

            /** Properties of a MsgBuyTicketsResponse. */
            interface IMsgBuyTicketsResponse {
            }

            /** Represents a MsgBuyTicketsResponse. */
            class MsgBuyTicketsResponse implements IMsgBuyTicketsResponse {

                /**
                 * Constructs a new MsgBuyTicketsResponse.
                 * @param [p] Properties to set
                 */
                constructor(p?: cosmicbet.wta.v1beta1.IMsgBuyTicketsResponse);

                /**
                 * Creates a new MsgBuyTicketsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBuyTicketsResponse instance
                 */
                public static create(properties?: cosmicbet.wta.v1beta1.IMsgBuyTicketsResponse): cosmicbet.wta.v1beta1.MsgBuyTicketsResponse;

                /**
                 * Encodes the specified MsgBuyTicketsResponse message. Does not implicitly {@link cosmicbet.wta.v1beta1.MsgBuyTicketsResponse.verify|verify} messages.
                 * @param m MsgBuyTicketsResponse message or plain object to encode
                 * @param [w] Writer to encode to
                 * @returns Writer
                 */
                public static encode(m: cosmicbet.wta.v1beta1.IMsgBuyTicketsResponse, w?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgBuyTicketsResponse message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MsgBuyTicketsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): cosmicbet.wta.v1beta1.MsgBuyTicketsResponse;
            }
        }
    }
}
