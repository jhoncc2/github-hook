# github-hook

Test project that handles github webhooks.

### ports 
  - backend: 3000
  - frontend: 4000

# Dev Notes

This section aims to capture the knowledge gathered from reading documentation. It collects the general knowledge and summarize the main points considered to develop the application. This section also provides what elements are excluded in the project implementation.

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
  