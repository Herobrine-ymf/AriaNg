(function () {
    'use strict';

    angular.module('ariaNg').config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en-US', {
            'English': 'English',
            'Error': 'Error',
            'OK': 'OK',
            'Cancel': 'Cancel',
            'True': 'True',
            'true': 'True',
            'False': 'False',
            'false': 'False',
            'New': 'New',
            'Start': 'Start',
            'Pause': 'Pause',
            'Delete': 'Delete',
            'Select All': 'Select All',
            'Display Order': 'Display Order',
            'Search': 'Search',
            'Default': 'Default',
            'By File Name': 'By File Name',
            'By File Size': 'By File Size',
            'By Completed Percent': 'By Completed Percent',
            'By Remain Time': 'By Remain Time',
            'By Download Speed': 'By Download Speed',
            'Download': 'Download',
            'Upload': 'Upload',
            'Downloading': 'Downloading',
            'Seeding': 'Seeding',
            'Waiting': 'Waiting',
            'Paused': 'Paused',
            'Completed': 'Completed',
            'Error Occurred': 'Error Occurred',
            'Removed': 'Removed',
            'Downloaded / Stopped': 'Downloaded / Stopped',
            'Settings': 'Settings',
            'AriaNg Settings': 'AriaNg Settings',
            'Aria2 Settings': 'Aria2 Settings',
            'Basic Settings': 'Basic Settings',
            'HTTP/FTP/SFTP Settings': 'HTTP/FTP/SFTP Settings',
            'HTTP Settings': 'HTTP Settings',
            'FTP/SFTP Settings': 'FTP/SFTP Settings',
            'BitTorrent Settings': 'BitTorrent Settings',
            'MegaLink Settings': 'MegaLink Settings',
            'RPC Settings': 'RPC Settings',
            'Advanced Settings': 'Advanced Settings',
            'Aria2 Status': 'Aria2 Status',
            'File Name': 'File Name',
            'File Size': 'File Size',
            'Completed Percent': 'Percent',
            'Remain Time': 'Remain',
            'Download Speed': 'Download Speed',
            'Upload Speed': 'Upload Speed',
            'Files': 'Files',
            'Overview': 'Overview',
            'Blocks': 'Blocks',
            'File List': 'File List',
            'Peers': 'Peers',
            'Task Status': 'Task Status',
            'Error Description': 'Error Description',
            'Health Percent': 'Health Percent',
            'Info Hash': 'Info Hash',
            'Seeders': 'Seeders',
            'Connections': 'Connections',
            'Download Dir': 'Download Dir',
            'Address': 'Address',
            'Status': 'Status',
            'Percent': 'Percent',
            'Download / Upload Speed': 'Download / Upload Speed',
            'No connected peers': 'No connected peers',
            'Language': 'Language',
            'Aria2 RPC Host': 'Aria2 RPC Host',
            'Aria2 RPC Port': 'Aria2 RPC Port',
            'Aria2 RPC Protocol': 'Aria2 RPC Protocol',
            'Global Stat Refresh Interval': 'Global Stat Refresh Interval',
            'Download Task Refresh Interval': 'Download Task Refresh Interval',
            'Aria2 Version': 'Aria2 Version',
            'Enabled Features': 'Enabled Features',
            'Toggle Navigation': 'Toggle Navigation',
            'Loading': 'Loading...',
            'More Than One Day': 'More than 1 day',
            'Unknown': 'Unknown',
            'Total Count': 'Total Count',
            'Bytes': 'Bytes',
            'Minutes': 'Minutes',
            'Seconds': 'Seconds',
            'Milliseconds': 'Milliseconds',
            '(0 is disabled)': '(0 is disabled)',
            'Changes to the settings take effect after refreshing page.': 'Changes to the settings take effect after refreshing page.',
            'Type is illegal!': 'Type is illegal!',
            'none': 'None',
            'http': 'Http',
            'https': 'Https',
            'ftp': 'Ftp',
            'mem': 'Memory Only',
            'plain': 'Plain',
            'arc4': 'ARC4',
            'binary': 'Binary',
            'ascii': 'ASCII',
            'debug': 'Debug',
            'info': 'Info',
            'notice': 'Notice',
            'warn': 'Warn',
            'error': 'Error',
            'options': {
                'dir.name': 'Download Path',
                'dir.description': '',
                'log.name': 'Log File',
                'log.description': 'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, or this option is omitted, no log is written to disk at all.',
                'max-concurrent-downloads.name': 'Max Concurrent Downloads',
                'max-concurrent-downloads.description': '',
                'check-integrity.name': 'Check Integrity',
                'check-integrity.description': 'Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option.',
                'continue.name': 'Resume Download',
                'continue.description': 'Continue downloading a partially downloaded file. Use this option to resume a download started by a web browser or another program which downloads files sequentially from the beginning. Currently this option is only applicable to HTTP(S)/FTP downloads.',
                'all-proxy.name': 'Proxy Server',
                'all-proxy.description': 'Use a proxy server for all protocols. To override a previously defined proxy, use "". You also can override this setting and specify a proxy server for a particular protocol using --http-proxy, --https-proxy and --ftp-proxy  This affects all downloads. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].',
                'all-proxy-user.name': 'Proxy User Name',
                'all-proxy-user.description': '',
                'all-proxy-passwd.name': 'Proxy Password',
                'all-proxy-passwd.description': '',
                'connect-timeout.name': 'Connect Timeout',
                'connect-timeout.description': 'Set the connect timeout in seconds to establish connection to HTTP/FTP/proxy server. After the connection is established, this option makes no effect and --timeout option is used instead.',
                'dry-run.name': 'Dry Run',
                'dry-run.description': 'If true is given, aria2 just checks whether the remote file is available and doesn\'t download data. This option has effect on HTTP/FTP download. BitTorrent downloads are canceled if true is specified.',
                'lowest-speed-limit.name': 'Lowest Speed Limit',
                'lowest-speed-limit.description': 'Close connection if download speed is lower than or equal to this value(bytes per sec). 0 means aria2 does not have a lowest speed limit. You can append K or M (1K = 1024, 1M = 1024K). This option does not affect BitTorrent downloads.',
                'max-connection-per-server.name': 'Max Connection Per Server',
                'max-connection-per-server.description': '',
                'max-file-not-found.name': 'Max File Not Found Try Times',
                'max-file-not-found.description': '',
                'max-tries.name': 'Max Try Times',
                'max-tries.description': 'Set number of tries. 0 means unlimited.',
                'min-split-size.name': 'Min Split Size',
                'min-split-size.description': 'aria2 does not split less than 2*SIZE byte range. For example, let\'s consider downloading 20MiB file. If SIZE is 10M, aria2 can split file into 2 range [0-10MiB) and [10MiB-20MiB) and download it using 2 sources(if --split >= 2, of course). If SIZE is 15M, since 2*15M > 20MiB, aria2 does not split file and download it using 1 source. You can append K or M (1K = 1024, 1M = 1024K). Possible Values: 1M-1024M.',
                'netrc-path.name': '.netrc Path',
                'netrc-path.description': '',
                'no-netrc.name': 'Disable netrc',
                'no-netrc.description': '',
                'no-proxy.name': 'No Proxy List',
                'no-proxy.description': 'Specify a comma separated list of host names, domains and network addresses with or without a subnet mask where no proxy should be used.',
                'proxy-method.name': 'Proxy Method',
                'proxy-method.description': 'Set the method to use in proxy request. METHOD is either get or tunnel. HTTPS downloads always use tunnel regardless of this option.',
                'remote-time.name': 'Remote File Timestamp',
                'remote-time.description': 'Retrieve timestamp of the remote file from the remote HTTP/FTP server and if it is available, apply it to the local file.',
                'reuse-uri.name': 'Reuse Uri',
                'reuse-uri.description': 'Reuse already used URIs if no unused URIs are left.',
                'retry-wait.name': 'Retry Wait',
                'retry-wait.description': 'Set the seconds to wait between retries. When SEC > 0, aria2 will retry downloads when the HTTP server returns a 503 response. ',
                'server-stat-of.name': 'Server Stat Output',
                'server-stat-of.description': 'Specify the file name to which performance profile of the servers is saved. You can load saved data using --server-stat-if option.',
                'server-stat-timeout.name': 'Server Stat Timeout',
                'server-stat-timeout.description': 'Specifies timeout in seconds to invalidate performance profile of the servers since the last contact to them.',
                'split.name': 'Split Count',
                'split.description': 'Download a file using N connections. If more than N URIs are given, first N URIs are used and remaining URIs are used for backup. If less than N URIs are given, those URIs are used more than once so that N connections total are made simultaneously. The number of connections to the same host is restricted by the --max-connection-per-server option. See also the --min-split-size option.',
                'stream-piece-selector.name': 'Piece Selection Algorithm',
                'stream-piece-selector.description': 'Specify piece selection algorithm used in HTTP/FTP download. Piece means fixed length segment which is downloaded in parallel in segmented download. If default is given, aria2 selects piece so that it reduces the number of establishing connection. This is reasonable default behavior because establishing connection is an expensive operation. If inorder is given, aria2 selects piece which has minimum index. Index=0 means first of the file. This will be useful to view movie while downloading it. --enable-http-pipelining option may be useful to reduce re-connection overhead. Please note that aria2 honors --min-split-size option, so it will be necessary to specify a reasonable value to --min-split-size option. If random is given, aria2 selects piece randomly. Like inorder, --min-split-size option is honored. If geom is given, at the beginning aria2 selects piece which has minimum index like inorder, but it exponentially increasingly keeps space from previously selected piece. This will reduce the number of establishing connection and at the same time it will download the beginning part of the file first. This will be useful to view movie while downloading it.',
                'timeout.name': 'Timeout',
                'timeout.description': '',
                'uri-selector.name': 'URI Selection Algorithm',
                'uri-selector.description': 'Specify URI selection algorithm. The possible values are inorder, feedback and adaptive. If inorder is given, URI is tried in the order appeared in the URI list. If feedback is given, aria2 uses download speed observed in the previous downloads and choose fastest server in the URI list. This also effectively skips dead mirrors. The observed download speed is a part of performance profile of servers mentioned in --server-stat-of and --server-stat-if  If adaptive is given, selects one of the best mirrors for the first and reserved connections. For supplementary ones, it returns mirrors which has not been tested yet, and if each of them has already been tested, returns mirrors which has to be tested again. Otherwise, it doesn\'t select anymore mirrors. Like feedback, it uses a performance profile of servers.',
                'check-certificate.name': 'Check Certificate',
                'check-certificate.description': '',
                'http-accept-gzip.name': 'Accept GZip',
                'http-accept-gzip.description': 'Send Accept: deflate, gzip request header and inflate response if remote server responds with Content-Encoding: gzip or Content-Encoding: deflate.',
                'http-auth-challenge.name': 'HTTP Auth Challenge',
                'http-auth-challenge.description': 'Send HTTP authorization header only when it is requested by the server. If false is set, then authorization header is always sent to the server. There is an exception: if user name and password are embedded in URI, authorization header is always sent to the server regardless of this option.',
                'http-no-cache.name': 'No Cache',
                'http-no-cache.description': 'Send Cache-Control: no-cache and Pragma: no-cache header to avoid cached content. If false is given, these headers are not sent and you can add Cache-Control header with a directive you like using --header option.',
                'http-user.name': 'HTTP Default User Name',
                'http-user.description': '',
                'http-passwd.name': 'HTTP Default Password',
                'http-passwd.description': '',
                'http-proxy.name': 'HTTP Proxy Server',
                'http-proxy.description': '',
                'http-proxy-user.name': 'HTTP Proxy User Name',
                'http-proxy-user.description': '',
                'http-proxy-passwd.name': 'HTTP Proxy Password',
                'http-proxy-passwd.description': '',
                'https-proxy.name': 'HTTPS Proxy Server',
                'https-proxy.description': '',
                'https-proxy-user.name': 'HTTPS Proxy User Name',
                'https-proxy-user.description': '',
                'https-proxy-passwd.name': 'HTTPS Proxy Password',
                'https-proxy-passwd.description': '',
                'referer.name': 'Referer',
                'referer.description': 'Set an http referrer (Referer). This affects all http/https downloads. If * is given, the download URI is also used as the referrer. This may be useful when used together with the --parameterized-uri option.',
                'enable-http-keep-alive.name': 'Enable Persistent Connection',
                'enable-http-keep-alive.description': 'Enable HTTP/1.1 persistent connection.',
                'enable-http-pipelining.name': 'Enable HTTP Pipelining',
                'enable-http-pipelining.description': 'Enable HTTP/1.1 pipelining.',
                'header.name': 'Custom Header',
                'header.description': 'Append HEADER to HTTP request header.',
                'save-cookies.name': 'Cookies Path',
                'save-cookies.description': 'Save Cookies to FILE in Mozilla/Firefox(1.x/2.x)/ Netscape format. If FILE already exists, it is overwritten. Session Cookies are also saved and their expiry values are treated as 0.',
                'use-head.name': 'Use HEAD Method',
                'use-head.description': 'Use HEAD method for the first request to the HTTP server.',
                'user-agent.name': 'Custom User Agent',
                'user-agent.description': '',
                'ftp-user.name': 'FTP Default User Name',
                'ftp-user.description': '',
                'ftp-passwd.name': 'FTP Default Password',
                'ftp-passwd.description': 'If user name is embedded but password is missing in URI, aria2 tries to resolve password using .netrc. If password is found in .netrc, then use it as password. If not, use the password specified in this option.',
                'ftp-pasv.name': 'Passive Mode',
                'ftp-pasv.description': 'Use the passive mode in FTP. If false is given, the active mode will be used. This option is ignored for SFTP transfer.',
                'ftp-proxy.name': 'FTP Proxy Server',
                'ftp-proxy.description': '',
                'ftp-proxy-user.name': 'FTP Proxy User Name',
                'ftp-proxy-user.description': '',
                'ftp-proxy-passwd.name': 'FTP Proxy Password',
                'ftp-proxy-passwd.description': '',
                'ftp-type.name': 'Transfer Type',
                'ftp-type.description': '',
                'ftp-reuse-connection.name': 'Reuse Connection',
                'ftp-reuse-connection.description': '',
                'ssh-host-key-md.name': 'SSH Public Key Checksum',
                'ssh-host-key-md.description': 'Set checksum for SSH host public key. TYPE is hash type. The supported hash type is sha-1 or md5. DIGEST is hex digest. For example: sha-1=b030503d4de4539dc7885e6f0f5e256704edf4c3. This option can be used to validate server\'s public key when SFTP is used. If this option is not set, which is default, no validation takes place.',
                'bt-detach-seed-only.name': '',
                'bt-detach-seed-only.description': '',
                'bt-enable-hook-after-hash-check.name': '',
                'bt-enable-hook-after-hash-check.description': '',
                'bt-enable-lpd.name': '',
                'bt-enable-lpd.description': '',
                'bt-exclude-tracker.name': '',
                'bt-exclude-tracker.description': '',
                'bt-external-ip.name': '',
                'bt-external-ip.description': '',
                'bt-force-encryption.name': '',
                'bt-force-encryption.description': '',
                'bt-hash-check-seed.name': '',
                'bt-hash-check-seed.description': '',
                'bt-max-open-files.name': '',
                'bt-max-open-files.description': '',
                'bt-max-peers.name': '',
                'bt-max-peers.description': '',
                'bt-metadata-only.name': '',
                'bt-metadata-only.description': '',
                'bt-min-crypto-level.name': '',
                'bt-min-crypto-level.description': '',
                'bt-prioritize-piece.name': '',
                'bt-prioritize-piece.description': '',
                'bt-remove-unselected-file.name': '',
                'bt-remove-unselected-file.description': '',
                'bt-require-crypto.name': '',
                'bt-require-crypto.description': '',
                'bt-request-peer-speed-limit.name': '',
                'bt-request-peer-speed-limit.description': '',
                'bt-save-metadata.name': '',
                'bt-save-metadata.description': '',
                'bt-seed-unverified.name': '',
                'bt-seed-unverified.description': '',
                'bt-stop-timeout.name': '',
                'bt-stop-timeout.description': '',
                'bt-tracker.name': '',
                'bt-tracker.description': '',
                'bt-tracker-connect-timeout.name': '',
                'bt-tracker-connect-timeout.description': '',
                'bt-tracker-interval.name': '',
                'bt-tracker-interval.description': '',
                'bt-tracker-timeout.name': '',
                'bt-tracker-timeout.description': '',
                'dht-file-path.name': '',
                'dht-file-path.description': '',
                'dht-file-path6.name': '',
                'dht-file-path6.description': '',
                'dht-listen-port.name': '',
                'dht-listen-port.description': '',
                'dht-message-timeout.name': '',
                'dht-message-timeout.description': '',
                'enable-dht.name': '',
                'enable-dht.description': '',
                'enable-dht6.name': '',
                'enable-dht6.description': '',
                'enable-peer-exchange.name': '',
                'enable-peer-exchange.description': '',
                'follow-torrent.name': '',
                'follow-torrent.description': '',
                'listen-port.name': '',
                'listen-port.description': '',
                'max-overall-upload-limit.name': '',
                'max-overall-upload-limit.description': '',
                'max-upload-limit.name': '',
                'max-upload-limit.description': '',
                'peer-id-prefix.name': '',
                'peer-id-prefix.description': '',
                'seed-ratio.name': '',
                'seed-ratio.description': '',
                'seed-time.name': '',
                'seed-time.description': '',
                'follow-metalink.name': '',
                'follow-metalink.description': '',
                'metalink-base-uri.name': '',
                'metalink-base-uri.description': '',
                'metalink-language.name': '',
                'metalink-language.description': '',
                'metalink-location.name': '',
                'metalink-location.description': '',
                'metalink-os.name': '',
                'metalink-os.description': '',
                'metalink-version.name': '',
                'metalink-version.description': '',
                'metalink-preferred-protocol.name': '',
                'metalink-preferred-protocol.description': '',
                'metalink-enable-unique-protocol.name': '',
                'metalink-enable-unique-protocol.description': '',
                'enable-rpc.name': 'Enable JSON-RPC/XML-RPC Server',
                'enable-rpc.description': '',
                'pause-metadata.name': 'Pause After Metadata Downloaded',
                'pause-metadata.description': 'Pause downloads created as a result of metadata download. There are 3 types of metadata downloads in aria2: (1) downloading .torrent file. (2) downloading torrent metadata using magnet link. (3) downloading metalink file. These metadata downloads will generate downloads using their metadata. This option pauses these subsequent downloads. This option is effective only when --enable-rpc=true is given.',
                'rpc-allow-origin-all.name': 'Allow All Origin Request',
                'rpc-allow-origin-all.description': 'Add Access-Control-Allow-Origin header field with value * to the RPC response.',
                'rpc-listen-all.name': 'Listen on All Network Interfaces',
                'rpc-listen-all.description': 'Listen incoming JSON-RPC/XML-RPC requests on all network interfaces. If false is given, listen only on local loopback interface.',
                'rpc-listen-port.name': 'Listen Port',
                'rpc-listen-port.description': '',
                'rpc-max-request-size.name': 'Max Request Size',
                'rpc-max-request-size.description': 'Set max size of JSON-RPC/XML-RPC request. If aria2 detects the request is more than SIZE bytes, it drops connection.',
                'rpc-save-upload-metadata.name': 'Save Upload Metadata',
                'rpc-save-upload-metadata.description': 'Save the uploaded torrent or metalink meta data in the directory specified by --dir option. The file name consists of SHA-1 hash hex string of meta data plus extension. For torrent, the extension is \'.torrent\'. For metalink, it is \'.meta4\'. If false is given to this option, the downloads added by aria2.addTorrent() or aria2.addMetalink() will not be saved by --save-session option.',
                'rpc-secure.name': 'Enable SSL/TLS',
                'rpc-secure.description': 'RPC transport will be encrypted by SSL/TLS. The RPC clients must use https scheme to access the server. For WebSocket client, use wss scheme. Use --rpc-certificate and --rpc-private-key options to specify the server certificate and private key.',
                'allow-overwrite.name': '',
                'allow-overwrite.description': '',
                'allow-piece-length-change.name': '',
                'allow-piece-length-change.description': '',
                'always-resume.name': '',
                'always-resume.description': '',
                'async-dns.name': '',
                'async-dns.description': '',
                'auto-file-renaming.name': '',
                'auto-file-renaming.description': '',
                'auto-save-interval.name': '',
                'auto-save-interval.description': '',
                'conditional-get.name': '',
                'conditional-get.description': '',
                'conf-path.name': '',
                'conf-path.description': '',
                'console-log-level.name': '',
                'console-log-level.description': '',
                'daemon.name': '',
                'daemon.description': '',
                'deferred-input.name': '',
                'deferred-input.description': '',
                'disable-ipv6.name': '',
                'disable-ipv6.description': '',
                'disk-cache.name': '',
                'disk-cache.description': '',
                'download-result.name': '',
                'download-result.description': '',
                'dscp.name': '',
                'dscp.description': '',
                'rlimit-nofile.name': '',
                'rlimit-nofile.description': '',
                'enable-color.name': '',
                'enable-color.description': '',
                'enable-mmap.name': '',
                'enable-mmap.description': '',
                'event-poll.name': '',
                'event-poll.description': '',
                'file-allocation.name': '',
                'file-allocation.description': '',
                'force-save.name': '',
                'force-save.description': '',
                'hash-check-only.name': '',
                'hash-check-only.description': '',
                'human-readable.name': '',
                'human-readable.description': '',
                'max-download-result.name': '',
                'max-download-result.description': '',
                'max-mmap-limit.name': '',
                'max-mmap-limit.description': '',
                'max-resume-failure-tries.name': '',
                'max-resume-failure-tries.description': '',
                'min-tls-version.name': '',
                'min-tls-version.description': '',
                'log-level.name': '',
                'log-level.description': '',
                'piece-length.name': '',
                'piece-length.description': '',
                'optimize-concurrent-downloads.name': '',
                'optimize-concurrent-downloads.description': '',
                'show-console-readout.name': '',
                'show-console-readout.description': '',
                'summary-interval.name': '',
                'summary-interval.description': '',
                'max-overall-download-limit.name': '',
                'max-overall-download-limit.description': '',
                'max-download-limit.name': '',
                'max-download-limit.description': '',
                'no-conf.name': '',
                'no-conf.description': '',
                'no-file-allocation-limit.name': '',
                'no-file-allocation-limit.description': '',
                'parameterized-uri.name': '',
                'parameterized-uri.description': '',
                'quiet.name': '',
                'quiet.description': '',
                'realtime-chunk-checksum.name': '',
                'realtime-chunk-checksum.description': '',
                'remove-control-file.name': '',
                'remove-control-file.description': '',
                'save-session.name': '',
                'save-session.description': '',
                'save-session-interval.name': '',
                'save-session-interval.description': '',
                'socket-recv-buffer-size.name': '',
                'socket-recv-buffer-size.description': '',
                'stop.name': '',
                'stop.description': '',
                'truncate-console-readout.name': '',
                'truncate-console-readout.description': ''
            }
        });
    }])
})();
