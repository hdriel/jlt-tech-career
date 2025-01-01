// node crawler.js https://www.hit.ac.il/ 2
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

const visited = {};

const main = async (url, depthIndex) => {
    const dom = await JSDOM.fromURL(url);
    visited[url] = true;

    const allImgTags = dom.window.document.querySelectorAll('img');

    allImgTags.forEach((img) => {
        const imgData = {
            imageUrl: img.src,
            sourceUrl: url,
            depth: depthIndex,
        };

        data.result.push(imgData);
    });

    const allAnchorTags = [...dom.window.document.querySelectorAll('a')];

    const currentLinksInPage = [];

    allAnchorTags
        .map((subPage) => subPage.href.replace(/\/#.*$/, ''))
        .filter((item) => item.startsWith('http'))
        .filter((item, pos, arr) => arr.indexOf(item) === pos)
        .sort()
        .forEach((link) => {
            if (!visited[link]) {
                currentLinksInPage.push(link);
                visited[link] = true;
            }
        });

    if (currentLinksInPage.length && depthIndex + 1 <= depthProvided) {
        console.table({
            nextDepth: depthIndex + 1,
            maxDepth: depthProvided,
            currentURL: url,
            urls: currentLinksInPage.length,
        });
        // console.log('currentLinksInPage', currentLinksInPage);
        // for (const link of currentLinksInPage) {
        //     try {
        //         await main(link, depthIndex + 1);
        //     } catch (e) {
        //         console.log('url cannot be parsed:  ', link);
        //     }
        // }

        const mapOfPromises = currentLinksInPage.map((link) => main(link, depthIndex + 1));
        // /*
        //  [
        //     main(link1, depthInext + 1),
        //     main(link2, depthInext + 1),
        //     main(link3, depthInext + 1),
        //     main(link4, depthInext + 1),
        //  ]
        // */

        await Promise.allSettled(mapOfPromises);
    }
};

const data = {
    result: [],
};
exports.data = data;

const depthProvided = +process.argv[3];
const url = process.argv[2];

(async () => {
    await main(url, 0);
    fs.writeFile('results.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File successfully written to results.json!');
        }
    });
})();
