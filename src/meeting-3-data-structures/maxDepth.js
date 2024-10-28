// https://leetcode.com/problems/maximum-depth-of-binary-tree/
console.log('file:', module.filename.split('\\').pop());
const TreeNode = require('../models/TreeNode');
const { rootToTreeNodes } = require('../utils/tree.utils');
const { isDefined } = require('../utils/general.utils');

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    return highTravel(root);
}

function highTravel(node, high = 0) {
    if (!isDefined(node?.val)) return high;

    const leftHigh = highTravel(node.left, high + 1);
    const rightHigh = highTravel(node.right, high + 1);

    return Math.max(leftHigh, rightHigh);
}

module.exports.maxDepth = maxDepth;

// ################################################################################################

{
    const root = [3, 9, 20, null, null, 15, 7];
    const treeRoot = rootToTreeNodes(root);
    console.log(`maxDepth(${JSON.stringify(root)}) ? `, maxDepth(treeRoot)); // 3
}
{
    const root = [1, null, 2];
    const treeRoot = rootToTreeNodes(root);
    console.log(`maxDepth(${JSON.stringify(root)}) ? `, maxDepth(treeRoot)); // 2
}

console.log('#'.repeat(50));
