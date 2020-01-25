/*


This file is based on Original Work done by Antoine Hom https://github.com/ahom


Copyright (C) 2015 RequestTimeout <https://github.com/RequestTimeout408>

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

#include <idc.idc>

#define IS_ASCII(a) (((Byte(a) >= 48) && (Byte(a) <= 57)) || ((Byte(a) >= 65) && (Byte(a) <= 90)) || ((Byte(a) >= 97) && (Byte(a) <= 122)))

static getAsciiName(iAddress)
{
    auto aResult, aByte;
    aResult = "";
    while (aByte = Byte(iAddress))
    {
        aResult = form("%s%c", aResult, aByte);
        iAddress = iAddress + 1;
    }
    return aResult;
}

static add(iArrayId, iElement)
{
    auto aArrayId, aNextIndex;
 
    aNextIndex = GetLastIndex(AR_LONG, iArrayId) + 1;
    SetArrayLong(iArrayId, aNextIndex, iElement);
}

static isIn(iArrayId, iElement)
{
    auto aCurrentIndex;
    aCurrentIndex = GetFirstIndex(AR_LONG, iArrayId);
 
    while (aCurrentIndex != -1)
    {
        if (GetArrayElement(AR_LONG, iArrayId, aCurrentIndex) == iElement)
        {
            return 1;
        }
 
        aCurrentIndex = GetNextIndex(AR_LONG, iArrayId, aCurrentIndex);
    }
    return 0;
}

static isANStruct(iAddress)
{
    auto aCurrentAddress, aLoopGuard;
    
    aLoopGuard = 50;
    aCurrentAddress = iAddress;
    
    while (Word(aCurrentAddress) != 0 && aLoopGuard > 0)
    {
        if (Word(aCurrentAddress) > 0x1D)
        {
            return 0;
        }
        
        aCurrentAddress = aCurrentAddress +  16;
        aLoopGuard = aLoopGuard - 1;
    }
    
    return (aLoopGuard != 0 && Dword(aCurrentAddress + 4) != BADADDR && IS_ASCII(Dword(aCurrentAddress + 4)));
}

static isANStructTab(iAddress, iNumber)
{
    auto aCurrentAddress, aLoopIndex;
    
    aLoopIndex = 0;
    aCurrentAddress = iAddress;
    
    while (aLoopIndex < iNumber)
    {
        if (Dword(aCurrentAddress) !=0)
        {
            if (!isANStruct(Dword(aCurrentAddress)))
            {
                break;
            }
        }
        aCurrentAddress = aCurrentAddress + 12;
        aLoopIndex = aLoopIndex + 1;
    }
    
    return (aLoopIndex == iNumber);
}

static getSimpleTypeName(iAddress)
{
    auto aTypeId;
    aTypeId = Word(iAddress);
    if (aTypeId == 0x05)
        //return "byte";
		return "'uint8'";
    else if (aTypeId == 0x06)
        //return "byte4";
		return "['[]','uint8',4]";
    else if (aTypeId == 0x07)
        //return "double";
		return "'float64'";
    else if (aTypeId == 0x0A)
        //return "dword";
		return "'uint32'";
    else if (aTypeId == 0x0B)
        //return "filename";
		return "Utils.getFileNameReader()";
    else if (aTypeId == 0x0C)
        //return "float";
		return "'float32'";
    else if (aTypeId == 0x0D)
        //return "float2";
		return "['[]','float32',2]";
    else if (aTypeId == 0x0E)
        //return  "float3";
		return "['[]','float32',3]";
    else if (aTypeId == 0x0F)
        //return "float4";
		return "['[]','float32',4]";
    else if (aTypeId == 0x11)
        //return "qword";
		return "Utils.getQWordReader()";
    else if (aTypeId == 0x12)
        //return "wchar_ptr";
		return "Utils.getString16Reader()";
    else if (aTypeId == 0x13)
        //return "char_ptr";
		return "Utils.getStringReader()";
    else if (aTypeId == 0x15)
        //return "word";
		return "'uint16'";
    else if (aTypeId == 0x16)
        //return "byte16";
		return "['[]','uint8',16]";
    else if (aTypeId == 0x17)
        //return "byte3";
		return "['[]','uint8',3]";
    else if (aTypeId == 0x18)
        //return "dword2";
		return "['[]','uint32',2]";
    else if (aTypeId == 0x19)
        //return "dword4";
		return "['[]','uint32',4]";
    else if (aTypeId == 0x1A)
        //return "word3";
		return "['[]','uint16',3]";
    else if (aTypeId == 0x1B)
        //return "fileref";
		return "Utils.getFileNameReader()";
    else
        return "ERROR";
}

static parseMember(iAddress, iParsedStructsId, iOutputFile)
{
    auto aTypeId, aMemberName, aOptimized, aTempOutput, psAdr;
    aMemberName = getAsciiName(Dword(iAddress + 4));
    aTypeId = Word(iAddress);
    
    if (aTypeId == 0x00)
    {
        aTempOutput = form("ERROR %s", aMemberName);
        Message("ERROR: Encountered 0x00 as a member typeId.");
        aOptimized = 1;
    }
    else if (aTypeId == 0x01)
    {
        //aTempOutput = form("%s %s[%d]", parseStruct2(Dword(iAddress + 8), iParsedStructsId, iOutputFile), aMemberName, Dword(iAddress + 12));
		
		psAdr = Dword(iAddress + 8);
		
		///Basic
		if (Byte(Dword(psAdr + 4)) == 0){
			aTempOutput = form("'%s', ['[]', %s, %d]", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0), Dword(iAddress + 12));
		}
		
		///Non-basic
		else{
			aTempOutput = form("'%s', ['[]', this.%s, %d]", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0), Dword(iAddress + 12));
		}
		
		
        aOptimized = 1;
    }
    else if (aTypeId == 0x02)
    {
        //aTempOutput = form("TSTRUCT_ARRAY_PTR_START %s %s TSTRUCT_ARRAY_PTR_END", parseStruct2(Dword(iAddress + 8), iParsedStructsId, iOutputFile), aMemberName);
		
		psAdr = Dword(iAddress + 8);
		///Basic
		if (Byte(Dword(psAdr + 4)) == 0){
			aTempOutput = form("'%s', Utils.getArrayReader(%s)", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
		///Non-basic
		else{
			aTempOutput = form("'%s', Utils.getArrayReader(this.%s)", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
        aOptimized = 0;
    }
    else if (aTypeId == 0x03)
    {
        //aTempOutput = form("TSTRUCT_PTR_ARRAY_PTR_START %s %s TSTRUCT_PTR_ARRAY_PTR_END", parseStruct2(Dword(iAddress + 8), iParsedStructsId, iOutputFile), aMemberName);
		
		psAdr = Dword(iAddress + 8);
		///Basic
		if (Byte(Dword(psAdr + 4)) == 0){
			aTempOutput = form("'%s', Utils.getRefArrayReader(%s)", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
		///Non-basic
		else{
			aTempOutput = form("'%s', Utils.getRefArrayReader(this.%s)", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
        aOptimized = 0;
    }
    else if (aTypeId == 0x04)
    {
        //aTempOutput = form("%s %s", aMemberName,"Unknown0x04");
		aTempOutput = form("'%s' , %s", aMemberName, "Unknown0x04");
        aOptimized = 1;
    }
    else if (aTypeId == 0x05)
    {
        //aTempOutput = form("%s %s", "byte", aMemberName);
		aTempOutput = form("'%s' , '%s'", aMemberName, "uint8");
        aOptimized = 1;
    }
    else if (aTypeId == 0x06)
    {
        //aTempOutput = form("%s %s", "byte4", aMemberName);
		aTempOutput = form("'%s' , %s", aMemberName, "['[]','uint8',4]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x07)
    {
        //aTempOutput = form("%s %s", "double", aMemberName);
		aTempOutput = form("'%s' , '%s'", aMemberName, "float64");
        aOptimized = 1;
    }
    else if (aTypeId == 0x08)
    {
        //aTempOutput = form("%s %s", "Unknown0x08", aMemberName);
		aTempOutput = form("'%s' , %s", aMemberName, "Unknown0x08");
        aOptimized = 1;
    }
    else if (aTypeId == 0x09)
    {
        //aTempOutput = form("%s %s", "Unknown0x09", aMemberName);
		aTempOutput = form("'%s' , %s", aMemberName, "Unknown0x09");
        aOptimized = 1;
    }
    else if (aTypeId == 0x0A)
    {
        //aTempOutput = form("%s %s", "dword", aMemberName);
		aTempOutput = form("'%s' , '%s'", aMemberName, "uint32");
        aOptimized = 1;
    }
    else if (aTypeId == 0x0B)
    {
        //aTempOutput = form("%s %s", "filename", aMemberName);
		aTempOutput = form("'%s' , %s", aMemberName, "Utils.getFileNameReader()");
        aOptimized = 0;
    }
    else if (aTypeId == 0x0C)
    {
        //aTempOutput = form("%s %s", "float", aMemberName);
		aTempOutput = form("'%s' , '%s'", aMemberName, "float32");
        aOptimized = 1;
    }
    else if (aTypeId == 0x0D)
    {
        //aTempOutput = form("%s %s", "float2", aMemberName);
		aTempOutput = form("'%s' , %s", aMemberName, "['[]','float32',2]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x0E)
    {
        //aTempOutput = form("%s %s", "float3", aMemberName);
		aTempOutput = form("'%s' , %s", aMemberName, "['[]','float32',3]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x0F)
    {
        //aTempOutput = form("%s %s", "float4", aMemberName);
		aTempOutput = form("'%s' , %s", aMemberName, "['[]','float32',4]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x10)
    {
        //aTempOutput = form("TPTR_START %s %s TPTR_END", parseStruct2(Dword(iAddress + 8), iParsedStructsId, iOutputFile), aMemberName);
		
		psAdr = Dword(iAddress + 8);
		///Basic
		if (Byte(Dword(psAdr + 4)) == 0){
			aTempOutput = form("'%s', Utils.getPointerReader(%s)", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
		///Non-basic
		else{
			aTempOutput = form("'%s', Utils.getPointerReader(this.%s)", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
        aOptimized = 0;
    }
    else if (aTypeId == 0x11)
    {
        //aTempOutput = form("%s %s", "qword", aMemberName);
		aTempOutput = form("'%s', Utils.getQWordReader()", aMemberName);
        aOptimized = 1;
    }
    else if (aTypeId == 0x12)
    {
        //aTempOutput = form("%s %s", "wchar_ptr", aMemberName);
		aTempOutput = form("'%s', Utils.getString16Reader()", aMemberName);
        aOptimized = 0;
    }
    else if (aTypeId == 0x13)
    {
        //aTempOutput = form("%s %s", "char_ptr", aMemberName);
		aTempOutput = form("'%s', Utils.getStringReader()", aMemberName);
        aOptimized = 0;
    }
    else if (aTypeId == 0x14)
    {
        //aTempOutput = form("%s %s", parseStruct2(Dword(iAddress + 8), iParsedStructsId, iOutputFile), aMemberName);
		
		psAdr = Dword(iAddress + 8);
		///Basic
		if (Byte(Dword(psAdr + 4)) == 0){
			aTempOutput = form("'%s', %s", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
		///Non-basic
		else{
			aTempOutput = form("'%s', this.%s", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
		
        aOptimized = 1;
    }
    else if (aTypeId == 0x15)
    {
        //aTempOutput = form("%s %s", "word", aMemberName);
		aTempOutput = form("'%s', '%s'",aMemberName, "uint16");
        aOptimized = 1;
    }
    else if (aTypeId == 0x16)
    {
        //aTempOutput = form("%s %s", "byte16", aMemberName);
		aTempOutput = form("'%s', %s",aMemberName, "['[]', 'uint8', 16]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x17)
    {
        //aTempOutput = form("%s %s", "byte3", aMemberName);
		aTempOutput = form("'%s', %s",aMemberName, "['[]', 'uint8', 3]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x18)
    {
        //aTempOutput = form("%s %s", "dword2", aMemberName);
		aTempOutput = form("'%s', %s",aMemberName, "['[]', 'uint32', 2]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x19)
    {
        //aTempOutput = form("%s %s", "dword4", aMemberName);
		aTempOutput = form("'%s', %s",aMemberName, "['[]', 'uint32', 4]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x1A)
    {
        //aTempOutput = form("%s %s", "word3", aMemberName);
		aTempOutput = form("'%s', %s",aMemberName, "['[]', 'uint16', 3]");
        aOptimized = 1;
    }
    else if (aTypeId == 0x1B)
    {
        //aTempOutput = form("%s %s", "fileref", aMemberName);
		aTempOutput = form("'%s', %s",aMemberName, "Utils.getFileNameReader()");
        aOptimized = 1;
    }
    else if (aTypeId == 0x1C)
    {
        //aTempOutput = form("%s %s", "Unknown0x1C", aMemberName);
		aTempOutput = form("'%s', %s",aMemberName, "Unknown0x1C");
        aOptimized = 1;
    }
    else if (aTypeId == 0x1D)
    {
        //aTempOutput = form("%s %s", parseStruct2(Dword(iAddress + 8), iParsedStructsId, iOutputFile), aMemberName);
		
		psAdr = Dword(iAddress + 8);
		///Basic
		if (Byte(Dword(psAdr + 4)) == 0){
			aTempOutput = form("'%s', %s", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
		///Non-basic
		else{
			aTempOutput = form("'%s', this.%s", aMemberName, parseStruct2(psAdr, iParsedStructsId, iOutputFile, 0));
		}
		
        aOptimized = 1;
    }
    else
    {
        aTempOutput = form("ERROR %s\n", aMemberName);
        Message("ERROR: Encountered > 0x1D as a member typeId.");
        aOptimized = 1;
    }
    
    aTempOutput = form("\t\t\t\t%s,\n", aTempOutput);
    
    return aTempOutput;
}

static parseStruct2(iAddress, iParsedStructsId, iOutputFile, isBase)
{
    auto aOutput, aStructName, aCurrentAddress, aOptimized, aAlreadyParsed, aMemberOutput;
    
    aOptimized = 0;
    aAlreadyParsed = isIn(iParsedStructsId, iAddress);
    add(iParsedStructsId, iAddress);
    
    aCurrentAddress = iAddress; 
    
    // Special case for simple types
    if (Byte(Dword(aCurrentAddress + 4)) == 0)
    {
        return getSimpleTypeName(iAddress);
    }
   


	/// Pass by members once to find struct name and print referenced types
	while (Word(aCurrentAddress) != 0)
    {   
		parseMember(aCurrentAddress, iParsedStructsId, iOutputFile);
        aCurrentAddress = aCurrentAddress +  16;
    }
    
    aStructName = getAsciiName(Dword(aCurrentAddress + 4));
	
	/// Go back to where we were
	aCurrentAddress = iAddress;    
    
	/// And pass trough again. This is clunky because we cant have too long strings or output will be cut.
    if (!aAlreadyParsed)
    {
        
		if(isBase){
			aOutput = form("\t\t\t\t\t\tthis.__root=this.%s =[\n", aStructName);
		}
		else{
			aOutput = form("\t\t\t\t\t\tthis.%s =[\n", aStructName);
		}
		
		fprintf(iOutputFile, aOutput);		
		
		while (Word(aCurrentAddress) != 0)
		{
			if (!aAlreadyParsed)
			{
				aMemberOutput = parseMember(aCurrentAddress, iParsedStructsId, iOutputFile);
				fprintf(iOutputFile, aMemberOutput);
			}
			
			aCurrentAddress = aCurrentAddress +  16;
		}
		
		fprintf(iOutputFile, "\t\t\t\t\t\t];\n\n");
		
    }
    
    return aStructName;
}

static parseStructTab(iANSTructTabOffset, iNbOfVersions, iOutputFile)
{
    auto aCurrentAddress, aLoopIndex, historyDepth, aParsedStructsId, aSubAddress;
    
    aLoopIndex = iNbOfVersions - 1;
	historyDepth = 100;
    aCurrentAddress = iANSTructTabOffset;
    
    while (aLoopIndex >= 0 && aLoopIndex >= iNbOfVersions - historyDepth)
    {
        DeleteArray(GetArrayId("PARSED_STRUCTS"));
        aParsedStructsId = CreateArray("PARSED_STRUCTS");
        
        aCurrentAddress = Dword(iANSTructTabOffset + 12 * aLoopIndex);
		aSubAddress = Dword(iANSTructTabOffset + 12 * aLoopIndex + 4);
        if (aCurrentAddress !=0)
        {
			if (aSubAddress != 0)
			{
				fprintf(iOutputFile, "\n\n\t\t\t// => Version: %d, ReferencedFunction: 0x%X\n", aLoopIndex, aSubAddress);
			}
			else
			{
				fprintf(iOutputFile, "\n\n\t\t\t// => Version: %d\n", aLoopIndex);
			}
            fprintf(iOutputFile,"\t\t\t%d:function(){\n",aLoopIndex);
            parseStruct2(aCurrentAddress, aParsedStructsId, iOutputFile, 1);
            fprintf(iOutputFile,"\t\t\t},");
        }
        aLoopIndex = aLoopIndex - 1;
    }
}

static main(void)
{
    auto aParsedTablesId;
    
    // First step detecting rdata and text segments
    auto aCurrentSeg, aCurrentAddress, aMiscAddress;
    auto aMinDataSeg, aMaxDataSeg;
    auto aMinRDataSeg, aMaxRDataSeg;
    auto aMinTextSeg, aMaxTextSeg;
    
    auto aChunkName, aNbOfVersions, aANSTructTabOffset;
    
    auto aOutputFile, aReportFile;
    aOutputFile = fopen("output.js", "w");
    
    Message("ANet structs script started.\n");
    
    aMinDataSeg = 0;
    aMaxDataSeg = 0;
    aMinRDataSeg = 0;
    aMaxRDataSeg = 0;
    aMinTextSeg = 0;
    aMaxTextSeg = 0;
    
    DeleteArray(GetArrayId("PARSED_TABLES"));
    aParsedTablesId = CreateArray("PARSED_TABLES");
    
    aCurrentSeg = FirstSeg();
    
    while (aCurrentSeg != BADADDR)
    {
        if (SegName(aCurrentSeg)==".rdata")
        {
            aMinRDataSeg = aCurrentSeg;
            aMaxRDataSeg = NextSeg(aCurrentSeg);
        }
        else if (SegName(aCurrentSeg)==".text")
        {
            aMinTextSeg = aCurrentSeg;
            aMaxTextSeg = NextSeg(aCurrentSeg);
        }
        else if (SegName(aCurrentSeg)==".data")
        {
            aMinDataSeg = aCurrentSeg;
            aMaxDataSeg = NextSeg(aCurrentSeg);
        }
        aCurrentSeg = NextSeg(aCurrentSeg);
    }
    
    if (aMinRDataSeg == 0)
    {
        aMinRDataSeg=aMinTextSeg;
        aMaxRDataSeg=aMaxTextSeg;
    }
    
    Message(".data: %08.8Xh - %08.8Xh, .rdata: %08.8Xh - %08.8Xh, .text %08.8Xh - %08.8Xh\n", aMinDataSeg, aMaxDataSeg, aMinRDataSeg, aMaxRDataSeg, aMinTextSeg, aMaxTextSeg);
    
    Message("Parsing .rdata for chunk_infos.\n");
	
	
	fprintf(aOutputFile, "window.T3D.Formats = [\n");
    
    aCurrentAddress = aMinRDataSeg;
    while (aCurrentAddress < aMaxRDataSeg)
    {
        if (IS_ASCII(aCurrentAddress) && IS_ASCII(aCurrentAddress + 1) && IS_ASCII(aCurrentAddress + 2) && (Byte(aCurrentAddress + 3) == 0 || IS_ASCII(aCurrentAddress + 3)))
        {
		
			/// First 4 bytes are chunk name
            aChunkName = form("%c%c%c", Byte(aCurrentAddress), Byte(aCurrentAddress + 1), Byte(aCurrentAddress + 2));
            if (Byte(aCurrentAddress + 3) != 0)
            {
                aChunkName = form("%s%c", aChunkName, Byte(aCurrentAddress + 3));
            }
            
			/// 4-7 are number of versions
            aNbOfVersions = Dword(aCurrentAddress + 4);
			
            if (aNbOfVersions > 0 && aNbOfVersions < 100)
            {
				/// 8-11 are offset to struct tab
                aANSTructTabOffset = Dword(aCurrentAddress + 8);
                if ((aMinRDataSeg < aANSTructTabOffset) && (aMaxRDataSeg > aANSTructTabOffset))
                {
                    if (isANStructTab(aANSTructTabOffset, aNbOfVersions))
                    {
                        if (!isIn(aParsedTablesId, aANSTructTabOffset))
                        {
                            add(aParsedTablesId, aANSTructTabOffset);
							
							
                            
                            fprintf(aOutputFile, "\n\t///==================================================\n");
                            fprintf(aOutputFile, "\t/// Chunk: %s, versions: %d, strucTab: 0x%X \n", aChunkName, aNbOfVersions, aANSTructTabOffset);
                            fprintf(aOutputFile, "\t///==================================================\n");
							fprintf(aOutputFile, "\t{\n\t\tname:'%s',\n\t\tversions:{\n", aChunkName);
                            parseStructTab(aANSTructTabOffset, aNbOfVersions, aOutputFile);
							fprintf(aOutputFile, "\n\t\t}\n\t},\n");
                        }
                    }
					
                }
            }
			
        }
        
        aCurrentAddress = aCurrentAddress + 4;
    }
	
	
	fprintf(aOutputFile, "\n]");
    
    DeleteArray(aParsedTablesId);
    
    Message("ANet structs script ended.\n");
    
    fclose(aOutputFile);
}
