# Highcharts Motif Extension

A Motif Extension which uses the [Motif API](https://plxtra.org/motif-api/) [History Sequencer](https://plxtra.org/motif-api/extension-svc/history-sequencer/history-sequencer-svc/HistorySequencerSvc/) to display charts using [Highcharts Stock](https://www.highcharts.com/products/stock/) charting engine.

Note that this npm package is configured to use the PowerShell shell.

## Build

Run `npm build` to create the distribution files under folder `dist`.

If the extension is to be included in Motif, then it must be built first, as Motif uses the files under `dist`.

## Debug

Run `npm serve` to to start the debug server.  This will run the `Invoke-NgServe` script which:
1. Gets the config file from the `xosp-motif-config` repository.
1. Generates the `BundledExtension` and sets this as the only bundled extension in the config file.
1. Copies the config file and branding files to the `dev_static` folder in the `motif` repository
1. Copies the JavaScript file(s) under `dist` to the `dev_static` folder in the `motif` repository

Both the `xosp-motif-config` and `motif` repositories are expected to be under the same folder as this `highcharts-motif-extension` repository.  That is, at `../xosp-motif-config` and `../motif`.  Also, it necessary for the the extension to be built prior to running `npm serve`.

If you are using Visual Studio Code, use the `Motif Dev: Attach to Chrome` launch configuration to start Chrome and run Motif with this extension.  With this launch configuration you can place breakpoints in either the extension code or the Motif code.\
Otherwise, go to URL `http://localhost:4200` in your browser and use the browser's development tools to debug Motif.
