# upwork-nuxt-task

My Nuxt.js project. Its very basic. It has 2 pages: index(login) and admin. And 2 separate vuex files. And I have some problems with it.

## How to run it:

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

```

## What problems do i have:

1. How to save token persisted? So when user refresh the admin page it stay login on that page. (`store/auth.js/` TODO 1)
Maybe use some of this packages?

  https://www.npmjs.com/package/nuxt-vuex-localstorage

  https://www.npmjs.com/package/vuex-persistedstate

2. How to guard the route correctly, so i want the `/admin` page be guarded. How can I retrive saved token here in order to make API request to validate token? (`middleware/auth.js` TODO 2)
3. How can I used persisted saved token in `admin` page? (`store/admin.js` TODO 3)

## What to do:
So please help me with this three problems if you can. Also i want to implement best practices, so if i've done something bad, you know, please show me the right way to do it, thx.
