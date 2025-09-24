$uri='https://jryyangjy.github.io/'
$out='d:\Desktop\jryyangjy.github.io\live_index_retry.html'
$success=$false
for ($i=1; $i -le 3; $i++) {
    try {
        Invoke-WebRequest -Uri $uri -OutFile $out -UseBasicParsing
        Write-Host "SUCCESS at attempt $i"
        $success=$true
        break
    } catch {
        Write-Host "Attempt $i failed: $($_.Exception.Message)"
        Start-Sleep -Seconds 3
    }
}

if ($success -and (Test-Path $out)) {
    if (Select-String -Path $out -Pattern 'margin-left' -SimpleMatch) {
        Write-Host 'FOUND margin-left in served HTML'
    } else {
        Write-Host 'NO margin-left in served HTML'
    }
} else {
    Write-Host 'No file saved or all attempts failed'
}
