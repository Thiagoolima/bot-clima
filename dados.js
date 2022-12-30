{
        status: 200,
                statusText: 'OK',
                        headers: AxiosHeaders {
                server: 'openresty',
                        date: 'Fri,
                30 Dec 2022 07: 00: 39 GMT',
                'content-type': 'application/json; charset=utf-8',
                        'content-length': '475',
                                connection: 'close',
                                        'x-cache-key': '/data/2.5/weather?lang=pt_br&lat=-15.85&lon=-47.92&units=metric',
                                                'access-control-allow-origin': '*',
                                                        'access-control-allow-credentials': 'true',
                                                                'access-control-allow-methods': 'GET, POST'
        },
        config: {
                transitional: {
                        silentJSONParsing: true,
                                forcedJSONParsing: true,
                                        clarifyTimeoutError: false
                },
                adapter: ['xhr', 'http'
                ],
                        transformRequest: [
                                [Function: transformRequest
                                ]
                        ],
                                transformResponse: [
                                        [Function: transformResponse
                                        ]
                                ],
                                        timeout: 0,
                                                xsrfCookieName: 'XSRF-TOKEN',
                                                        xsrfHeaderName: 'X-XSRF-TOKEN',
                                                                maxContentLength: -1,
                                                                        maxBodyLength: -1,
                                                                                env: {
                                                                                        FormData: [Function
                                                                                        ], Blob: null
                },
                validateStatus: [Function: validateStatus
                ],
                        headers: AxiosHeaders {
                        Accept: 'application/json, text/plain, * /*',
                                'User-Agent': 'axios/1.2.2',
                                        'Accept-Encoding': 'gzip, compress, deflate, br'
                },
                method: 'get',
                        url: 'https://api.openweathermap.org/data/2.5/weather?lat=-15.847412&lon=-47.921508&units=metric&lang=pt_br&appid=ebb994018b6d1f9928293e2411272895',
                                data: undefined
        },
        request: <ref * 1 > ClientRequest {
                _events: [Object: null prototype] {
                        abort: [Function(anonymous)],
                                aborted: [Function(anonymous)],
                                        connect: [Function(anonymous)],
                                                error: [Function(anonymous)],
                                                        socket: [Function(anonymous)],
                                                                timeout: [Function(anonymous)],
                                                                        finish: [Function: requestOnFinish]
                },
                _eventsCount: 7,
                        _maxListeners: undefined,
                                outputData: [],
                                        outputSize: 0,
                                                writable: true,
                                                        destroyed: false,
                                                                _last: true,
                                                                        chunkedEncoding: false,
                                                                                shouldKeepAlive: false,
                                                                                        maxRequestsOnConnectionReached: false,
                                                                                                _defaultKeepAlive: true,
                                                                                                        useChunkedEncodingByDefault: false,
                                                                                                                sendDate: false,
                                                                                                                        _removedConnection: false,
                                                                                                                                _removedContLen: false,
                                                                                                                                        _removedTE: false,
                                                                                                                                                strictContentLength: false,
                                                                                                                                                        _contentLength: 0,
                                                                                                                                                                _hasBody: true,
                                                                                                                                                                        _trailer: '',
                                                                                                                                                                                finished: true,
                                                                                                                                                                                        _headerSent: true,
                                                                                                                                                                                                _closed: false,
                                                                                                                                                                                                        socket: TLSSocket {
                        _tlsOptions: [Object],
                                _secureEstablished: true,
                                        _securePending: false,
                                                _newSessionPending: false,
                                                        _controlReleased: true,
                                                                secureConnecting: false,
                                                                        _SNICallback: null,
                                                                                servername: 'api.openweathermap.org',
                                                                                        alpnProtocol: false,
                                                                                                authorized: true,
                                                                                                        authorizationError: null,
                                                                                                                encrypted: true,
                                                                                                                        _events: [Object: null prototype],
                                                                                                                                _eventsCount: 10,
                                                                                                                                        connecting: false,
                                                                                                                                                _hadError: false,
                                                                                                                                                        _parent: null,
                                                                                                                                                                _host: 'api.openweathermap.org',
                                                                                                                                                                        _closeAfterHandlingError: false,
                                                                                                                                                                                _readableState: [ReadableState],
                                                                                                                                                                                        _maxListeners: undefined,
                                                                                                                                                                                                _writableState: [WritableState],
                                                                                                                                                                                                        allowHalfOpen: false,
                                                                                                                                                                                                                _sockname: null,
                                                                                                                                                                                                                        _pendingData: null,
                                                                                                                                                                                                                                _pendingEncoding: '',
                                                                                                                                                                                                                                        server: undefined,
                                                                                                                                                                                                                                                _server: null,
                                                                                                                                                                                                                                                        ssl: [TLSWrap],
                                                                                                                                                                                                                                                                _requestCert: true,
                                                                                                                                                                                                                                                                        _rejectUnauthorized: true,
                                                                                                                                                                                                                                                                                parser: null,
                                                                                                                                                                                                                                                                                        _httpMessage: [Circular * 1],
                                                                                                                                                                                                                                                                                                [Symbol(res)]: [TLSWrap],
                                                                                                                                                                                                                                                                                                        [Symbol(verified)]: true,
                                                                                                                                                                                                                                                                                                                [Symbol(pendingSession)]: null,
                                                                                                                                                                                                                                                                                                                        [Symbol(async_id_symbol)]: 5,
                                                                                                                                                                                                                                                                                                                                [Symbol(kHandle)]: [TLSWrap],
                                                                                                                                                                                                                                                                                                                                        [Symbol(lastWriteQueueSize)]: 0,
                                                                                                                                                                                                                                                                                                                                                [Symbol(timeout)]: null,
                                                                                                                                                                                                                                                                                                                                                        [Symbol(kBuffer)]: null,
                                                                                                                                                                                                                                                                                                                                                                [Symbol(kBufferCb)]: null,
                                                                                                                                                                                                                                                                                                                                                                        [Symbol(kBufferGen)]: null,
                                                                                                                                                                                                                                                                                                                                                                                [Symbol(kCapture)]: false,
                                                                                                                                                                                                                                                                                                                                                                                        [Symbol(kSetNoDelay)]: false,
                                                                                                                                                                                                                                                                                                                                                                                                [Symbol(kSetKeepAlive)]: true,
                                                                                                                                                                                                                                                                                                                                                                                                        [Symbol(kSetKeepAliveInitialDelay)]: 60,
                                                                                                                                                                                                                                                                                                                                                                                                                [Symbol(kBytesRead)]: 0,
                                                                                                                                                                                                                                                                                                                                                                                                                        [Symbol(kBytesWritten)]: 0,
                                                                                                                                                                                                                                                                                                                                                                                                                                [Symbol(connect - options)]: [Object],
                                                                                                                                                                                                                                                                                                                                                                                                                                        [Symbol(RequestTimeout)]: undefined
                },
                _header: 'GET /data/2.5/weather?lat=-15.847412&lon=-47.921508&units=metric&lang=pt_br&appid=ebb994018b6d1f9928293e2411272895 HTTP/1.1\r\n' +
                        'Accept: application/json, text/plain, */*\r\n' +
                        'User-Agent: axios/1.2.2\r\n' +
                        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
                        'Host: api.openweathermap.org\r\n' +
                        'Connection: close\r\n' +
                        '\r\n',
                        _keepAliveTimeout: 0,
                                _onPendingData: [Function: nop
                                ],
                                        agent: Agent {
                        _events: [Object: null prototype
                        ],
                                _eventsCount: 2,
                                        _maxListeners: undefined,
                                                defaultPort: 443,
                                                        protocol: 'https:',
                                                                options: [Object: null prototype
                                                                ],
                                                                        requests: [Object: null prototype
                                                                        ] { },
                        sockets: [Object: null prototype
                        ],
                                freeSockets: [Object: null prototype
                                ] { },
                        keepAliveMsecs: 1000,
                                keepAlive: false,
                                        maxSockets: Infinity,
                                                maxFreeSockets: 256,
                                                        scheduling: 'lifo',
                                                                maxTotalSockets: Infinity,
                                                                        totalSocketCount: 1,
                                                                                maxCachedSessions: 100,
                                                                                        _sessionCache: [Object
                                                                                        ],
                                                                                                [Symbol(kCapture)
                                                                                                ]: false
                },
                socketPath: undefined,
                        method: 'GET',
                                maxHeaderSize: undefined,
                                        insecureHTTPParser: undefined,
                                                path: '/data/2.5/weather?lat=-15.847412&lon=-47.921508&units=metric&lang=pt_br&appid=ebb994018b6d1f9928293e2411272895',
                                                        _ended: true,
                                                                res: IncomingMessage {
                        _readableState: [ReadableState
                        ],
                                _events: [Object: null prototype
                                ],
                                        _eventsCount: 4,
                                                _maxListeners: undefined,
                                                        socket: [TLSSocket
                                                        ],
                                                                httpVersionMajor: 1,
                                                                        httpVersionMinor: 1,
                                                                                httpVersion: '1.1',
                                                                                        complete: true,
                                                                                                rawHeaders: [Array
                                                                                                ],
                                                                                                        rawTrailers: [],
                                                                                                                aborted: false,
                                                                                                                        upgrade: false,
                                                                                                                                url: '',
                                                                                                                                        method: null,
                                                                                                                                                statusCode: 200,
                                                                                                                                                        statusMessage: 'OK',
                                                                                                                                                                client: [TLSSocket
                                                                                                                                                                ],
                                                                                                                                                                        _consuming: false,
                                                                                                                                                                                _dumped: false,
                                                                                                                                                                                        req: [Circular * 1
                                                                                                                                                                                        ],
                                                                                                                                                                                                responseUrl: 'https: //api.openweathermap.org/data/2.5/weather?lat=-15.847412&lon=-47.921508&units=metric&lang=pt_br&appid=ebb994018b6d1f9928293e2411272895',
                                                                                                                                                                                                        redirects: [],
                                                                                                                                                                                                                [Symbol(kCapture)
                                                                                                                                                                                                                ]: false,
                                                                                                                                                                                                                        [Symbol(kHeaders)
                                                                                                                                                                                                                        ]: [Object
                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                [Symbol(kHeadersCount)
                                                                                                                                                                                                                                ]: 18,
                                                                                                                                                                                                                                        [Symbol(kTrailers)
                                                                                                                                                                                                                                        ]: null,
                                                                                                                                                                                                                                                [Symbol(kTrailersCount)
                                                                                                                                                                                                                                                ]: 0,
                                                                                                                                                                                                                                                        [Symbol(RequestTimeout)
                                                                                                                                                                                                                                                        ]: undefined
                },
                aborted: false,
                        timeoutCb: null,
                                upgradeOrConnect: false,
                                        parser: null,
                                                maxHeadersCount: null,
                                                        reusedSocket: false,
                                                                host: 'api.openweathermap.org',
                                                                        protocol: 'https:',
                                                                                _redirectable: Writable {
                        _writableState: [WritableState
                        ],
                                _events: [Object: null prototype
                                ],
                                        _eventsCount: 3,
                                                _maxListeners: undefined,
                                                        _options: [Object
                                                        ],
                                                                _ended: true,
                                                                        _ending: true,
                                                                                _redirectCount: 0,
                                                                                        _redirects: [],
                                                                                                _requestBodyLength: 0,
                                                                                                        _requestBodyBuffers: [],
                                                                                                                _onNativeResponse: [Function(anonymous)
                                                                                                                ],
                                                                                                                        _currentRequest: [Circular * 1
                                                                                                                        ],
                                                                                                                                _currentUrl: 'https: //api.openweathermap.org/data/2.5/weather?lat=-15.847412&lon=-47.921508&units=metric&lang=pt_br&appid=ebb994018b6d1f9928293e2411272895',
                                                                                                                                        [Symbol(kCapture)
                                                                                                                                        ]: false
                },
                [Symbol(kCapture)
                ]: false,
                        [Symbol(kBytesWritten)
                        ]: 0,
                                [Symbol(kEndCalled)
                                ]: true,
                                        [Symbol(kNeedDrain)
                                        ]: false,
                                                [Symbol(corked)
                                                ]: 0,
                                                        [Symbol(kOutHeaders)
                                                        ]: [Object: null prototype
                                                        ] {
                        accept: [Array
                        ],
                                'user-agent': [Array
                                ],
                                        'accept-encoding': [Array
                                        ],
                                                host: [Array
                                                ]
                },
                [Symbol(kUniqueHeaders)
                ]: null
        },
        data: {
                coord: {
                        lon: -47.9215, lat: -15.8474
                },
                weather: [
                        [Object
                        ]
                ],
                        base: 'stations',
                                main: {
                        temp: 21.25,
                                feels_like: 21.6,
                                        temp_min: 18.85,
                                                temp_max: 21.25,
                                                        pressure: 1017,
                                                                humidity: 83
                },
                visibility: 10000,
                        wind: {
                                speed: 1.03, deg: 110
                },
                clouds: {
                        all: 40
                },
                dt: 1672383474,
                        sys: {
                        type: 1,
                                id: 8336,
                                        country: 'BR',
                                                sunrise: 1672389741,
                                                        sunset: 1672436744
                },
                timezone: -10800,
                        id: 3461936,
                                name: 'Guará',
                                        cod: 200
        }
}