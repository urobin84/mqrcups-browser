
import "regenerator-runtime/runtime.js";
import { Mqrcups } from './index';

const w = window as any;
const config = (w.Mqrcups && w.Mqrcups.config) || {};
const {
  accountId,
  customerId,
  baseUrl,
  greeting,
  awayMessage,
  customer,
  debug,
  setInitialMessage,
  onSetCustomerId,
  onSetConversationId,
  onSetWidgetSettings,
  onPresenceSync,
  onConversationCreated,
  onMessageCreated,
  onMessagesUpdated,
} = config;

if (!accountId) {
  throw new Error('An account token is required to start Mqrcups!');
}

Mqrcups.init({
  accountId,
  customerId,
  baseUrl,
  greeting,
  awayMessage,
  customer,
  debug,
  setInitialMessage,
  onSetCustomerId,
  onSetConversationId,
  onSetWidgetSettings,
  onPresenceSync,
  onConversationCreated,
  onMessageCreated,
  onMessagesUpdated,
});

