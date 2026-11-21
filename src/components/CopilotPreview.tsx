import React from "react";
import { copilotExample } from "../data/content";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function formatChange(value: number): string {
  const sign = value >= 0 ? "+" : "−";
  return `${sign}${Math.abs(value).toFixed(1)}%`;
}

const K = ({ children }: { children: React.ReactNode }) => <span className="k">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="s">{children}</span>;

function CopilotPreview() {
  const { question, status, rows } = copilotExample;
  const max = Math.max(...rows.map((row) => row.revenue));

  return (
    <figure className="console" aria-label="Example Data Copilot query">
      <div className="console-bar">
        <b>Data Copilot</b>
        <span className="mono">warehouse: retail_demo</span>
      </div>
      <div className="ask"><span className="caret">›</span><span>{question}</span></div>
      <pre className="sql">
        <K>WITH</K> q <K>AS</K> ({"\n"}
        {"  "}<K>SELECT</K> category_id,{"\n"}
        {"    "}<K>SUM</K>(amount) <K>FILTER</K> (<K>WHERE</K> quarter = <S>'2026-Q3'</S>) <K>AS</K> q3,{"\n"}
        {"    "}<K>SUM</K>(amount) <K>FILTER</K> (<K>WHERE</K> quarter = <S>'2026-Q2'</S>) <K>AS</K> q2{"\n"}
        {"  "}<K>FROM</K> orders <K>GROUP BY</K> category_id{"\n"}
        ){"\n"}
        <K>SELECT</K> c.name, q.q3, q.q3 / q.q2 - 1 <K>AS</K> change{"\n"}
        <K>FROM</K> q <K>JOIN</K> categories c <K>ON</K> c.id = q.category_id{"\n"}
        <K>ORDER BY</K> q.q3 <K>DESC LIMIT</K> 5;
      </pre>
      <div className="status mono"><span className="dot" />{status}</div>
      <table className="result">
        <thead>
          <tr><th>Category</th><th className="num">Revenue Q3</th><th className="bar" /><th className="num">vs Q2</th></tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.category} className={index === 0 ? "top" : undefined}>
              <td>{row.category}</td>
              <td className="num">{usd.format(row.revenue)}</td>
              <td className="bar">
                <div className="track"><div className="fill" style={{ width: `${Math.round((row.revenue / max) * 100)}%` }} /></div>
              </td>
              <td className={`num ${row.change >= 0 ? "up" : "down"}`}>{formatChange(row.change)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="console-foot mono">Example query and data, for illustration</figcaption>
    </figure>
  );
}

export default CopilotPreview;
