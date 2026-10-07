import { useState } from "react";

export default function Quiz({ quiz, saved, onFinish }) {
  const [ans, setAns] = useState({});
  const [sent, setSent] = useState(false);
  const qs = quiz.questions;
  const score = qs.filter((q, i) => ans[i] === q.answer).length;
  const ready = qs.every((_, i) => ans[i] !== undefined);

  const submit = () => { setSent(true); onFinish(score, qs.length); };
  const retry = () => { setAns({}); setSent(false); };

  return (
    <div className="quiz">
      {!sent && saved && <p className="meta">Skor terakhir: {saved.score}/{saved.total}</p>}
      {qs.map((q, i) => (
        <fieldset key={i} disabled={sent}>
          <legend>{i + 1}. {q.q}</legend>
          {q.options.map((o, j) => {
            let cls = "opt";
            if (sent && j === q.answer) cls += " ok";
            else if (sent && ans[i] === j) cls += " bad";
            return (
              <label key={j} className={cls}>
                <input type="radio" name={"q" + i} checked={ans[i] === j} onChange={() => setAns({ ...ans, [i]: j })} /> {o}
              </label>
            );
          })}
          {sent && <p className="meta">{ans[i] === q.answer ? "Benar" : "Salah. Jawaban yang benar: " + q.options[q.answer]}</p>}
        </fieldset>
      ))}
      {sent ? (
        <div className="notice"><strong>Skor akhir: {score}/{qs.length}</strong>{" "}
          <button className="btn ghost" onClick={retry}>Coba Lagi</button></div>
      ) : (
        <button className="btn" disabled={!ready} onClick={submit}>Kirim Jawaban</button>
      )}
    </div>
  );
}
