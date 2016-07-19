'use strict';

//import request from 'request';
//const url = 'http://www.json-generator.com/api/json/get/bVXFCsEbDm?indent=2';

const data = {
  "push": {
    "changes": [
      {
        "commits": [
          {
            "hash": "38c3b8b052d1f994b592c3c8da19d83b1c01ea04",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/38c3b8b052d1f994b592c3c8da19d83b1c01ea04"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/38c3b8b052d1f994b592c3c8da19d83b1c01ea04"
              }
            },
            "author": {
              "raw": "Jan Sanchez <joejansanchez@gmail.com>",
              "user": {
                "username": "jansanchez27",
                "type": "user",
                "display_name": "Jan Sanchez",
                "uuid": "{e85c9a2e-364a-4446-88f8-6a9eac8a2482}",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/users/jansanchez27"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/"
                  },
                  "avatar": {
                    "href": "https://bitbucket.org/account/jansanchez27/avatar/32/"
                  }
                }
              }
            },
            "parents": [
              {
                "type": "commit",
                "hash": "8bf5e93b14c4305043c49dc83b06cfa21e710b0f",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/8bf5e93b14c4305043c49dc83b06cfa21e710b0f"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/8bf5e93b14c4305043c49dc83b06cfa21e710b0f"
                  }
                }
              }
            ],
            "date": "2016-07-18T21:09:20+00:00",
            "message": "feat(contrib): agrego a billy\nCreo que deberiamos automatizar este proceso con un formulario simple, ya que nosotros perdemos demasiado\ntiempo realizando estas tareas de forma manual.\n\nJRA-123 #comment Imagine that this is a really, and I mean really, long comment\nJRA-123 #time 2d 5h\nJRA-123 JRA-234 JRA-345 #resolve #time 2d 5h\n",
            "type": "commit"
          },

          {
            "hash": "8bf5e93b14c4305043c49dc83b06cfa21e710b0f",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/8bf5e93b14c4305043c49dc83b06cfa21e710b0f"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/8bf5e93b14c4305043c49dc83b06cfa21e710b0f"
              }
            },
            "author": {
              "raw": "Jan Sanchez <joejansanchez@gmail.com>",
              "user": {
                "username": "jansanchez27",
                "type": "user",
                "display_name": "Jan Sanchez",
                "uuid": "{e85c9a2e-364a-4446-88f8-6a9eac8a2482}",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/users/jansanchez27"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/"
                  },
                  "avatar": {
                    "href": "https://bitbucket.org/account/jansanchez27/avatar/32/"
                  }
                }
              }
            },
            "parents": [
              {
                "type": "commit",
                "hash": "45e1b8a40d45f40f70a84385f107df57e8c6f945",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/45e1b8a40d45f40f70a84385f107df57e8c6f945"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/45e1b8a40d45f40f70a84385f107df57e8c6f945"
                  }
                }
              }
            ],
            "date": "2016-07-18T21:06:02+00:00",
            "message": "refactor(everything): shortlog 2\nDescripcion del commit:\n- uno\n- dos\nAPTIOS-123 APTIOS-124 APTIOS-125 #done\n",
            "type": "commit"
          },

          {
            "hash": "45e1b8a40d45f40f70a84385f107df57e8c6f945",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/45e1b8a40d45f40f70a84385f107df57e8c6f945"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/45e1b8a40d45f40f70a84385f107df57e8c6f945"
              }
            },
            "author": {
              "raw": "Jan Sanchez <joejansanchez@gmail.com>",
              "user": {
                "username": "jansanchez27",
                "type": "user",
                "display_name": "Jan Sanchez",
                "uuid": "{e85c9a2e-364a-4446-88f8-6a9eac8a2482}",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/users/jansanchez27"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/"
                  },
                  "avatar": {
                    "href": "https://bitbucket.org/account/jansanchez27/avatar/32/"
                  }
                }
              }
            },
            "parents": [
              {
                "type": "commit",
                "hash": "6e96aeeb3f08a1d80134ed058d92eff7d3ba2f71",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/6e96aeeb3f08a1d80134ed058d92eff7d3ba2f71"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/6e96aeeb3f08a1d80134ed058d92eff7d3ba2f71"
                  }
                }
              }
            ],
            "date": "2016-07-18T21:04:42+00:00",
            "message": "feat(scope): shortlog del commit\n\nJRA-123 #time 2d 5h #comment Task completed ahead of schedule #done\n",
            "type": "commit"
          }
        ],
        "truncated": false
      }
    ]
  },
  "actor": {
    "username": "jansanchez27"
  },
  "repository": {
    "name": "demo"
  }
};

/*
request(url, (error, response, body) => {
	if (!error && response.statusCode == 200) {

    console.log(body);

	}else{
		console.log(error);
	}
});
*/

const repository_events = ['push'];
// if repository.event is push then
for (let change of data[repository_events[0]].changes) {
  //console.log(change.commits.length);
  if (change.commits.length > 0 && change.commits.length < 5) {
    for (let commit of change.commits) {
      console.log(commit.date);
      console.log(commit.message);
      console.log('\n');
    }
  }else{
    console.log(commits.truncated);
  }
}
