"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import "./FileUpLoader.scss";
import {
  Document,
  Packer,
  Table,
  TableRow,
  TableCell,
  Paragraph,
  PageOrientation,
  WidthType,
} from "docx";

const MAX_ROWS_PER_DOC = 50 * 30;

const getAlphabeticLabel = (index) => {
  let label = "";
  while (index >= 0) {
    label = String.fromCharCode((index % 26) + 65) + label;
    index = Math.floor(index / 26) - 1;
  }
  return label;
};

const FileUploader = () => {
  const [fileContent, setFileContent] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const text = await file.text();
      setFileContent(text);
    }
  };

  const parseFileContent = (content) => {
    return content
      .trim()
      .split("\n")
      .map((line) => line.split("^"));
  };

  const createWordDocuments = async () => {
    if (!fileContent) return;

    const rows = parseFileContent(fileContent);

    for (let i = 0; i < rows.length; i += MAX_ROWS_PER_DOC) {
      const chunk = rows.slice(i, i + MAX_ROWS_PER_DOC);

      const table = new Table({
        rows: chunk.map(
          (rowData) =>
            new TableRow({
              children: rowData.map(
                (cellText) =>
                  new TableCell({
                    width: {
                      size: 2500,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(cellText.trim())],
                  })
              ),
            })
        ),
      });

      const doc = new Document({
        sections: [
          {
            properties: {
              page: { size: { orientation: PageOrientation.LANDSCAPE } },
            },
            children: [table],
          },
        ],
      });

      const alphabeticLabel = getAlphabeticLabel(i / MAX_ROWS_PER_DOC);
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `table_document_${alphabeticLabel}.docx`);
    }
  };

  return (
    <div id="input_area">
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {fileContent && (
        <button onClick={createWordDocuments}>
          Сохранить в несколько Word-файлов
        </button>
      )}
    </div>
  );
};

export default FileUploader;
