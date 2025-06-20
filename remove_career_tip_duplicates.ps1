# PowerShell script to remove all career-tip entries from messages.xlf and messages.ar.xlf
# These entries should only exist in the dedicated career-tips.xlf files

function Remove-CareerTipEntries {
    param(
        [string]$FilePath
    )
    
    Write-Host "Processing: $FilePath"
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "File not found: $FilePath"
        return
    }
    
    # Read the file content
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    
    # Remove all trans-unit blocks that have career-tip IDs
    # This regex matches the entire trans-unit block from opening to closing tag
    $pattern = '(?s)<trans-unit id="career-tip-[^"]*"[^>]*>.*?</trans-unit>\s*'
    
    # Count matches before removal
    $matches = [regex]::Matches($content, $pattern)
    $count = $matches.Count
    
    if ($count -gt 0) {
        Write-Host "Found $count career-tip entries to remove"
        
        # Remove the matches
        $newContent = [regex]::Replace($content, $pattern, '')
        
        # Write back to file
        Set-Content -Path $FilePath -Value $newContent -Encoding UTF8 -NoNewline
        
        Write-Host "Successfully removed $count career-tip entries from $FilePath"
    } else {
        Write-Host "No career-tip entries found in $FilePath"
    }
}

# Process both messages files
Remove-CareerTipEntries -FilePath "src\locale\messages.xlf"
Remove-CareerTipEntries -FilePath "src\locale\messages.ar.xlf"

Write-Host "Done!"
