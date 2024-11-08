"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import styles from "./FileUploader.module.scss";

export default function FileUploader() {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const text = await file.text();
      setFileContent(text);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const text = await file.text();
      setFileContent(text);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const createExcelDocument = () => {
    if (!fileContent) return;

    setIsLoading(true);

    const rows = fileContent
      ?.trim()
      .split("\n")
      .map((line) => line.split("^"));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "table_data.xlsx");

    setIsLoading(false);
    setFileContent(null);
  };

  //CONSOLE
  

  return (
    <div>
      <div
        className={`${styles.dropArea} ${isDragging ? styles.dragging : ""} ${
          isLoading ? styles.loading : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {!fileContent ? (
          <p>Перетащите или выберите файл</p>
        ) : (
          <p onClick={createExcelDocument}>Сохранить в Excel</p>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
