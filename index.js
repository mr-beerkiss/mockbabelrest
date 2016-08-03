/* global require, describe, it, before */
const jsonServer = require('json-mock');
const bodyParser = require('body-parser');
const MockServerPort = 9873;

const testBabelSessionCode = '4bd4d87342b8880e1ed0e138c48ecfb8';
const testBabelMemberId = '655';
const existingEmail = 'existing.email@test.com';

function getSessionResponse(config) {
    if (!config) config = {};
    return {
        'babel_item_type': 'return',
        'server_id': '1011204212',
        'server_tag': 'tag1bK6Pr0aWA4P',
        'value': {
            'class': 'Community.Session',
            'id': config.id || '1000034702',
            'props': {
                'basket_id': config.basket_id || '0',
                'channel_id': config.channel_id || '1002',
                'code': config.code || '6e8c0d6e9a09be953f3ad9901415541c',
                'country_id': config.country_id || 1,
                'currency_id': config.currency_id || '1',
                'id': config.id || '1000034702',
                'language': config.language || 'en',
                'logged_in': config.logged_in || '0',
                'maturity_id': config.maturity_id || 1,
                'member_id': config.member_id || '1000034702'
            }
        }
    };
}

function getLoginErrorResponse(){
    return {
        "babel_item_type":"return",
        "error_code":"202",
        "error_message":"badpassword",
        "server_id":"1011204212",
        "server_tag":"tag1bQa213vat4W"
    };
}

function getMemberResponse(config) {
    if (!config) config = {};
    return {
        'babel_item_type': 'return',
        'server_id': '1011204212',
        'server_tag': 'tag1bT9Ih3Y64iX',
        'value': {
            'class': 'Community.Member',
            'id': '3066',
            'props': {
                '_DB_offers': 0,
                'active': 1,
                'active_pod_id': -1,
                'billing_contact_id': '0',
                'birthday': '0000-00-00',
                'brand_id_opt_in': {
                    'h': {}
                },
                'building': '',
                'channel_id': 1,
                'checkout_opt_in': '0',
                'company_name': '',
                'country': 1,
                'country_id': 1,
                'county': '',
                'created': '2016-07-29 15:02:11',
                'currency_id': 1,
                'custom_date': '0000-00-00',
                'custom_date_name': '',
                'delivery_contact_id': '0',
                'email': config.email || 'bence123.test@test.com',
                'email2': '',
                'first_name': '',
                'flat': '',
                'force_intersite_page': '0',
                'id': '3066',
                'inactive_reason': '',
                'is_gallery': '0',
                'is_permitted_to_share': 1,
                'is_vendor': '0',
                'language': 'en',
                'last_access': '2016-07-29 15:02:11',
                'last_activity_date': '2016-07-29',
                'last_name': '',
                'lastupdated': '2016-07-29 15:02:11',
                'legacy_company': '0',
                'legacy_customer_id': '0',
                'lightweight': config.lightweight || 0,
                'marketing_segment_id': '0',
                'may_act': 'rw',
                'member_refcode': '70f4b4c515',
                'meta': '+news_history,<p t=\'a\'><p t=\'h\'><p key=\'new_value\'>1</p><p key=\'when\'>2016-07-29 15:02:11</p></p></p>,registration_client_id,boxtop:bencevarga',
                'mobile': '',
                'news': 1,
                'nickname': '',
                'offers': 0,
                'other_dates': '0000-00-00',
                'other_dates_selection': '',
                'photo_count': 0,
                'postcode': '',
                'prefs': 'albums_sort,created_desc,clipboard_open,1,confirm_upload,0,date_format,%e %b %Y,datetime_format,%e %b %Y %T,default_product,1,default_style,149,email_vat,0,fit_photos,0,java_uploader,0,lax_upload,0,photo_date,0,photo_sort,alpha,print_thumbs,0,remember_me,0,setpassword_hash,1,setpassword_icase,1,share_hires,0,silent_add_basket,0,silent_album_delete,0,silent_empty_basket,0,silent_photo_delete,0',
                'privileges': '',
                'quota': '1000',
                'quota_used': 0,
                'quota_used_is_accurate': 1,
                'requested_pod_id': '0',
                'reward_percentage': '0',
                'settings': '',
                'sms_app_opt_in': '0',
                'street': '',
                'streetnumandname': '',
                'telephone': '',
                'title': '',
                'town': '',
                'vat_number': '',
                'whereheard': ''
            }
        }
    }    
}

function getMemberErrorResponse(errorCode){
    const errors = {
        '1023': {'babel_item_type':'return','error_code':'1023','error_message':'invalid mailbox address','server_id':'1011204212','server_tag':'tag1bT95F1C9Icr'},
        '501': {'babel_item_type':'return','error_code':'501','error_message':'Email address: bence.varga@photobox.com already in use in channel 1','server_id':'1011204212','server_tag':'tag1bT9530C4Syv'}
    };
    return errors[errorCode];
}

// it uses express 
const server = jsonServer.create();

server.use((req, res, next) => {
    var allowedHeaders = [
            'Content-Type', 
            'Authorization', 
            'Content-Length', 
            'X-Requested-With',
            'X-Babel-Client',
            'X-Babel-Session',
        ];
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', allowedHeaders.join(', '));

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }    
});

server.use(bodyParser.json());

server.use('/Community/Session$', (req, res) => {
    res.json( getSessionResponse() );
});

server.use('/Community/Session/FetchFromCode*', (req, res) => {
    res.json( getSessionResponse({
        code: req.query.code
    }));
});

server.use('/Community/Session/:id/Login*', (req, res) => {

    return;

    res.json( getSessionResponse({
        'id': req.params.id,
        'logged_in': '1',
        'member_id': testBabelMemberId
    }));
});

server.use('/Community/Session/:id/Logout*', (req, res) => {
    res.json( getSessionResponse({
        'id': req.params.id,
        'logged_in': '0',
        'member_id': testBabelMemberId
    }));
});

server.use('/Community/Member/New*', (req, res) => {
    if (!req.body.email.match(/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,4}(?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/g)){
        res.status(500).json(getMemberErrorResponse(1023));
    } else if (req.body.email === existingEmail) {
        res.status(500).json(getMemberErrorResponse(501));
    } else {
        res.json(getMemberResponse({
            'email': req.body.email,
            'lightweight': req.body.lightweight ? 1 : 0
        }));
    }
});  

server.listen(MockServerPort);
