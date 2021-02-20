"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosmicbet = void 0;
var $protobuf = require("protobufjs/minimal");
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $root = {};
exports.cosmicbet = $root.cosmicbet = (() => {
    const cosmicbet = {};
    cosmicbet.wta = (function () {
        const wta = {};
        wta.v1beta1 = (function () {
            const v1beta1 = {};
            v1beta1.Msg = (function () {
                function Msg(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (Msg.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Msg;
                Msg.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(Msg.prototype.buyTickets = function buyTickets(request, callback) {
                    return this.rpcCall(buyTickets, $root.cosmicbet.wta.v1beta1.MsgBuyTickets, $root.cosmicbet.wta.v1beta1.MsgBuyTicketsResponse, request, callback);
                }, "name", { value: "BuyTickets" });
                return Msg;
            })();
            v1beta1.MsgBuyTickets = (function () {
                function MsgBuyTickets(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }
                MsgBuyTickets.prototype.quantity = 0;
                MsgBuyTickets.prototype.buyer = "";
                MsgBuyTickets.create = function create(properties) {
                    return new MsgBuyTickets(properties);
                };
                MsgBuyTickets.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.quantity != null && Object.hasOwnProperty.call(m, "quantity"))
                        w.uint32(8).uint32(m.quantity);
                    if (m.buyer != null && Object.hasOwnProperty.call(m, "buyer"))
                        w.uint32(18).string(m.buyer);
                    return w;
                };
                MsgBuyTickets.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.cosmicbet.wta.v1beta1.MsgBuyTickets();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            case 1:
                                m.quantity = r.uint32();
                                break;
                            case 2:
                                m.buyer = r.string();
                                break;
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgBuyTickets;
            })();
            v1beta1.MsgBuyTicketsResponse = (function () {
                function MsgBuyTicketsResponse(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }
                MsgBuyTicketsResponse.create = function create(properties) {
                    return new MsgBuyTicketsResponse(properties);
                };
                MsgBuyTicketsResponse.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    return w;
                };
                MsgBuyTicketsResponse.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.cosmicbet.wta.v1beta1.MsgBuyTicketsResponse();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                        }
                    }
                    return m;
                };
                return MsgBuyTicketsResponse;
            })();
            return v1beta1;
        })();
        return wta;
    })();
    return cosmicbet;
})();
module.exports = $root;
