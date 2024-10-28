const ListNode = require('../models/ListNode');
const { isDefined } = require('./general.utils');

function arrayToLinkNodes(numbers) {
    if (!numbers.length) return null;

    const [val, ...rest] = numbers;
    return new ListNode(val, arrayToLinkNodes(rest));
}

function listsToLinkNodes(lists) {
    return lists.map(arrayToLinkNodes);
}

function linkNodesToArray(head) {
    const array = [];

    while (isDefined(head?.val)) {
        array.push(head.val);
        head = head?.next;
    }

    return array;
}

module.exports.listsToLinkNodes = listsToLinkNodes;
module.exports.linkNodesToArray = linkNodesToArray;
