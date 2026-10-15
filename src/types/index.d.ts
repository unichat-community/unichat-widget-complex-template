/*!******************************************************************************
 * Copyright (c) 2026 Voguh
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/

import type {
    UniChatEventCheer,
    UniChatEventClear,
    UniChatEventDonate,
    UniChatEventMessage,
    UniChatEventRaid,
    UniChatEventRedemption,
    UniChatEventRemoveAuthor,
    UniChatEventRemoveMessage,
    UniChatEventSponsor,
    UniChatEventSponsorGift,
    UniChatEventUserstoreUpdate
} from "@voguh/unichat-api/widgets/events";

export type ControlUniChatEvent = UniChatEventClear | UniChatEventRemoveMessage | UniChatEventRemoveAuthor;

export type StateUniChatEvent = UniChatEventUserstoreUpdate;

export type RenderableUniChatEvent =
    | UniChatEventMessage
    | UniChatEventRaid
    | UniChatEventSponsor
    | UniChatEventSponsorGift
    | UniChatEventDonate
    | UniChatEventRedemption
    | UniChatEventCheer;
