# Bitbucket Payload Reader [![NPM version][npm-image]][npm-url]
A payload reader for Bitbucket webhooks

## Install like a development dependency

```
npm i -SD bitbucket-payload
```

## How to use

Bitbucket payload reader accepts 2 parameters:

- **bitbucketEventPayload:**
When you have a webhook with an *event*, Bitbucket sends the *event request* to the server URL for the webhook whenever that event occurs.
*e.g.*
```javascript
{
   "actor": Owner,
   "repository": Repository,
   "push": { ... },
   ...
}
```
- **repositoryEvent**
When configuring a webhook, you can choose which events you would like to receive payloads for.
 *e.g. 'push', 'fork', 'updated'*.

### **Code**

```javascript
const BitbucketPayload = require('bitbucket-payload');

const repositoryEvent = 'push';
const bitbucketPayload = new BitbucketPayload(bitbucketEventPayload, repositoryEvent);
const payloadObject = bitbucketPayload.getPurged();
```

### Implementation in a webhook

```javascript
'use strict';
const app = require('express')();
const BitbucketPayload = require('bitbucket-payload');
// use in webhook request
app.post('/', (request, response) => {
  const payload = request.body;
  // instance BitbucketPayload
  const bitbucketPayload = new BitbucketPayload(bitbucketEventPayload, repositoryEvent);
  const payloadObject = bitbucketPayload.getPurged();
  const messages = [];

  for (const commit of payloadObject.commits) {
    console.log(commit.author.username);
    console.log(commit.author.email);
    messages.push(commit.message);
  }

  // console.log(payloadObject);
  /* logs...
  {
    truncated: false,
    commits:
     [ { date: '2016-08-18T17:36:29+00:00',
         hash: '6e829d8d4ee6e6620666e053666d957838d16a2f',
         message: 'Commit message',
         author: [Object] } ],
    actor:
     {
       username: 'jansanchez27',
       type: 'user',
       displayName: 'Jan Sanchez'
     },
    repository:
     {
       scm: 'git',
       type: 'repository',
       isPrivate: true,
       name: 'demo',
       fullName: 'jansanchez27/demo'
     } 
  }
  */
}
```

## License
MIT © [Jan Sanchez]([author-url])

[npm-image]: http://img.shields.io/npm/v/bitbucket-payload.svg
[npm-url]: https://www.npmjs.org/package/bitbucket-payload
[author-url]: https://frontendlabs.io/author/jansanchez
