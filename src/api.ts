import axios from 'axios';
import {DEFAULT_BASE_URL, now} from './utils';
import {CustomerMetadata, WidgetSettings} from './types';

const EMPTY_METADATA = {} as CustomerMetadata;

const get = async (url: string, query = {}) => {
  return axios.get(url, {params: query}).then((res) => res.data.data);
};

const post = async (url: string, params = {}) => {
  return axios.post(url, params).then((res) => res.data.data);
};

const put = async (url: string, params = {}) => {
  return axios.put(url, params).then((res) => res.data.data);
};

export const fetchWidgetSettings = async (
  query: {account_id: string; inbox_id?: string},
  baseUrl = DEFAULT_BASE_URL
): Promise<WidgetSettings> => {
  return get(`${baseUrl}/api/widget_settings`, query);
};

export const updateWidgetSettingsMetadata = async (
  params: {
    account_id: string;
    inbox_id?: string;
    metadata: any;
  },
  baseUrl = DEFAULT_BASE_URL
): Promise<WidgetSettings> => {
  return put(`${baseUrl}/api/widget_settings/metadata`, params);
};

export const createNewCustomer = async (
  accountId: string,
  metadata: Partial<CustomerMetadata> = EMPTY_METADATA,
  baseUrl = DEFAULT_BASE_URL
) => {
  return post(`${baseUrl}/api/customers`, {
    customer: {
      ...metadata,
      account_id: accountId,
      // TODO: handle on the server instead!
      first_seen: now(),
      last_seen: now(),
    },
  });
};

export const isValidCustomer = async (
  customerId: string,
  accountId: string,
  baseUrl = DEFAULT_BASE_URL
) => {
  return get(`${baseUrl}/api/customers/${customerId}/exists`, {
    account_id: accountId,
  });
};

export const updateCustomerMetadata = async (
  customerId: string,
  metadata: Partial<CustomerMetadata> = EMPTY_METADATA,
  baseUrl = DEFAULT_BASE_URL
) => {
  return put(`${baseUrl}/api/customers/${customerId}/metadata`, {metadata});
};

export const createNewConversation = async (
  conversation: {
    account_id: string;
    customer_id: string;
    inbox_id?: string;
  },
  baseUrl = DEFAULT_BASE_URL
) => {
  return post(`${baseUrl}/api/conversations`, {
    conversation,
  });
};

export const findCustomerByExternalId = async (
  query: {
    external_id: string;
    account_id: string;
    [key: string]: any;
  },
  baseUrl = DEFAULT_BASE_URL
) => {
  return get(`${baseUrl}/api/customers/identify`, query);
};

export const fetchCustomerConversations = async (
  query: {
    customer_id: string;
    account_id: string;
    inbox_id?: string;
  },
  baseUrl = DEFAULT_BASE_URL
) => {
  return get(`${baseUrl}/api/conversations/customer`, query);
};

export const upload = async (
  params: {
    account_id: string;
    file: any;
  },
  baseUrl = DEFAULT_BASE_URL
) => {
  return post(`${baseUrl}/api/upload`, params);
};
