const TreeNode = require('../models/TreeNode');

function rootToTreeNodes(root, i = 0) {
    if (!root[i]) return new TreeNode(null);

    return new TreeNode(root[i], rootToTreeNodes(root, 2 * i + 1), rootToTreeNodes(root, 2 * i + 2));
}

module.exports.rootToTreeNodes = rootToTreeNodes;
