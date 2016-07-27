'use strict';

class BitbucketPayload {
  constructor(payload, repositoryEvent) {
    this.repositoryEvent = repositoryEvent || 'push';
    this.commits = [];
    this.actor = {};
    this.repository = {};
    this.truncated = false;
    if (this.validatePayload(payload)) {
      this.getChanges();
      this.getCommits();
      this.setActor();
      this.setRepository();
    }
    return this;
  }

  validatePayload(payload) {
    if (payload) {
      this.content = payload;
      return true;
    }
    const e = new Error('The payload is undefined.');
    throw e;
  }

  getChanges() {
    this.changes = this.content[this.repositoryEvent].changes; // if 'changes' don't have value?
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
    const change = this.changes[0]; // only if it's a unique value
    for (const commit of change.commits) {
      this.addCommit(commit);
    }
    if (change.truncated) { // more than 5 commits
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

module.exports = BitbucketPayload;
