// https://leetcode.com/problems/validate-binary-search-tree/description/
console.log('file:', module.filename.split('\\').pop());
const TreeNode = require('../models/TreeNode');
const { rootToTreeNodes } = require('../utils/tree.utils');
const { isDefined } = require('../utils/general.utils');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    return isInRangeTravel(root);
}

function isInRangeTravel(node, min, max) {
    if (!isDefined(node?.val)) return true;

    const inRange = (!isDefined(min) || node.val >= min) && (!isDefined(max) || node.val <= max);
    if (!inRange) return false;

    const leftValidInRange = isInRangeTravel(node.left, min, node.val);
    if (!leftValidInRange) return false;

    const rightValidInRange = isInRangeTravel(node.right, node.val, max);
    if (!rightValidInRange) return false;

    return true;
}

module.exports.isValidBST = isValidBST;

{
    const root = [2, 1, 3];
    const treeRoot = rootToTreeNodes(root);
    console.log(`isValidBST(${JSON.stringify(root)}) ? `, isValidBST(treeRoot)); // true
}
{
    const root = [5, 1, 4, null, null, 3, 6];
    const treeRoot = rootToTreeNodes(root);
    console.log(`isValidBST(${JSON.stringify(root)}) ? `, isValidBST(treeRoot)); // false
}
{
    const root = [5, 1, 9, null, null, 6, 10];
    const treeRoot = rootToTreeNodes(root);
    console.log(`isValidBST(${JSON.stringify(root)}) ? `, isValidBST(treeRoot)); // true
}
{
    const root = [5, 1, 9, null, null, 2, 10];
    const treeRoot = rootToTreeNodes(root);
    console.log(`isValidBST(${JSON.stringify(root)}) ? `, isValidBST(treeRoot)); // false
}
{
    const root = [5, 1, 9, null, 4, null, 10];
    const treeRoot = rootToTreeNodes(root);
    console.log(`isValidBST(${JSON.stringify(root)}) ? `, isValidBST(treeRoot)); // true
}
{
    const root = [5, 1, 9, null, 6, null, 10];
    const treeRoot = rootToTreeNodes(root);
    console.log(`isValidBST(${JSON.stringify(root)}) ? `, isValidBST(treeRoot)); // true
}

console.log('#'.repeat(50));
