body = $response.body.replace(/"lastVipExpireTime":+\d{10}/g, "\"vip\":{\"expireTime\":1892800999,\"startTime\":1572527803,\"subscription\":{\"status\":1,\"expireTime\": 1892800999,\"platform\":2},\"vipType\":1}");
$done({body});
