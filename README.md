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
