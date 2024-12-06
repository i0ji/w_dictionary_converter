'use client';

import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import styles from './FileUploader.module.scss';

<<<<<<< HEAD
const MAX_ROWS_PER_DOC = 50 * 30;

const getAlphabeticLabel = (index) => {
  let label = "";
  while (index >= 0) {
    label = String.fromCharCode((index % 26) + 65) + label;
    index = Math.floor(index / 26) - 1;
  }
  return label;
};

=======
>>>>>>> deploy
export default function FileUploader() {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
=======
  const [isDisabled, setIsDisabled] = useState(false);
>>>>>>> deploy

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const text = await file.text();
      setFileContent(text);
      setIsDisabled(false);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const text = await file.text();
      setFileContent(text);
      setIsDisabled(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const createExcelDocument = async (
    e: React.MouseEvent<HTMLParagraphElement>
  ) => {
    e.stopPropagation();
    if (!fileContent) return;

    setIsLoading(true);
<<<<<<< HEAD
=======
    setIsDisabled(true);
>>>>>>> deploy

    const rows = fileContent
      .trim()
      .split('\n')
      .map((line) => line.split('^'));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    saveAs(blob, 'table_data.xlsx');

<<<<<<< HEAD
      const alphabeticLabel = getAlphabeticLabel(i / MAX_ROWS_PER_DOC);
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `table_document_${alphabeticLabel}.docx`);
    }
    setIsLoading(false);
=======
    setIsLoading(false);
    setIsDisabled(false);
>>>>>>> deploy
    setFileContent(null);
  };

  //CONSOLE
  console.log("FILE status: ", fileContent);
  console.log("loading", isLoading);

  return (
    <div>
      <div
<<<<<<< HEAD
        className={`${styles.dropArea} ${isDragging ? styles.dragging : ""} ${
          isLoading ? styles.loading : ""
=======
        className={`${styles.dropArea} ${isDragging ? styles.dragging : ''} ${
          isLoading || isDisabled ? styles.disabled : ''
>>>>>>> deploy
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => {
          if (!fileContent) document.getElementById('fileInput')?.click();
        }}
      >
        {!fileContent ? (
<<<<<<< HEAD
          <p>Перетащите или выберите файл</p>
        ) : (
          <p onClick={createWordDocuments}>Сохранить в несколько Word-файлов</p>
=======
          <p>Перетащите или выберите файл!</p>
        ) : (
          <p onClick={createExcelDocument}>Сохранить в Excel!</p>
>>>>>>> deploy
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        disabled={isDisabled}
      />
    </div>
  );
}
