# github-hook

Test project that handles github webhooks.

## Installation

To run this project you need to download/clone the project. The project contains two folders: 
  - gitcommit-backend: backend developed in NestJS.
  - gitcommit-frontend: frontend develoepd in ReactJS.

Then install the dependencies by running the command on the corresponding folders.

```
# inside `gitcommit-backend` folder run
npm install
# inside `gitcommit-frontend` folder run
npm install
```

Lastly, run the following commands to get the services up

```
# inside `gitcommit-backend` folder run
npm run start

# inside `gitcommit-frontend` folder run
npm start
```

As a result the following are the url address in which the backend and frontend run:

  - backend: http://localhost:4000/
  - frontend: http://localhost:3000/

The backend contains 2 endpoints: 
  - `http://localhost:4000/commits/mock`. Returns a mocked list of commits. 
  - `http://localhost:4000/commits`. Returns the list of commits fetched from GITHUB REST service. This is thought to work for GITHUB 60 requests per hour restriction.

Finally, to change the endpoints in the frontend the file `dataProvider.js` must be modified in the line `18`. By default, the mock endpoint is NOT utilized.
 
# Dev Notes

This section aims to capture the knowledge gathered from reading documentation. It collects the general knowledge and summarize the main points considered to develop the application. This section also provides what elements are excluded in the project implementation.

## Implementation standarts

Here the list of considerations that I made along the project implementation: 
  - All methods andclasses (implemented) must have a comment summing up what it does. Other comments are optional.
  - Commit comments do not follow any standards. For instance, I do not add prefix on the comment (e.g. `[fix]` or `[new feature]`). It does not sums up critical information. The commit comment only shows a short text with what I consider relevant information.
  - Test. I do not implement tests in this case. All of this is susceptible to discussion, and solved in team meetings in which the result is a standard of what should be tested. Or to a what degree we let the errors be handled by the framework.   
    - Frontend. The frontend application only shows data. The only test that can be run are snapshots tests, which personaly I think they just generate noise and they are not a source of correctness.
    - Backend. In a similar way the only testable class is Commits.service.ts, in which the call to GITHUB API endpoint is needed. Nevertheless, in this particular implementation, the error is already handled by NestJS. Then, no custom implementation needed to be tested.
  - Use the `TODO:` prefix as a tag for missing implementations or further improvements along the code.

## Github configuration

Oficial documentation (link)[https://docs.github.com/en/developers]

### Github app
There exist 2 kind of application for github OauthApp and GihubApp. The difference between both is, roughly speaing, that GithubApp grants full access to company/user github account and OauthApp is more restrictive (e.g. Single repository access or limited time access). Refer to (doc)[https://docs.github.com/en/github-ae@latest/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps].

### Permision

Main information a https://docs.github.com/en/developers/overview/managing-deploy-keys
There are three main ways to provide access to a preository, I lay it down below.

Connect via: 
  - SSH. You share your ssh key to a third party server.

  - OAuth key. Single key generated that any other server can use.

  - Deploy key. This option allows to share a key for read-only access on a single project.

### Rest api

The scope of the project only includes access to Github commits regarding the project itself. Refer the documentation in https://docs.github.com/en/rest/commits/commits. The javascript examples uses `octokit` library for calls to the API. We remove use `axios`, the recommended library for NestJS.

### Conclusion

Rest api can be accessed without the need of creating an application, which can also be called without Oauth access or WebHooks. Many endpoints are accessed without the need of authorization keys or any other authorization methods (ssh) due to its public nature (configuration). Nevertheless, this access is limited by the amount of request, 60 per hour.
If you want to increase the amount of request per hour, you can provide Oauth token/key for your project.

Therefore, in this project we use the public access to load this project's commits. This is accessed through REST endpoint https://api.github.com/repos/OWNER/REPO/commits. For further information read the documentation.

## Notes/Todos/Considerations

Request. 
  - (Security) The response to the https://api.github.com/repos/OWNER/REPO/commits api REST endpoint gives the in the response a reference to ssh keys in the attirbute `verification`. Test whether this configuration 
was collected from other test-configurations made along the implementation of this project.
  