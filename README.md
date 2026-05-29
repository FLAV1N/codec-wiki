# Codec Wiki

A community-maintained wiki for compression tech.

## Before You Contribute

1. By making a contribution to the Codec Wiki, you are communicating that you
   have read & agreed to our Terms & Conditions, Privacy Policy, & Code of
   Conduct.
2. Ensure your understanding of the material you're contributing is sufficient
   to a point where it is useful to the project. It is perfectly acceptable not
   to get everything right the first time, but always double check your
   contributions for factual correctness.
3. If you would like, connect with us via our
   [Discord server](https://discord.gg/bbQD5MjDr3). You can ask questions &
   communicate with other contributors in the `#codec-wiki` channel here.

## Development

Test your changes locally before making a commit:

```bash
% bun install
% bun run start
```

Test release-mode compilation:

```bash
% bun run build
```

Deploy to `deployment` from latest `main`:

```bash
% GIT_USER=<username> DEPLOYMENT_BRANCH=deployment bun run deploy
```
