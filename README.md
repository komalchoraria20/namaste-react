# IGNITING OUR APP

**1.What is NPM ?**

NPM is a package manager which is used to manage our packages. React requires a package manager since it cannot do all its work alone and needs help from different packages. Also, to install any package, we need a package manager.

**2.What is Parcel/Webpack? Why do we need it?**

Parcel is a bundler i.e, package or module of javascript files.
It makes the app ready for production by minifying, optimizing, cleaning code and bundling it all together. It bundles everything and puts it in the dist folder for production.

**3.What is parcel-cache?**

When we install parcel as a package, parcel-cache gets created in our application. Parcel-cache provides the space for all the work parcel does. It stores information about our project when parcel builds, so that when it re-builds, it does not have to re-parse and re-analyse everything from scratch.

**4.What is npx?**

It stands for Node Package Execute.
Npx is exactly like npm. It executes a package without downloading it. It is a npm package runner that can execute any package that we want from the npm registry without even installing the package.

**5.What is the difference between dependencies and devDependencies?**

Dependencies are the packages on which our project is dependent on and devDependencies are packages which are required only before production i.e, development, so that it doesn’t get bundled in the production.

**6.What is Tree Shaking?**

It means removing unwanted code.
It is a process which bundlers go through to remove unused code.
It means that only components from our library used in the app are included in the app bundle.

**7.What is Hot Module Reload?**

It is a feature of parcel which is required to build a production ready app. HMR uses File Watcher Algorithm to watch and keep track of all the changes in files which we are updating.

**8.List down 5 favourite superpowers of Parcel and describe any 3.**

i. Hot Module Reload
ii. Bundling
iii. Minification
iv. Cleaning our code
v. Compatible with older versions of browsers.

1. HTTPS on dev: Parcel gives a functionality to use HTTPS .
   It takes a bit more time to convert HTTP to HTTPS.

2. Bundling: Parcel bundles all the packages and creates important files for production build which is then pushed to the dist folder.

3. Caching Dev: It means caching during development. Parcel cache by taking very less time while development (in milliseconds) and it decreases subsequently.

**9.What is .gitignore? What should we add and not add into it?**

.gitignore file is a text file that tells Git which files or folders to ignore when committing your project to the Github repository.
node_modules, .parcel-cache and dist are added to .gitignore and package.json and package-lock.json are not added to .gitignore as they are added to Git.

**10. What is the difference between package.json and package-lock.json?**

When we install npm (package manager), package.json gets created. It is the configuration which npm needs.
package.json contains all the dependencies (packages).
It holds important information about the project as well as functional metadata like the package version number and a list of dependencies required by the application.

package-lock.json gets created when we install a bundler (parcel).
It is a very important file which contains the exact version of all the dependencies we have.
It locks the updated version and makes sure that the same version is running across the environment.
Both package.json and package-lock.json are not added into gitignore. It is added to the git repository.

**11.Why should I not modify package-lock.json?**

It is a generated file and is not meant for manual edition, since it could break the synchronization between package.json and package-lock.json. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency.

**12.What is node_modules? Is it a good idea to push it on git?**

It is like a database to NPM. Whenever we install any package, it gets installed in node_modules. It has several helper functions and code which are required by our application for production building.
We should never push it to git since it is so heavy and memory consuming.

**13.What is the dist folder?**

It is called the distribution folder. It is dynamically generated when the project is built and includes the generated production ready HTML files and assets that are necessary to deploy.

**14.What is browserslist?**

It helps to transform our code and make our app compatible for older versions of browsers.
If we mention some particular versions in browserslist, it will run in that as well as support the current one also.
