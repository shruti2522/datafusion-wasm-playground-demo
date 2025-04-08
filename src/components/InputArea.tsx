import "./InputArea.css";

import Prism from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-okaidia.css";

import React, { useState, useEffect } from "react";
import { dfCtx } from "../App";

type QueryHistory = {
  query: string;
  result?: string;
  error?: string;
};

type QueryOutputTable = {
  [column: string]: string | number;
};

type QueryTerminalProps = {
  logs: QueryHistory[];
};

type InputPanelProps = {
  logs: QueryHistory[];
  setLogs: React.Dispatch<React.SetStateAction<QueryHistory[]>>;
};

function parseTableOutput(raw: string): QueryOutputTable[] {
  const lines = raw.split("\n").filter(line => line.trim() && !line.startsWith("+"));
  if (lines.length === 0) return [];

  const headers = lines[0].split("|").slice(1, -1).map(h => h.trim());
  return lines.slice(1).map(line => {
    const fields = line.split("|").slice(1, -1).map(cell => cell.trim());
    return headers.reduce<QueryOutputTable>((row, header, index) => {
      const value = fields[index];
      row[header] = isNaN(Number(value)) ? value : Number(value);
      return row;
    }, {});
  });
}

function OutputTable({ data }: { data: QueryOutputTable[] }) {
  if (!data.length) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="output-table">
      <div className="table-header">
        {columns.map((col) => (
          <span key={col} className="table-cell">{col}</span>
        ))}
      </div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="table-row">
          {columns.map((col) => (
            <span key={col} className="table-cell">{row[col]}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function QueryTerminal({ logs }: QueryTerminalProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [logs]);

  return (
    <div className="query-terminal">
      {[...logs].reverse().map((entry, idx) => (
        <div key={idx} className="query-entry">
          <div className="query-input-field">
            <span>datafusion &gt;</span>
            <code className="language-sql">{entry.query}</code>
          </div>
          {entry.error && <div className="error">{entry.error}</div>}
          {entry.result && (
            <OutputTable data={parseTableOutput(entry.result)} />
          )}
        </div>
      ))}
    </div>
  );
}

function InputPanel({ logs, setLogs }: InputPanelProps) {
  const [currentInput, setCurrentInput] = useState("");
  const [cursor, setCursor] = useState(-1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await dfCtx.execute_sql(currentInput);
      setLogs([...logs, { query: currentInput, result }]);
    } catch (err: any) {
      setLogs([...logs, { query: currentInput, error: err.toString() }]);
    }

    setCurrentInput("");
    setCursor(-1);
  };

  const handleKeyNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      const newIndex = Math.min(logs.length - 1, cursor + 1);
      if (logs[newIndex]) {
        setCurrentInput(logs[newIndex].query);
        setCursor(newIndex);
      }
    }
    if (e.key === "ArrowDown") {
      const newIndex = Math.max(-1, cursor - 1);
      if (newIndex === -1) {
        setCurrentInput("");
        setCursor(-1);
      } else if (logs[newIndex]) {
        setCurrentInput(logs[newIndex].query);
        setCursor(newIndex);
      }
    }
  };

  return (
    <form className="input-panel" onSubmit={handleSubmit}>
        <span>datafusion &gt;</span>
      <input
        type="text"
        className="query-input-field"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyDown={handleKeyNavigation}
        autoFocus
      />
    </form>
  );
}

function InputArea() {
  const [logs, setLogs] = useState<QueryHistory[]>([]);

  return (
    <div className="input-container">
      <InputPanel logs={logs} setLogs={setLogs} />
      <QueryTerminal logs={logs} />
    </div>
  );
}

export default InputArea;
