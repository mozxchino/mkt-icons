# MKT icons

Home-screen icons for the MKT shop system (Apps Script web app).
Only icons live here: no code, no shop data.

| File | Page | Home-screen name |
|---|---|---|
| pos-180.png / pos-512.png | POS (bill entry) | MKT(XX) |
| acc-180.png / acc-512.png | Accounting `?p=money` | ACC(XX) |
| ow-180.png / ow-512.png | Overview of all branches | OW(XX) |

The code (`MKT-pos.gs` → `doGet`) links to the raw 180px files on `main`.
To change an icon: replace the PNG here with the same file name. Every branch picks it up;
phones only refresh the icon after the home-screen shortcut is removed and added again.

## Home-screen pass-through pages (iPhone icon)
iPhone ignores icons set by Apps Script, so the shortcut is added from `pos.html` / `acc.html` / `ow.html`
(GitHub Pages: https://mozxchino.github.io/mkt-icons/). Link format:
`https://mozxchino.github.io/mkt-icons/pos.html#n=MKT(NO)&u=<encoded Apps Script /exec URL>&add`
`&add` shows the add-to-home-screen steps; the saved shortcut opens the page, which forwards to the Apps Script link at once.
The part after `#` stays on the phone (never sent to GitHub). `go.js` only forwards to `script.google.com/macros/s/.../exec|dev`.

Send links over LINE with `?openExternalBrowser=1` before the `#` so LINE opens Safari/Chrome (its in-app browser cannot add to the home screen). The page also detects LINE/Facebook in-app browsers and Android and shows matching steps.
