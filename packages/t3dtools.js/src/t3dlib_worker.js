/*
 * Copyright 2018 Njibhu <manu@njibhu.eu>
 * This code is published under MIT License.
 **/

/**
 * Simulates the Nacl inflater of Tyria3DLibrary but as a webworker.
 * 
 * The data received is an array like so:
 *  * [handle, arrayBuffer, isImage, capLength]
 * and the data expected to be returned is:
 *  * A string for an error.
 *  * An array for a valid result looking like:
 *    [handle, buffer, dxtType, imgW, imgH]
 * 
 **/
self.addEventListener('message', 
    function(e) {
        let handle = e.data[0];
        let arrayBuffer = e.data[1];
        let isImage = e.data[2];
        let capLength = e.data[3];
        let result;
        let error = false;

        try {
            result = Module.inflate(arrayBuffer, capLength, isImage);
        } catch(err) {
            error = true;
            self.postMessage(`${handle}: ${err.toString()}`);
        }
        
        if(!error){
            self.postMessage([handle, result.data.buffer, result.dxtType, result.imgW, result.imgH]);
        }

    },
false);
