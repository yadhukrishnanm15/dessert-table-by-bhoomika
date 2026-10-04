# Site backups

`2026-10-04-pre-menu-updates/` is a restorable snapshot of the site before the tiramisu selector and category-removal changes.

From the repository root, run:

```powershell
.\backups\Restore-2026-10-04.ps1
```

The script asks for the exact word `RESTORE` before overwriting snapshot paths. It restores files that existed in the snapshot but does not delete files added afterward.
