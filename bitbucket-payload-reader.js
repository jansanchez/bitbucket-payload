'use strict';

import request from 'request';

const url = 'http://www.json-generator.com/api/json/get/bVXFCsEbDm?indent=2';

request(url, (error, response, body) => {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
});
