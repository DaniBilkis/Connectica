import { Type } from 'class-transformer';

export class Phone {
  TYPE?: string;
  NUMBER?: string;
}

export class Contact {
  CONTACT_NAME?: string;
  @Type(() => Phone)
  PHONE?: Phone[];
  FAX?: string;
  EMAIL?: string;
  URL?: string;
}

export class Address {
  @Type(() => Contact)
  CONTACT?: Contact;
  STREET?: string;
  ZIP?: string;
  CITY?: string;
  COUNTRY?: string;
  @Type(() => Phone)
  PHONE?: Phone;
}

export class MessageDetails {
  ID?: string;
  NAME?: string;
  NAME2?: string;
  DEPARTMENT?: string;
  @Type(() => Address)
  ADDRESS?: Address;
  URL?: string;
  VAT_ID?: string;
}

export class DeliveryDates {
  DELIVERY_START_DATE?: string;
  DELIVERY_END_DATE?: string;
  DELIVERY_REQUESTED_DATE?: string;
}

export class CreditCard {
  CARD_NUM?: number;
  CARD_EXPIRATION_DATE?: string;
  CARD_TYPE?: string;
  CARD_HOLDER_NAME?: string;
}

export class Payment {
  @Type(() => CreditCard)
  CARD?: CreditCard;
  PRICE_CURRENCY?: string;
}

export class Profile {
  OWNER?: string;
  DATE_MESSAGE_CREATED?: string;
  DESCRIPTION?: string;
}

export class AID {
  TYPE?: string;
  NUMBER?: string;
}

export class ManufacturerInfo {
  MANUFACTURER_NAME?: string;
  MANUFACTURER_AID?: string;
  MANUFACTURER_TYPE_DESCR?: string;
}

export class PriceFlag {
  TYPE?: string;
  TEXT?: string;
}

export class ArticlePrice {
  PRICE_AMOUNT?: string;
  @Type(() => PriceFlag)
  PRICE_FLAG?: PriceFlag[];
  PRICE_LINE_AMOUNT?: string;
  TAX?: string;
  TAX_AMOUNT?: string;
  PRICE_QUANTITY?: string;
  TYPE?: string;
}

export class Article {
  SUPPLIER_AID?: string;
  @Type(() => AID)
  INTERNATIONAL_AID?: AID;
  @Type(() => AID)
  BUYER_AID?: AID;
  DESCRIPTION_SHORT?: string;
  DESCRIPTION_LONG?: string;
  @Type(() => ManufacturerInfo)
  MANUFACTURER_INFO?: ManufacturerInfo;
}

export class Agreement {
  AGREEMENT_ID?: string;
  AGREEMENT_LINE_ID?: string;
  TYPE?: string;
}

export class CatalogReference {
  CATALOG_ID?: string;
  CATALOG_VERSION?: string;
  CATALOG_NAME?: string;
}

export class OrderReference {
  ORDER_ID?: string;
  LINE_ITEM_ID?: string;
  ORDER_DATE?: string;
  @Type(() => Agreement)
  AGREEMENT?: Agreement[];
  @Type(() => CatalogReference)
  CATALOG_REFERENCE?: CatalogReference;
}

export class DeliveryReference {
  DELIVERYNOTE_ID?: string;
  LINE_ITEM_ID?: string;
}

export class AccountingInfo {
  @Type(() => PriceFlag)
  COST_CATEGORY_ID?: PriceFlag;
  COST_TYPE?: string;
  COST_ACCOUNT?: string;
}

export class MessageDetailsItem {
  LINE_ITEM_ID?: string;
  @Type(() => Article)
  ARTICLE_ID?: Article;
  QUANTITY?: string;
  ORDER_UNIT?: string;
  @Type(() => ArticlePrice)
  ARTICLE_PRICE?: ArticlePrice;
  @Type(() => OrderReference)
  ORDER_REFERENCE?: OrderReference;
  @Type(() => DeliveryReference)
  DELIVERY_REFERENCE?: DeliveryReference;
  @Type(() => AccountingInfo)
  ACCOUNTING_INFO?: AccountingInfo;

}

export class DataMessage {

  _id?: string;
  TYPE_OF_MESSAGE?: string;
  ORDER_NUMBER?: string;
  DOCUMENT_NUMBER?: string;
  DOCUMENT_SENDER?: string;
  DATE?: string;
  DELIVERY_STATUS?: string;
  @Type(() => MessageDetails)
  SUPPLIER?: MessageDetails;
  @Type(() => MessageDetails)
  BUYER?: MessageDetails;
  @Type(() => MessageDetails)
  SHIP_TO?: MessageDetails;
  @Type(() => MessageDetails)
  ULTIMATE_CUSTOMER?: MessageDetails;
  @Type(() => DeliveryDates)
  DELIVERY_DATE?: DeliveryDates;
  @Type(() => Payment)
  PAYMENT?: Payment;
  TERMS_AND_CONDITIONS?: string;
  @Type(() => MessageDetailsItem)
  ITEM_LIST?: MessageDetailsItem[];
  @Type(() => Profile)
  PROFILE?: Profile;

}
