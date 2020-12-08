jest-test-repro
===============
A lab environment for reproducing unexpected behavior in [rules_nodejs][].


Issue
-----
The following succeed:

```sh
bazel build ...
```

```sh
bazel run //ts/svc/hw
```

```sh
cd bazel-bin/ts/lib/greet && ./ts_greet_test.sh
```

However, this fails:
```sh
bazel test ...
```


Question
--------
Why does `bazel test ...` fail, when `ts_greet_test.sh` succeeds?


[rules_nodejs]: https://github.com/bazelbuild/rules_nodejs/
