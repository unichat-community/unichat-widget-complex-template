/*!******************************************************************************
 * Copyright (c) 2026 Voguh
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/

import type { UniChatEvent } from "@voguh/unichat-api/widgets/events";

import type { RenderableUniChatEvent } from "~/types";

export function isRenderableUniChatEvent(event: UniChatEvent): event is RenderableUniChatEvent {
    switch (event.type) {
        case "unichat:message":
        case "unichat:raid":
        case "unichat:sponsor":
        case "unichat:sponsor_gift":
        case "unichat:donate":
        case "unichat:redemption":
        case "unichat:cheer":
            return true;
        default:
            return false;
    }
}
