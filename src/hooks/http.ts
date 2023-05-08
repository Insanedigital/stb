import axios from "axios";

type HttpMethod = 'get' | 'post' | 'put' | 'patch' |'delete';

interface IHttpConfig {
  url: string;
  method: HttpMethod;
  headers: any;
  timeout: number;
  params?: any;
  data?: any;
}

interface IHttpApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: IHttpConfig;
}

const DEFAULT_HEADERS = {
  "content-type": "application/json",
  "Cache-Control": "no-cache",
};

const useHttp = async <T>(url: string, method: HttpMethod, payload?: any, headers?: any, params?: any): Promise<IHttpApiResponse<T>> => {
  const buildAxiosConfig = () => {
    let config: IHttpConfig = {
      url,
      method,
      headers: { ...DEFAULT_HEADERS, ...headers } || DEFAULT_HEADERS,
      timeout: 180000,
    };
    if (payload) config.data = payload;
    if (params) config.params = params;
    return config;
  };

  const config = buildAxiosConfig();
  const response: IHttpApiResponse<T> = await axios(config);
  return response;
};

export default useHttp;