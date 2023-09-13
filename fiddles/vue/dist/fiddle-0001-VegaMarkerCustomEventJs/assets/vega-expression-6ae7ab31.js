import{a3 as nu,G as du,k,r as H,z as iu}from"./vega-util-7f144c9d.js";const hu="RawCode",gu="Literal",yu="Property",mu="Identifier",bu="ArrayExpression",wu="BinaryExpression",vu="CallExpression",Mu="ConditionalExpression",ku="LogicalExpression",Su="MemberExpression",Lu="ObjectExpression",Iu="UnaryExpression";function b(u){this.type=u}b.prototype.visit=function(u){let e,t,n;if(u(this))return 1;for(e=Uu(this),t=0,n=e.length;t<n;++t)if(e[t].visit(u))return 1};function Uu(u){switch(u.type){case bu:return u.elements;case wu:case ku:return[u.left,u.right];case vu:return[u.callee].concat(u.arguments);case Mu:return[u.test,u.consequent,u.alternate];case Su:return[u.object,u.property];case Lu:return u.properties;case yu:return[u.key,u.value];case Iu:return[u.argument];case mu:case gu:case hu:default:return[]}}var w,i,r,p,F,Q=1,j=2,L=3,S=4,z=5,U=6,g=7,G=8,Ou=9;w={};w[Q]="Boolean";w[j]="<end>";w[L]="Identifier";w[S]="Keyword";w[z]="Null";w[U]="Numeric";w[g]="Punctuator";w[G]="String";w[Ou]="RegularExpression";var Nu="ArrayExpression",Tu="BinaryExpression",Ru="CallExpression",Pu="ConditionalExpression",Du="Identifier",ju="Literal",Gu="LogicalExpression",qu="MemberExpression",Hu="ObjectExpression",_u="Property",Ku="UnaryExpression",l="Unexpected token %0",Qu="Unexpected number",zu="Unexpected string",Vu="Unexpected identifier",Xu="Unexpected reserved word",$u="Unexpected end of input",Z="Invalid regular expression",Y="Invalid regular expression: missing /",lu="Octal literals are not allowed in strict mode.",Yu="Duplicate data property in object literal not allowed in strict mode",f="ILLEGAL",R="Disabled.",Wu=new RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),Ju=new RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");function V(u,e){if(!u)throw new Error("ASSERT: "+e)}function v(u){return u>=48&&u<=57}function eu(u){return"0123456789abcdefABCDEF".indexOf(u)>=0}function T(u){return"01234567".indexOf(u)>=0}function Zu(u){return u===32||u===9||u===11||u===12||u===160||u>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(u)>=0}function P(u){return u===10||u===13||u===8232||u===8233}function q(u){return u===36||u===95||u>=65&&u<=90||u>=97&&u<=122||u===92||u>=128&&Wu.test(String.fromCharCode(u))}function K(u){return u===36||u===95||u>=65&&u<=90||u>=97&&u<=122||u>=48&&u<=57||u===92||u>=128&&Ju.test(String.fromCharCode(u))}const u0={if:1,in:1,do:1,var:1,for:1,new:1,try:1,let:1,this:1,else:1,case:1,void:1,with:1,enum:1,while:1,break:1,catch:1,throw:1,const:1,yield:1,class:1,super:1,return:1,typeof:1,delete:1,switch:1,export:1,import:1,public:1,static:1,default:1,finally:1,extends:1,package:1,private:1,function:1,continue:1,debugger:1,interface:1,protected:1,instanceof:1,implements:1};function Bu(){for(;r<p;){const u=i.charCodeAt(r);if(Zu(u)||P(u))++r;else break}}function uu(u){var e,t,n,a=0;for(t=u==="u"?4:2,e=0;e<t;++e)r<p&&eu(i[r])?(n=i[r++],a=a*16+"0123456789abcdef".indexOf(n.toLowerCase())):o({},l,f);return String.fromCharCode(a)}function e0(){var u,e,t,n;for(u=i[r],e=0,u==="}"&&o({},l,f);r<p&&(u=i[r++],!!eu(u));)e=e*16+"0123456789abcdef".indexOf(u.toLowerCase());return(e>1114111||u!=="}")&&o({},l,f),e<=65535?String.fromCharCode(e):(t=(e-65536>>10)+55296,n=(e-65536&1023)+56320,String.fromCharCode(t,n))}function Eu(){var u,e;for(u=i.charCodeAt(r++),e=String.fromCharCode(u),u===92&&(i.charCodeAt(r)!==117&&o({},l,f),++r,u=uu("u"),(!u||u==="\\"||!q(u.charCodeAt(0)))&&o({},l,f),e=u);r<p&&(u=i.charCodeAt(r),!!K(u));)++r,e+=String.fromCharCode(u),u===92&&(e=e.substr(0,e.length-1),i.charCodeAt(r)!==117&&o({},l,f),++r,u=uu("u"),(!u||u==="\\"||!K(u.charCodeAt(0)))&&o({},l,f),e+=u);return e}function t0(){var u,e;for(u=r++;r<p;){if(e=i.charCodeAt(r),e===92)return r=u,Eu();if(K(e))++r;else break}return i.slice(u,r)}function r0(){var u,e,t;return u=r,e=i.charCodeAt(r)===92?Eu():t0(),e.length===1?t=L:u0.hasOwnProperty(e)?t=S:e==="null"?t=z:e==="true"||e==="false"?t=Q:t=L,{type:t,value:e,start:u,end:r}}function W(){var u=r,e=i.charCodeAt(r),t,n=i[r],a,A,C;switch(e){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:return++r,{type:g,value:String.fromCharCode(e),start:u,end:r};default:if(t=i.charCodeAt(r+1),t===61)switch(e){case 43:case 45:case 47:case 60:case 62:case 94:case 124:case 37:case 38:case 42:return r+=2,{type:g,value:String.fromCharCode(e)+String.fromCharCode(t),start:u,end:r};case 33:case 61:return r+=2,i.charCodeAt(r)===61&&++r,{type:g,value:i.slice(u,r),start:u,end:r}}}if(C=i.substr(r,4),C===">>>=")return r+=4,{type:g,value:C,start:u,end:r};if(A=C.substr(0,3),A===">>>"||A==="<<="||A===">>=")return r+=3,{type:g,value:A,start:u,end:r};if(a=A.substr(0,2),n===a[1]&&"+-<>&|".indexOf(n)>=0||a==="=>")return r+=2,{type:g,value:a,start:u,end:r};if(a==="//"&&o({},l,f),"<>=!+-*%&|^/".indexOf(n)>=0)return++r,{type:g,value:n,start:u,end:r};o({},l,f)}function n0(u){let e="";for(;r<p&&eu(i[r]);)e+=i[r++];return e.length===0&&o({},l,f),q(i.charCodeAt(r))&&o({},l,f),{type:U,value:parseInt("0x"+e,16),start:u,end:r}}function i0(u){let e="0"+i[r++];for(;r<p&&T(i[r]);)e+=i[r++];return(q(i.charCodeAt(r))||v(i.charCodeAt(r)))&&o({},l,f),{type:U,value:parseInt(e,8),octal:!0,start:u,end:r}}function au(){var u,e,t;if(t=i[r],V(v(t.charCodeAt(0))||t===".","Numeric literal must start with a decimal digit or a decimal point"),e=r,u="",t!=="."){if(u=i[r++],t=i[r],u==="0"){if(t==="x"||t==="X")return++r,n0(e);if(T(t))return i0(e);t&&v(t.charCodeAt(0))&&o({},l,f)}for(;v(i.charCodeAt(r));)u+=i[r++];t=i[r]}if(t==="."){for(u+=i[r++];v(i.charCodeAt(r));)u+=i[r++];t=i[r]}if(t==="e"||t==="E")if(u+=i[r++],t=i[r],(t==="+"||t==="-")&&(u+=i[r++]),v(i.charCodeAt(r)))for(;v(i.charCodeAt(r));)u+=i[r++];else o({},l,f);return q(i.charCodeAt(r))&&o({},l,f),{type:U,value:parseFloat(u),start:e,end:r}}function a0(){var u="",e,t,n,a,A=!1;for(e=i[r],V(e==="'"||e==='"',"String literal must starts with a quote"),t=r,++r;r<p;)if(n=i[r++],n===e){e="";break}else if(n==="\\")if(n=i[r++],!n||!P(n.charCodeAt(0)))switch(n){case"u":case"x":i[r]==="{"?(++r,u+=e0()):u+=uu(n);break;case"n":u+=`
`;break;case"r":u+="\r";break;case"t":u+="	";break;case"b":u+="\b";break;case"f":u+="\f";break;case"v":u+="\v";break;default:T(n)?(a="01234567".indexOf(n),a!==0&&(A=!0),r<p&&T(i[r])&&(A=!0,a=a*8+"01234567".indexOf(i[r++]),"0123".indexOf(n)>=0&&r<p&&T(i[r])&&(a=a*8+"01234567".indexOf(i[r++]))),u+=String.fromCharCode(a)):u+=n;break}else n==="\r"&&i[r]===`
`&&++r;else{if(P(n.charCodeAt(0)))break;u+=n}return e!==""&&o({},l,f),{type:G,value:u,octal:A,start:t,end:r}}function s0(u,e){let t=u;e.indexOf("u")>=0&&(t=t.replace(/\\u\{([0-9a-fA-F]+)\}/g,(n,a)=>{if(parseInt(a,16)<=1114111)return"x";o({},Z)}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x"));try{new RegExp(t)}catch{o({},Z)}try{return new RegExp(u,e)}catch{return null}}function A0(){var u,e,t,n,a;for(u=i[r],V(u==="/","Regular expression literal must start with a slash"),e=i[r++],t=!1,n=!1;r<p;)if(u=i[r++],e+=u,u==="\\")u=i[r++],P(u.charCodeAt(0))&&o({},Y),e+=u;else if(P(u.charCodeAt(0)))o({},Y);else if(t)u==="]"&&(t=!1);else if(u==="/"){n=!0;break}else u==="["&&(t=!0);return n||o({},Y),a=e.substr(1,e.length-2),{value:a,literal:e}}function o0(){var u,e,t;for(e="",t="";r<p&&(u=i[r],!!K(u.charCodeAt(0)));)++r,u==="\\"&&r<p?o({},l,f):(t+=u,e+=u);return t.search(/[^gimuy]/g)>=0&&o({},Z,t),{value:t,literal:e}}function F0(){var u,e,t,n;return F=null,Bu(),u=r,e=A0(),t=o0(),n=s0(e.value,t.value),{literal:e.literal+t.literal,value:n,regex:{pattern:e.value,flags:t.value},start:u,end:r}}function C0(u){return u.type===L||u.type===S||u.type===Q||u.type===z}function fu(){if(Bu(),r>=p)return{type:j,start:r,end:r};const u=i.charCodeAt(r);return q(u)?r0():u===40||u===41||u===59?W():u===39||u===34?a0():u===46?v(i.charCodeAt(r+1))?au():W():v(u)?au():W()}function y(){const u=F;return r=u.end,F=fu(),r=u.end,u}function pu(){const u=r;F=fu(),r=u}function c0(u){const e=new b(Nu);return e.elements=u,e}function su(u,e,t){const n=new b(u==="||"||u==="&&"?Gu:Tu);return n.operator=u,n.left=e,n.right=t,n}function D0(u,e){const t=new b(Ru);return t.callee=u,t.arguments=e,t}function l0(u,e,t){const n=new b(Pu);return n.test=u,n.consequent=e,n.alternate=t,n}function tu(u){const e=new b(Du);return e.name=u,e}function N(u){const e=new b(ju);return e.value=u.value,e.raw=i.slice(u.start,u.end),u.regex&&(e.raw==="//"&&(e.raw="/(?:)/"),e.regex=u.regex),e}function Au(u,e,t){const n=new b(qu);return n.computed=u==="[",n.object=e,n.property=t,n.computed||(t.member=!0),n}function B0(u){const e=new b(Hu);return e.properties=u,e}function ou(u,e,t){const n=new b(_u);return n.key=e,n.value=t,n.kind=u,n}function E0(u,e){const t=new b(Ku);return t.operator=u,t.argument=e,t.prefix=!0,t}function o(u,e){var t,n=Array.prototype.slice.call(arguments,2),a=e.replace(/%(\d)/g,(A,C)=>(V(C<n.length,"Message reference must be in range"),n[C]));throw t=new Error(a),t.index=r,t.description=a,t}function X(u){u.type===j&&o(u,$u),u.type===U&&o(u,Qu),u.type===G&&o(u,zu),u.type===L&&o(u,Vu),u.type===S&&o(u,Xu),o(u,l,u.value)}function x(u){const e=y();(e.type!==g||e.value!==u)&&X(e)}function c(u){return F.type===g&&F.value===u}function J(u){return F.type===S&&F.value===u}function f0(){const u=[];for(r=F.start,x("[");!c("]");)c(",")?(y(),u.push(null)):(u.push(I()),c("]")||x(","));return y(),c0(u)}function Fu(){r=F.start;const u=y();return u.type===G||u.type===U?(u.octal&&o(u,lu),N(u)):tu(u.value)}function p0(){var u,e,t,n;if(r=F.start,u=F,u.type===L)return t=Fu(),x(":"),n=I(),ou("init",t,n);if(u.type===j||u.type===g)X(u);else return e=Fu(),x(":"),n=I(),ou("init",e,n)}function x0(){var u=[],e,t,n,a={},A=String;for(r=F.start,x("{");!c("}");)e=p0(),e.key.type===Du?t=e.key.name:t=A(e.key.value),n="$"+t,Object.prototype.hasOwnProperty.call(a,n)?o({},Yu):a[n]=!0,u.push(e),c("}")||x(",");return x("}"),B0(u)}function d0(){x("(");const u=ru();return x(")"),u}const h0={if:1};function g0(){var u,e,t;if(c("("))return d0();if(c("["))return f0();if(c("{"))return x0();if(u=F.type,r=F.start,u===L||h0[F.value])t=tu(y().value);else if(u===G||u===U)F.octal&&o(F,lu),t=N(y());else{if(u===S)throw new Error(R);u===Q?(e=y(),e.value=e.value==="true",t=N(e)):u===z?(e=y(),e.value=null,t=N(e)):c("/")||c("/=")?(t=N(F0()),pu()):X(y())}return t}function y0(){const u=[];if(x("("),!c(")"))for(;r<p&&(u.push(I()),!c(")"));)x(",");return x(")"),u}function m0(){r=F.start;const u=y();return C0(u)||X(u),tu(u.value)}function b0(){return x("."),m0()}function w0(){x("[");const u=ru();return x("]"),u}function v0(){var u,e,t;for(u=g0();;)if(c("."))t=b0(),u=Au(".",u,t);else if(c("("))e=y0(),u=D0(u,e);else if(c("["))t=w0(),u=Au("[",u,t);else break;return u}function Cu(){const u=v0();if(F.type===g&&(c("++")||c("--")))throw new Error(R);return u}function _(){var u,e;if(F.type!==g&&F.type!==S)e=Cu();else{if(c("++")||c("--"))throw new Error(R);if(c("+")||c("-")||c("~")||c("!"))u=y(),e=_(),e=E0(u.value,e);else{if(J("delete")||J("void")||J("typeof"))throw new Error(R);e=Cu()}}return e}function cu(u){let e=0;if(u.type!==g&&u.type!==S)return 0;switch(u.value){case"||":e=1;break;case"&&":e=2;break;case"|":e=3;break;case"^":e=4;break;case"&":e=5;break;case"==":case"!=":case"===":case"!==":e=6;break;case"<":case">":case"<=":case">=":case"instanceof":case"in":e=7;break;case"<<":case">>":case">>>":e=8;break;case"+":case"-":e=9;break;case"*":case"/":case"%":e=11;break}return e}function M0(){var u,e,t,n,a,A,C,B,d,h;if(u=F,d=_(),n=F,a=cu(n),a===0)return d;for(n.prec=a,y(),e=[u,F],C=_(),A=[d,n,C];(a=cu(F))>0;){for(;A.length>2&&a<=A[A.length-2].prec;)C=A.pop(),B=A.pop().value,d=A.pop(),e.pop(),t=su(B,d,C),A.push(t);n=y(),n.prec=a,A.push(n),e.push(F),t=_(),A.push(t)}for(h=A.length-1,t=A[h],e.pop();h>1;)e.pop(),t=su(A[h-1].value,A[h-2],t),h-=2;return t}function I(){var u,e,t;return u=M0(),c("?")&&(y(),e=I(),x(":"),t=I(),u=l0(u,e,t)),u}function ru(){const u=I();if(c(","))throw new Error(R);return u}function U0(u){i=u,r=0,p=i.length,F=null,pu();const e=ru();if(F.type!==j)throw new Error("Unexpect token after expression.");return e}var k0={NaN:"NaN",E:"Math.E",LN2:"Math.LN2",LN10:"Math.LN10",LOG2E:"Math.LOG2E",LOG10E:"Math.LOG10E",PI:"Math.PI",SQRT1_2:"Math.SQRT1_2",SQRT2:"Math.SQRT2",MIN_VALUE:"Number.MIN_VALUE",MAX_VALUE:"Number.MAX_VALUE"};function S0(u){function e(C,B,d,h){let m=u(B[0]);return d&&(m=d+"("+m+")",d.lastIndexOf("new ",0)===0&&(m="("+m+")")),m+"."+C+(h<0?"":h===0?"()":"("+B.slice(1).map(u).join(",")+")")}function t(C,B,d){return h=>e(C,h,B,d)}const n="new Date",a="String",A="RegExp";return{isNaN:"Number.isNaN",isFinite:"Number.isFinite",abs:"Math.abs",acos:"Math.acos",asin:"Math.asin",atan:"Math.atan",atan2:"Math.atan2",ceil:"Math.ceil",cos:"Math.cos",exp:"Math.exp",floor:"Math.floor",hypot:"Math.hypot",log:"Math.log",max:"Math.max",min:"Math.min",pow:"Math.pow",random:"Math.random",round:"Math.round",sin:"Math.sin",sqrt:"Math.sqrt",tan:"Math.tan",clamp:function(C){C.length<3&&k("Missing arguments to clamp function."),C.length>3&&k("Too many arguments to clamp function.");const B=C.map(u);return"Math.max("+B[1]+", Math.min("+B[2]+","+B[0]+"))"},now:"Date.now",utc:"Date.UTC",datetime:n,date:t("getDate",n,0),day:t("getDay",n,0),year:t("getFullYear",n,0),month:t("getMonth",n,0),hours:t("getHours",n,0),minutes:t("getMinutes",n,0),seconds:t("getSeconds",n,0),milliseconds:t("getMilliseconds",n,0),time:t("getTime",n,0),timezoneoffset:t("getTimezoneOffset",n,0),utcdate:t("getUTCDate",n,0),utcday:t("getUTCDay",n,0),utcyear:t("getUTCFullYear",n,0),utcmonth:t("getUTCMonth",n,0),utchours:t("getUTCHours",n,0),utcminutes:t("getUTCMinutes",n,0),utcseconds:t("getUTCSeconds",n,0),utcmilliseconds:t("getUTCMilliseconds",n,0),length:t("length",null,-1),parseFloat:"parseFloat",parseInt:"parseInt",upper:t("toUpperCase",a,0),lower:t("toLowerCase",a,0),substring:t("substring",a),split:t("split",a),trim:t("trim",a,0),regexp:A,test:t("test",A),if:function(C){C.length<3&&k("Missing arguments to if function."),C.length>3&&k("Too many arguments to if function.");const B=C.map(u);return"("+B[0]+"?"+B[1]+":"+B[2]+")"}}}function L0(u){const e=u&&u.length-1;return e&&(u[0]==='"'&&u[e]==='"'||u[0]==="'"&&u[e]==="'")?u.slice(1,-1):u}function O0(u){u=u||{};const e=u.allowed?nu(u.allowed):{},t=u.forbidden?nu(u.forbidden):{},n=u.constants||k0,a=(u.functions||S0)(E),A=u.globalvar,C=u.fieldvar,B=iu(A)?A:s=>`${A}["${s}"]`;let d={},h={},m=0;function E(s){if(du(s))return s;const D=xu[s.type];return D==null&&k("Unsupported type: "+s.type),D(s)}const xu={Literal:s=>s.raw,Identifier:s=>{const D=s.name;return m>0?D:H(t,D)?k("Illegal identifier: "+D):H(n,D)?n[D]:H(e,D)?D:(d[D]=1,B(D))},MemberExpression:s=>{const D=!s.computed,O=E(s.object);D&&(m+=1);const M=E(s.property);return O===C&&(h[L0(M)]=1),D&&(m-=1),O+(D?"."+M:"["+M+"]")},CallExpression:s=>{s.callee.type!=="Identifier"&&k("Illegal callee type: "+s.callee.type);const D=s.callee.name,O=s.arguments,M=H(a,D)&&a[D];return M||k("Unrecognized function: "+D),iu(M)?M(O):M+"("+O.map(E).join(",")+")"},ArrayExpression:s=>"["+s.elements.map(E).join(",")+"]",BinaryExpression:s=>"("+E(s.left)+" "+s.operator+" "+E(s.right)+")",UnaryExpression:s=>"("+s.operator+E(s.argument)+")",ConditionalExpression:s=>"("+E(s.test)+"?"+E(s.consequent)+":"+E(s.alternate)+")",LogicalExpression:s=>"("+E(s.left)+s.operator+E(s.right)+")",ObjectExpression:s=>"{"+s.properties.map(E).join(",")+"}",Property:s=>{m+=1;const D=E(s.key);return m-=1,D+":"+E(s.value)}};function $(s){const D={code:E(s),globals:Object.keys(d),fields:Object.keys(h)};return d={},h={},D}return $.functions=a,$.constants=n,$}export{k0 as C,S0 as F,gu as L,vu as a,O0 as c,U0 as p};
