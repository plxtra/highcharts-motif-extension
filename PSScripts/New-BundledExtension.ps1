using module ../../motif/PSScripts/BundledExtension

param (
    [Parameter(Mandatory = $true)]
    [bool] $Install
)

$packagePath = Join-Path -Path $PSScriptRoot -ChildPath "../package.json"
$packageObject = Get-Content -Path $packagePath -Raw | ConvertFrom-Json
$version = $packageObject.version

$publisherId = New-PublisherId -Type "Organisation" -Name "Plxtra"

$info = New-BundledExtensionInfo `
    -PublisherId $publisherId `
    -Name "Highcharts" `
    -Version $version `
    -ApiVersion "3" `
    -ShortDescription "Highcharts Charting" `
    -LongDescription "Highcharts Charting" `
    -UrlPath "/extensions/highcharts/index.js"

$bundledExtension = New-BundledExtension -Info $info -Install $Install

return $bundledExtension
