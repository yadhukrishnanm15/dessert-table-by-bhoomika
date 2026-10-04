$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$backupRoot = Join-Path $PSScriptRoot "2026-10-04-pre-menu-updates"

if (-not (Test-Path -LiteralPath $backupRoot -PathType Container)) {
  throw "Backup snapshot not found: $backupRoot"
}

$confirmation = Read-Host "This will overwrite files in the repository with the 2026-10-04 snapshot. Type RESTORE to continue"
if ($confirmation -cne "RESTORE") {
  Write-Output "Restore cancelled. No files were changed."
  exit 0
}

Get-ChildItem -LiteralPath $backupRoot -Force | ForEach-Object {
  Copy-Item -LiteralPath $_.FullName -Destination $repoRoot -Recurse -Force
}

Write-Output "Backup restored. Files added after the snapshot were left in place."
