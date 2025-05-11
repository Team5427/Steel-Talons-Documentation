# Load environment variables from .env.production.local

$envFile = ".env.production.local"
Get-Content $envFile | ForEach-Object {
    $_ = $_.Trim()
    if (-not $_ -or $_.StartsWith("#")) { return }
    if ($_ -match "^\s*([^=]+)\s*=\s*[""]?([^""]*)[""]?\s*$") {
        $name = $matches[1].Trim()
        $value = $matches[2].Trim()
        [System.Environment]::SetEnvironmentVariable($name, $value, "Process")
    }
}
Write-Host "Environment variables loaded from $envFile"