/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {Lane, Lanes} from './ReactFiberLane.new';

import {
  NoLane,
  SyncLane,
  InputContinuousLane,
  DefaultLane,
  IdleLane,
  getHighestPriorityLane,
  includesNonIdleWork,
} from './ReactFiberLane.new';

export opaque type EventPriority = Lane;

// 事件优先级
export const DiscreteEventPriority: EventPriority = SyncLane; // 表示离散事件的优先级，例如用户的点击事件、按键事件等。它的 Lane 值为 SyncLane，表示该事件的优先级最高，需要立即响应
export const ContinuousEventPriority: EventPriority = InputContinuousLane;  // 表示连续事件的优先级，例如滚动事件、鼠标移动事件等。它的 Lane 值为 InputContinuousLane，表示该事件的优先级次于离散事件，但仍需要快速响应。
export const DefaultEventPriority: EventPriority = DefaultLane; // 表示默认事件的优先级，例如常规的 DOM 事件、网络请求等。它的 Lane 值为 DefaultLane，表示该事件的优先级比离散事件和连续事件低，但仍需要在合理的时间内响应。
export const IdleEventPriority: EventPriority = IdleLane; // 表示闲置事件的优先级，例如空闲时间执行的任务、后台数据更新等。它的 Lane 值为 IdleLane，表示该事件的优先级最低，只有在其他事件处理完毕后才会被执行。这种事件优先级通常用于性能优化，以避免在主线程繁忙时阻塞用户交互。

let currentUpdatePriority: EventPriority = NoLane;

export function getCurrentUpdatePriority(): EventPriority {
  return currentUpdatePriority;
}

export function setCurrentUpdatePriority(newPriority: EventPriority) {
  currentUpdatePriority = newPriority;
}

export function runWithPriority<T>(priority: EventPriority, fn: () => T): T {
  const previousPriority = currentUpdatePriority;
  try {
    currentUpdatePriority = priority;
    return fn();
  } finally {
    currentUpdatePriority = previousPriority;
  }
}

export function higherEventPriority(
  a: EventPriority,
  b: EventPriority,
): EventPriority {
  return a !== 0 && a < b ? a : b;
}

export function lowerEventPriority(
  a: EventPriority,
  b: EventPriority,
): EventPriority {
  return a === 0 || a > b ? a : b;
}

export function isHigherEventPriority(
  a: EventPriority,
  b: EventPriority,
): boolean {
  return a !== 0 && a < b;
}

export function lanesToEventPriority(lanes: Lanes): EventPriority {
  const lane = getHighestPriorityLane(lanes);
  if (!isHigherEventPriority(DiscreteEventPriority, lane)) {
    return DiscreteEventPriority;
  }
  if (!isHigherEventPriority(ContinuousEventPriority, lane)) {
    return ContinuousEventPriority;
  }
  if (includesNonIdleWork(lane)) {
    return DefaultEventPriority;
  }
  return IdleEventPriority;
}
