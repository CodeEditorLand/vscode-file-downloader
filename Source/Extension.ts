// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ExtensionContext } from "vscode";

import { FileDownloader } from "./FileDownloader";
import { IFileDownloader } from "./IFileDownloader";
import OutputLogger from "./logging/OutputLogger";
import HttpRequestHandler from "./networking/HttpRequestHandler";

// Called when the extension is activated
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function activate(context: ExtensionContext): IFileDownloader {
	const logger = new OutputLogger(`File Downloader`, context);

	logger.log(`File Downloader extension now active.`);

	const requestHandler = new HttpRequestHandler(logger);

	return new FileDownloader(requestHandler, logger);
}
