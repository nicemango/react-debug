/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 处理子节点的命名空间
 *
 */
// HTML
export const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
// MathML
export const MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
// SVG
export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

/**
 * 
 * @param {*} type 创建的元素节点类型  svg、math、html等
 * @returns 
 */
export function getIntrinsicNamespace(type: string): string {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

/**
 * 返回相应子节点命名空间
 * @param {*} parentNamespace 父节点命名空间
 * @param {*} type 子节点类型
 * @returns 
 */
export function getChildNamespace(
  parentNamespace: string | null,
  type: string,
): string {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}
