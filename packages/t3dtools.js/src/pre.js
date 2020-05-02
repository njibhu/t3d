/*
 * Copyright 2018 Njibhu <manu@njibhu.eu>
 * This code is published under MIT License.
 **/


/*
 * TODO:
 * For now it does copy a lot of the data because the C++ cannot access JS memory, 
 * so we have to copy everything. And because C++ memory is not cheap (hard to track)
 * we can't keep everything there. So we need to find the best of the two worlds.
 */

var ErrorCode =
{
    0: 'OK',
    1: 'INFLATER_EXCEPTION',
    2: 'STD_EXCEPTION',
    3: 'IMG_NO_MIPMAP_FOUND',
    4: 'IMG_UNKNOWN_MIPMAP_FORMAT'
};

/**
 * This function is a multitool to replace the t3dgw2tools binary.
 * @method inflate
 * @param  {ArrayBuffer}    inputBuffer  Buffer containing the input data
 * @param  {number}         extractSize  Can limit the extraction size, a too
 *                                       big value will be shrinken down.
 * @param  {boolean}        isImage      Will decode the image format.
 * @return {Object}  Object containing an output buffer, and image infos
 * 
 * The return object have the following fields:
 * - {ArrayBuffer}  object.data
 * - {number}       object.dxtType  (only existing if isImage = true)
 * - {number}       object.imgW     width (only existing if isImage = true)
 * - {number}       object.imgH     height (only existing if isImage = true)
 */
function inflate(inputBuffer, extractSize, isImage){   
    var allocations = [];

    if(!(inputBuffer instanceof Uint8Array)) {
        inputBuffer = new Uint8Array(inputBuffer);
    }

    //T3DLib also use capLength = 1 to extract full buffer
    if(extractSize < 2 ){
        extractSize = 0;
    }

    var inflate_value = {};

    //Copy (js) input buffer into C++ memory
    var input = safe_allocate(inputBuffer.length, allocations);
    Module.writeArrayToMemory(inputBuffer, input);

    //Make an integer reference to get the size of the extracted buffer
    var pOutputSize = safe_allocate(4, allocations);
    Module.setValue(pOutputSize, extractSize, 'i32');

    //Make an integer reference to check for errors
    var pErrors = safe_allocate(1, allocations);

    //Call the C++ code, returns the adress of the output buffer
    try {
        var output = Module.ccall('inflate', 'i8*', ['i32', 'i8*', 'i32*', 'i8*'], [inputBuffer.length, input, pOutputSize, pErrors]);
    } catch (err) {
        cleanup([input, pOutputSize, pErrors, output]);
        throw err;
    }
    
    //Check for errors
    var errors = Module.getValue(pErrors, 'i8');
    if(errors != 0){
        cleanup([input, pOutputSize, pErrors, output]);
        throw new Error(`Could not inflate, error_code: ${errors} (${ErrorCode[errors]})`);
    }
    extractSize = Module.getValue(pOutputSize, 'i32');

    if(isImage){
        //Make 3 integers for image data (DxtType, width, height)
        var pDxtType = safe_allocate(2, allocations);
        var pImgW = safe_allocate(2, allocations);
        var pImgH = safe_allocate(2, allocations);

        //workImage(uint32_t inputSize, const uint8_t* pInputBuffer, 
        //uint32_t& orOutputSize, int& oDxtType, int& oImgW, int& oImgH, uint8_t& pErrors)
        try {
            var image_output = Module.ccall('workImage', 'i8*', ['i32', 'i8*', 'i32*', 'i32*', 'i16*', 'i16*', 'i16*', 'i8*'],
        [extractSize, output, pOutputSize, pDxtType, pImgW, pImgH, pErrors]);
        } catch (err) {
            cleanup([input, pOutputSize, pErrors, output, pDxtType, pImgW, pImgH, image_output]);
            throw err;
        }
        

        //Check for errors
        var errors = Module.getValue(pErrors, 'i8');
        if(errors != 0){
            cleanup([input, pOutputSize, pErrors, output, pDxtType, pImgW, pImgH, image_output]);
            throw new Error(`Could not inflate, error_code: ${errors} (${ErrorCode[errors]})`);
        }

        //Free up the output buffer since it's not used anymore and make the image buffer the new output buffer
        cleanup([output]);
        output = image_output;

        //Get the data from the pointers
        extractSize = Module.getValue(pOutputSize, 'i32');
        inflate_value['dxtType'] = Module.getValue(pDxtType, 'i16');
        inflate_value['imgW'] = Module.getValue(pImgW, 'i16');
        inflate_value['imgH'] = Module.getValue(pImgH, 'i16');

        cleanup([pDxtType, pImgW, pImgH]);
    }

    var outputBuffer = new Uint8Array(extractSize);
    for(var i=0; i<extractSize; i++){
        outputBuffer[i] = Module.getValue(output + i, 'i8');
    }

    inflate_value['data'] = outputBuffer;

    //Cleaning memory
    cleanup([input, output, pOutputSize, pErrors]);

    return inflate_value;
}

/**
 * This function was here mostly to check that the decoding was working fine.
 * But if a file have been already inflated it can read the image.
 * @method inflateImage
 * @param  {ArrayBuffer} inputBuffer Buffer containing the input data
 * @return {Object} Object containing an output buffer, and image infos
 * 
 * The return object have the following fields:
 * - {ArrayBuffer}  object.data
 * - {number}       object.dxtType
 * - {number}       object.imgW     width
 * - {number}       object.imgH     height
 */
function inflateImage(inputBuffer) {
    if(!(inputBuffer instanceof Uint8Array)) {
        inputBuffer = new Uint8Array(inputBuffer);
    }

    var allocations = [];

    var inflate_value = {};
    var input = safe_allocate(inputBuffer.length, allocations);
    Module.writeArrayToMemory(inputBuffer, input);

    //Make 3 integers for image data (DxtType, width, height)
    var pDxtType = safe_allocate(2, allocations);
    var pImgW = safe_allocate(2, allocations);
    var pImgH = safe_allocate(2, allocations);
    var pOutputSize = safe_allocate(4, allocations);
    var pErrors = safe_allocate(1, allocations);

    //workImage(uint32_t inputSize, const uint8_t* pInputBuffer, 
    //uint32_t& orOutputSize, int& oDxtType, int& oImgW, int& oImgH, uint8_t& pErrors)
    try {
        var output = Module.ccall('workImage', 'i8*', ['i32', 'i8*', 'i32*', 'i32*', 'i16*', 'i16*', 'i16*', 'i8*'],
        [inputBuffer.length, input, pOutputSize, pDxtType, pImgW, pImgH, pErrors]);
    } catch(err) {
        cleanup([input, pDxtType, pImgW, pImgH, pOutputSize, pErrors, output]);
        throw err;
    }

    //Check for errors
    var errors = Module.getValue(pErrors, 'i8');
    if(errors != 0){
        cleanup([input, pDxtType, pImgW, pImgH, pOutputSize, pErrors, output]);
        throw new Error(`Could not inflate, error_code: ${errors} (${ErrorCode[errors]})`);
    }

    //Get the data from the pointers
    extractSize = Module.getValue(pOutputSize, 'i32');
    inflate_value['dxtType'] = Module.getValue(pDxtType, 'i16');
    inflate_value['imgW'] = Module.getValue(pImgW, 'i16');
    inflate_value['imgH'] = Module.getValue(pImgH, 'i16');

    var outputBuffer = new Uint8Array(extractSize);
    for(var i=0; i<extractSize; i++){
        outputBuffer[i] = Module.getValue(output + i, 'i8');
    }

    inflate_value['data'] = outputBuffer;
    cleanup([input, pDxtType, pImgW, pImgH, pOutputSize, pErrors, output]); 
    return inflate_value;
}

//Registers all the allocation to make it easy to deallocate if there is a problem
function safe_allocate(size, allocations_array){
    var addr;
    try {
        addr = Module._malloc(size);
    } catch (err) {
        cleanup(allocations_array);
        throw err;
    }
    allocations_array.push(addr);
    return addr;
}

//Cleanup the allocation array
function cleanup(array) {
    for (let elt of array) {
        Module._free(elt);
    }
    array = [];
}

Module['inflate'] = inflate;
Module['inflateImage'] = inflateImage;