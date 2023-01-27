const fs = require('fs');
const path = require('path')

const main_dir = 'images';
let collections = fs.readdirSync(main_dir);

testJson = {};
collections.map(collection => {
    let collection_images = fs.readdirSync(path.join(main_dir, collection)).map(img => "../" + path.join(main_dir, collection, img).replaceAll("\\","/"));
    testJson[collection] = {collectionName: collection, count: collection_images.length, images: collection_images};
});

fs.writeFileSync("test.json", JSON.stringify(testJson));