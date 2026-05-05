function QuoteList({ quotes }) {
  if (!quotes || quotes.length === 0) return null;
  return (
    <div className="quote-list">
      {quotes.map((q, i) => (
        <div className="quote-item" key={i}>
          <p className="quote-item-text">"{q.quote}"</p>
          {q.pid != null && <span className="quote-item-pid">— PID {q.pid}</span>}
        </div>
      ))}
    </div>
  );
}

function AllQuotes({ all, inline }) {
  const quotes = (all && all.length) ? all : (inline || []);
  if (!quotes.length) return null;
  return <QuoteList quotes={quotes} />;
}

function Section({ label, children }) {
  return (
    <div className="detail-section">
      <span className="detail-label">{label}</span>
      {children}
    </div>
  );
}

Explorer.SystemDetail = function SystemDetail({ system }) {
  if (!system) return null;
  const meta = window.categoryMeta[system.category];
  const rich = (window.systemsRichData || {})[system.id];

  // Fallback to legacy fields if rich data missing for this system.
  if (!rich) {
    return (
      <div>
        <Section label="The Problem"><p className="detail-text">{system.problem}</p></Section>
        <Section label="What It Would Do"><p className="detail-text">{system.capabilities}</p></Section>
        <Section label="Constraints & Guardrails"><p className="detail-text">{system.constraints}</p></Section>
        {system.quote && (
          <Section label="Developer Voice">
            <div className="detail-quote">"{system.quote}"<span className="detail-quote-author">— {system.quoteAuthor}</span></div>
          </Section>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* Stats strip */}
      <div className="detail-bar">
        <div className="detail-bar-fill" style={{ width: `${system.prevalence}%`, background: meta?.color }} />
      </div>
      <div className="detail-stats">
        <div className="detail-stat">
          <div className="detail-stat-value">{system.prevalence}%</div>
          <div className="detail-stat-label">Prevalence</div>
        </div>
        <div className="detail-stat">
          <div className="detail-stat-value">{system.respondents}</div>
          <div className="detail-stat-label">Respondents in {meta?.label}</div>
        </div>
        {rich.theme?.code && (
          <div className="detail-stat">
            <div className="detail-stat-value detail-stat-mono">{rich.theme.code}</div>
            <div className="detail-stat-label">Theme code</div>
          </div>
        )}
        {rich.theme?.chips && rich.theme.chips.find(c => /α=/.test(c)) && (
          <div className="detail-stat">
            <div className="detail-stat-value">{rich.theme.chips.find(c => /α=/.test(c)).replace('α=','')}</div>
            <div className="detail-stat-label">Krippendorff's α</div>
          </div>
        )}
      </div>

      <Section label="The Problem">
        <p className="detail-text">{rich.problem}</p>
      </Section>

      <Section label="The Idea">
        <p className="detail-text">{rich.idea}</p>
      </Section>

      {rich.inputs?.length > 0 && (
        <Section label="Inputs It Needs">
          <ul className="detail-list">
            {rich.inputs.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </Section>
      )}

      {rich.howItOperates?.length > 0 && (
        <Section label="How It Operates">
          <ol className="detail-list detail-list-ordered">
            {rich.howItOperates.map((it, i) => <li key={i}>{it}</li>)}
          </ol>
        </Section>
      )}

      {rich.audience?.text && (
        <Section label="Who Wants This">
          <p className="detail-text">{rich.audience.text}</p>
          {rich.audience.signals?.length > 0 && (
            <ul className="detail-list detail-list-tight">
              {rich.audience.signals.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          )}
          <AllQuotes
            inline={rich.audience.quotesInline}
            all={rich.audience.quotesAll}
          />
        </Section>
      )}

      {rich.impact?.text && (
        <Section label="Why It Matters">
          <p className="detail-text">{rich.impact.text}</p>
          <AllQuotes
            inline={rich.impact.quotesInline}
            all={rich.impact.quotesAll}
          />
        </Section>
      )}

      {(rich.constraints?.inline?.length > 0 || rich.constraints?.quotesAll?.length > 0) && (
        <Section label="Constraints & Guardrails">
          {rich.constraints.inline?.length > 0 && (
            <div className="constraint-list">
              {rich.constraints.inline.map((c, i) => (
                <div className="constraint-item" key={i}>
                  <p className="constraint-text">{c.text}</p>
                  {c.quote && <p className="constraint-quote">{c.quote}</p>}
                </div>
              ))}
            </div>
          )}
          <AllQuotes all={rich.constraints.quotesAll} />
        </Section>
      )}

      {(rich.success?.qualitative?.length > 0 || rich.success?.quantitative?.length > 0) && (
        <Section label="What Success Looks Like">
          <div className="success-grid">
            {rich.success.qualitative?.length > 0 && (
              <div className="success-col">
                <h4>Qualitative</h4>
                <ul className="detail-list">
                  {rich.success.qualitative.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </div>
            )}
            {rich.success.quantitative?.length > 0 && (
              <div className="success-col">
                <h4>Quantitative</h4>
                <ul className="detail-list">
                  {rich.success.quantitative.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      {rich.theme?.name && (
        <Section label="Underlying Survey Theme">
          <div className="theme-card">
            <div className="theme-card-head">
              <strong>{rich.theme.name}</strong>
              <code className="theme-card-code">{rich.theme.code}</code>
            </div>
            {rich.theme.description && <p className="detail-text">{rich.theme.description}</p>}
            <AllQuotes all={rich.theme.quotesAll} />
          </div>
        </Section>
      )}
    </div>
  );
};
