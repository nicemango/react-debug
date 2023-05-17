/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * HTML nodeType values that represent the type of the node
 */

export const ELEMENT_NODE = 1; // 代表一个元素节点，例如 <div>、<span> 等。
export const TEXT_NODE = 3; // 代表一个文本节点，例如元素内的文本内容。
export const COMMENT_NODE = 8; // 代表一个注释节点，例如 <!-- ... -->
export const DOCUMENT_NODE = 9; // 代表一个文档节点，即整个文档的根节点。
export const DOCUMENT_FRAGMENT_NODE = 11; //代表一个文档片段节点，即文档的一个子集。
