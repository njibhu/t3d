#!/bin/env node
// NodeJS script to split and re-indent the output from the IDA script

var fs = require('fs');
var beautify = require('js-beautify').js_beautify;

const outputFolder = '../../src/format/chunks';
const inputFile = 'data/output.js';

const allFormatsHeader = `
/*
Copyright © Tyria3DLibrary project contributors

This file is part of the Tyria 3D Library.

Tyria 3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tyria 3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the Tyria 3D Library. If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * An auto-generated structure of arrays describing Chunk formats
 * in the GW2 dat. The main contents of this file is generated
 * using the IDA script file 'IDA_generator_script.idc'
 * located in the IDA folder.
 * 
 * @for T3D
 * @property formats
 * @type {Array<{name: string, versions: {Object}>}
 */

let definitionArray = [];

`;

//Automatically clean the output folder from previous output
function cleanAndGenerate(){
    fs.readdir(outputFolder, (err, files) => {
        if (err) throw err;
            
        for (const file of files) {
            // We keep it sync because we'll start generating data
            // as soon as it finished
            fs.unlinkSync(`${outputFolder}/${file}`);
        }
        
        generate();
    });
}

//Real split and beautify function
function generate(){
    fs.readFile(inputFile, (err, data) => {
        if (err) throw err;
        
        var formatArray = data.toString().replace(/\/{3}\={50}/g, "");
        formatArray = formatArray.slice(0, formatArray.lastIndexOf(']'));//Remove last ]
        formatArray = formatArray.split("\t/// Chunk: ").slice(1);

        

        
        // Keep the chunk names in this array
        var names = [];
        var chunkObject = {};
        for(let chunk of formatArray){
            //Split the first characters until the first coma
            let header = chunk.split(',',1)[0];
            
            //Some chunks can appear many times, so we keep track of which we already saw
            if(!names.includes(header)){
                names.push(header);
                chunkObject[header] = "";
            } else {
                console.log("Found multiple time: ", header);
            }
            
            // Re-add what was cut by the chunk split
            chunkObject[header] += 
                "    ///==================================================\n" + 
                `    ///Chunk: ${chunk.slice(0, chunk.indexOf("\n"))}` + "\n" +
                "    ///==================================================\n" +
                chunk.slice(chunk.indexOf("\n"));
        }
        
        let allFormats = allFormatsHeader;
	
        // Now generate the output
		for(let chunkName of names){
            let chunk = chunkObject[chunkName];

            //Fix case insensible filesystems
            let filename = chunkName.toLowerCase();
            if(names.filter(s => {return s.toLowerCase() == filename}).length > 1){
                filename += "-" + names.filter(s => {return s.toLowerCase() == filename}).indexOf(chunkName);
            }

            allFormats += 
            `
            //Definition for chunks ${chunkName}:
            let ${chunkName} = require('./${filename}.js');
            definitionArray = definitionArray.concat(${chunkName});
            `;
            
            // Add the module.exports at the top
            chunk = 'var Utils = T3D.ParserUtils; \n\nmodule.exports = [ \n' + chunk;

            let endblock = chunk.lastIndexOf('}');
            // Remove the last coma
			if (chunk[endblock + 1 ] == ','){
				chunk = chunk.slice(0, endblock+1) + chunk.slice(endblock+2);
            }
            // And close the Array
            chunk += "]";
            
            let unknownTypeMatch;
            do {
                unknownTypeMatch = chunk.match(/Unknown(0x[0-9A-F]*)/);
                if(unknownTypeMatch){
                    console.log("Warning, found one unknown type: '", unknownTypeMatch[0], "' in chunk: ", chunkName);
                    chunk = chunk.replace(`${unknownTypeMatch[0]},`, `'uint32', //Replaced unknown type: ${unknownTypeMatch[1]}`);
                }
            } while(unknownTypeMatch)


            //Write out to the outputFolder
			fs.writeFile(`${outputFolder}/${filename}.js`, 
                         //and beautify the chunks before writing them (fixing the ident)
                         beautify(chunk, { indent_size: 4 }), 
                         (err) => { if(err) throw err; }
            );
        }
        
        allFormats += "\n" + "window.T3D.formats = definitionArray;"

        fs.writeFile(`${outputFolder}/AllFormats.js`,
                    beautify(allFormats, { indent_size: 4}),
                    (err) => {if(err) throw err; }
        );

	});	
}

cleanAndGenerate();
