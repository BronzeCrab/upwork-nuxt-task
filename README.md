# upwork-nuxt-task

My Nuxt.js project. Its very basic. It have 2 pages: index(login) and admin. And I have some problems with it.

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## What problems do i have:

1. How to save token persisted? So when user refresh the admin page it stay login on that page. (`store/auth.js/` TODO 1)
2. How to guard the route correctly, so i want the `/admin` page be guarded. How can I retrive saved token here in order to make API request? (`middleware/auth.js` TODO 2)
3. How can I used persisted saved token in `admin` page? (`store/admin.js` TODO 3)

## What to do:
So please help me with this problems if you can
