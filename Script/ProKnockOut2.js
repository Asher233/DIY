/***********************************

# > Proknockout hostname = buy.itunes.apple.com
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/ProKnockOut2.js

Proknockout下载地址:
https://apps.apple.com/cn/app/id944665061

***********************************/

let obj = JSON.parse($response.body);
obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 944665061,
    "app_item_id": 944665061,
    "bundle_id": "com.loveyouchenapps.knockout",
    "application_version": "7.07",
    "download_id": 113018904351232,
    "version_external_identifier": 843254571,
    "receipt_creation_date": "2021-08-15 22:21:47 Etc/GMT",
    "receipt_creation_date_ms": "1629066107000",
    "receipt_creation_date_pst": "2021-08-15 15:21:47 America/Los_Angeles",
    "request_date": "2021-08-15 22:42:56 Etc/GMT",
    "request_date_ms": "1629067376282",
    "request_date_pst": "2021-08-15 15:42:56 America/Los_Angeles",
    "original_purchase_date": "2017-11-19 13:23:50 Etc/GMT",
    "original_purchase_date_ms": "1511097830000",
    "original_purchase_date_pst": "2017-11-19 05:23:50 America/Los_Angeles",
    "original_application_version": "1.865",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.knockout.halfyearplus",
      "transaction_id": "730000582440350",
      "original_transaction_id": "730000582440350",
      "purchase_date": "2021-01-11 17:07:06 Etc/GMT",
      "purchase_date_ms": "1610384826000",
      "purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
      "original_purchase_date": "2021-01-11 17:07:06 Etc/GMT",
      "original_purchase_date_ms": "1610384826000",
      "original_purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
      "expires_date": "2099-09-09 17:07:06 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 09:07:06 America/Los_Angeles",
      "web_order_line_item_id": "730000235883267",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.knockout.halfyearplus",
    "transaction_id": "730000582440350",
    "original_transaction_id": "730000582440350",
    "purchase_date": "2021-01-11 17:07:06 Etc/GMT",
    "purchase_date_ms": "1610384826000",
    "purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
    "original_purchase_date": "2021-01-11 17:07:06 Etc/GMT",
    "original_purchase_date_ms": "1610384826000",
    "original_purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
    "expires_date": "2099-09-09 17:07:06 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2099-09-09 09:07:06 America/Los_Angeles",
    "web_order_line_item_id": "730000235883267",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20386379"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.knockout.halfyearplus",
    "original_transaction_id": "730000582440350",
    "product_id": "com.knockout.halfyearplus",
    "auto_renew_status": "0"
  }],
  "status": 0
}

$done({body: JSON.stringify(obj)});
