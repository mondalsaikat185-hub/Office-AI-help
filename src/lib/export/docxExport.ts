// Extracted verbatim from WriteScreen.tsx handleWordDownload — DOCX letter/note/order builder.
// Receives the component context it needs; do not add component state here.
import { Document, Packer, Paragraph, TextRun, AlignmentType, TabStopType, BorderStyle, ImageRun, Table, TableRow, TableCell, WidthType, UnderlineType } from 'docx';
import { Letterhead } from '../../types';

export async function downloadDocxDocument(ctx: any) {
  const { mode, copyTo, din, dir, displayAlert, enclosures, extraIns, file, handleSaveToFirebase, includeDin, includeLetterhead, output, paperSize, recipientTo, salutation, setDownloadName, setDownloadUrl, sig, subject, ws } = ctx;
    if (!output || !output.trim()) return displayAlert("Ensure generated text exists.");
    try {
        const children = [];
        const isNote = mode === 'note';
        const isOrder = mode === 'order';
        const isLegal = mode === 'legal';

        // Safe fallbacks for missing/incomplete elements
        const safeSig = {
          name: sig?.name || 'Authorized Signatory',
          designation: sig?.designation || 'Officer',
          section: sig?.section || ''
        };
        const safeFileNo = file?.fileNumber || dir?.filePrefix || 'GEN-01';

        if(!isNote && includeLetterhead) {
            if (ws && ws.letterhead) {
               const fetchImageBuf = async (str: string): Promise<{ buf: Uint8Array, width: number, height: number } | null> => {
                  return new Promise((resolve) => {
                     const img = new Image();
                     img.crossOrigin = "Anonymous";
                     img.onload = async () => {
                         try {
                              const res = await fetch(str);
                              const buf = await res.arrayBuffer();
                              const height = 80;
                              const ratio = img.naturalWidth / img.naturalHeight;
                              const width = Math.round(height * ratio);
                              resolve({ buf: new Uint8Array(buf), width, height });
                         } catch(e) { resolve(null); }
                     };
                     img.onerror = () => resolve(null);
                     img.src = str;
                  });
               };
               
               const logo1 = ws.letterhead.logo1 ? await fetchImageBuf(ws.letterhead.logo1) : null;
               const logo2 = ws.letterhead.logo2 ? await fetchImageBuf(ws.letterhead.logo2) : null;
               const logo3 = ws.letterhead.logo3 ? await fetchImageBuf(ws.letterhead.logo3) : null;
               
               if (logo1 || logo2 || logo3) {
                  children.push(new Table({
                      width: { size: 9746, type: WidthType.DXA },
                      borders: { top: { style: BorderStyle.NONE, size: 0 }, bottom: { style: BorderStyle.NONE, size: 0 }, left: { style: BorderStyle.NONE, size: 0 }, right: { style: BorderStyle.NONE, size: 0 }, insideHorizontal: { style: BorderStyle.NONE, size: 0 }, insideVertical: { style: BorderStyle.NONE, size: 0 } },
                      rows: [
                         new TableRow({
                            children: [
                               (new TableCell({ width: { size: 1949, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: logo1 ? [new ImageRun({ data: logo1.buf, transformation: { width: logo1.width, height: logo1.height }, type: 'png' } as any)] : [] })] })),
                               (new TableCell({ width: { size: 5848, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: logo2 ? [new ImageRun({ data: logo2.buf, transformation: { width: logo2.width, height: logo2.height }, type: 'png' } as any)] : [] })] })),
                               (new TableCell({ width: { size: 1949, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: logo3 ? [new ImageRun({ data: logo3.buf, transformation: { width: logo3.width, height: logo3.height }, type: 'png' } as any)] : [] })] })),
                            ]
                         })
                      ]
                   }));
               }

               const addCenterRun = (text: string, o: any) => {
                  if (!text || !text.trim()) return;
                  text.split('\n').forEach(line => {
                      if (line.includes('|')) {
                          const [l, r] = line.split('|');
                          children.push(new Table({
                              width: { size: 9746, type: WidthType.DXA },
                              borders: { top: { style: BorderStyle.NONE, size: 0 }, bottom: { style: BorderStyle.NONE, size: 0 }, left: { style: BorderStyle.NONE, size: 0 }, right: { style: BorderStyle.NONE, size: 0 }, insideHorizontal: { style: BorderStyle.NONE, size: 0 }, insideVertical: { style: BorderStyle.NONE, size: 0 } },
                              rows: [
                                  new TableRow({
                                      children: [
                                          new TableCell({ width: { size: 4873, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: l.trim(), size: o.size || 24, bold: !!o.bold, color: o.color })] })] }),
                                          new TableCell({ width: { size: 4873, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: r.trim(), size: o.size || 24, bold: !!o.bold, color: o.color })] })] }),
                                      ]
                                  })
                              ]
                          }));
                      } else {
                          children.push(new Paragraph({
                              children: [new TextRun({ text: line.trim(), size: o.size || 24, bold: !!o.bold, color: o.color })],
                              alignment: AlignmentType.CENTER,
                              spacing: { before: o.before || 0, after: o.after || 0, line: 200 }
                          }));
                      }
                  });
               };
               const pxToHalfPts = (px: number) => Math.max(16, Math.round((px - 3) * 2));
               addCenterRun(ws.letterhead.l1 || '', { bold: true, size: pxToHalfPts(ws.letterhead.s1 || 24), color: ws.letterhead.color || '1A3A8A' }); 
               addCenterRun(ws.letterhead.l2 || '', { bold: true, size: pxToHalfPts(ws.letterhead.s2 || 20), color: ws.letterhead.color || '1A3A8A' });
               addCenterRun(ws.letterhead.l3 || '', { bold: true, size: pxToHalfPts(ws.letterhead.s3 || 16), color: ws.letterhead.color || '1A3A8A' });
               addCenterRun(ws.letterhead.l4 || '', { bold: true, size: pxToHalfPts(ws.letterhead.s4 || 16), color: ws.letterhead.color || '1A3A8A' });
               addCenterRun(ws.letterhead.l5 || '', { bold: true, size: pxToHalfPts(ws.letterhead.s5 || 14), color: ws.letterhead.color || '1A3A8A' });
               addCenterRun(ws.letterhead.l6 || '', { bold: true, size: pxToHalfPts(ws.letterhead.s6 || 14), color: ws.letterhead.color || '1A3A8A' });
            } else {
               const officeName = ws?.office_en || ws?.name || 'Office Assistant';
               if(ws?.office_hi) children.push(new Paragraph({children:[new TextRun({text:ws.office_hi, bold:true, size:30})], alignment:AlignmentType.CENTER}));
               children.push(new Paragraph({children:[new TextRun({text:officeName, bold:true, size:24, color:'1A3A8A'})], alignment:AlignmentType.CENTER}));
               if(ws?.address) children.push(new Paragraph({children:[new TextRun({text:ws.address, size:20})], alignment:AlignmentType.CENTER}));
               if(ws?.phone || ws?.email) children.push(new Paragraph({children:[new TextRun({text:[ws.phone,ws.email].filter(Boolean).join(' • '), size:20})], alignment:AlignmentType.CENTER}));
            }
            children.push(new Paragraph({
                text: '',
                border: { bottom: { color: ws?.letterhead?.color || '1A3A8A', space: 1, style: BorderStyle.SINGLE, size: 12 } },
                spacing: { after: 200 }
            }));
            children.push(new Paragraph({text:''}));

            if (isOrder || isLegal) {
               children.push(new Table({
                    width: { size: 9746, type: WidthType.DXA },
                    borders: { top: { style: BorderStyle.NONE, size: 0 }, bottom: { style: BorderStyle.NONE, size: 0 }, left: { style: BorderStyle.NONE, size: 0 }, right: { style: BorderStyle.NONE, size: 0 }, insideHorizontal: { style: BorderStyle.NONE, size: 0 }, insideVertical: { style: BorderStyle.NONE, size: 0 } },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({ width: { size: 4873, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: 'C. No. ' + safeFileNo, bold: true })] })] }),
                                new TableCell({ width: { size: 4873, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'Date: ' + new Date().toLocaleDateString('en-GB').replace(/\//g, '.'), bold: true })] })] })
                            ]
                        })
                    ]
                }));
               children.push(new Paragraph({text:''}));
               if (includeDin && din) {
                   children.push(new Paragraph({
                       children: [new TextRun({ text: 'DIN: ' + din, bold: true })],
                       alignment: AlignmentType.CENTER
                   }));
                   children.push(new Paragraph({text:''}));
               }
               if (isOrder) {
                   children.push(new Paragraph({
                       children: [new TextRun({ text: 'आदेश / ORDER', bold: true, underline: { type: UnderlineType.SINGLE } })],
                       alignment: AlignmentType.CENTER
                   }));
                   children.push(new Paragraph({text:''}));
               }
            } else {
               if (includeDin && din) {
                   children.push(new Paragraph({
                       children: [
                           new TextRun({ text: 'DIN: ' + din, bold: true })
                       ],
                       alignment: AlignmentType.RIGHT
                   }));
               }
               // C.No. and Date for Normal Letters
               children.push(new Table({
                    width: { size: 9746, type: WidthType.DXA },
                    borders: { top: { style: BorderStyle.NONE, size: 0 }, bottom: { style: BorderStyle.NONE, size: 0 }, left: { style: BorderStyle.NONE, size: 0 }, right: { style: BorderStyle.NONE, size: 0 }, insideHorizontal: { style: BorderStyle.NONE, size: 0 }, insideVertical: { style: BorderStyle.NONE, size: 0 } },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({ width: { size: 4873, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: 'C. No. ' + safeFileNo, bold: true })] })] }),
                                new TableCell({ width: { size: 4873, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'Date: ' + new Date().toLocaleDateString('en-IN'), bold: true })] })] })
                            ]
                        })
                    ]
                }));
               
               children.push(new Paragraph({text:''}));
               
               if(recipientTo) {
                   children.push(new Paragraph({text:'To,'}));
                   recipientTo.split('\n').forEach(line => children.push(new Paragraph({
                       children: [new TextRun({ text: line })],
                       indent: { left: 720 }
                   })));
                   children.push(new Paragraph({text:''}));
               }
               if (salutation && !isOrder) {
                   children.push(new Paragraph({ text: salutation }));
                   children.push(new Paragraph({text:''}));
               }
               if(subject && !isOrder) children.push(new Paragraph({
                   children: [new TextRun({text:'Sub: '+subject, bold:true, underline:{ type: UnderlineType.SINGLE }})],
                   indent: { left: 720, firstLine: 0 }
               }));
               
               children.push(new Paragraph({text:''}));
            }
        } else {
            // Note Sheet header removed as per request
            if(subject) children.push(new Paragraph({
                children:[new TextRun({text:'Sub: '+subject, bold:true, underline:{ type: UnderlineType.SINGLE }})],
                indent: { left: 720, firstLine: 0 }
            }));
            children.push(new Paragraph({text:''}));
        }

        let docxTableRows: TableRow[] = [];
        let lastWasEmpty = false;

        output.split('\n').forEach((line, index, arr) => {
            if (line.trim().startsWith('|')) {
                lastWasEmpty = false;
                // Table parsing logic
                const isSeparator = line.includes('---');
                if (!isSeparator) {
                    const cols = line.split('|').map(c => c.trim()).filter((c, i, a) => !(i === 0 && c === '') && !(i === a.length - 1 && c === ''));
                    const isTableHeader = docxTableRows.length === 0;
                    const PAGE_WIDTH_DXA = mode === 'note' ? 6866 : 9746;
                    
                    docxTableRows.push(new TableRow({
                        children: cols.map((col) => {
                            // bold parser within col
                            const parts = col.split('**');
                            return new TableCell({
                                width: { size: Math.floor(PAGE_WIDTH_DXA / cols.length), type: WidthType.DXA },
                                borders: {
                                    top: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
                                    bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
                                    left: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
                                    right: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
                                },
                                shading: isTableHeader ? { fill: '1A3A8A' } : undefined,
                                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                                children: [new Paragraph({
                                    children: parts.map((part, pIdx) => new TextRun({
                                        text: part,
                                        bold: isTableHeader || pIdx % 2 !== 0,
                                        size: 24,
                                        color: isTableHeader ? 'FFFFFF' : '000000'
                                    })),
                                    alignment: AlignmentType.LEFT
                                })]
                            });
                        })
                    }));
                }
                
                // If this is the last line or the next line isn't a table, append the table
                if (index === arr.length - 1 || !arr[index + 1].trim().startsWith('|')) {
                    if (docxTableRows.length > 0) {
                        const PAGE_WIDTH_DXA = mode === 'note' ? 6866 : 9746;
                        children.push(new Table({
                            width: { size: PAGE_WIDTH_DXA, type: WidthType.DXA },
                            rows: docxTableRows
                        }));
                        children.push(new Paragraph({text:''})); // add spacing after table
                        docxTableRows = []; // reset
                    }
                }
            } else if (line.trim()) {
                lastWasEmpty = false;
                const isHeader = line.includes('Submitted') || line.includes('For kind perusal') || line.includes('Put up for');
                const indent = isHeader ? undefined : { firstLine: 720 };
                const alignment = isHeader ? AlignmentType.LEFT : AlignmentType.JUSTIFIED;
                
                // simple markdown bold parser
                if (line.includes('**')) {
                    const parts = line.split('**');
                    children.push(new Paragraph({
                        children: parts.map((part, idx) => new TextRun({ text: part, size: 24, bold: idx % 2 !== 0 || (isHeader && parts.length === 1) })),
                        indent,
                        alignment
                    }));
                } else {
                    children.push(new Paragraph({
                        children: [new TextRun({ text: line, size: 24, bold: isHeader })],
                        indent,
                        alignment
                    }));
                }
            } else {
                if (!lastWasEmpty && index !== 0) {
                    children.push(new Paragraph({ text: '' }));
                    lastWasEmpty = true;
                }
            }
        });
        
        const makeDocxSignatureBlock = (sigName: string, sigDesig: string, sigSection?: string, includeYours: boolean = true, encText?: string) => {
            const sigDesigLines = (sigDesig || '').split('\n').filter(Boolean);
            const sigSectionLines = (sigSection || '').split('\n').filter(Boolean);
            
            return new Table({
                width: { size: 9746, type: WidthType.DXA },
                borders: { top: { style: BorderStyle.NONE, size: 0 }, bottom: { style: BorderStyle.NONE, size: 0 }, left: { style: BorderStyle.NONE, size: 0 }, right: { style: BorderStyle.NONE, size: 0 }, insideHorizontal: { style: BorderStyle.NONE, size: 0 }, insideVertical: { style: BorderStyle.NONE, size: 0 } },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ 
                                width: { size: 5360, type: WidthType.DXA }, 
                                children: [
                                    ...(encText ? [new Paragraph({text: ""}), ...encText.split('\n').map((l, idx) => new Paragraph({ children: [new TextRun({ text: l, bold: idx === 0 })] }))] : [])
                                ] 
                            }),
                            new TableCell({ 
                                width: { size: 4386, type: WidthType.DXA }, 
                                children: [
                                    ...(includeYours ? [
                                        new Paragraph({children: [new TextRun({text: 'Yours faithfully,'})], alignment: AlignmentType.CENTER}),
                                        new Paragraph({text: ''}),
                                        new Paragraph({text: ''}),
                                        new Paragraph({text: ''})
                                    ] : [
                                        new Paragraph({text: ''}),
                                        new Paragraph({text: ''}),
                                        new Paragraph({text: ''}),
                                        new Paragraph({text: ''})
                                    ]),
                                    new Paragraph({children: [new TextRun({text: '(' + sigName + ')', bold: true})], alignment: AlignmentType.CENTER}),
                                    ...sigDesigLines.map(l => new Paragraph({children: [new TextRun({ text: l })], alignment: AlignmentType.CENTER})),
                                    ...sigSectionLines.map(l => new Paragraph({children: [new TextRun({ text: l })], alignment: AlignmentType.CENTER}))
                                ] 
                            })
                        ]
                    })
                ]
            });
        };

        if(!isNote && !isLegal) {
            let encString = '';
            if (enclosures) {
                encString = 'Enclosures: ' + enclosures;
            } else if (extraIns.toLowerCase().includes('encl') || output.toLowerCase().includes('encl')) {
                encString = 'Enclosures: As above';
            }
            
            if (isOrder) {
                children.push(makeDocxSignatureBlock(safeSig.name, safeSig.designation, safeSig.section, false, encString || undefined));
            } else {
                children.push(makeDocxSignatureBlock(safeSig.name, safeSig.designation, safeSig.section, true, encString || undefined));
            }

            if (copyTo) {
                children.push(new Paragraph({text:''}));
                children.push(new Paragraph({children:[new TextRun({text:'Copy to:', bold:true})]}));
                const copies = copyTo.split('\n').filter(Boolean);
                copies.forEach((line, idx) => {
                    let text = line.trim();
                    // Auto-remove "Copy to" prefixes from AI if any
                    if (text.toLowerCase().startsWith('copy to')) {
                        text = text.substring(7).trim();
                    }
                    children.push(new Paragraph({
                        text: `${idx + 1}. ${text}`,
                        indent: { left: 720, hanging: 360 }
                    }));
                });
                if (!isOrder) {
                    children.push(new Paragraph({text:''}));
                    children.push(makeDocxSignatureBlock(safeSig.name, safeSig.designation, safeSig.section, false));
                }
            }
        } else {
            // Note sheet signature
            children.push(new Paragraph({text:''}));
            children.push(new Paragraph({children:[new TextRun({text:'('+safeSig.name+')', bold:true})], alignment:AlignmentType.LEFT}));
            const sigDesigLines = (safeSig.designation || '').split('\n').filter(Boolean);
            sigDesigLines.forEach(line => {
                children.push(new Paragraph({children:[new TextRun({text:line})], alignment:AlignmentType.LEFT}));
            });
            if(safeSig.section) {
                const sigSectionLines = (safeSig.section || '').split('\n').filter(Boolean);
                sigSectionLines.forEach(line => {
                    children.push(new Paragraph({children:[new TextRun({text:line})], alignment:AlignmentType.LEFT}));
                });
            }
        }

        let pgWidth = 12240; let pgHeight = 20160;
        if (paperSize === 'A4') { pgWidth = 11906; pgHeight = 16838; }
        else if (paperSize === 'A3') { pgWidth = 16838; pgHeight = 23811; }

        const doc = new Document({
            styles: {
                default: {
                    document: {
                        run: {
                            font: "Times New Roman",
                            size: 24,
                        },
                        paragraph: {
                            spacing: {
                                line: 240,
                                lineRule: "auto",
                                before: 0,
                                after: 0
                            }
                        }
                    }
                }
            },
            sections:[{properties:{page:{size:{width:pgWidth, height:pgHeight}, margin: mode === 'note' ? {top:1440, right:1440, bottom:1440, left:3600} : {top:720, right:1080, bottom:720, left:1080}}}, children}]
        });
        const blob = await Packer.toBlob(doc);
        const url = URL.createObjectURL(blob);
        const fileName = `${isNote ? 'NoteSheet' : isLegal ? 'SpeakingOrder' : 'Letter'}_${subject.replace(/[^a-z0-9]/gi,'_').slice(0,40)}_${new Date().toISOString().slice(0,10)}.docx`;
        
        setDownloadUrl(url);
        setDownloadName(fileName);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        displayAlert("Download triggered! If nothing happens, you may need to 'Open in new tab' to allow downloads.");
        handleSaveToFirebase(true);
    } catch(e: any) {
        displayAlert("Failed to generate Word document: " + e.message);
    }
}
