import MailNotifier from "./MailNotifier.js";
import SMSNotifier from "./SMSNotifier.js";
class NotificationFactory {
  constructor() {}
  create(type) {
    switch (type) {
      case "SMS":
        return new SMSNotifier();
        break;
      case "MAIL":
        return new MailNotifier();
    }
  }
}

export default NotificationFactory;
