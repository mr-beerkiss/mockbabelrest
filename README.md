### Install
```bash
git clone git@github.com:mr-beerkiss/mockbabelrest.git
cd mockbabelrest
npm install
```

### Run
```bash
npm start
```

### Usage
- run the mock service which is exposed to **localhost:9873**
- Divert the traffic to this service in **smash-website**: 
    - open ```smash-website/eagle-webapp/env-configuration/localhost.conf```
    - set ```babelRESTEndpoint=http://localhost:9873```

### Example
##### Request
Endpoint
```
http://lcoalhost:9873/Community/Member/New
```

HTTP Headers
```
X-Babel-Client: boxtop
Content-Type: application/json
```

HTTP Body
```json
{
    "email": "bence.lightweight@photobox.com",
    "lightweight": true
}
```

##### Response
HTTP Headers
```
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, Content-Length, X-Requested-With, X-Babel-Client, X-Babel-Session
Content-Type: application/json; charset=utf-8
Content-Length: 2481
Etag: W/"9b1-G0WfA2xJPBLXPpod1C1Eag"
Date: Wed, 03 Aug 2016 09:55:36 GMT
Connection: keep-alive
```

HTTP Body
```json
{
  "babel_item_type": "return",
  "server_id": "1011204212",
  "server_tag": "tag1bT9Ih3Y64iX",
  "value": {
    "class": "Community.Member",
    "id": "3066",
    "props": {
      "_DB_offers": 0,
      "active": 1,
      "active_pod_id": -1,
      "billing_contact_id": "0",
      "birthday": "0000-00-00",
      "brand_id_opt_in": {
        "h": {}
      },
      "building": "",
      "channel_id": 1,
      "checkout_opt_in": "0",
      "company_name": "",
      "country": 1,
      "country_id": 1,
      "county": "",
      "created": "2016-07-29 15:02:11",
      "currency_id": 1,
      "custom_date": "0000-00-00",
      "custom_date_name": "",
      "delivery_contact_id": "0",
      "email": "bence.lightweight@photobox.com",
      "email2": "",
      "first_name": "",
      "flat": "",
      "force_intersite_page": "0",
      "id": "3066",
      "inactive_reason": "",
      "is_gallery": "0",
      "is_permitted_to_share": 1,
      "is_vendor": "0",
      "language": "en",
      "last_access": "2016-07-29 15:02:11",
      "last_activity_date": "2016-07-29",
      "last_name": "",
      "lastupdated": "2016-07-29 15:02:11",
      "legacy_company": "0",
      "legacy_customer_id": "0",
      "lightweight": 1,
      "marketing_segment_id": "0",
      "may_act": "rw",
      "member_refcode": "70f4b4c515",
      "meta": "+news_history,<p t='a'><p t='h'><p key='new_value'>1</p><p key='when'>2016-07-29 15:02:11</p></p></p>,registration_client_id,boxtop:bencevarga",
      "mobile": "",
      "news": 1,
      "nickname": "",
      "offers": 0,
      "other_dates": "0000-00-00",
      "other_dates_selection": "",
      "photo_count": 0,
      "postcode": "",
      "prefs": "albums_sort,created_desc,clipboard_open,1,confirm_upload,0,date_format,%e %b %Y,datetime_format,%e %b %Y %T,default_product,1,default_style,149,email_vat,0,fit_photos,0,java_uploader,0,lax_upload,0,photo_date,0,photo_sort,alpha,print_thumbs,0,remember_me,0,setpassword_hash,1,setpassword_icase,1,share_hires,0,silent_add_basket,0,silent_album_delete,0,silent_empty_basket,0,silent_photo_delete,0",
      "privileges": "",
      "quota": "1000",
      "quota_used": 0,
      "quota_used_is_accurate": 1,
      "requested_pod_id": "0",
      "reward_percentage": "0",
      "settings": "",
      "sms_app_opt_in": "0",
      "street": "",
      "streetnumandname": "",
      "telephone": "",
      "title": "",
      "town": "",
      "vat_number": "",
      "whereheard": ""
    }
  }
}
```
