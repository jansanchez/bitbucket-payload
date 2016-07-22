'use strict';

//import request from 'request';
//const url = 'http://www.json-generator.com/api/json/get/bVXFCsEbDm?indent=2';
//const url = 'http://www.json-generator.com/api/json/get/bUCzHEvUWG?indent=2';

const data = {
  "push": {
    "changes": [
      {
        "forced": false,
        "old": {
          "links": {
            "commits": {
              "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commits/master"
            },
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/refs/branches/master"
            },
            "html": {
              "href": "https://bitbucket.org/jansanchez27/demo/branch/master"
            }
          },
          "type": "branch",
          "target": {
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
          "repository": {
            "full_name": "jansanchez27/demo",
            "type": "repository",
            "uuid": "{a493855f-e9e4-4f6c-b395-941ee1f7ab45}",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo"
              },
              "avatar": {
                "href": "https://bitbucket.org/jansanchez27/demo/avatar/32/"
              }
            },
            "name": "demo"
          },
          "name": "master"
        },
        "links": {
          "commits": {
            "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commits?include=189e248b5378c20b99f471f02d99aa572792a83b&exclude=38c3b8b052d1f994b592c3c8da19d83b1c01ea04"
          },
          "html": {
            "href": "https://bitbucket.org/jansanchez27/demo/branches/compare/189e248b5378c20b99f471f02d99aa572792a83b..38c3b8b052d1f994b592c3c8da19d83b1c01ea04"
          },
          "diff": {
            "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/diff/189e248b5378c20b99f471f02d99aa572792a83b..38c3b8b052d1f994b592c3c8da19d83b1c01ea04"
          }
        },
        "created": false,
        "commits": [
          {
            "hash": "189e248b5378c20b99f471f02d99aa572792a83b",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/189e248b5378c20b99f471f02d99aa572792a83b"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/189e248b5378c20b99f471f02d99aa572792a83b"
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
                "hash": "46244162701616bc396ba7bf1406f776e322f93a",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/46244162701616bc396ba7bf1406f776e322f93a"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/46244162701616bc396ba7bf1406f776e322f93a"
                  }
                }
              }
            ],
            "date": "2016-07-20T21:50:15+00:00",
            "message": "chore(main): se retira un integrante\n\nJRA-53 #time 2d 5h #comment Task completed ahead of schedule #done\n",
            "type": "commit"
          },
          {
            "hash": "46244162701616bc396ba7bf1406f776e322f93a",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/46244162701616bc396ba7bf1406f776e322f93a"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/46244162701616bc396ba7bf1406f776e322f93a"
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
                "hash": "6c0e1965409bdbe89024f4a89740aeb6cd5596e6",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/6c0e1965409bdbe89024f4a89740aeb6cd5596e6"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/6c0e1965409bdbe89024f4a89740aeb6cd5596e6"
                  }
                }
              }
            ],
            "date": "2016-07-20T21:49:44+00:00",
            "message": "fix(contrib): retiro un contrib del proyecto\n",
            "type": "commit"
          },
          {
            "hash": "6c0e1965409bdbe89024f4a89740aeb6cd5596e6",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/6c0e1965409bdbe89024f4a89740aeb6cd5596e6"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/6c0e1965409bdbe89024f4a89740aeb6cd5596e6"
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
                "hash": "f402535c813705cb6cbe6efa3a5c56f1aabc0a5b",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/f402535c813705cb6cbe6efa3a5c56f1aabc0a5b"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/f402535c813705cb6cbe6efa3a5c56f1aabc0a5b"
                  }
                }
              }
            ],
            "date": "2016-07-20T21:48:33+00:00",
            "message": "refactor(scope): shortolog jojojo\ndetalle pequeño del commir\nJIRA-12\n",
            "type": "commit"
          },
          {
            "hash": "f402535c813705cb6cbe6efa3a5c56f1aabc0a5b",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/f402535c813705cb6cbe6efa3a5c56f1aabc0a5b"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/f402535c813705cb6cbe6efa3a5c56f1aabc0a5b"
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
                "hash": "8a2952c0e135f2445afa0f9dc6d183717b1cef1c",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/8a2952c0e135f2445afa0f9dc6d183717b1cef1c"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/8a2952c0e135f2445afa0f9dc6d183717b1cef1c"
                  }
                }
              }
            ],
            "date": "2016-07-20T21:47:57+00:00",
            "message": "fix(author): shortlog\n\nCon esto podemos seguir avanzando\n",
            "type": "commit"
          },
          {
            "hash": "8a2952c0e135f2445afa0f9dc6d183717b1cef1c",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/8a2952c0e135f2445afa0f9dc6d183717b1cef1c"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/8a2952c0e135f2445afa0f9dc6d183717b1cef1c"
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
                "hash": "e53a3af2484f236755ec268fe32ac85e9f82b6cb",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/e53a3af2484f236755ec268fe32ac85e9f82b6cb"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/e53a3af2484f236755ec268fe32ac85e9f82b6cb"
                  }
                }
              }
            ],
            "date": "2016-07-20T21:47:29+00:00",
            "message": "feat(scope): shortlog del commit\n\nJRA-123 #time 2d 5h #comment Task completed ahead of schedule #done\n",
            "type": "commit"
          }
        ],
        "truncated": true,
        "closed": false,
        "new": {
          "links": {
            "commits": {
              "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commits/master"
            },
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/refs/branches/master"
            },
            "html": {
              "href": "https://bitbucket.org/jansanchez27/demo/branch/master"
            }
          },
          "type": "branch",
          "target": {
            "hash": "189e248b5378c20b99f471f02d99aa572792a83b",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/189e248b5378c20b99f471f02d99aa572792a83b"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo/commits/189e248b5378c20b99f471f02d99aa572792a83b"
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
                "hash": "46244162701616bc396ba7bf1406f776e322f93a",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo/commit/46244162701616bc396ba7bf1406f776e322f93a"
                  },
                  "html": {
                    "href": "https://bitbucket.org/jansanchez27/demo/commits/46244162701616bc396ba7bf1406f776e322f93a"
                  }
                }
              }
            ],
            "date": "2016-07-20T21:50:15+00:00",
            "message": "chore(main): se retira un integrante\n\nJRA-53 #time 2d 5h #comment Task completed ahead of schedule #done\n",
            "type": "commit"
          },
          "repository": {
            "full_name": "jansanchez27/demo",
            "type": "repository",
            "uuid": "{a493855f-e9e4-4f6c-b395-941ee1f7ab45}",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo"
              },
              "html": {
                "href": "https://bitbucket.org/jansanchez27/demo"
              },
              "avatar": {
                "href": "https://bitbucket.org/jansanchez27/demo/avatar/32/"
              }
            },
            "name": "demo"
          },
          "name": "master"
        }
      }
    ]
  },
  "actor": {
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
  },
  "repository": {
    "scm": "git",
    "website": "",
    "uuid": "{a493855f-e9e4-4f6c-b395-941ee1f7ab45}",
    "links": {
      "self": {
        "href": "https://api.bitbucket.org/2.0/repositories/jansanchez27/demo"
      },
      "html": {
        "href": "https://bitbucket.org/jansanchez27/demo"
      },
      "avatar": {
        "href": "https://bitbucket.org/jansanchez27/demo/avatar/32/"
      }
    },
    "full_name": "jansanchez27/demo",
    "owner": {
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
    },
    "type": "repository",
    "is_private": true,
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
const commits = [];
// if repository.event is push then
for (let change of data[repository_events[0]].changes) {
  if (change.commits.length > 0) {
    for (let commit of change.commits) {
      let object = {
        date: commit.date,
        message: commit.message
      }
      commits.push(object);
    }
    if (change.truncated) { // avisar al usuario que solo se procesaran los ultimos 5 commits
      console.log("Truncated: " + change.truncated);
    }
  }
}
console.log(commits);
