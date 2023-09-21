import axios from 'axios';

const API_ENDPOINT = 'https://example.com/api'; 

const AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers = { Authorization: `Token ${token}` };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const AxiosDownloadConfig = {
  responseType: 'blob',
};

export const checkStatus = (error) => {
  if (error.response && error.response.status === 401) {
    httpHelper.handleUnauthorized(error);
  }
};

export const httpHelper = {
  get: async (url, config) => {
    try {
      const response = await AxiosInstance.get(url, { ...config });
      return {
        success: true,
        data: response.data.result,
        code: response.data.statusCode,
        description: response.data.statusDescription,
        message: response.data.statusMessage,
      };
    } catch (error) {
      checkStatus(error);
      return {
        success: false,
        data: error.response?.data.result,
        code: error.response?.data.statusCode,
        description: error.response?.data.statusDescription,
        message: error.response?.data.statusMessage,
      };
    }
  },
  post: async (url, payload, config = {}) => {
    try {
      const response = await AxiosInstance.post(url, payload, { ...config });
      return {
        success: true,
        data: response.data.result,
        code: response.data.statusCode,
        description: response.data.statusDescription,
        message: response.data.statusMessage,
      };
    } catch (error) {
      checkStatus(error);
      return {
        success: false,
        data: error.response?.data.result,
        code: error.response?.data.statusCode,
        description: error.response?.data.statusDescription,
        message: error.response?.data.statusMessage,
      };
    }
  },
  put: async (url, payload) => {
    try {
      const response = await AxiosInstance.put(url, payload);
      return {
        success: true,
        data: response.data.result,
        code: response.data.statusCode,
        description: response.data.statusDescription,
        message: response.data.statusMessage,
      };
    } catch (error) {
      checkStatus(error);
      return {
        success: false,
        data: error.response?.data.result,
        code: error.response?.data.statusCode,
        description: error.response?.data.statusDescription,
        message: error.response?.data.statusMessage,
      };
    }
  },
  delete: async (url) => {
    try {
      const response = await AxiosInstance.delete(url);
      return {
        success: true,
        data: response.data.result,
        code: response.data.statusCode,
        description: response.data.statusDescription,
        message: response.data.statusMessage,
      };
    } catch (error) {
      checkStatus(error);
      return {
        success: false,
        data: error.response?.data.result,
        code: error.response?.data.statusCode,
        description: error.response?.data.statusDescription,
        message: error.response?.data.statusMessage,
      };
    }
  },
  download: async (url, config, isfileExtensionPGP) => {
    try {
      const response = await AxiosInstance.get(url, { ...AxiosDownloadConfig, ...config });
      const filename = response.headers['filename'];
      const type = response.headers['content-type'];
      const blob = new Blob([response.data], { type: type });
      const link = document.createElement('a');
      const getFileExtension = (isPgp) => (isPgp ? '.pgp' : null);
      const defaultFileName = 'file.xlsx';
      link.href = window.URL.createObjectURL(blob);
      link.download = `${filename ?? defaultFileName}${getFileExtension(isfileExtensionPGP) ?? ''}`;
      link.click();
      return { success: true };
    } catch (error) {
      checkStatus(error);
      return {
        success: false,
        data: error.response?.data.result,
        code: error.response?.data.statusCode,
        description: error.response?.data.statusDescription,
        message: error.response?.data.statusMessage,
      };
    }
  },
  handleUnauthorized: async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        await AxiosInstance.get('pay/wallet/');
      } catch (fallbackError) {
        if (fallbackError.response && fallbackError.response.status === 401) {
          sessionStorage.removeItem('token');
          window.location.href = '/';
        }
      }
    }
    throw error;
  },
};
