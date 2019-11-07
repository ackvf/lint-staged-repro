import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello!</h1>
<div>
  To reproduce the issue clone this repo, soft-reset the branch "checkout-this" and try to commit the contents again.
<pre>
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks commit -q -F C:\Users\vitezslav.ackermann\AppData\Local\Temp\rqjnef2x.iqm
husky > pre-commit (node v12.10.0)
Preparing... [started]
Preparing... [completed]
Running tasks... [started]
Running tasks for *.{ts,tsx,js,jsx,css,json} [started]
Running tasks for *.{ts,tsx} [started]
prettier --write [started]
yarn lint --fix [started]




prettier --write [completed]
Running tasks for *.{ts,tsx,js,jsx,css,json} [completed]

yarn lint --fix [completed]
Running tasks for *.{ts,tsx} [completed]
Running tasks... [completed]
Applying modifications... [started]


Applying modifications... [failed]
→ fatal: pathspec 'src/a.ts,src/b.ts,src/c.ts,src/index.ts,tsconfig.json' did not match any files
fatal: pathspec 'src/a.ts,src/b.ts,src/c.ts,src/index.ts,tsconfig.json' did not match any files

husky > pre-commit hook failed (add --no-verify to bypass)
Completed with errors, see above.
</pre>
</div>
`;
