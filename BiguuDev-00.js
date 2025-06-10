// WinkViP By Biguu.dev
// Author: Biguu.dev
// Description: Wink VIP subscription status
// For use in Shadowrocket / Surge

let body = $response.body;
let data = JSON.parse(body);


data = {
  active_sub_type: 2,
  account_type: 1,
  sub_type_name: "续期",
  active_sub_order_id: "7069961436604422668",
  trial_period_invalid_time: "32495508000000",
  current_order_invalid_time: "7069961436340181123",
  active_order_id: "普通会员",
  limit_type: 0,
  use_vip: true,
  have_valid_contract: true,
  device_type_name: "Wink会员",
  device_type: 1,
  in_trial_period: false,
  is_vip: true,
  membership: {
    id: "1230010086",
    display_name: "Wink会员",
    level: 1,
    level_name: "Wink会员"
  },
  active_promotion_status_list: [2],
  sub_type: 2,
  account_id: "32495529599000",
  invalid_time: "15696648000000",
  valid_time: "0",
  active_product_id: "undefined",
  active_promotion_status: 2,
  show_renew_flag: true
};

$done({ body: JSON.stringify(data) });
