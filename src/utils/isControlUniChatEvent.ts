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

import type { ControlUniChatEvent } from "~/types";

export function isControlUniChatEvent(event: UniChatEvent): event is ControlUniChatEvent {
    switch (event.type) {
        case "unichat:clear":
        case "unichat:remove_message":
        case "unichat:remove_author":
            return true;
        default:
            return false;
    }
}
