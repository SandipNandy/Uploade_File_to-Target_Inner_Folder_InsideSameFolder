const fs = require('fs')
const dir = 'C:/Music/Input'
var h = [], zipName, ZipNamePrefix = [], zipFileName = [];
var files = fs.readdirSync(dir)
var stringfile = files.toString();
var newfilename = stringfile.replace(/[,]/g, ' ');
var words = newfilename.split(' ');

for (let ii = 0; ii < files.length; ii++) {
    if (words[ii] != 'BOSNIA' && words[ii] != 'ESTONIA' && words[ii] != 'ROMANIA') {
        //console.log("words zip :" + words[ii]);
        zipFileName.push(words[ii]);
        var newZIPname = words[ii].replace(/[_]/g, ' ');
        zipName = newZIPname.split(' ');
        ZipNamePrefix.push(zipName[0].toUpperCase())
        //console.log("SPLITTED ZIP :" + ZipNamePrefix);

    }
    else {

        h.push(ii);

    }
}
console.log("SPLITTED ZIP :" + ZipNamePrefix);
console.log(h);
console.log("zip FileName :" + zipFileName);
for (let Folder = 0; Folder < h.length; Folder++) {
    // console.log('My Name is Nandi');
    var myvalue = h[Folder];
    for (let ZipFile = 0; ZipFile < zipFileName.length; ZipFile++) {
        if (words[myvalue] == ZipNamePrefix[ZipFile]) {
            //console.log(':' + ZipNamePrefix[ZipFile]);
            console.log(':-' + words[myvalue]);
            var moveFile = (file, dir2) => {
                var fs = require('fs');
                var path = require('path');

                var f = path.basename(file);
                var dest = path.resolve(dir2, f);
                fs.rename(file, dest, (err) => {
                    if (err) throw err;
                    else console.log('Successfully moved');
                });
            };

            moveFile('C:/Music/Input/'+ zipFileName[ZipFile] +'', 'C:/Music/Input/'+ words[myvalue] +'');


        }
    }

}


