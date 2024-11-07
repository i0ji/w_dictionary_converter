"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Table,
  TableRow,
  TableCell,
  Paragraph,
  PageOrientation,
} from "docx";
import "./FileUpLoader.scss";

const MAX_ROWS_PER_DOC = 50 * 30; 

export default function FileUploader() {
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

      const blob = await Packer.toBlob(doc);
      saveAs(
        blob,
        `table_document_part_${Math.floor(i / MAX_ROWS_PER_DOC) + 1}.docx`
      );
    }
  };

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {fileContent && (
        <button onClick={createWordDocuments}>
          Сохранить в несколько Word-файлов
        </button>
      )}
    </div>
  );
}
