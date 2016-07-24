'use strict';

// import request from 'request';
// const url = 'http://www.json-generator.com/api/json/get/bVXFCsEbDm?indent=2';
// const url = 'http://www.json-generator.com/api/json/get/bUCzHEvUWG?indent=2';

const payload = {
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
    "type": "repository",
    "is_private": true,
    "name": "demo",
    "full_name": "jansanchez27/demo",
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
    }
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

class BitbucketPayload {
  constructor(payload, repositoryEvent) {
    this.repositoryEvent = repositoryEvent || 'push';
    this.content = payload; // ¿si no es enviado el payload?
    this.commits = [];
    this.actor = {};
    this.repository = {};
    this.truncated = false;
    this.getChanges();
    this.getCommits();
    this.setActor();
    this.setRepository();
    return this;
  }

  getChanges() {
    this.changes = this.content[this.repositoryEvent].changes; // si no hay changes?
    return this.changes;
  }

  getEmailOfCommit(raw) {
    const email = raw.substring(raw.indexOf('<') + 1, raw.lastIndexOf('>'));
    return email;
  }

  addCommit(commit) {
    this.commits.push({
      date: commit.date,
      hash: commit.hash,
      message: commit.message,
      author: {
        username: commit.author.user.username,
        displayName: commit.author.user.display_name,
        email: this.getEmailOfCommit(commit.author.raw)
      }
    });
  }

  getCommits() {
    const change = this.changes[0];  // si es un solo valor
    for (const commit of change.commits) {
      this.addCommit(commit);
    }
    if (change.truncated) { // avisar al usuario que solo se procesaran los ultimos 5 commits
      this.truncated = true;
    }
  }

  setActor() {
    this.actor.username = this.content.actor.username;
    this.actor.type = this.content.actor.type;
    this.actor.displayName = this.content.actor.display_name;
  }

  setRepository() {
    this.repository.scm = this.content.repository.scm;
    this.repository.type = this.content.repository.type;
    this.repository.isPrivate = this.content.repository.is_private;
    this.repository.name = this.content.repository.name;
    this.repository.fullName = this.content.repository.full_name;
  }

  getPurged() {
    return {
      truncated: this.truncated,
      commits: this.commits,
      actor: this.actor,
      repository: this.repository
    };
  }

}

const bitbucketPayload = new BitbucketPayload(payload, 'push');
const newPayload = bitbucketPayload.getPurged();

console.log(newPayload.commits);

// console.log(bitbucketPayload.getChanges());
// console.log(bitbucketPayload.commits);
