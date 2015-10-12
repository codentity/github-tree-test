# github-tree-test

A test for the "trees" API, to test the extent of its mighty power.

## Example

Open your favourite command line tool or web browser, and `GET`:

```
https://api.github.com/repos/codentity/github-tree-test/git/trees/master?recursive=1000
```

Notice that pesky `truncated: false`? That means our tree is truncated.

How do we get around this? At the time of writing this, I am not entirely sure...
