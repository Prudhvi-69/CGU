while ($true) {
    git add .
    git commit -m "Auto commit - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" 2>$null
    git push 2>$null
    Start-Sleep -Seconds 69
}