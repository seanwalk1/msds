// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF਍⼀⼀ 䄀一夀 䬀䤀一䐀Ⰰ 䔀䤀吀䠀䔀刀 䔀堀倀刀䔀匀匀䔀䐀 伀刀 䤀䴀倀䰀䤀䔀䐀Ⰰ 䤀一䌀䰀唀䐀䤀一䜀 䈀唀吀 一伀吀 䰀䤀䴀䤀吀䔀䐀 吀伀ഀഀ
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A਍⼀⼀ 倀䄀刀吀䤀䌀唀䰀䄀刀 倀唀刀倀伀匀䔀⸀ഀഀ
//਍⼀⼀ 䌀漀瀀礀爀椀最栀琀 ⠀挀⤀ 䴀椀挀爀漀猀漀昀琀 䌀漀爀瀀漀爀愀琀椀漀渀⸀ 䄀氀氀 爀椀最栀琀猀 爀攀猀攀爀瘀攀搀ഀഀ
//਍⼀⼀ 䘀椀氀攀 一愀洀攀㨀ഀഀ
//਍⼀⼀    唀匀䈀䴀漀渀ⴀ䈀椀搀椀ⴀ䔀砀琀攀渀猀椀漀渀⸀樀猀ഀഀ
//਍⼀⼀ 䄀戀猀琀爀愀挀琀㨀ഀഀ
//਍⼀⼀    匀愀洀瀀氀攀 唀匀䈀䴀伀一 䨀愀瘀愀猀挀爀椀瀀琀 攀砀琀攀渀猀椀漀渀 昀椀氀攀 昀漀爀 瘀㐀 瀀爀椀渀琀攀爀 搀爀椀瘀攀爀猀⸀ഀഀ
਍⼀⼀ 䄀搀搀 愀 爀攀昀攀爀攀渀挀攀 琀栀愀琀 瀀爀漀瘀椀搀攀猀 椀渀琀攀氀氀椀猀攀渀猀攀 椀渀昀漀爀洀愀琀椀漀渀 昀漀爀 圀椀渀搀漀眀猀 㠀 䄀倀䤀猀⸀ഀഀ
/// <reference path="v4PrintDriver-Intellisense.js" />਍ഀഀ
function getSchemas(scriptContext, printerStream, schemaRequests, printerBidiSchemaResponses) {਍    ⼀⼀⼀ 㰀猀甀洀洀愀爀礀㸀ഀഀ
    ///    Get the requested Schema(s).਍    ⼀⼀⼀ഀഀ
    ///    The script can use the 'schemaRequests' object to iterate through the Query Keys requested by the user. Based on the query keys,਍    ⼀⼀⼀    琀栀攀 猀挀爀椀瀀琀 猀栀漀甀氀搀 甀猀攀 琀栀攀 ✀瀀爀椀渀琀攀爀匀琀爀攀愀洀✀ 漀戀樀攀挀琀 琀漀 挀漀洀洀甀渀椀挀愀琀攀 眀椀琀栀 琀栀攀 唀匀䈀 瀀爀椀渀琀 搀攀瘀椀挀攀 愀渀搀 搀攀琀攀爀洀椀渀攀 琀栀攀 瘀愀氀甀攀猀 漀昀 漀渀攀 漀爀 洀漀爀攀 䈀椀搀椀ഀഀ
    ///    Schema elements. For each Bidi Schema element the new value can be returned to the caller by using functions of the 'printerBidiSchemaResponses'਍    ⼀⼀⼀    漀戀樀攀挀琀⸀ 伀渀挀攀 愀氀氀 焀甀攀爀礀 欀攀礀猀 栀愀瘀攀 戀攀攀渀 瀀爀漀挀攀猀猀攀搀 愀渀搀 愀氀氀 瘀愀氀甀攀猀 愀搀搀攀搀 琀漀 琀栀攀 ✀瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀✀ 漀戀樀攀挀琀 琀栀攀 猀挀爀椀瀀琀 挀愀渀 爀攀琀甀爀渀⸀ഀഀ
    ///਍    ⼀⼀⼀    䤀琀 椀猀 瀀漀猀猀椀戀氀攀 琀栀攀 愀琀琀愀挀栀攀搀 搀攀瘀椀挀攀 椀猀 渀漀琀 爀攀愀搀礀 琀漀 爀攀琀甀爀渀 猀漀洀攀 漀昀 琀栀攀 爀攀焀甀攀猀琀攀搀 搀愀琀愀⸀ 䤀渀 琀栀椀猀 挀愀猀攀 琀栀攀 昀甀渀挀琀椀漀渀 挀愀渀 爀攀琀甀爀渀 愀 瘀愀氀甀攀 漀昀 ㄀ 琀漀 椀渀搀椀挀愀琀攀 琀栀攀 挀愀氀氀ഀഀ
    ///    should be retried after a wait.਍    ⼀⼀⼀ 㰀⼀猀甀洀洀愀爀礀㸀ഀഀ
    /// <param name="scriptContext" type="IPrinterScriptContext">਍    ⼀⼀⼀     匀挀爀椀瀀琀 挀漀渀琀攀砀琀 漀戀樀攀挀琀⸀ഀഀ
    /// </param>਍    ⼀⼀⼀ 㰀瀀愀爀愀洀 渀愀洀攀㴀∀瀀爀椀渀琀攀爀匀琀爀攀愀洀∀ 琀礀瀀攀㴀∀䤀倀爀椀渀琀攀爀匀挀爀椀瀀琀愀戀氀攀匀攀焀甀攀渀琀椀愀氀匀琀爀攀愀洀∀㸀ഀഀ
    ///    Allows the script to Write/Read data from the attached USB device.਍    ⼀⼀⼀ 㰀⼀瀀愀爀愀洀㸀ഀഀ
    /// <param name="schemaRequests" type="Array">਍    ⼀⼀⼀    䄀爀爀愀礀 漀昀 猀琀爀椀渀最猀 琀栀愀琀 挀漀渀琀愀椀渀猀 愀氀氀 琀栀攀 爀攀焀甀攀猀琀攀搀 儀甀攀爀礀 䬀攀礀猀⸀ഀഀ
    /// </param>਍    ⼀⼀⼀ 㰀瀀愀爀愀洀 渀愀洀攀㴀∀瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀∀ 琀礀瀀攀㴀∀䤀倀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀∀㸀ഀഀ
    ///    Object the script will use to store all responses to query keys.਍    ⼀⼀⼀ 㰀⼀瀀愀爀愀洀㸀ഀഀ
    /// <returns type="Number" integer="true">਍    ⼀⼀⼀     䤀渀琀攀最攀爀 瘀愀氀甀攀 椀渀搀椀挀愀琀椀渀最 昀甀渀挀琀椀漀渀 挀漀洀瀀氀攀琀椀漀渀 猀琀愀琀甀猀⸀ഀഀ
    ///         1 - The attached device was not ready to provide some requested information. Call the function again using any Requery Keys added during processing.਍    ⼀⼀⼀         　 ⴀ 吀栀攀 猀挀爀椀瀀琀 挀漀洀瀀氀攀琀攀搀 猀甀挀挀攀猀猀昀甀氀礀⸀ഀഀ
    /// </returns>਍ഀഀ
    var retVal = 0;਍ഀഀ
    // Loop through all the QueryKeys provided in the schemaRequests object.਍    昀漀爀 ⠀瘀愀爀 椀渀搀攀砀 㴀 　㬀 椀渀搀攀砀 㰀 猀挀栀攀洀愀刀攀焀甀攀猀琀猀⸀氀攀渀最琀栀㬀 椀渀搀攀砀⬀⬀⤀ 笀ഀഀ
        var key = schemaRequests[index];਍ഀഀ
        // Process the "Configuration" Query key.਍        椀昀 ⠀欀攀礀 㴀㴀㴀 ∀䌀漀渀昀椀最甀爀愀琀椀漀渀∀⤀ 笀ഀഀ
਍            ⼀⼀ 圀爀椀琀攀 挀漀洀洀愀渀搀 搀愀琀愀 琀漀 琀栀攀 搀攀瘀椀挀攀 愀渀搀 爀攀愀搀 琀栀攀 爀攀猀瀀漀渀猀攀⸀ഀഀ
            // This command checks if the duplexing unit is installed.਍            瘀愀爀 搀甀瀀氀攀砀䤀渀猀琀愀氀氀攀搀 㴀 昀愀氀猀攀㬀ഀഀ
            var writeDataConfig = [0x0D, 0x0D, 0x02, 0xCA, 0xFE];਍            瘀愀爀 戀礀琀攀猀圀爀椀琀琀攀渀䌀漀渀昀椀最 㴀 瀀爀椀渀琀攀爀匀琀爀攀愀洀⸀眀爀椀琀攀⠀眀爀椀琀攀䐀愀琀愀䌀漀渀昀椀最⤀㬀ഀഀ
            if (bytesWrittenConfig === 5) {਍                ⼀⼀ 䌀漀爀爀攀挀琀 渀甀洀戀攀爀 漀昀 戀礀琀攀猀 眀攀爀攀 眀爀椀琀琀攀渀⸀ 一漀眀 爀攀愀搀 琀栀攀 爀攀猀瀀漀渀猀攀 昀爀漀洀 琀栀攀 搀攀瘀椀挀攀⸀ഀഀ
                var readBufferConfig = printerStream.read(64);਍                椀昀 ⠀爀攀愀搀䈀甀昀昀攀爀䌀漀渀昀椀最⸀氀攀渀最琀栀 㴀㴀㴀 ㄀⤀ 笀ഀഀ
                    // A value of 1 indicates the duplexing unit is installed.਍                    瘀愀爀 搀愀琀愀 㴀 爀攀愀搀䈀甀昀昀攀爀䌀漀渀昀椀最⸀猀栀椀昀琀⠀⤀㬀ഀഀ
                    if (data === 1) {਍                        搀甀瀀氀攀砀䤀渀猀琀愀氀氀攀搀 㴀 琀爀甀攀㬀ഀഀ
                    } else if (data === 2) {਍                        ⼀⼀ 吀攀氀氀 唀匀䈀䴀漀渀 琀漀 挀愀氀氀 琀栀椀猀 昀甀渀挀琀椀漀渀 愀最愀椀渀 愀昀琀攀爀 愀 琀椀洀攀漀甀琀 瀀攀爀椀漀搀⸀ഀഀ
                        // Retry the "Configuration"  query key.਍                        爀攀琀嘀愀氀 㴀 ㄀㬀ഀഀ
                        printerBidiSchemaResponses.addRequeryKey("Configuration");਍                    紀ഀഀ
                }਍            紀ഀഀ
            // If the device was able to process the request for Duplex status correctly,਍            ⼀⼀ 愀搀搀 琀栀攀 爀攀猀瀀漀渀猀攀 琀漀 琀栀攀 ✀瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀✀ 漀戀樀攀挀琀 昀漀爀 瀀爀漀挀攀猀猀椀渀最 戀礀 唀匀䈀䴀漀渀 甀瀀漀渀 昀甀渀挀琀椀漀渀 挀漀洀瀀氀攀琀椀漀渀⸀ഀഀ
            if (retVal === 0) {਍                瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀⸀愀搀搀䈀漀漀氀⠀∀尀尀倀爀椀渀琀攀爀⸀䌀漀渀昀椀最甀爀愀琀椀漀渀⸀䐀甀瀀氀攀砀唀渀椀琀㨀䤀渀猀琀愀氀氀攀搀∀Ⰰ 搀甀瀀氀攀砀䤀渀猀琀愀氀氀攀搀⤀㬀ഀഀ
            }਍ഀഀ
            // Write command data to the device and read the response.਍            ⼀⼀ 吀栀椀猀 挀漀洀洀愀渀搀 爀攀焀甀攀猀琀猀 琀栀攀 挀甀爀爀攀渀琀 洀攀洀漀爀礀 猀椀稀攀⸀ഀഀ
            var memSize = 0;਍            瘀愀爀 眀爀椀琀攀䐀愀琀愀䴀攀洀 㴀 嬀　砀　䐀Ⰰ 　砀　䐀Ⰰ 　砀　㈀Ⰰ 　砀䄀䈀Ⰰ 　砀䌀䐀崀㬀ഀഀ
            var bytesWrittenMem = printerStream.write(writeDataMem);਍            椀昀 ⠀戀礀琀攀猀圀爀椀琀琀攀渀䴀攀洀 㴀㴀㴀 㔀⤀ 笀ഀഀ
                // Correct number of bytes were written. Now read the response from the device.਍                ⼀⼀ 䌀漀渀瘀攀爀琀 琀栀攀 椀渀挀漀洀椀渀最 戀礀琀攀猀 琀漀 愀 猀琀爀椀渀最 琀栀攀渀 挀漀渀瘀攀爀琀 琀栀攀 猀琀爀椀渀最 琀漀 愀 渀甀洀戀攀爀⸀ഀഀ
                var readBufferMem = printerStream.read(64);਍                瘀愀爀 戀礀琀攀猀刀攀愀搀䴀攀洀 㴀 爀攀愀搀䈀甀昀昀攀爀䴀攀洀⸀氀攀渀最琀栀㬀ഀഀ
                for (var i = 0; i < bytesReadMem; i++) {਍                    ⼀⼀ 刀攀愀搀 愀 戀礀琀攀 愀琀 愀 琀椀洀攀 昀爀漀洀 琀栀攀 猀琀爀攀愀洀 愀渀搀 挀漀渀瘀攀爀琀 琀漀 愀渀 椀渀琀攀最攀爀⸀ഀഀ
                    memSize *= 256;਍                    洀攀洀匀椀稀攀 ⬀㴀 爀攀愀搀䈀甀昀昀攀爀䴀攀洀⸀猀栀椀昀琀⠀⤀㬀ഀഀ
                }਍            紀ഀഀ
            // Add the response to the 'printerBidiSchemaResponses' object for processing by USBMon upon function completion.਍            瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀⸀愀搀搀䤀渀琀㌀㈀⠀∀尀尀倀爀椀渀琀攀爀⸀䌀漀渀昀椀最甀爀愀琀椀漀渀⸀䴀攀洀漀爀礀㨀匀椀稀攀∀Ⰰ 洀攀洀匀椀稀攀⤀㬀ഀഀ
਍            ⼀⼀ 刀攀愀搀 愀 瀀爀漀瀀攀爀琀礀 昀爀漀洀 琀栀攀 儀甀攀甀攀 倀爀漀瀀攀爀琀礀 䈀愀最 愀渀搀 愀搀搀 椀琀 琀漀 琀栀攀 ✀瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀✀ 漀戀樀攀挀琀 昀漀爀 瀀爀漀挀攀猀猀椀渀最 戀礀 唀匀䈀䴀漀渀 甀瀀漀渀 昀甀渀挀琀椀漀渀 挀漀洀瀀氀攀琀椀漀渀⸀ഀഀ
            var bag = scriptContext.QueueProperties;਍            瘀愀爀 焀甀攀甀攀倀爀漀瀀攀爀琀礀 㴀 戀愀最⸀䜀攀琀匀琀爀椀渀最⠀∀儀甀攀甀攀倀爀漀瀀一愀洀攀∀⤀㬀ഀഀ
            printerBidiSchemaResponses.addString("\\Printer.DeviceInfo:QueueProperty", queueProperty);਍ഀഀ
        } else if (key === "IntKey") {਍            ⼀⼀ 倀爀漀挀攀猀猀 琀栀攀 ∀䤀渀琀䬀攀礀∀ 儀甀攀爀礀 欀攀礀⸀ഀഀ
            // Write data to the device.਍            瘀愀爀 眀爀椀琀攀䐀愀琀愀䤀渀琀䬀攀礀 㴀 嬀　砀　䐀Ⰰ 　砀　䐀Ⰰ 　砀　㐀Ⰰ 　砀䐀䔀Ⰰ 　砀䄀䐀Ⰰ 　砀䈀䔀Ⰰ 　砀䔀䘀崀㬀ഀഀ
            var bytesWrittenIntKey = printerStream.write(writeDataIntKey);਍            ⼀⼀ 䄀搀搀 琀栀攀 爀攀猀瀀漀渀猀攀 琀漀 琀栀攀 ✀瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀✀ 漀戀樀攀挀琀 昀漀爀 瀀爀漀挀攀猀猀椀渀最 戀礀 唀匀䈀䴀漀渀 甀瀀漀渀 昀甀渀挀琀椀漀渀 挀漀洀瀀氀攀琀椀漀渀⸀ഀഀ
            var intResult = printerBidiSchemaResponses.addInt32("\\Printer.Extension:IntegerValue", bytesWrittenIntKey);਍ഀഀ
        } else if (key === "\\Printer.Extension:StringValue") {਍            ⼀⼀ 倀爀漀挀攀猀猀 琀栀攀 ∀尀尀倀爀椀渀琀攀爀⸀䔀砀琀攀渀猀椀漀渀㨀匀琀爀椀渀最嘀愀氀甀攀∀ 儀甀攀爀礀 欀攀礀⸀ഀഀ
            // Write command data to the device and read the response.਍            ⼀⼀ 吀栀椀猀 挀漀洀洀愀渀搀 爀攀琀爀椀攀瘀攀猀 愀 猀琀爀椀渀最 昀爀漀洀 琀栀攀 搀攀瘀椀挀攀⸀ഀഀ
            var readString = "";਍            瘀愀爀 眀爀椀琀攀䐀愀琀愀匀琀爀椀渀最 㴀 嬀　砀　䐀Ⰰ 　砀　䐀Ⰰ 　砀　㄀Ⰰ 　砀䄀䄀崀㬀ഀഀ
            var bytesWrittenString = printerStream.write(writeDataString);਍            椀昀 ⠀戀礀琀攀猀圀爀椀琀琀攀渀匀琀爀椀渀最 㴀㴀㴀 㐀⤀ 笀ഀഀ
                // Correct number of bytes were written. Now read the response from the device.਍                ⼀⼀ 䌀漀渀瘀攀爀琀 琀栀攀 椀渀挀漀洀椀渀最 戀礀琀攀猀 琀漀 愀 猀琀爀椀渀最 愀渀搀 猀琀漀爀攀 琀栀攀 瘀愀氀甀攀 椀渀 琀栀攀 ✀瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀✀ 漀戀樀攀挀琀⸀ഀഀ
                var readBufferString = printerStream.read(64);਍                瘀愀爀 戀礀琀攀猀刀攀愀搀匀琀爀椀渀最 㴀 爀攀愀搀䈀甀昀昀攀爀匀琀爀椀渀最⸀氀攀渀最琀栀㬀ഀഀ
                for (i = 0; i < bytesReadString; i++) {਍                    爀攀愀搀匀琀爀椀渀最 ⬀㴀 匀琀爀椀渀最⸀昀爀漀洀䌀栀愀爀䌀漀搀攀⠀爀攀愀搀䈀甀昀昀攀爀匀琀爀椀渀最⸀猀栀椀昀琀⠀⤀⤀㬀ഀഀ
                }਍            紀ഀഀ
            // Add the response to the 'printerBidiSchemaResponses' object for processing by USBMon upon function completion.਍            瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀⸀愀搀搀匀琀爀椀渀最⠀∀尀尀倀爀椀渀琀攀爀⸀䔀砀琀攀渀猀椀漀渀㨀匀琀爀椀渀最嘀愀氀甀攀∀Ⰰ 爀攀愀搀匀琀爀椀渀最⤀㬀ഀഀ
        }਍    紀ഀഀ
    return retVal;਍紀ഀഀ
਍昀甀渀挀琀椀漀渀 猀攀琀匀挀栀攀洀愀⠀猀挀爀椀瀀琀䌀漀渀琀攀砀琀Ⰰ 瀀爀椀渀琀攀爀匀琀爀攀愀洀Ⰰ 瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀䔀氀攀洀攀渀琀⤀ 笀ഀഀ
    /// <summary>਍    ⼀⼀⼀    匀攀琀 愀 爀攀焀甀攀猀琀攀搀 䈀椀搀椀 匀挀栀攀洀愀 嘀愀氀甀攀 椀渀 琀栀攀 搀攀瘀椀挀攀⸀ഀഀ
    ///਍    ⼀⼀⼀    吀栀攀 猀挀爀椀瀀琀 挀愀渀 椀渀琀攀爀瀀爀攀琀 琀栀攀 椀渀挀漀洀椀渀最 䈀椀搀椀 匀挀栀攀洀愀 瘀愀氀甀攀 琀漀 攀椀琀栀攀爀 猀攀琀 搀愀琀愀 椀渀 琀栀攀 搀攀瘀椀挀攀 漀爀 瀀攀爀昀漀爀洀 愀渀 愀挀琀椀漀渀 漀渀 琀栀攀 搀攀瘀椀挀攀⸀ഀഀ
    ///਍    ⼀⼀⼀    䤀琀 椀猀 瀀漀猀猀椀戀氀攀 琀栀攀 愀琀琀愀挀栀攀搀 搀攀瘀椀挀攀 椀猀 渀漀琀 爀攀愀搀礀 琀漀 瀀爀漀挀攀猀猀 琀栀攀 猀瀀攀挀椀昀椀攀搀 搀愀琀愀⸀ 䤀渀 琀栀椀猀 挀愀猀攀 琀栀攀 昀甀渀挀琀椀漀渀 挀愀渀 爀攀琀甀爀渀 愀 瘀愀氀甀攀 漀昀 ㄀ 琀漀 椀渀搀椀挀愀琀攀 琀栀攀 挀愀氀氀ഀഀ
    ///    should be retried after a wait.਍    ⼀⼀⼀ 㰀⼀猀甀洀洀愀爀礀㸀ഀഀ
    ///਍    ⼀⼀⼀ 㰀瀀愀爀愀洀 渀愀洀攀㴀∀猀挀爀椀瀀琀䌀漀渀琀攀砀琀∀ 琀礀瀀攀㴀∀䤀倀爀椀渀琀攀爀匀挀爀椀瀀琀䌀漀渀琀攀砀琀∀㸀ഀഀ
    ///     Script context object.਍    ⼀⼀⼀ 㰀⼀瀀愀爀愀洀㸀ഀഀ
    /// <param name="printerStream" type="IPrinterScriptableSequentialStream">਍    ⼀⼀⼀    䄀氀氀漀眀猀 琀栀攀 猀挀爀椀瀀琀 琀漀 圀爀椀琀攀⼀刀攀愀搀 搀愀琀愀 昀爀漀洀 琀栀攀 愀琀琀愀挀栀攀搀 唀匀䈀 搀攀瘀椀挀攀⸀ഀഀ
    /// </param>਍    ⼀⼀⼀ 㰀瀀愀爀愀洀 渀愀洀攀㴀∀瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀䔀氀攀洀攀渀琀∀ 琀礀瀀攀㴀∀䤀倀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀䔀氀攀洀攀渀琀∀㸀ഀഀ
    ///    Contains all the data associated with the Bidi Schema Value to set.਍    ⼀⼀⼀ 㰀⼀瀀愀爀愀洀㸀ഀഀ
    /// <returns type="Number" integer="true">਍    ⼀⼀⼀     䤀渀琀攀最攀爀 瘀愀氀甀攀 椀渀搀椀挀愀琀椀渀最 昀甀渀挀琀椀漀渀 挀漀洀瀀氀攀琀椀漀渀 猀琀愀琀甀猀⸀ഀഀ
    ///         1 - The attached device was not ready to process/set the requested schema.  After a wait the function should be called again with the supplied printerBidiSchemaElement.਍    ⼀⼀⼀         　 ⴀ 吀栀攀 猀挀爀椀瀀琀 挀漀洀瀀氀攀琀攀搀 猀甀挀挀攀猀猀昀甀氀礀⸀ഀഀ
    /// </returns>਍ഀഀ
    var retVal = 0;਍    ⼀⼀ 刀攀琀爀椀攀瘀攀 琀栀攀 䈀椀搀椀 匀挀栀攀洀愀 猀琀爀椀渀最 琀漀 瀀爀漀挀攀猀猀⸀ഀഀ
    var bidiSchema = printerBidiSchemaElement.name;਍    椀昀 ⠀戀椀搀椀匀挀栀攀洀愀 㴀㴀㴀 ∀尀尀倀爀椀渀琀攀爀⸀䔀砀琀攀渀猀椀漀渀㨀䐀攀瘀椀挀攀䄀挀琀椀漀渀∀⤀ 笀ഀഀ
        // Write command data to the device based on the current value of the passed in 'printerBidiSchemaElement'.਍        瘀愀爀 戀漀漀氀䐀愀琀愀 㴀 瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀䔀氀攀洀攀渀琀⸀瘀愀氀甀攀㬀ഀഀ
        var writeDataBool;਍        椀昀 ⠀戀漀漀氀䐀愀琀愀⤀ 笀ഀഀ
            writeDataBool = [0x65, 0x24, 0x0a];਍        紀 攀氀猀攀 笀ഀഀ
            writeDataBool = [0x65, 0x24, 0x0b];਍        紀ഀഀ
        var bytesWrittenBool = printerStream.write(writeDataBool);਍    紀 攀氀猀攀 椀昀 ⠀戀椀搀椀匀挀栀攀洀愀 㴀㴀㴀 ∀尀尀倀爀椀渀琀攀爀⸀䔀砀琀攀渀猀椀漀渀㨀䌀栀愀渀最攀愀戀氀攀䐀愀琀愀∀⤀ 笀ഀഀ
        // Write command data to the device based on the current value of the passed in 'printerBidiSchemaElement'.਍        瘀愀爀 椀渀琀䐀愀琀愀 㴀 瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀䔀氀攀洀攀渀琀⸀瘀愀氀甀攀㬀ഀഀ
        var writeDataInt = [0x0d, 0x0a];਍        眀爀椀琀攀䐀愀琀愀䤀渀琀嬀㈀崀 㴀 椀渀琀䐀愀琀愀㬀ഀഀ
        var bytesWrittenInt = printerStream.write(writeDataInt);਍        椀昀 ⠀戀礀琀攀猀圀爀椀琀琀攀渀䤀渀琀 㴀㴀㴀 ㌀⤀ 笀ഀഀ
            // Read data from the USB device.਍            瘀愀爀 爀攀愀搀䈀甀昀昀攀爀䤀渀琀 㴀 瀀爀椀渀琀攀爀匀琀爀攀愀洀⸀爀攀愀搀⠀㘀㐀⤀㬀ഀഀ
            var bytesReadInt = readBufferInt.length;਍            瘀愀爀 搀愀琀愀㬀ഀഀ
            // Response should be a 2 byte buffer.਍            椀昀 ⠀戀礀琀攀猀刀攀愀搀䤀渀琀 㴀㴀㴀 ㈀⤀ 笀ഀഀ
                data = readBufferInt.shift();਍                ⼀⼀ 䌀栀攀挀欀 椀昀 琀栀椀猀 椀猀 愀 䌀栀愀渀最攀愀戀氀攀䐀愀琀愀 瘀愀氀甀攀 爀攀猀瀀漀渀猀攀⸀ഀഀ
                if (data === 0x1D) {਍                    ⼀⼀ 刀攀愀搀 琀栀攀 搀愀琀愀 戀礀琀攀 愀渀搀 搀攀琀攀爀洀椀渀攀 椀昀 眀攀 愀爀攀 搀漀渀攀 漀爀 渀攀攀搀 琀漀 琀爀礀 愀最愀椀渀⸀ഀഀ
                    data = readBufferInt.shift();਍                    椀昀 ⠀搀愀琀愀 㴀㴀㴀 　砀　㄀⤀ 笀ഀഀ
                        // Tell USBMon to try again.਍                        爀攀琀嘀愀氀 㴀 ㄀㬀ഀഀ
                    }਍                紀ഀഀ
            }਍        紀ഀഀ
    }਍    爀攀琀甀爀渀 爀攀琀嘀愀氀㬀ഀഀ
}਍ഀഀ
function getStatus(scriptContext, printerStream, printerBidiSchemaResponses) {਍    ⼀⼀⼀ 㰀猀甀洀洀愀爀礀㸀ഀഀ
    ///    Retrieve unsolicited Bidi Schema value updates from the USB device during printing.਍    ⼀⼀⼀ഀഀ
    ///    This function is only called when a job is printing. A device can provide data on the read channel which this script can interpret into਍    ⼀⼀⼀    䈀椀搀椀 匀挀栀攀洀愀 瘀愀氀甀攀猀 愀渀搀 爀攀琀甀爀渀攀搀 琀漀 唀匀䈀䴀漀渀⸀ഀഀ
    ///਍    ⼀⼀⼀    吀栀椀猀 昀甀渀挀琀椀漀渀 眀椀氀氀 戀攀 挀愀氀氀攀搀 爀攀瀀攀愀琀攀搀氀礀 搀甀爀椀渀最 瀀爀椀渀琀椀渀最⸀ 䤀琀 椀猀 攀砀瀀攀挀琀攀搀 琀栀攀 搀攀瘀椀挀攀 眀椀氀氀 漀渀氀礀 爀攀琀甀爀渀 搀愀琀愀 椀昀 椀琀 椀猀 愀瘀愀椀氀愀戀氀攀 愀渀搀 琀栀攀 猀挀爀椀瀀琀 挀愀渀 甀渀搀攀爀猀琀愀渀搀 椀琀⸀ഀഀ
    ///    If the device does not support querying for unsolicited status or the script can determine that there is no need to call this function again, the script can return਍    ⼀⼀⼀    愀 瘀愀氀甀攀 漀昀 ㈀ 眀栀椀挀栀 眀椀氀氀 琀攀氀氀 琀栀攀 最攀琀匀琀愀琀甀猀 攀砀攀挀甀琀椀漀渀 琀栀爀攀愀搀 椀渀 唀匀䈀䴀漀渀 琀漀 攀砀椀琀 猀甀挀挀攀猀猀昀甀氀氀礀⸀ഀഀ
    ///਍    ⼀⼀⼀    䤀昀 琀栀攀 瀀爀椀渀琀 搀攀瘀椀挀攀 搀漀攀猀 渀漀琀 猀甀瀀瀀漀爀琀 爀攀琀爀椀攀瘀椀渀最 猀琀愀琀甀猀 搀甀爀椀渀最 愀 瀀爀椀渀琀 樀漀戀 琀栀椀猀 昀甀渀挀琀椀漀渀 猀栀漀甀氀搀 戀攀 氀攀昀琀 漀甀琀 漀昀 琀栀攀 搀爀椀瘀攀爀✀猀 䨀愀瘀愀匀挀椀瀀琀 昀椀氀攀 愀氀琀漀最攀琀栀攀爀⸀ 吀栀椀猀 眀椀氀氀 椀渀昀漀爀洀 ഀഀ
    ///    USBMon to skip invocation of the function.਍    ⼀⼀⼀ 㰀⼀猀甀洀洀愀爀礀㸀ഀഀ
    /// <param name="scriptContext" type="IPrinterScriptContext">਍    ⼀⼀⼀    䄀挀挀攀猀猀漀爀 昀漀爀 倀爀漀瀀攀爀琀礀䈀愀最猀 昀漀爀 瀀爀椀渀琀攀爀 搀爀椀瘀攀爀 愀渀搀 焀甀攀甀攀 瀀爀漀瀀攀爀琀椀攀猀⸀ഀഀ
    /// </param>਍    ⼀⼀⼀ 㰀瀀愀爀愀洀 渀愀洀攀㴀∀瀀爀椀渀琀攀爀匀琀爀攀愀洀∀ 琀礀瀀攀㴀∀䤀倀爀椀渀琀攀爀匀挀爀椀瀀琀愀戀氀攀匀攀焀甀攀渀琀椀愀氀匀琀爀攀愀洀∀㸀ഀഀ
    ///    Allows the script to read data from the attached USB device. Calling the write function will fail. This device is opened read-only for this function.਍    ⼀⼀⼀ 㰀⼀瀀愀爀愀洀㸀ഀഀ
    /// <param name="printerBidiSchemaResponses" type="IPrinterBidiSchemaResponses">਍    ⼀⼀⼀    伀戀樀攀挀琀 琀栀攀 猀挀爀椀瀀琀 眀椀氀氀 甀猀攀 琀漀 猀琀漀爀攀 愀氀氀 猀琀愀琀甀猀 爀攀猀瀀漀渀猀攀猀⸀ഀഀ
    /// </param>਍    ⼀⼀⼀ 㰀爀攀琀甀爀渀猀 琀礀瀀攀㴀∀一甀洀戀攀爀∀ 椀渀琀攀最攀爀㴀∀琀爀甀攀∀㸀ഀഀ
    ///     Integer value indicating function completion status.਍    ⼀⼀⼀         ㈀ ⴀ 吀栀攀 搀攀瘀椀挀攀 渀漀 氀漀渀最攀爀 ⠀椀昀 攀瘀攀爀⤀ 猀甀瀀瀀漀爀琀猀 甀渀猀漀氀椀挀椀琀攀搀 猀琀愀琀甀猀 猀漀 渀漀 渀攀攀搀 昀漀爀 唀匀䈀䴀漀渀 琀漀 洀愀欀攀 洀漀爀攀 挀愀氀氀猀 琀漀 琀栀椀猀 昀甀渀挀琀椀漀渀⸀ഀഀ
    ///         0 - The script completed successfuly.਍    ⼀⼀⼀ 㰀⼀爀攀琀甀爀渀猀㸀ഀഀ
਍    瘀愀爀 爀攀琀嘀愀氀 㴀 　㬀ഀഀ
਍    ⼀⼀ 刀攀愀搀 搀愀琀愀 昀爀漀洀 琀栀攀 唀匀䈀 搀攀瘀椀挀攀⸀ഀഀ
    var readBufferStatus = printerStream.read(64);਍    瘀愀爀 戀礀琀攀猀刀攀愀搀匀琀愀琀甀猀 㴀 爀攀愀搀䈀甀昀昀攀爀匀琀愀琀甀猀⸀氀攀渀最琀栀㬀ഀഀ
    var data;਍    ⼀⼀ 匀琀愀琀甀猀 唀瀀搀愀琀攀猀 愀爀攀 ㈀ 戀礀琀攀 戀甀昀昀攀爀猀⸀ഀഀ
    if (bytesReadStatus === 2) {਍        搀愀琀愀 㴀 爀攀愀搀䈀甀昀昀攀爀匀琀愀琀甀猀⸀猀栀椀昀琀⠀⤀㬀ഀഀ
        // Check if this is a Status value response.਍        椀昀 ⠀搀愀琀愀 㴀㴀㴀 　砀㄀䈀⤀ 笀ഀഀ
            // Read the data byte and return to USBMon for processing.਍            搀愀琀愀 㴀 爀攀愀搀䈀甀昀昀攀爀匀琀愀琀甀猀⸀猀栀椀昀琀⠀⤀㬀ഀഀ
            var intResult = printerBidiSchemaResponses.addInt32("\\Printer.Extension:StatusValue", data);਍        紀 攀氀猀攀 椀昀 ⠀搀愀琀愀 㴀㴀㴀 　砀㈀䈀⤀ 笀ഀഀ
            // This value signifies the device will not return additional status values so the thread can exit.਍            爀攀琀嘀愀氀 㴀 ㈀㬀ഀഀ
        }਍    紀ഀഀ
਍    爀攀琀甀爀渀 爀攀琀嘀愀氀㬀ഀഀ
}਍ഀഀ
function requestStatus(scriptContext, printerStream, printerBidiSchemaResponses) {਍    ⼀⼀⼀ 㰀猀甀洀洀愀爀礀㸀ഀഀ
    ///    Retrieve solicited Bidi Schema value updates from the USB device during printing.਍    ⼀⼀⼀    吀栀椀猀 昀甀渀挀琀椀漀渀 眀椀氀氀 戀攀 挀愀氀氀攀搀 椀渀猀琀攀愀搀 漀昀 最攀琀匀琀愀琀甀猀 椀昀 琀栀攀 搀攀瘀椀挀攀 倀爀椀渀琀攀爀 䐀爀椀瘀攀爀 猀瀀攀挀椀昀椀攀猀 愀渀 愀氀琀攀爀渀愀琀攀 䈀椀搀椀唀匀䈀匀琀愀琀甀猀䤀渀琀攀爀昀愀挀攀 琀漀 愀氀氀漀眀 眀爀椀琀攀⼀爀攀愀搀 漀瀀攀爀愀琀椀漀渀猀ഀഀ
    ///    that don't conflict with the print data being sent over the primary USB Print Interface.਍    ⼀⼀⼀ഀഀ
    ///    This function is only called when a job is printing. A device can write/read data to the Alternate interace which this script can interpret into਍    ⼀⼀⼀    䈀椀搀椀 匀挀栀攀洀愀 瘀愀氀甀攀猀 愀渀搀 爀攀琀甀爀渀攀搀 琀漀 唀匀䈀䴀漀渀⸀ഀഀ
    ///਍    ⼀⼀⼀    吀栀椀猀 昀甀渀挀琀椀漀渀 眀椀氀氀 戀攀 挀愀氀氀攀搀 爀攀瀀攀愀琀攀搀氀礀 搀甀爀椀渀最 瀀爀椀渀琀椀渀最⸀ 䤀琀 椀猀 攀砀瀀攀挀琀攀搀 琀栀攀 搀攀瘀椀挀攀 眀椀氀氀 漀渀氀礀 爀攀琀甀爀渀 搀愀琀愀 椀昀 椀琀 椀猀 愀瘀愀椀氀愀戀氀攀 愀渀搀 琀栀攀 猀挀爀椀瀀琀 挀愀渀 甀渀搀攀爀猀琀愀渀搀 椀琀⸀ഀഀ
    ///    If the device does not support querying for solicited status or the script can determine that there is no need to call this function again, the script can return਍    ⼀⼀⼀    愀 瘀愀氀甀攀 漀昀 ㈀ 眀栀椀挀栀 眀椀氀氀 琀攀氀氀 琀栀攀 爀攀焀甀攀猀琀匀琀愀琀甀猀 攀砀攀挀甀琀椀漀渀 琀栀爀攀愀搀 椀渀 唀匀䈀䴀漀渀 琀漀 攀砀椀琀 猀甀挀挀攀猀猀昀甀氀氀礀⸀ഀഀ
    ///਍    ⼀⼀⼀    䤀昀 琀栀攀 瀀爀椀渀琀 搀攀瘀椀挀攀 搀漀攀猀 渀漀琀 猀甀瀀瀀漀爀琀 爀攀琀爀椀攀瘀椀渀最 猀琀愀琀甀猀 搀甀爀椀渀最 愀 瀀爀椀渀琀 樀漀戀 瘀椀愀 愀渀 愀氀琀攀爀渀愀琀攀 䈀椀搀椀唀匀䈀匀琀愀琀甀猀䤀渀琀攀爀昀愀挀攀 琀栀椀猀 昀甀渀挀琀椀漀渀 猀栀漀甀氀搀 戀攀 氀攀昀琀 漀甀琀 漀昀 琀栀攀 搀爀椀瘀攀爀✀猀 䨀愀瘀愀匀挀椀瀀琀 ഀഀ
    ///    file altogether. This will inform USBMon to skip invocation of the function.਍    ⼀⼀⼀ 㰀⼀猀甀洀洀愀爀礀㸀ഀഀ
    /// <param name="scriptContext" type="IPrinterScriptContext">਍    ⼀⼀⼀    䄀挀挀攀猀猀漀爀 昀漀爀 倀爀漀瀀攀爀琀礀䈀愀最猀 昀漀爀 瀀爀椀渀琀攀爀 搀爀椀瘀攀爀 愀渀搀 焀甀攀甀攀 瀀爀漀瀀攀爀琀椀攀猀⸀ഀഀ
    /// </param>਍    ⼀⼀⼀ 㰀瀀愀爀愀洀 渀愀洀攀㴀∀瀀爀椀渀琀攀爀匀琀爀攀愀洀∀ 琀礀瀀攀㴀∀䤀倀爀椀渀琀攀爀匀挀爀椀瀀琀愀戀氀攀匀攀焀甀攀渀琀椀愀氀匀琀爀攀愀洀∀㸀ഀഀ
    ///    Allows the script to write/read data from the attached USB device. ਍    ⼀⼀⼀ 㰀⼀瀀愀爀愀洀㸀ഀഀ
    /// <param name="printerBidiSchemaResponses" type="IPrinterBidiSchemaResponses">਍    ⼀⼀⼀    伀戀樀攀挀琀 琀栀攀 猀挀爀椀瀀琀 眀椀氀氀 甀猀攀 琀漀 猀琀漀爀攀 愀氀氀 猀琀愀琀甀猀 爀攀猀瀀漀渀猀攀猀⸀ഀഀ
    /// </param>਍    ⼀⼀⼀ 㰀爀攀琀甀爀渀猀 琀礀瀀攀㴀∀一甀洀戀攀爀∀ 椀渀琀攀最攀爀㴀∀琀爀甀攀∀㸀ഀഀ
    ///     Integer value indicating function completion status.਍    ⼀⼀⼀         ㈀ ⴀ 吀栀攀 搀攀瘀椀挀攀 渀漀 氀漀渀最攀爀 ⠀椀昀 攀瘀攀爀⤀ 猀甀瀀瀀漀爀琀猀 猀漀氀椀挀椀琀攀搀 猀琀愀琀甀猀 猀漀 渀漀 渀攀攀搀 昀漀爀 唀匀䈀䴀漀渀 琀漀 洀愀欀攀 洀漀爀攀 挀愀氀氀猀 琀漀 琀栀椀猀 昀甀渀挀琀椀漀渀⸀ഀഀ
    ///         0 - The script completed successfuly.਍    ⼀⼀⼀ 㰀⼀爀攀琀甀爀渀猀㸀ഀഀ
਍    瘀愀爀 爀攀琀嘀愀氀 㴀 　㬀ഀഀ
਍    ⼀⼀ 圀爀椀琀攀 搀愀琀愀 琀漀 琀栀攀 搀攀瘀椀挀攀 爀攀焀甀攀猀琀椀渀最 匀琀愀琀甀猀 搀愀琀愀⸀ഀഀ
    var writeDataStatus = [0x0C, 0x0C];਍    瘀愀爀 戀礀琀攀猀圀爀椀琀琀攀渀匀琀愀琀甀猀 㴀 瀀爀椀渀琀攀爀匀琀爀攀愀洀⸀眀爀椀琀攀⠀眀爀椀琀攀䐀愀琀愀匀琀愀琀甀猀⤀㬀ഀഀ
਍    椀昀 ⠀戀礀琀攀猀圀爀椀琀琀攀渀匀琀愀琀甀猀 㴀㴀㴀 ㈀⤀ 笀ഀഀ
       // Read data from the USB device.਍       瘀愀爀 爀攀愀搀䈀甀昀昀攀爀匀琀愀琀甀猀 㴀 瀀爀椀渀琀攀爀匀琀爀攀愀洀⸀爀攀愀搀⠀㘀㐀⤀㬀ഀഀ
       var bytesReadStatus = readBufferStatus.length;਍       瘀愀爀 搀愀琀愀㬀ഀഀ
       // Status Updates are 2 byte buffers.਍       椀昀 ⠀戀礀琀攀猀刀攀愀搀匀琀愀琀甀猀 㴀㴀㴀 ㈀⤀ 笀ഀഀ
           data = readBufferStatus.shift();਍           ⼀⼀ 䌀栀攀挀欀 椀昀 琀栀椀猀 椀猀 愀 匀琀愀琀甀猀 瘀愀氀甀攀 爀攀猀瀀漀渀猀攀⸀ഀഀ
           if (data === 0x1B) {਍               ⼀⼀ 刀攀愀搀 琀栀攀 搀愀琀愀 戀礀琀攀 愀渀搀 爀攀琀甀爀渀 琀漀 唀匀䈀䴀漀渀 昀漀爀 瀀爀漀挀攀猀猀椀渀最⸀ഀഀ
               data = readBufferStatus.shift();਍               瘀愀爀 椀渀琀刀攀猀甀氀琀 㴀 瀀爀椀渀琀攀爀䈀椀搀椀匀挀栀攀洀愀刀攀猀瀀漀渀猀攀猀⸀愀搀搀䤀渀琀㌀㈀⠀∀尀尀倀爀椀渀琀攀爀⸀䔀砀琀攀渀猀椀漀渀㨀匀琀愀琀甀猀嘀愀氀甀攀∀Ⰰ 搀愀琀愀⤀㬀ഀഀ
           } else if (data === 0x2B) {਍               ⼀⼀ 吀栀椀猀 瘀愀氀甀攀 猀椀最渀椀昀椀攀猀 琀栀攀 搀攀瘀椀挀攀 眀椀氀氀 渀漀琀 爀攀琀甀爀渀 愀搀搀椀琀椀漀渀愀氀 猀琀愀琀甀猀 瘀愀氀甀攀猀 猀漀 琀栀攀 琀栀爀攀愀搀 挀愀渀 攀砀椀琀⸀ഀഀ
               retVal = 2;਍           紀ഀഀ
       }਍    紀ഀഀ
਍    爀攀琀甀爀渀 爀攀琀嘀愀氀㬀ഀഀ
}਍ഀഀ
਍�