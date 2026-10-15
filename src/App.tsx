/*!******************************************************************************
 * Copyright (c) 2026 Voguh
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/

import type * as PReact from "preact";
import { useEffect } from "preact/hooks";

import { useSignal } from "@preact/signals";
import type { UniChatEvent } from "@voguh/unichat-api/widgets/events";

import type { ControlUniChatEvent, RenderableUniChatEvent } from "./types";
import { MAX_RENDERED_EVENTS } from "./utils/constants";
import { isControlUniChatEvent } from "./utils/isControlUniChatEvent";
import { isRenderableUniChatEvent } from "./utils/isRenderableUniChatEvent";

export function App(): PReact.ComponentChildren {
    const controlEvents = useSignal<ControlUniChatEvent[]>([]);
    const events = useSignal<RenderableUniChatEvent[]>([]);

    useEffect(() => {
        function onConnected({ detail: data }: CustomEvent<{ userstore: Record<string, string> }>): void {
            // This listener doesn't receive any data, actually it just notifies
            // that connection is established or re-established.
            console.log(data);
        }

        function onEvent({ detail: event }: CustomEvent<UniChatEvent>): void {
            if (isRenderableUniChatEvent(event)) {
                events.value = [...events.value, event].slice(-MAX_RENDERED_EVENTS);
            } else if (isControlUniChatEvent(event)) {
                controlEvents.value = [...controlEvents.value, event];
            }
        }

        window.addEventListener("unichat:connected", onConnected);
        window.addEventListener("unichat:event", onEvent);

        return () => {
            window.removeEventListener("unichat:event", onEvent);
            window.removeEventListener("unichat:connected", onConnected);
        };
    }, []);

    return <div>{JSON.stringify(events.value)}</div>;
}
