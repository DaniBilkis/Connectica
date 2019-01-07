const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messagesModel = new Schema(
  {
    TYPE_OF_MESSAGE: {
      type: 'String'
    },
    ORDER_NUMBER: {
      type: 'String'
    },
    DOCUMENT_NUMBER: {
      type: 'String'
    },
    DOCUMENT_SENDER: {
      type: 'String'
    },
    DATE: {
      type: 'Date'
    },
    DELIVERY_STATUS: {
      type: 'String'
    },
    SUPPLIER: {
      ID: {
        type: 'String'
      },
      NAME: {
        type: 'String'
      },
      NAME2: {
        type: 'String'
      },
      DEPARTMENT: {
        type: 'String'
      },
      ADDRESS: {
        CONTACT: {
          CONTACT_NAME: {
            type: 'String'
          },
          PHONE: {
            TYPE: {type: 'String'},
            NUMBER: {type: 'String'}
          },
          FAX: {
            type: 'String'
          },
          EMAIL: {
            type: 'String'
          },
          URL: {
            type: 'String'
          }
        },
        STREET: {
          type: 'String'
        },
        ZIP: {
          type: 'String'
        },
        CITY: {
          type: 'String'
        },
        COUNTRY: {
          type: 'String'
        },
        PHONE: {
          TYPE: {
            type: 'String'
          },
          NUMBER: {
            type: 'String'
          }
        }
      },
      URL: {
        type: 'String'
      },
      VAT_ID: {
        type: 'String'
      }
    },
    BUYER: {
      ID: {
        type: 'String'
      },
      NAME: {
        type: 'String'
      },
      NAME2: {
        type: 'String'
      },
      DEPARTMENT: {
        type: 'String'
      },
      ADDRESS: {
        CONTACT: {
          CONTACT_NAME: {
            type: 'String'
          },
          PHONE: {
            TYPE: {type: 'String'},
            NUMBER: {type: 'String'}
          },
          FAX: {
            type: 'String'
          },
          EMAIL: {
            type: 'String'
          },
          URL: {
            type: 'String'
          }
        },
        STREET: {
          type: 'String'
        },
        ZIP: {
          type: 'String'
        },
        CITY: {
          type: 'String'
        },
        COUNTRY: {
          type: 'String'
        },
        PHONE: {
          TYPE: {
            type: 'String'
          },
          NUMBER: {
            type: 'String'
          }
        }
      },
      URL: {
        type: 'String'
      },
      VAT_ID: {
        type: 'String'
      }
    },
    SHIP_TO: {
      ID: {
        type: 'String'
      },
      NAME: {
        type: 'String'
      },
      NAME2: {
        type: 'String'
      },
      DEPARTMENT: {
        type: 'String'
      },
      ADDRESS: {
        CONTACT: {
          CONTACT_NAME: {
            type: 'String'
          },
          PHONE: {
            TYPE: {type: 'String'},
            NUMBER: {type: 'String'}
          },
          FAX: {
            type: 'String'
          },
          EMAIL: {
            type: 'String'
          },
          URL: {
            type: 'String'
          }
        },
        STREET: {
          type: 'String'
        },
        ZIP: {
          type: 'String'
        },
        CITY: {
          type: 'String'
        },
        COUNTRY: {
          type: 'String'
        },
        PHONE: {
          TYPE: {
            type: 'String'
          },
          NUMBER: {
            type: 'String'
          }
        }
      },
      URL: {
        type: 'String'
      },
      VAT_ID: {
        type: 'String'
      }
    },
    ULTIMATE_CUSTOMER: {
      ID: {
        type: 'String'
      },
      NAME: {
        type: 'String'
      },
      NAME2: {
        type: 'String'
      },
      DEPARTMENT: {
        type: 'String'
      },
      ADDRESS: {
        CONTACT: {
          CONTACT_NAME: {
            type: 'String'
          },
          PHONE: {
            TYPE: {type: 'String'},
            NUMBER: {type: 'String'}
          },
          FAX: {
            type: 'String'
          },
          EMAIL: {
            type: 'String'
          },
          URL: {
            type: 'String'
          }
        },
        STREET: {
          type: 'String'
        },
        ZIP: {
          type: 'String'
        },
        CITY: {
          type: 'String'
        },
        COUNTRY: {
          type: 'String'
        },
        PHONE: {
          TYPE: {
            type: 'String'
          },
          NUMBER: {
            type: 'String'
          }
        }
      },
      URL: {
        type: 'String'
      },
      VAT_ID: {
        type: 'String'
      }
    },
    DELIVERY_DATE: {
      DELIVERY_START_DATE: {
        type: 'Date'
      },
      DELIVERY_END_DATE: {
        type: 'Date'
      },
      DELIVERY_REQUESTED_DATE: {
        type: 'Date'
      }
    },
    PAYMENT: {
      CARD: {
        CARD_NUM: {
          type: 'String'
        },
        CARD_EXPIRATION_DATE: {
          type: 'Date'
        },
        CARD_TYPE: {
          type: 'String'
        },
        CARD_HOLDER_NAME: {
          type: 'String'
        }
      },
      PRICE_CURRENCY: {
        type: 'String'
      }
    },
    TERMS_AND_CONDITIONS: {
      type: 'String'
    },
    ITEM_LIST: [{
      LINE_ITEM_ID: {type: 'String'},
      ARTICLE_ID: {
        SUPPLIER_AID: {type: 'String'},
        INTERNATIONAL_AID: {
          TYPE: {type: 'String'},
          NUMBER: {type: 'String'}
        },
        BUYER_AID: {
          TYPE: {type: 'String'},
          NUMBER: {type: 'String'}
        },
        DESCRIPTION_SHORT: {type: 'String'},
        DESCRIPTION_LONG: {type: 'String'},
        MANUFACTURER_INFO: {
          MANUFACTURER_NAME: {type: 'String'},
          MANUFACTURER_AID: {type: 'String'},
          MANUFACTURER_TYPE_DESCR: {type: 'String'}
        }
      },
      QUANTITY: {type: 'String'},
      ORDER_UNIT: {type: 'String'},
      ARTICLE_PRICE: {
        PRICE_AMOUNT: {type: 'String'},
        PRICE_FLAG: [
          {
            TYPE: {type: 'String'},
            TEXT: {type: 'String'}
          }],
        PRICE_LINE_AMOUNT: {type: 'String'},
        TAX: {type: 'String'},
        TAX_AMOUNT: {type: 'String'},
        PRICE_QUANTITY: {type: 'String'},
        TYPE: {type: 'String'}
      },
      ORDER_REFERENCE: {
        ORDER_ID: {type: 'String'},
        LINE_ITEM_ID: {type: 'String'},
        ORDER_DATE: {type: 'String'},
        AGREEMENT: [
          {
            AGREEMENT_ID: {type: 'String'},
            AGREEMENT_LINE_ID: {type: 'String'},
            TYPE: {type: 'String'}
          }],
        CATALOG_REFERENCE: {
          CATALOG_ID: {type: 'String'},
          CATALOG_VERSION: {type: 'String'},
          CATALOG_NAME: {type: 'String'}
        }
      },
      DELIVERY_REFERENCE: {
        DELIVERYNOTE_ID: {type: 'String'},
        LINE_ITEM_ID: {type: 'String'}
      },
      ACCOUNTING_INFO: {
        COST_CATEGORY_ID: {
          TYPE: {type: 'String'},
          TEXT: {type: 'String'}
        },
        COST_TYPE: {type: 'String'},
        COST_ACCOUNT: {type: 'String'}
      }
    }],
    PROFILE: {
      OWNER: {
        type: 'String'
      },
      DATE_MESSAGE_CREATED: {
        type: 'Date'
      },
      DESCRIPTION: {
        type: 'String'
      }
    }
  }
);


module.exports = mongoose.model('message', messagesModel);

