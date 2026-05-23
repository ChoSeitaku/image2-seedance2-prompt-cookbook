# git-push-proxy

## Skill Name

`git-push-proxy` — Push to GitHub through the local accelerator proxy on this machine.

## When to Use

Invoke this skill whenever `git push`, `git fetch`, or `git pull` against `github.com` times out with `Failed to connect to github.com port 443`. This machine is in China and direct HTTPS to GitHub is unreliable; the local accelerator must be used.

Symptoms that trigger this skill:

- `fatal: unable to access 'https://github.com/...': Failed to connect to github.com port 443 after NNNNN ms: Timed out`
- `git push` hangs and eventually errors out
- ICMP ping to github.com works but HTTPS does not

## Local Proxy Details

The accelerator on this machine exposes an HTTP proxy at:

```
http://127.0.0.1:7892
```

This was confirmed working on 2026-05-22 — pushed commit `f19c7f6` (Chibi Anime Chat Sticker Grid) successfully after direct push timed out 4× in a row.

Note: git does NOT inherit the system proxy automatically. You must pass the proxy explicitly per command, or set it in git config.

## How to Apply

### Option A — One-shot (recommended, no config change)

Use `-c` to pass proxy for a single command:

```bash
git -c http.proxy=http://127.0.0.1:7892 -c https.proxy=http://127.0.0.1:7892 push origin main
```

This works for any git subcommand: `push`, `fetch`, `pull`, `clone`.

### Option B — Persistent (if user explicitly asks)

Only set this when the user asks to make it permanent — do not modify git config without permission:

```bash
git config --global http.proxy http://127.0.0.1:7892
git config --global https.proxy http://127.0.0.1:7892
```

To later remove:

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## Decision Flow

1. Try a direct `git push` first. If it succeeds, the accelerator's system proxy is working — done.
2. On `port 443 ... Timed out`, do NOT retry blindly. The accelerator likely proxies browser traffic only.
3. Verify the proxy port is listening: `netstat -an | grep "127.0.0.1:7892"` should show `LISTENING`.
4. If listening, retry the push with the `-c http.proxy=...` form above.
5. If port 7892 is NOT listening, the accelerator is off — ask the user to start it before retrying.
6. If the proxy is listening but the push still fails, the port may have changed; check other localhost listeners with `netstat -an | grep "127.0.0.1:" | grep LISTENING` and ask the user which one is the accelerator.

## Verification

After pushing, confirm with:

```bash
git status
```

Expect: `Your branch is up to date with 'origin/main'.`
