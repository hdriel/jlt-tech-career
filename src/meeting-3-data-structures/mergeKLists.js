// https://leetcode.com/problems/merge-k-sorted-lists/
console.log('file:', module.filename.split('\\').pop());
const ListNode = require('../models/ListNode');
const { listsToLinkNodes, linkNodesToArray } = require('../utils/linklist.utils');
const { isDefined } = require('../utils/general.utils');

function getNextValue(lists) {
    let listIndex = -1;

    for (let i = 0, min = undefined; i < lists.length; i++) {
        const head = lists[i];
        if (!isDefined(min) || head?.val < min) {
            min = head?.val;
            listIndex = i;
        }
    }

    const node = lists[listIndex];
    const minValue = node?.val;
    lists[listIndex] = lists[listIndex]?.next;

    return minValue;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    let root = null;
    let temp = null;
    const cloneList = [...lists];

    while (cloneList.some((list) => list)) {
        const minValue = getNextValue(cloneList);

        if (!root) {
            root = new ListNode(minValue);
            temp = root;
        } else {
            temp.next = new ListNode(minValue);
            temp = temp.next;
        }
    }

    return root;
}

module.exports.mergeKLists = mergeKLists;

// ################################################################################################

{
    const lists = [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
    ];
    const listNodesLists = listsToLinkNodes(lists);
    const result = mergeKLists(listNodesLists);
    console.log(`mergeKLists(${JSON.stringify(lists)}) ? `, linkNodesToArray(result).join('->')); //[1,1,2,3,4,4,5,6]
}
{
    const lists = [];
    const listNodesLists = listsToLinkNodes(lists);
    const result = mergeKLists(listNodesLists);
    console.log(`mergeKLists(${JSON.stringify(lists)}) ? `, linkNodesToArray(result).join('->'));
}
{
    const lists = [[]];
    const listNodesLists = listsToLinkNodes(lists);
    const result = mergeKLists(listNodesLists);
    console.log(`mergeKLists(${JSON.stringify(lists)}) ? `, linkNodesToArray(result).join('->'));
}

console.log('#'.repeat(50));
