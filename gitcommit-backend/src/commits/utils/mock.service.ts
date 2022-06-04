import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

/**
 * This class contains methods that access REST API endpoints
 */
@Injectable()
export class MockCommitsService {
  getMockCommits(): Observable<any[]> {
    return of([
      {
        sha: 'b48af66039eb5b536d34c1b1e131866b0d44cc97',
        node_id:
          'C_kwDOHceBx9oAKGI0OGFmNjYwMzllYjViNTM2ZDM0YzFiMWUxMzE4NjZiMGQ0NGNjOTc',
        commit: {
          author: {
            name: 'jhoncc2',
            email: 'jhoncc2@gmail.com',
            date: '2022-06-04T16:57:09Z',
          },
          committer: {
            name: 'jhoncc2',
            email: 'jhoncc2@gmail.com',
            date: '2022-06-04T16:57:09Z',
          },
          message: 'Add dev notes for GITHUB API REST requests',
          tree: {
            sha: '1a3e2abf301900c86b67d924335223ce1c089350',
            url: 'https://api.github.com/repos/jhoncc2/github-hook/git/trees/1a3e2abf301900c86b67d924335223ce1c089350',
          },
          url: 'https://api.github.com/repos/jhoncc2/github-hook/git/commits/b48af66039eb5b536d34c1b1e131866b0d44cc97',
          comment_count: 0,
          verification: {
            verified: false,
            reason: 'unsigned',
            signature: null,
            payload: null,
          },
        },
        url: 'https://api.github.com/repos/jhoncc2/github-hook/commits/b48af66039eb5b536d34c1b1e131866b0d44cc97',
        html_url:
          'https://github.com/jhoncc2/github-hook/commit/b48af66039eb5b536d34c1b1e131866b0d44cc97',
        comments_url:
          'https://api.github.com/repos/jhoncc2/github-hook/commits/b48af66039eb5b536d34c1b1e131866b0d44cc97/comments',
        author: {
          login: 'jhoncc2',
          id: 3744702,
          node_id: 'MDQ6VXNlcjM3NDQ3MDI=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3744702?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jhoncc2',
          html_url: 'https://github.com/jhoncc2',
          followers_url: 'https://api.github.com/users/jhoncc2/followers',
          following_url:
            'https://api.github.com/users/jhoncc2/following{/other_user}',
          gists_url: 'https://api.github.com/users/jhoncc2/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jhoncc2/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jhoncc2/subscriptions',
          organizations_url: 'https://api.github.com/users/jhoncc2/orgs',
          repos_url: 'https://api.github.com/users/jhoncc2/repos',
          events_url: 'https://api.github.com/users/jhoncc2/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jhoncc2/received_events',
          type: 'User',
          site_admin: false,
        },
        committer: {
          login: 'jhoncc2',
          id: 3744702,
          node_id: 'MDQ6VXNlcjM3NDQ3MDI=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3744702?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jhoncc2',
          html_url: 'https://github.com/jhoncc2',
          followers_url: 'https://api.github.com/users/jhoncc2/followers',
          following_url:
            'https://api.github.com/users/jhoncc2/following{/other_user}',
          gists_url: 'https://api.github.com/users/jhoncc2/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jhoncc2/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jhoncc2/subscriptions',
          organizations_url: 'https://api.github.com/users/jhoncc2/orgs',
          repos_url: 'https://api.github.com/users/jhoncc2/repos',
          events_url: 'https://api.github.com/users/jhoncc2/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jhoncc2/received_events',
          type: 'User',
          site_admin: false,
        },
        parents: [
          {
            sha: '29190bd736b1e3aea5dc3efc89a56e5c1843e079',
            url: 'https://api.github.com/repos/jhoncc2/github-hook/commits/29190bd736b1e3aea5dc3efc89a56e5c1843e079',
            html_url:
              'https://github.com/jhoncc2/github-hook/commit/29190bd736b1e3aea5dc3efc89a56e5c1843e079',
          },
        ],
      },
      {
        sha: '29190bd736b1e3aea5dc3efc89a56e5c1843e079',
        node_id:
          'C_kwDOHceBx9oAKDI5MTkwYmQ3MzZiMWUzYWVhNWRjM2VmYzg5YTU2ZTVjMTg0M2UwNzk',
        commit: {
          author: {
            name: 'jhoncc2',
            email: 'jhoncc2@gmail.com',
            date: '2022-06-03T18:33:41Z',
          },
          committer: {
            name: 'GitHub',
            email: 'noreply@github.com',
            date: '2022-06-03T18:33:41Z',
          },
          message: 'Initial commit',
          tree: {
            sha: '12c6faef5767f338294ed2277981dd55c6d665a9',
            url: 'https://api.github.com/repos/jhoncc2/github-hook/git/trees/12c6faef5767f338294ed2277981dd55c6d665a9',
          },
          url: 'https://api.github.com/repos/jhoncc2/github-hook/git/commits/29190bd736b1e3aea5dc3efc89a56e5c1843e079',
          comment_count: 0,
          verification: {
            verified: false,
            reason: 'unsigned',
            signature: '',
            payload: '',
          },
        },
        url: 'https://api.github.com/repos/jhoncc2/github-hook/commits/29190bd736b1e3aea5dc3efc89a56e5c1843e079',
        html_url:
          'https://github.com/jhoncc2/github-hook/commit/29190bd736b1e3aea5dc3efc89a56e5c1843e079',
        comments_url:
          'https://api.github.com/repos/jhoncc2/github-hook/commits/29190bd736b1e3aea5dc3efc89a56e5c1843e079/comments',
        author: {
          login: 'jhoncc2',
          id: 3744702,
          node_id: 'MDQ6VXNlcjM3NDQ3MDI=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3744702?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jhoncc2',
          html_url: 'https://github.com/jhoncc2',
          followers_url: 'https://api.github.com/users/jhoncc2/followers',
          following_url:
            'https://api.github.com/users/jhoncc2/following{/other_user}',
          gists_url: 'https://api.github.com/users/jhoncc2/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jhoncc2/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jhoncc2/subscriptions',
          organizations_url: 'https://api.github.com/users/jhoncc2/orgs',
          repos_url: 'https://api.github.com/users/jhoncc2/repos',
          events_url: 'https://api.github.com/users/jhoncc2/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jhoncc2/received_events',
          type: 'User',
          site_admin: false,
        },
        committer: {
          login: 'web-flow',
          id: 19864447,
          node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
          avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/web-flow',
          html_url: 'https://github.com/web-flow',
          followers_url: 'https://api.github.com/users/web-flow/followers',
          following_url:
            'https://api.github.com/users/web-flow/following{/other_user}',
          gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/web-flow/subscriptions',
          organizations_url: 'https://api.github.com/users/web-flow/orgs',
          repos_url: 'https://api.github.com/users/web-flow/repos',
          events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/web-flow/received_events',
          type: 'User',
          site_admin: false,
        },
        parents: [],
      },
    ]);
  }
}
