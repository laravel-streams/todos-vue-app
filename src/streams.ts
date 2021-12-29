import { Stream, Streams } from '@laravel-streams/api-client';


export const streams = new Streams({
    baseURL: process.env.VUE_APP_STREAMS_API_BASE_URL as any,
});
streams.hooks.createRequest.tap('DEBUG', request => {
    request.hooks.createAxios.tap('DEBUG', axios => {
        axios.interceptors.request.use(config => {
            // config.headers                    = config.headers || {};
            // config.headers[ 'Cookie' ]        = 'XDEBUG_SESSION=start';
            config.params                     = config.params || {};
            config.params[ 'XDEBUG_SESSION' ] = 'PHPSTORM';
            return config;
        });
        return axios;
    });
    return request;
});
const _streams: Record<string, Stream> = {};

export const getStream = async (name: string) => {
    if ( name in _streams ) {
        return _streams[ name ];
    }
    return _streams[ name ] = await streams.make(name);
};