/*!******************************************************************************
 * Copyright (c) 2026 Voguh
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/

import "./styles/global.css";
import { render } from "preact";

import { App } from "./App";

let documentRoot = document.querySelector("#root");
if (documentRoot == null) {
    documentRoot = document.createElement("div");
    documentRoot.setAttribute("id", "root");
    document.body.appendChild(documentRoot);
}

render(<App />, documentRoot);
