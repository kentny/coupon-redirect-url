# Coupon Management Tool
# How to setup
Add your firebase project to deploy in the root directory.
```bash
$ firebase use --add
```
Then, you can find `.firebaserc` ignored in git.

# Deploy
```bash
$ firebase use # -> Select the proper project
$ firebase deploy --only functions
```
